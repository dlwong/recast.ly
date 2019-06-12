import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeClick = this.changeClick.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.state = {
      exampleVideoData : [],
      videoPlayer: exampleVideoData[0],
      query: 'puppies'
    };
  }

  componentDidMount() {
    // this.setState({
    //   exampleVideoData: //don't know how to access here
    // })
    searchYouTube({key: YOUTUBE_API_KEY, query: this.state.query, max: 2}, (data) => { this.setState({exampleVideoData: data, videoPlayer: data[0]})})
  }

  handleQuery(target) {
    this.setState({query:target},() => {
      console.log(this.state.query);
      searchYouTube({
        key: YOUTUBE_API_KEY,
        query: this.state.query,
        max: 2
      }, (data) => {
        this.setState({
          exampleVideoData: data,
          videoPlayer: data[0]
        });
      });
    });
  }

  changeClick(video) {
    this.setState({videoPlayer:video});
  }

  render() {
    return (<div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><Search query={this.state.query} handleQuery={this.handleQuery}/></div>
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
