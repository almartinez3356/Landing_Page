
document.addEventListener("DOMContentLoaded", function() {
    // Reference ID's
    const instaLink = document.getElementById("instagram-link")
    const linkedInLink = document.getElementById("linkedin-link")
    const githubLink = document.getElementById("github-link")
    const button = document.getElementById("buttonCV")

    // Reference actual links
    const instagramURL = "https://www.instagram.com/alexlianthone";
    const linkedInURL = "https://www.linkedin.com/in/alexanderlmartinez";
    const githubURL = "https://github.com/almartinez3356";

    // Add a click event listener to navigate
    instaLink.addEventListener("click", () => {
        window.location.href = instagramURL;
    });
    linkedInLink.addEventListener("click", () => {
        window.location.href = linkedInURL;
    });
    githubLink.addEventListener("click", () => {
        window.location.href = githubURL;
    });
});
