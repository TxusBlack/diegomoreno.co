import React, { Component } from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

import '../assets/css/global.css';

class HomePage extends Component {

  constructor(state) {
    super(state);
    this.state = {

    }
  }

  render() {
    return (
      <main>
        <Typed
          strings={[
            `Hola a todos,
            </br>Soy Diego Moreno
            </br>Desarrollador Full-Stack en Node.js
            `]}
          typeSpeed={40}
          backSpeed={50}
          className="typed" />
      </main>
    )
  }
}

export default HomePage;
