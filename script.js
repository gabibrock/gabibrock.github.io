document.addEventListener("DOMContentLoaded", function() {
    const gift = document.getElementById("gift");
    const surprise = document.getElementById("surprise");
    const closeButton = document.getElementById("closeButton");

    gift.addEventListener("click", function() {
        gift.style.display = "none";
        surprise.classList.remove("hidden");
    });

    closeButton.addEventListener("click", function() {
        surprise.classList.add("hidden");
        gift.style.display = "block";
    });
});
