// Set the name of the hidden property and the change event for visibility
let hidden, visibilityChange;

if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

const videoElement = document.querySelector("video");

function handleVisibilityChange() {

    // If the page is hidden, pause the video;
    if (document[hidden]) {
        videoElement.pause();
        console.log("Page is unfocused");

    // if the page is shown, play the video
    } else {
        videoElement.play();
        console.log("Page is focused");

    }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
    console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
    // Handle page visibility change   
    document.addEventListener(visibilityChange, handleVisibilityChange, false);

    // When the video pauses, set the title.
    // This shows the paused
    videoElement.addEventListener("pause", function () {
        document.title = 'Paused video';
    }, false);

    // When the video plays, set the title.
    videoElement.addEventListener("play", function () {
        document.title = 'Playing video';
    }, false);

}
