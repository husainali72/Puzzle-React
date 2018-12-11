import React, {Component} from 'react';
import './styles.css';

import Selector from '../../components/Selector';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.setPuzzleProps = props.setPuzzleProps;
    this.pieces = props.sectionData.pieces;
    this.setPieces = this.setPieces.bind(this);
  }

  setPieces(value) {
    this.setPuzzleProps({pieces: value});
    this.props.history.push(this.props.sectionData.images.route);
  }

  render() {
    return (
      <div className="Intro">
        <Selector description={this.pieces.description}
                  items={this.pieces.selectors}
                  item="ListItem"
                  path="/pieces"
                  returnValue={this.setPieces}/>
      </div>
    )
  }
}

export default Intro;
