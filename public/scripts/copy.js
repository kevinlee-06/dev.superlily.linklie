function copyText() {
    const textToCopy = document.getElementById("shortenedUrl");
    navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
        displayCopyMessage();
    })
    .catch((err) => {
        console.error("Failed to copy text: ", err);
        legacyCopyTextApi();
    });
}

function legacyCopyTextApi() {
    const textToCopy = document.getElementById("shortenedUrl");
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    displayCopyMessage();
}

function displayCopyMessage() {
    const message = document.getElementById("copyMessage");
    message.style.display = "block";

    setTimeout(() => {
        message.style.display = "none";
    }, 1500);
}