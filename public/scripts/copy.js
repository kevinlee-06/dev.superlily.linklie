function copyText() {
    var copyText = document.getElementById("shortenedUrl");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("已複製訊息: " + copyText.value);
    const message = document.getElementById("copyMessage");
    message.style.display = "block";

    // Hide the message after 1.5 seconds
    setTimeout(() => {
        message.style.display = "none";
    }, 1500);
}