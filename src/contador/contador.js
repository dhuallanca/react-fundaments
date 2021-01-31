import React from 'react';
class Contador extends React.Component {
  state = {
    clicks: 0,
    video: {
      title: 'Video',
      likes: 0
    }
  }
  // basic step
  add = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };
  // using function to return a new state
   add2 = () => {
    this.setState((state, props) => {
      return {
        clicks: state.clicks +1
      }
    });
     // just return an object using "()"
    // this.setState((state, props) => ({
    //     clicks: state.clicks +1
    //   })
    // );
  };

   addLikes = () => {
     // just return an object using "()"
    this.setState((state, props) => ({
      video: {
        ...state.video,
          likes: state.video.likes +1
        }
      })
    );
  };

  render() {
   
    return (
    <>
      <div>
        <button onClick={this.add}>Clicks {this.state.clicks}</button>
        <button onClick={this.add2}>Clicks with Fn { this.state.clicks }</button>
      </div>
       <div>
        {this.state.video.title}
        <button onClick={this.addLikes}>Likes with Fn { this.state.video.likes }</button>
        </div>
    </>
    );
  }

}

export default Contador;