function openLink(url) {
    window.open(url, '_blank');
}

function toggleInfo(id) {
    let info = document.getElementById(id);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
