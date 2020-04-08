import React, { Component } from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

import '../assets/css/global.css';

class HomePage extends Component {

  constructor(state) {
    super(state);
    this.state = {
      typed: true
    }
  }

  render() {
    const { typed } = this.state;
    return (
      <main>
        {
          typed
            ?
            <Typed
              strings={[
                `Hola a todos,
                </br>Soy Diego Moreno
                </br>Desarrollador Full-Stack en Node.js
                `,
                'Les presento mi portafolio 😁', '']}
              typeSpeed={40}
              backSpeed={20}
              onComplete={() => this.setState({ typed: false })}
              className="typed" />
            :
            <div>
              <h1 className="animated fadeInUp">Hola</h1>
            </div>
        }
      </main>
    )
  }
}

export default HomePage;
