//Question 40
//Album:
//Created a function with an object inside the function
function make_album(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    //created condition for track
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
// Calling the function thrice & printing them
console.log(make_album("Arisha", "One"));
console.log(make_album("Hunny", "two", 3)); //also added value of tracks
console.log(make_album("Haniya", "three"));
