chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: `
        if ((window.location.host === 'www.youtube.com') && (window.location.pathname.indexOf('playlist') === 1)) {

            var videoLinks = document.querySelectorAll('a.pl-video-title-link');

            var videoTitlesArr = [];

            videoLinks.forEach(video => {
                videoTitlesArr.push(video.textContent.trim());
            });

            var titles = videoTitlesArr.join('<br/>');

            var output = document.createElement('div');
            output.innerHTML = titles;

            body.innerHTML = '';
            body.appendChild(output);
        } else {
            alert('You must be on a YouTube Playlist URL, like youtube.com/playlist?list=some-parameter, for this extension to extract the video titles.')
        }
        `
    });
});
