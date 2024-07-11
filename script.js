function changeImage() {
    const dropdown = document.getElementById("resolutionDropdown");
    const selectedValue = dropdown.value;
    const image = document.getElementById("displayImage");

    let imagePath = "";
    switch(selectedValue) {
        case "144p":
            imagePath = "https://img.freepik.com/vetores-premium/icone-do-planeta-terra-pixel-art_1102-3931.jpg";
            break;
        case "240p":
            imagePath = "https://img.freepik.com/vetores-premium/pixel-de-terra-em-miniatura-de-8-bits-o-mundo-em-ilustracoes-vetoriais-globo-em-pixel-art_614713-86.jpg";
            break;
        case "480p":
            imagePath = "https://i.pinimg.com/originals/64/a7/d5/64a7d50fad601631e962e51cd19f59de.png";
            break;
        case "720p":
            imagePath = "https://pngimg.com/d/earth_PNG39.png";
            break;
        case "1080p":
            imagePath = "ne.png";
            break;
    }
    image.src = imagePath;
}