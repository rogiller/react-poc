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
import {Card, CardMedia, CardTitle, DatePicker, RaisedButton, Snackbar, TextField, TimePicker} from "material-ui";
import MainMenu from "./MainMenu";
import axios from "axios";

//CSS imports
import 'react-big-calendar/lib/css/react-big-calendar.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        open: false,
        openSnack: false,
        snackMessage: '',
        showView: 'home',
        timePick: null,
        dataGridRows: [],
        columns: [
            { key: 'id', name: 'ID', width: 100 },
            { key: 'joke', name: 'Joke' }]
    };

    BigCalendar.momentLocalizer(moment);

    this.onTimePickChange = this.onTimePickChange.bind(this);
    this.rowGetter = this.rowGetter.bind(this);
    this.loadDataGridData = this.loadDataGridData.bind(this);

    this.loadDataGridData();
  }

  loadDataGridData(){

      var me = this;

      axios.get('http://api.icndb.com/jokes/random/10?limitTo=[nerdy]')
          .then(function (response) {
              me.setState({dataGridRows: response.data.value})
          })
          .catch(function (error) {
              console.log(error);
          });
  }

  onTimePickChange(event, newValue){
      this.setState({timePick: newValue})
      this.setState({openSnack: true, snackMessage: `Date/Time changed to: ${newValue}` })
  }

  rowGetter(i){
    return this.state.dataGridRows[i];
  }

  render () {
    return (
        <MuiThemeProvider>
            <div>

                <Drawer open={this.state.open}>
                    <MenuItem onClick={() => { this.setState({open: false, showView: 'home'}) }}>HOME</MenuItem>
                    <MenuItem onClick={() => { this.setState({open: false, showView: 'grid'}) }}>GRID</MenuItem>
                    <MenuItem onClick={() => { this.setState({open: false, showView: 'calendar'}) }}>CALENDAR</MenuItem>
                    <MenuItem onClick={() => { this.setState({open: false, showView: 'jazz'}) }}>JAZZ</MenuItem>
                </Drawer>

                <Snackbar
                    open={this.state.openSnack}
                    message={this.state.snackMessage}
                    autoHideDuration={4000}
                />

                <AppBar title="HOME" titleStyle={{textAlign: "center"}}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={() => { this.setState({open: !this.state.open}) }}/>

                { this.state.showView === 'home' &&
                    <Card>
                        <CardMedia
                            overlay={<CardTitle title="A Taste of React" subtitle="react proof of concept app" />}
                        >
                            <img src="https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt="" />
                        </CardMedia>
                    </Card>
                }

                { this.state.showView === 'grid' &&
                    <ReactDataGrid
                    columns={this.state.columns}
                    rowGetter={this.rowGetter}
                    rowsCount={10}/>
                }

                { this.state.showView === 'grid' &&
                    <RaisedButton onClick={this.loadDataGridData} primary={true}>Reload Data</RaisedButton>
                }

                { this.state.showView === 'calendar' &&
                    <BigCalendar
                        events={[{title: 'First Event Ever', startDate: '2017-09-06', endDate: '2017-09-15'}]}
                        startAccessor='startDate'
                        endAccessor='endDate'
                    />
                }

                { this.state.showView === 'jazz' &&
                    <MainMenu/>
                }

                { this.state.showView === 'jazz' &&
                    <LikeComponent />
                }

                { this.state.showView === 'jazz' &&
                    <DatePicker hintText="Date Picker Example" onChange={this.onTimePickChange} autoOk={true}/>
                }

                { this.state.showView === 'jazz' &&
                    <TimePicker hintText="Time Picker Example" minutesStep={5} onChange={this.onTimePickChange} autoOk={true}/>
                }

                { this.state.showView === 'jazz' &&
                    <TextField value={this.state.timePick}/>
                }

            </div>
        </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
