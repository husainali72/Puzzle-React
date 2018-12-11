import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import sectionData from '../../settings.json';

import './styles.css';

const defaultEmail = 'info@silverrehab.com';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: defaultEmail,
      content: props.content,
      timeout: props.timeout
    };

    this.props = props;

    this.closeModal = this.props.closeModal;

    this.untouched_input = true;

    this.handleChange = this.handleChange.bind(this);
    this.escFunction = this.escFunction.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.EmailForm = this.EmailForm.bind(this);
    this.SentForm = this.SentForm.bind(this);
    this.StartPuzzle = this.StartPuzzle.bind(this);
    this.timeoutAndStart = this.timeoutAndStart.bind(this);
  }

  getInner() {
    switch (this.state.content) {
      case 'email':
        return (<this.EmailForm handleChange={this.handleChange}
                                sendForm={this.sendForm}/>);
      case 'sent':
        return (<this.SentForm/>);
      case 'start':
        return (<this.StartPuzzle/>);
      case 'timeout':
        return (<this.timeoutAndStart closeModal={this.closeModal}/>);
      default:
        return null;
    }
  }

  timeoutAndStart() {
    if (this.state.timeout === 0) {
      return null;
    } else {
      setTimeout(() => {
        this.setState({timeout: this.state.timeout - 1})
      }, 1000);

      return (
        <div className="fieldset">
          <p className="description">Timer starts in: <span className="timer">{this.state.timeout}</span></p>
        </div>
      )
    }
  }

  StartPuzzle() {
    return (
      <div className="buttons">
        <input type="button"
               className="button"
               value="Start puzzle"
               onClick={() => this.setState({content: 'timeout'})}/>
      </div>
    )
  }

  EmailForm(props) {
    let nameInput = null;
    const email = this.state.email;

    let focusInput = () => {
      const inputPos = nameInput.value.length;
      nameInput.focus();
      if (this.untouched_input) {
        this.untouched_input = false;
        nameInput.setSelectionRange(0, inputPos);
      }
    };

    setTimeout(() => focusInput());

    return (
      <div>
        <div className="fieldset">
          <input type="text"
                 className="email"
                 value={email}
                 ref={input => nameInput = input}
                 onChange={props.handleChange}/>
        </div>
        <div className="buttons">
          <input type="button"
                 className="button"
                 value="Send"
                 onClick={props.sendForm}/>
        </div>
      </div>
    )
  }

  sendForm() {
    let emails = [document.getElementById('set_email').dataset.email, this.state.email];
    const http_options = {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `emails=${ emails.join(',') }&body=${this.props.emailBody}&token=oppa_stopa`
    };
    fetch(sectionData.email_api, http_options)
      .catch();

    // window.open(`mailto:${this.state.email}?subject=${this.props.emailSubject}&body=${this.props.emailBody}`);

    this.setState({content: 'sent'});
  }

  SentForm() {
    return (
      <div>
        <div className="fieldset">
          <p className="description">Email sent successfully!</p>
        </div>
        <div className="buttons">
          <Link to={this.props.sectionData.root.route} className="button">Start Again</Link>
          <a href={this.props.sectionData.rootApps.route} className="button">Back to Apps</a>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show});
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      if (this.closeModal) {
        this.closeModal();
      }
    }
  }

  componentDidUpdate(){
    if (this.state.timeout === 0) {
      this.props.startFunc();
    }
  }

  render() {

    return (
      <div>
        <div className="blanket">
          <div className="holder">
            {this.props.setShow && <button onClick={this.closeModal} className="close"/>}
            {this.getInner(this.state.content)}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
