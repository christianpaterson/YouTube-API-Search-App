

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        let response = JSON.parse(xhttp.responseText);
        let videoData = response.items.map(function(item) {
            return item.snippet;
        })

        let container = document.querySelector('#response');
        videoData.forEach(function(video) {
            let videoDiv = document.createElement('div');
            videoDiv.classList.add('video-div');
            videoDiv.innerHTML = `
                <img src='${video.thumbnails.high.url}'>
                <h4>${video.title}</h4>
                <p>${video.channelTitle}</p>
                <p>${new Date(video.publishTime).toLocaleDateString()}</p>

            `
            container.appendChild(videoDiv);
        })
    
    }
};
xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=commitmentrelationships&maxResults=12&key=AIzaSyAokMyi5gwYyITDzEGCWY0dmSZj-DW3Lhs", true);
xhttp.send();