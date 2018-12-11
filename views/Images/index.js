import React, {Component} from 'react';
import './styles.css';

import Common from '../../Common';
import Selector from '../../components/Selector';

class Images extends Component {
  constructor(props) {
    super(props);

    if (!Common.checkPuzzleProps(props.puzzleProps)){
      this.props.history.push(this.props.sectionData.root.route);
    }

    this.props = props;
    this.images = props.sectionData.images;
    this.setPuzzleProps = props.setPuzzleProps;
    this.setImage = this.setImage.bind(this);
  }

  setImage(value){
    this.setPuzzleProps({image: value})
    this.props.history.push(this.props.sectionData.puzzle.route);
  }

  render() {
    return (
      <div className="Puzzles">
        <Selector description={this.images.description}
                  items={this.images.images}
                  item="ImageItem"
                  path="/puzzle"
                  returnValue={this.setImage}/>
      </div>
    );
  }
}

export default Images;
