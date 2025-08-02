// let now_playing = document.querySelector('.now-playing');
// let track_art = document.querySelector('.track-art');
// let track_name = document.querySelector('.track-name');
// let track_artist = document.querySelector('.track-artist');

// let playpause_btn = document.querySelector('.playpause-track');
// let next_btn = document.querySelector('.next-track');
// let prev_btn = document.querySelector('.prev-track');

// let seek_slider = document.querySelector('.seek_slider');
// let volume_slider = document.querySelector('.volume_slider');
// let curr_time = document.querySelector('.current-time');
// let total_duration = document.querySelector('.total-duration');
// let wave = document.getElementById('wave');
// let randomIcon = document.querySelector('.fa-random');
// let curr_track = document.createElement('audio');

// // Initialization
// let track_index = 0;
// let isPlaying = false;
// let isRandom = false;
// let updateTimer;

// // Add more music
// const music_list = [
//     {
//         img : './Downloads/Images/KaranAujla.jpg',
//         name : 'ANTIDOTE',
//         artist : 'Karan Aujla',
//         music : './Downloads/Music/ANTIDOTE.mp3'
//     },
//     {
//         img : './Downloads/Images/KNIFE_BROWS.jpg',
//         name : 'Knife Brows',
//         artist : 'Dhanda Nyoliwala',
//         music : './Downloads/Music/Knife brows.mp3'
//     },
//     {
//         img : './Downloads/Images/KR$NA.jpg',
//         name : 'I Guess',
//         artist : 'KR$NA',
//         music : './Downloads/Music/I Guess.mp3'
//     },
//     {
//         img:'./Downloads/Images/LADY_GAGA.jpg',
//         name: 'Die With A Smile',
//         artist: 'Lady gaga, Bruno Mars',
//         music:'./Downloads/Music/Die With A Smile.mp3'
//     },
//     {
//         img : './Downloads/Images/Karan_Aujla.jpg',
//         name : 'Jee Ni lagda',
//         artist : 'Karan Aujla',
//         music : './Downloads/Music/Jee Ni Lagda.mp3'
//     },
//     {
//         img : './Downloads/Images/Shubh.jpg',
//         name : 'OG',
//         artist : 'Shubh',
//         music : './Downloads/Music/OG.mp3'
//     }
// ];

// // Restore state from localStorage
// let savedIndex = localStorage.getItem("track_index");
// let savedTime = localStorage.getItem("track_time");
// let wasPlaying = localStorage.getItem("isPlaying");

// if (savedIndex !== null) {
//     track_index = parseInt(savedIndex);
// }

// loadTrack(track_index);

// function loadTrack(track_index){
//     clearInterval(updateTimer);
//     reset();

//     curr_track.src = music_list[track_index].music;
//     curr_track.load();

//     track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
//     track_name.textContent = music_list[track_index].name;
//     track_artist.textContent = music_list[track_index].artist;
//     now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

//     updateTimer = setInterval(setUpdate, 1000);

//     curr_track.addEventListener('ended', nextTrack);
//     random_bg_color();

//     // Resume from saved time and play state
//     if (savedTime !== null && parseInt(savedIndex) === track_index) {
//         curr_track.currentTime = parseFloat(savedTime);
//         if (wasPlaying === "true") {
//             playTrack();
//         }
//     }
// }

// function random_bg_color(){
//     let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e'];
//     function populate(a){
//         for(let i=0;i<6;i++){
//             a += hex[Math.floor(Math.random()*15)];
//         }
//         return a;
//     }
//     let Color1 = populate('#');
//     let Color2 = populate('#');
//     let gradient = 'linear-gradient(to right,' + Color1 + ',' + Color2 + ")";
//     document.body.style.background = gradient;
// }

// function reset(){
//     curr_time.textContent = "00:00";
//     total_duration.textContent = "00:00";
//     seek_slider.value = 0;
// }

// function randomTrack(){
//     isRandom ? pauseRandom() : playRandom();
// }
// function playRandom(){
//     isRandom = true;
//     randomIcon.classList.add('randomActive');
// }
// function pauseRandom(){
//     isRandom = false;
//     randomIcon.classList.remove('randomActive');
// }
// function repeatTrack(){
//     loadTrack(track_index);
//     playTrack();
// }
// function playpauseTrack(){
//     isPlaying ? pauseTrack() : playTrack();
// }
// function playTrack(){
//     curr_track.play();
//     isPlaying = true;
//     track_art.classList.add('rotate');
//     wave.classList.add('loader');
//     playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
// }
// function pauseTrack(){
//     curr_track.pause();
//     isPlaying = false;
//     track_art.classList.remove('rotate');
//     wave.classList.remove('loader');
//     playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';

