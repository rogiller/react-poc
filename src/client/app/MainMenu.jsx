import React from 'react';

class MainMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount : 0};
        //this.onLike = this.onLike.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <button>Home</button>
                    <button>Help</button>
                    <button>About</button>
                </div>
            </div>
        );
    }

}

export default MainMenu;
