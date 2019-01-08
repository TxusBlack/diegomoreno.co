import React, { Component } from 'react';
import SnowStorm from 'react-snowstorm';

import './styles/global.css'

export default class Main extends Component {

  constructor(state) {
    super(state);
    this.changeLanguage();
  }

  changeLanguage() {
    console.log(window.navigator.language.slice(0, 2));
    if (window.navigator.language.slice(0, 2) === 'es') {
      this.title = 'Espérame, pronto vendrán nuevos proyectos! 😄';
    } else {
      this.title = 'Wait for me, soon new projects will come! 😄';
    }
  }

  render() {
    return (
      <main>
        <h1 ref='title'>{this.title}</h1>
        <h2 ref='subtitle'><a href='mailto:iam@diegomoreno.co'>iam@diegomoreno.co</a></h2>
        <SnowStorm
          followMouse={false}
          snowStick={false}
        />
      </main>
    )
  }
}