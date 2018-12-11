import React, {Component} from 'react';
import _ from 'lodash';
import Draggable from 'react-draggable';

import './styles.css';
import Common from "../../Common";

const transitionTimeout = 500; // ms
const movedAddon = 'draggable';

const clipPathSize = 30;

class Piece extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.data = props.data;
    this.updateOnPosition = props.updateOnPosition;

    const snapDiff = this.data.width / 100 * props.data.snapPercent;

    this.snapX = this.data.position.x;
    this.snapY = this.data.position.y;
    this.xRange = [this.snapX - snapDiff, this.snapX + snapDiff]
    this.yRange = [this.snapY - snapDiff, this.snapY + snapDiff]

    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);

    this.state = props.data;
  }

  isDraggable(node, name) {
    return node.classList.contains(name);
  }

  handleDrag(e, ui) {
    e.preventDefault();
    e.stopPropagation();

    const {x, y, node} = ui;

    if (this.isDraggable(node, movedAddon)) {
      const inXRange = _.inRange(x, ...this.xRange);
      const inYRange = _.inRange(y, ...this.yRange);

      if (inXRange && inYRange) {
        this.setState({position: {x: this.snapX, y: this.snapY}});

        //setTimeout(() => {
          this.setState({classAddon: this.props.fixedAddon});
          this.updateOnPosition(this.state, this.props.index);
        //}, transitionTimeout);

        return true;
      } else {
        this.setState({position: {x: x, y: y}});
      }
    } else {
      return false;
    }
  }

  onStart(e, ui) {
    if (this.isDraggable(ui.node, movedAddon)) {
      this.setState({isDragged: true});
    }
  }

  onStop() {
    this.setState({isDragged: false});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({position: nextProps.data.position});

    setTimeout(() => {
      this.setState({classAddon: movedAddon});
    }, transitionTimeout);
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const position = this.state.position;

    const viewBoxSize = Common.getPieceSize({width: this.state.width, height: this.state.height}, this.state.clipName);

    const viewBox = `0 0 ${viewBoxSize.vbw} ${viewBoxSize.vbh}`;
    const holderStyle = {width: viewBoxSize.width, height: viewBoxSize.height};

    const imageTagAttrs = {
      xlinkHref: this.state.image,
      x: -clipPathSize * this.state.col,
      y: -clipPathSize * this.state.row,
      width: clipPathSize * this.state.side,
      style: {clipPath: `url(#clip-${this.state.clipName})`}
    };


    return (<Draggable position={{x: position.x, y: position.y}} handle=".pieceHolder"
                       {...dragHandlers}
                       onDrag={this.handleDrag}>
        <div className={[
          "pieceHolder",
          this.state.classAddon || '',
          this.state.isDragged && 'drugged',
        ]} style={holderStyle}>
          <svg viewBox={viewBox} style={holderStyle}>
            {/*<use xlinkHref={'#'+this.state.clipName}/>*/}
            <image {...imageTagAttrs}></image>
          </svg>
        </div>

      </Draggable>
    );

  }
}

export default Piece;