//     // Clear playing flag
//     localStorage.removeItem("isPlaying");
// }
// function nextTrack(){
//     if(track_index < music_list.length - 1 && !isRandom){
//         track_index += 1;
//     } else if(isRandom){
//         track_index = Math.floor(Math.random() * music_list.length);
//     } else {
//         track_index = 0;
//     }
//     loadTrack(track_index);
//     playTrack();
// }
// function prevTrack(){
//     if(track_index > 0){
//         track_index -= 1;
//     } else {
//         track_index = music_list.length - 1;
//     }
//     loadTrack(track_index);
//     playTrack();
// }
// function seekTo(){
//     let seekto = curr_track.duration * (seek_slider.value / 100);
//     curr_track.currentTime = seekto;
// }
// function setVolume(){
//     curr_track.volume = volume_slider.value / 100;
// }

// let changeTheme = document.querySelector(".changeTheme");
// changeTheme.addEventListener("click", function() {
//     toggleTheme();
// });
// function toggleTheme() {
//     let musicBox = document.querySelector(".wrapper");
//     musicBox.classList.toggle("dark-theme");
//     let imgTheme = document.querySelector(".imgTheme");
//     imgTheme.classList.toggle("bg-change")
// }

// function setUpdate(){
//     let seekPosition = 0;
//     if(!isNaN(curr_track.duration)){
//         seekPosition = curr_track.currentTime * (100 / curr_track.duration);
//         seek_slider.value = seekPosition;

//         let currentMinutes = Math.floor(curr_track.currentTime / 60);
//         let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
//         let durationMinutes = Math.floor(curr_track.duration / 60);
//         let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

//         if(currentSeconds < 10) currentSeconds = "0" + currentSeconds;
//         if(durationSeconds < 10) durationSeconds = "0" + durationSeconds;
//         if(currentMinutes < 10) currentMinutes = "0" + currentMinutes;
//         if(durationMinutes < 10) durationMinutes = "0" + durationMinutes;

//         curr_time.textContent = currentMinutes + ":" + currentSeconds;
//         total_duration.textContent = durationMinutes + ":" + durationSeconds;
//     }
// }

// // Save current song and time on refresh/exit
// // window.addEventListener("beforeunload", function () {
// //     localStorage.setItem("track_index", track_index);
// //     localStorage.setItem("track_time", curr_track.currentTime);
// //     localStorage.setItem("isPlaying", isPlaying ? "true" : "false");
// // });


let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
     {
        img : './Downloads/Images/KaranAujla.jpg',
        name : 'ANTIDOTE',
        artist : 'Karan Aujla',
        music : './Downloads/Music/ANTIDOTE.mp3'
    },
    {
        img : './Downloads/Images/KNIFE_BROWS.jpg',
        name : 'Knife Brows',
        artist : 'Dhanda Nyoliwala',
        music : './Downloads/Music/Knife brows.mp3'
    },
    {
        img : './Downloads/Images/KR$NA.jpg',
        name : 'I Guess',
        artist : 'KR$NA',
        music : './Downloads/Music/I Guess.mp3'
    },
    {
        img:'./Downloads/Images/LADY_GAGA.jpg',
        name: 'Die With A Smile',
        artist: 'Lady gaga, Bruno Mars',
        music:'./Downloads/Music/Die With A Smile.mp3'
    },
    {
        img : './Downloads/Images/Karan_Aujla.jpg',
        name : 'Jee Ni lagda',
        artist : 'Karan Aujla',
        music : './Downloads/Music/Jee Ni Lagda.mp3'
    },
    {
        img : './Downloads/Images/Shubh.jpg',
        name : 'OG',
        artist : 'Shubh',
        music : './Downloads/Music/OG.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

let changeTheme = document.querySelector(".changeTheme");
changeTheme.addEventListener("click", function() {
    toggleTheme();
});
function toggleTheme() {
    let musicBox = document.querySelector(".wrapper");
    musicBox.classList.toggle("dark-theme");
    let imgTheme = document.querySelector(".imgTheme");
    imgTheme.classList.toggle("bg-change")
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}