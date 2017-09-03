import React from 'react';

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
        <div><button onClick={this.onLike}>Like Me</button></div>
        Likes : <span>{this.state.likesCount}</span>
      </div>
    );
  }

}

export default LikeComponent;
