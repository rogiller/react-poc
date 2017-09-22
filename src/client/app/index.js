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
import MainMenu from "./MainMenu";

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

  static rowGetter(i){
    return { id: i, title: 'Title ' + i, count: i * 1000 }
  }

  render () {
    return (
        <MuiThemeProvider>
            <div>

                <Drawer open={this.state.open}>
                    <MenuItem onClick={() => { this.setState({open: false, showView: 'none'}) }}>HOME</MenuItem>
                    <MenuItem onClick={() => { this.setState({open: false, showView: 'grid'}) }}>GRID</MenuItem>
                    <MenuItem onClick={() => { this.setState({open: false, showView: 'calendar'}) }}>CALENDAR</MenuItem>
                    <MenuItem onClick={() => { this.setState({open: false, showView: 'jazz'}) }}>JAZZ</MenuItem>
                </Drawer>

                <AppBar title="HOME" titleStyle={{textAlign: "center"}}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={() => { this.setState({open: !this.state.open}) }}/>

                { this.state.showView === 'grid' ?
                    <ReactDataGrid
                    columns={this.state.columns}
                    rowGetter={App.rowGetter}
                    rowsCount={10}/> : null
                }

                { this.state.showView === 'calendar' ?
                    <BigCalendar
                        events={[{title: 'First Event Ever', startDate: '2017-09-06', endDate: '2017-09-15'}]}
                        startAccessor='startDate'
                        endAccessor='endDate'
                    /> : null
                }

                { this.state.showView === 'jazz' ?
                    <MainMenu/> : null
                }

                { this.state.showView === 'jazz' ?
                    <LikeComponent /> : null
                }

            </div>
        </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
