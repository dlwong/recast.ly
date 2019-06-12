import YOUTUBE_API_KEY from '../config/youtube.js'

var searchYouTube = (options, callback) => {

  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search`,
    type: 'GET',
    dataType: 'json',
    data: {
          part: 'snippet',
          key: options.key,
          q: options.query,
          maxResults: options.max,
          videoEmbeddable: true,
          type: 'video'
        },
    contentType: 'application/json',
    success: function (data) {
      console.log('message sent');
      console.log(data);
      callback(data.items);
    },
    error: function (data) {
      console.error('message failed');
    }
  })

};

export default searchYouTube;
