var playlist = {
  brunoMars: "24K Magic"
}

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function removeFromPlaylist(playlistObj, artistName){
  delete playlistObj.artistName
  return playlistObj
}
