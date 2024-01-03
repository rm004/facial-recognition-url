import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ParticlesBg num={125} color='#FFFFFF' type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {
          // <FaceRecognition />
        }
      </div>
    );
  }
}

export default App;
