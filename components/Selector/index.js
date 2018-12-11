import React from 'react';
// import {Link} from 'react-router-dom';

import './styles.css';

const ItemsRender = {
  ListItem: (props) => (
    <div onClick={() => props.returnValue(props.data)}
         className="select">
      <span className="label">{props.data.value}</span>
    </div>
  ),
  ImageItem: (props) => (
    <div title={props.data.name}
         onClick={() => props.returnValue(props.data)}
         className="select">
      <span className="label">{props.data.id}</span>
      <img alt={props.data.name} src={props.data.thumb} className="image"/>
    </div>
  )
};

function Selector(props) {
  const ItemComponent = ItemsRender[props.item];

  return (
    <div className="selector">
      <p className="description">{props.description}</p>
      {props.items.map((item, number) => (
        <ItemComponent data={item}
                       path={props.path}
                       pieces={props.pieces}
                       key={number.toString()}
                       returnValue={props.returnValue}/>
      ))}
    </div>
  )
}

export default Selector;
