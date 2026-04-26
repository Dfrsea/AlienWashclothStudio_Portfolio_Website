document.querySelectorAll(".gallery").forEach(gallery => {
    const images = JSON.parse(gallery.dataset.images);
    let currentSlide = 0;

    const mainImage = gallery.querySelector(".main-image");
    const prevBtn = gallery.querySelector(".prev");
    const nextBtn = gallery.querySelector(".next");

    function updateGallery() {
        mainImage.src = images[currentSlide];
    }

    prevBtn.addEventListener("click", () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = images.length - 1;
        }
        updateGallery();
    });

    nextBtn.addEventListener("click", () => {
        currentSlide++;
        if (currentSlide >= images.length) {
            currentSlide = 0;
        }
        updateGallery();
    });
});