import React from 'react';
import APlayer from 'react-aplayer';

const musicList = [
  {
    name: 'ポケットをふくらませて',
    artist: 'rionos',
    url: 'http://sena.moe/musics/music1.mp3',
    cover: 'http://sena.moe/musics/cover1.jpg',
  },
  {
    name: 'ナグルファルの船上にて',
    artist: 'monet',
    url: 'http://sena.moe/musics/music2.mp3',
    cover: 'http://sena.moe/musics/cover2.jpg',
  },
  {
    name: '夜の向日葵',
    artist: '松本文紀',
    url: 'http://sena.moe/musics/music3.mp3',
    cover: 'http://sena.moe/musics/cover3.png',
  },
];

const Audio = () => <APlayer listFolded audio={musicList} theme="#be121b" preload="metadata" />;
export default Audio;
