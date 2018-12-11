import React, {Component} from 'react';
import './styles.css';

import Modal from '../../components/Modal';
import Common from "../../Common";

class Result extends Component {
  constructor(props) {
    super(props);

    if (!Common.checkPuzzleProps(props.puzzleProps)) {
      this.props.history.push(this.props.sectionData.root.route);
    }

    this.state = {shownModal: false};
    this.showModal = this.showModal.bind(this);

    this.props = props;
    this.result = props.sectionData.result;
    this.setPuzzleProps = props.setPuzzleProps;
    this.puzzleProps = props.puzzleProps;
  }

  getString(data, item) {
    const stringLabel = item.text + ':';
    const stringValue = (data[item.fieldName]
      ? data[item.fieldName].value
      : 'none').toString();

    return stringLabel + ' ' + stringValue;
  }

  getParagraph(props) {
    const stringLabel = props.item.text + ':';
    const stringValue = (props.data[props.item.fieldName]
        ? props.data[props.item.fieldName].value
        : 'none'
    ).toString();

    return (<p className="field"><span className="label">{stringLabel}</span> {stringValue}</p>);
  }

  showModal() {
    this.setState({shownModal: true});
  }

  closeModal() {
    this.setState({shownModal: false});
  }

  render() {
    const results = this.result.fields.map((item, number) =>
      <this.getParagraph data={this.puzzleProps}
                         item={item}
                         key={number.toString()}/>);

    const emailBody = this.result.fields.map((item) =>
      this.getString(this.puzzleProps, item)).join('%0D%0A');

    return (
      <div>
        <div className="Result">
          <p className="description">{this.result.description}</p>
          <div className="box">{results}</div>
          <div className="buttons">
            <button className="button"
                    onClick={this.showModal}>{this.result.button.text}</button>
          </div>
        </div>
        {this.state.shownModal
          ? <Modal closeModal={this.closeModal}
                   content="email"
                   emailSubject={'Puzzle is Complete'}
                   sectionData={this.props.sectionData}
                   emailBody={emailBody}/>
          : null}
      </div>
    );
  }
}

export default Result;
