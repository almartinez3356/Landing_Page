// reference ID's
const instaLink = document.getElementById("instagram-link");

// reference actual links
const instagramURL = "https://www.instagram.com/alexlianthone";


// add a click event listener to navigate 

instaLink.addEventListener("click", () => {
    window.location.href = instagramURL;
});

