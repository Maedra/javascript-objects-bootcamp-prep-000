var playlist = new Object({
  brunoMars: "24K Magic"
})

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function removeFromPlaylist(playlistObject, artistName){
  delete playlistObject.artistName
  return playlistObject
}
