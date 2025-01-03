// Array of video objects
const videos = [
    { title: "Video 1", url: "./assets/1st.mp4", thumbnail: './assets/title/1stTitle.png' },
    { title: "Video 2", url: "./assets/2nd.mp4", thumbnail: './assets/title/2ndTitle.png' },
    { title: "Video 3", url: "./assets/3rd.mp4", thumbnail: './assets/title/3rdTitle.png' },
];


// Function to populate the video list
function populateVideoList() {
    const videoList = document.querySelector('.list-unstyled');
    videos.forEach((video, index) => {
        videoList.innerHTML += `<div class="card videoCard" style="width: 18rem;">
  <img src="${video.thumbnail}" class="card-img-top" alt="..." onclick="changeVideo('${video.url}')">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    });
}

// Function to change the video source
function changeVideo(url) {
    const videoElement = document.getElementById("myVideo");
    const videoSource = document.getElementById("videoSource");
    console.log(url)
    videoSource.src = url;
    videoElement.load(); // Reload the video to change the source
    videoElement.play(); // Auto-play the video after source change
}

// Play/Pause button functionality
function playPause() {
    const video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

window.onload = function () {
    const videoDiv = document.querySelector('#myVideo')
    videoDiv.innerHTML = `<source id="videoSource" src="'${videos[0].url}'" type="video/mp4">`

    populateVideoList();
};
