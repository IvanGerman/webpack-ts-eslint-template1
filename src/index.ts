import './style.scss';

console.log(`// /* eslint-disable */
             // @ts-nocheck`);
console.log('Hello world');
// const music = new Audio('../public/assets/audio.mp3');
// window.onclick = () => {
//   music.play();
//   music.loop = true;
//   music.playbackRate = 2;
// };
const myAudio: HTMLVideoElement = <HTMLVideoElement> document.getElementById('myAudio'); 
const playButton: HTMLElement = <HTMLElement> document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');

function playAudio() {
  myAudio.play(); 
}

function pauseAudio() { 
  myAudio.pause(); 
} 

playButton.onclick = playAudio;
pauseButton!.onclick = pauseAudio;
