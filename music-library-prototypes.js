var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
    for(var playlist in this.playlists) {
      var playlistnumber = this.playlists[playlist].id;
      var playlistname = this.playlists[playlist].name;
      var tracknumbers = this.playlists[playlist].tracks.length;
    console.log(playlistnumber + ': ' + playlistname + ' - ' + tracknumbers + ' tracks')
  }
},
  printTracks: function() {
    for (var track in this.tracks) {
      var tracknumber = this.tracks[track].id
      var trackname = this.tracks[track].name
      var artistname = this.tracks[track].artist
      var album = this.tracks[track].album
    console.log(tracknumber + ': ' + trackname + ' by ' + artistname + ' (' + album + ')')
  }
},
  printPlaylist: function(playlistId) {
    var playlistnumber = this.playlists[playlistId].id
    var playlistname = this.playlists[playlistId].name
    var tracknumbers = this.playlists[playlistId].tracks.length

     console.log(playlistnumber + ': ' + playlistname + ' - ' + tracknumbers + ' tracks')

    for (var track of this.playlists[playlistId].tracks) {
     var tracknumber = this.tracks[track].id
     var trackname = this.tracks[track].name
     var artistname = this.tracks[track].artist
     var album = this.tracks[track].album

     console.log(tracknumber + ': ' + trackname + ' by ' + artistname + ' (' + album + ')')
  }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    var playlisttoadd = this.playlists[playlistId]
    playlisttoadd.tracks.push(trackId)
    console.log(playlisttoadd.tracks)
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    var newtrackid = this.uid()

    this.tracks[newtrackid] = { id: newtrackid,
                   name: name,
                   artist: artist,
                   album: album }
    console.log(this.tracks)
  },
  addPlaylist: function(name) {
    var newplaylistid = this.uid()

    this.playlists[newplaylistid] = { id: newplaylistid,
                      name: name,
                      tracks: []
                    }
    console.log(this.playlists)
  }
}

library.printPlaylists()
library.printTracks()
library.printPlaylist('p01')
library.addTrackToPlaylist('t03', 'p01')
library.addTrack('Habitat', 'Tennyson', 'Tennyson')
library.addPlaylist('Tess Playlist')

