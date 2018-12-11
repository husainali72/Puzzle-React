import React, {Component} from 'react';
import _ from 'lodash';
import moment from 'moment';

import './styles.css';

import Common from "../../Common";
import Piece from "../../components/Piece";
import Clips from "./clips";
import Modal from "../../components/Modal";

const baseSize = 800;
const startTimeout = 3; // sec
const fixedAddon = 'on-position';

class Puzzle extends Component {
  constructor(props) {
    super(props);

    this.hasData = Common.checkPuzzleProps(props.puzzleProps);

    if (this.hasData) {
      this.props = props;

      this.setPuzzleProps = props.setPuzzleProps;
      this.puzzleProps = props.puzzleProps;

      this.pieceSize = baseSize / props.puzzleProps.pieces.side;

      this.onPosition = [];
      this.moment = moment;

      this.state = {
        pieces: this.calcPieces(props.puzzleProps.pieces, this.pieceSize),
        isComplete: false,
        showModal: true
      };

      this.setFinished = this.setFinished.bind(this);
      this.checkPuzzle = this.checkPuzzle.bind(this);
      this.updateOnPosition = this.updateOnPosition.bind(this);
      this.getSVGs = this.getSVGs.bind(this);
      this.mixPieces = this.mixPieces.bind(this);
      this.startPuzzle = this.startPuzzle.bind(this);
    }
  }

  componentWillMount() {
    if (!this.hasData) {
      this.props.history.push(this.props.sectionData.root.route);
    }
  }

  setFinished() {
    this.setPuzzleProps({
      complete: {value: 'Yes'},
      time: {value: moment(this.moment().diff(this.state.startTime)).format('m:ss')}
    });
    setTimeout(() => this.props.history.push(this.props.sectionData.result.route), 1000);
  }

  calcPieces(pieces, pieceSize) {
    if (pieces) {
      return _.flatten(
        _.times(pieces.side, (row) => {
          const rowOffset = pieceSize * row;
          const v = row === 0 ? 't' : (row === pieces.side - 1 ? 'b' : 'm');

          return _.times(pieces.side, (col) => {
            const colOffset = pieceSize * col;
            const h = col === 0 ? 'l' : (col === pieces.side - 1 ? 'r' : 'm');

            return {
              imagePosition: {x: colOffset, y: rowOffset},
              width: pieceSize,
              height: pieceSize,
              defaults: {x: colOffset, y: rowOffset},
              position: {x: colOffset, y: rowOffset},
              snapPercent: pieces.snapPercent,
              clipName: `${v}${h}`,
              col: col,
              row: row,
              side: pieces.side
            };
          })
        })
      )
    }
  }

  renderPieces(pieces, image) {
    return pieces.map((piece, number) => {
      const pieceData = Object.assign({}, piece, {
        imagePosition: piece.imagePosition,
        image: image.src
      });

      return (<Piece data={pieceData}
                     key={number}
                     index={number}
                     updateOnPosition={this.updateOnPosition}
                     fixedAddon={fixedAddon}/>)
    })
  }

  isComplete(pieces, key, value) {
    return pieces.every((piece) => piece[key] === value);
  }

  checkPuzzle() {
    const equalLength = this.state.pieces.length === this.onPosition.length;
    const allComplete = this.isComplete(this.onPosition, 'classAddon', fixedAddon);

    if (equalLength && allComplete) {
      this.setFinished();
    }
  }

  updateOnPosition(update) {
    this.onPosition.push(update);
    this.checkPuzzle()
  }

  updatePieces(base, update) {
    if (!_.isEmpty(base)) {
      const isFunc = (typeof update).toLowerCase() === 'function';
      const currentPiecesData = [...base];

      return currentPiecesData.map((piece) =>
        Object.assign({}, piece, isFunc ? update.call(null) : update));
    }
  }

  mixPieces(addToState) {
    if (this.hasData) {
      const halfPiece = this.pieceSize / 2;
      const areaSize = baseSize - halfPiece / 2;

      const mixedPieces = this.updatePieces(this.state.pieces, () => ({
        position: {
          y: areaSize * Math.random() - halfPiece,
          x: areaSize * Math.random() - halfPiece
        }
      }));

      this.setState(Object.assign({}, addToState, {
        pieces: mixedPieces,
        startTime: this.moment()
      }));
    }
  }

  getClip(piece, index) {
    return (<clipPath id={'clip-' + piece.clipName} key={index}>{Clips[piece.clipName]}</clipPath>)
  }

  getSVGs(pieces) {
    return pieces.map((piece, index) => this.getClip(piece, index));
  }

  closeModal() {
    this.setState({showModal: false});
  }

  startPuzzle() {
    this.mixPieces({showModal: false});
  }

  render() {
    if (this.hasData) {
      const piecesEls = this.puzzleProps.image
        ? (this.renderPieces(this.state.pieces, this.puzzleProps.image))
        : null;
      const svgDefs = this.getSVGs(this.state.pieces);

      return (
        <div>
          {this.state.showModal
            ? <Modal content="start"
                     timeout={startTimeout}
                     startFunc={this.startPuzzle}/>
            : null}

          <div className="Puzzle">
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-defs">
              <defs>{svgDefs}</defs>
            </svg>
            <div className="play-ground" id="puzzle">{piecesEls}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Puzzle;
