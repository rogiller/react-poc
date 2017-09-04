import React from 'react';
import {render} from 'react-dom';
import MainMenu from './MainMenu.jsx';
import LikeComponent from './LikeComponent.jsx';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {
  render () {
    return (
        <MuiThemeProvider>
            <div>
                <AppBar title="FLEX" titleStyle={{textAlign: "center"}} iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <LikeComponent />
            </div>
        </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
