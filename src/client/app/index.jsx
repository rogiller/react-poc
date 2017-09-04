import React from "react";
import {render} from "react-dom";
import LikeComponent from "./LikeComponent.jsx";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render () {
    return (
        <MuiThemeProvider>
            <div>
                <Drawer open={this.state.open}>
                    <MenuItem onClick={() => { this.setState({open: false}) }}>HOME</MenuItem>
                    <MenuItem>CONTACTS</MenuItem>
                    <MenuItem>INVENTORY</MenuItem>
                    <MenuItem>WAREHOUSE</MenuItem>
                </Drawer>

                <AppBar title="HOME" titleStyle={{textAlign: "center"}}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={() => { this.setState({open: !this.state.open}) }}/>

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
