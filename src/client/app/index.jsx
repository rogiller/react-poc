import React from 'react';
import {render} from 'react-dom';
import MainMenu from './MainMenu.jsx';
import LikeComponent from './LikeComponent.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <MainMenu />
        <br/>
        <LikeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
