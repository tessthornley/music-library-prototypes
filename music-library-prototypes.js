const Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  return this;
};

Library.prototype.addPlaylists = function(playlist) {
  this.playlists.unshift(playlist);
};

const Playlists = function(name) {
  this.name = name;
  this.tracks = [];
  return this;
};

Playlists.prototype = Object.create(Library.prototype);
Playlists.prototype.constructor = Playlists;

Playlists.prototype.addTracks = function(track) {
  this.tracks.unshift(track);
}

Playlists.prototype.overallRating = function(ratings) {
  let average = 0;
  let length = 0;
    for (let rating of ratings) {
      for (let innerRating of rating) {
        average += innerRating.rating;
        length = rating.length;
    };
  };
  return average / length;
}

Playlists.prototype.totalDuration = function(durations) {
  let total = 0;
  for (let duration of durations) {
    for (let innerDuration of duration) {
      total += innerDuration.songLength;
    };
  };
  return total;
}

const Tracks = function(title, rating, songLength) {
  this.title = title;
  this.rating = rating;
  this.songLength = songLength;
  return this;
};

Tracks.prototype = Object.create(Playlists.prototype);
Tracks.prototype.constructor = Tracks;


let newLibrary = new Library('Tess Library', 'Tess'); 

let newPlaylist = new Playlists('Tess Playlist');

let songOne = new Tracks('Song one', 5, 180);
let songTwo = new Tracks('Song two', 3, 200);
let songThree = new Tracks('Song three', 5, 250);

newLibrary.addPlaylists(newPlaylist);

newPlaylist.addTracks([songOne, songTwo, songThree]);
newPlaylist.overallRating(newPlaylist.tracks);
newPlaylist.totalDuration(newPlaylist.tracks);

console.log(newLibrary);