/* eslint-disable */
// @ts-nocheck
import './style.scss';

console.log('Hello world');
// const music = new Audio('../public/assets/audio.mp3');
// window.onclick = () => {
//   music.play();
//   music.loop = true;
//   music.playbackRate = 2;
// };

const myAudio = document.getElementById('myAudio'); 
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
playButton.onclick = playAudio;
pauseButton.onclick = pauseAudio;


function playAudio() {
  myAudio.play(); 
} 

function pauseAudio() { 
  myAudio.pause(); 
} 
