import React from 'react';

import './App.css';


const MediaCard = props =>{

      const header = (
        
        <header className="header">
          <img className="gato_min" src={props.img} alt=""/>
          <div className="name">
          <h3>{props.name}</h3>
          <p className="date">{props.date}</p>
          </div>
        </header>
      );
  
    const main = (
      <main>
      <p>{props.text}</p>
      </main>
    );
  
    const footer = (
      <footer>
        <a className="leer" href="#">Leer mas...</a>
        <div className="like">
          <p className="number">{props.likes}</p>
          <i className={props.heart}></i>
          
        </div>
      </footer>
      );
  
      const all = (
        <div className="card__container">
          {header}
          {main}
          {footer}
        </div>
      );
      
      return all;
    }
  
  export default MediaCard;