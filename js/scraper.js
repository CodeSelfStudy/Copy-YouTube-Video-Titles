// Scrape and print the titles. Move to separate functions if it gets more complicated.
var scrape = function () {
    var playlistUrl = window.location.href,
        videoLinks = document.querySelectorAll('a.pl-video-title-link'),
        videoTitlesArr = [],
        urlTitle = 'Playlist URL:',
        titlesTitle = 'The videos in the playlist:',
        titles, output, content;

    // Extract the video title text into videoTitlesArr
    videoLinks.forEach(video => {
        videoTitlesArr.push(video.textContent.trim());
    });

    // Build HTML
    titles = videoTitlesArr.join('<br/>');
    output = document.createElement('div');
    output.innerHTML = `${urlTitle}<br/>${playlistUrl}<br/><br/>${titlesTitle}<br/>${titles}`;

    // Update page
    body.innerHTML = '';
    body.appendChild(output);
};

 var main = function () {
    if ((window.location.host === 'www.youtube.com') && (window.location.pathname.indexOf('playlist') === 1)) {
        this.scrape();
    } else {
        alert('You must be on a YouTube Playlist URL, like youtube.com/playlist?list=some-parameter, for this extension to extract the video titles.')
    }
};

main();
