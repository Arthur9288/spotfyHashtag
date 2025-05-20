import { artistArray } from '../../front-end/src/assets/database/artists.js';
import { songsArray } from '../../front-end/src/assets/database/songs.js';
import { db } from './connect.js';

const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj};
    delete newArtistObj.id;
    
    return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj};
    delete newSongObj.id;
    
    return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db.collection("artists").insertMany(newArtistArray);

//DELETE ALL DATA****
//const responseSongs = await db.collection("artists").deleteMany({});
//const responseArtists = await db.collection("songs").deleteMany({});


console.log(responseSongs);
console.log(responseArtists);

