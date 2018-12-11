import React, {Component} from 'react';
import {Redirect, HashRouter, Switch} from 'react-router-dom';
import {PropsRoute} from 'react-router-with-props';

import Intro from './views/Intro';
import Images from './views/Images';
import Puzzle from './views/Puzzle';
import Result from './views/Result';
import './App.css';

import sectionData from './settings';

let puzzleProps = {};

function setPuzzleProps(obj) {
  puzzleProps = Object.assign({}, puzzleProps, obj);
}

const PrimaryLayout = () => (
  <div className="App">
    <Switch>
      <PropsRoute path={sectionData.pieces.route} exact component={Intro}
                  setPuzzleProps={setPuzzleProps}
                  puzzleProps={puzzleProps}
                  sectionData={sectionData}/>
      <PropsRoute path={sectionData.images.route} component={Images}
                  setPuzzleProps={setPuzzleProps}
                  puzzleProps={puzzleProps}
                  sectionData={sectionData}/>
      <PropsRoute path={sectionData.puzzle.route} component={Puzzle}
                  setPuzzleProps={setPuzzleProps}
                  puzzleProps={puzzleProps}
                  sectionData={sectionData}/>
      <PropsRoute path={sectionData.result.route} component={Result}
                  setPuzzleProps={setPuzzleProps}
                  puzzleProps={puzzleProps}
                  sectionData={sectionData}/>
      <Redirect to={sectionData.pieces.route}/>
    </Switch>
  </div>
);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <PrimaryLayout/>
      </HashRouter>
    );
  }
}

export default App;
