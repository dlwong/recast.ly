import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeClick = this.changeClick.bind(this);
    this.state = {
      exampleVideoData : exampleVideoData,
      videoPlayer: exampleVideoData[0]
    };
  }

  changeClick(video) {
    this.setState({videoPlayer:video});
  }

  render() {
    return (<div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><Search /></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><VideoPlayer video={this.state.videoPlayer} /></div>
      </div>
      <div className="col-md-5">
        <div><VideoList videos={this.state.exampleVideoData} changeClick ={this.changeClick} /></div>
      </div>
    </div>
  </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
