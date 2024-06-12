document.addEventListener("DOMContentLoaded", function() {
    const gift = document.getElementById("gift");
    const surprise = document.getElementById("surprise");

    gift.addEventListener("click", function() {
        gift.style.display = "none";
        surprise.classList.remove("hidden");
    });
});
