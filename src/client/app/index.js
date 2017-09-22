import React from "react";
import {render} from "react-dom";
import LikeComponent from "./LikeComponent";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import ReactDataGrid from 'react-data-grid';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

//CSS imports
import 'react-big-calendar/lib/css/react-big-calendar.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        open: false,
        columns: [
            { key: 'id', name: 'ID' },
            { key: 'title', name: 'Title' },
            { key: 'count', name: 'Count' }]
    };

      BigCalendar.momentLocalizer(moment);
  }

  rowGetter(i){
    return { id: i, title: 'Title ' + i, count: i * 1000 }
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

                <ReactDataGrid
                    columns={this.state.columns}
                    rowGetter={this.rowGetter}
                    rowsCount={10}/>

                <br/>
                <br/>

                <BigCalendar
                    events={[{ title: 'First Event Ever', startDate: '2017-09-06', endDate: '2017-09-15' }]}
                    startAccessor='startDate'
                    endAccessor='endDate'
                />

                <br/>
                <br/>

                <LikeComponent />
            </div>
        </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
