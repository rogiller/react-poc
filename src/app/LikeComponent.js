import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';

class LikeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        <RaisedButton onClick={this.onLike} primary={true}>Like Me</RaisedButton>
        <Badge badgeContent={this.state.likesCount} primary={true}/>
      </div>
    );
  }

}

export default LikeComponent;
