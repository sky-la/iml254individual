/* ================= MUSIC ================= */

const music = document.getElementById("bgmusic");
const icon = document.getElementById("musicIcon");

// required browser unlock (first interaction)
document.addEventListener("click", () => {
    music.play();
}, { once: true });

// toggle
icon.addEventListener("click", () => {
    if (music.paused) {
        music.volume = 0;
        music.play();

        icon.classList.add("on");
        icon.textContent = "🔊";

        // fade in
        let vol = 0;
        let fadeIn = setInterval(() => {
            if (vol < 1) {
                vol += 0.05;
                music.volume = vol;
            } else {
                clearInterval(fadeIn);
            }
        }, 80);

    } else {
        // fade out
        let vol = music.volume;

        let fadeOut = setInterval(() => {
            if (vol > 0) {
                vol -= 0.05;
                music.volume = vol;
            } else {
                music.pause();
                clearInterval(fadeOut);
            }
        }, 80);

        icon.classList.remove("on");
        icon.textContent = "🎵";
    }
});


let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000);
}
document.addEventListener("DOMContentLoaded", showSlides);



let familyPhoto = 1;


function nextFamilyPhoto(){

    familyPhoto++;


    if(familyPhoto > 5){

        familyPhoto = 1;

    }


    document.getElementById("familyImage").src =
    "images/family_" + familyPhoto + ".jpg";

}


function openImage(image){

    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");


    lightbox.style.display = "flex";

    lightboxImg.src = image.src;

}



function closeImage(){

    let lightbox = document.getElementById("lightbox");

    lightbox.style.display = "none";

}



// Close when clicking outside the image

document.getElementById("lightbox").onclick = function(event){

    if(event.target.id === "lightbox"){

        closeImage();

    }

};