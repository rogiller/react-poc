import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class MainMenu extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {likesCount : 0};
    }

    render() {
        return (
            <div>
                <div>
                    <RaisedButton label="Flex" />
                    <RaisedButton label="Contacts" />
                    <RaisedButton label="Financials" />
                    <RaisedButton label="Inventory" />
                    <RaisedButton label="Projects" />
                    <RaisedButton label="Reports" />
                    <RaisedButton label="System Settings" />
                    <RaisedButton label="Warehouse" />
                    <RaisedButton label="Help" />
                </div>
            </div>
        );
    }

}

export default MainMenu;
