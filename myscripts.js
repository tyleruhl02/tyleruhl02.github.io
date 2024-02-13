var images = [], x = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeImage() {
    var image = document.getElementById("imgsOfMe");

    image.style.opacity = 0;

    await setTimeout(() => {
        x = (x + 1) % images.length;
        image.src = images[x];
    }, 1000);

    await setTimeout(() => {
        image.style.opacity = 1;
    }, 2000);

    setTimeout("changeImage()", 5000);
}

function main() {
    images[0] = "imageOfMe1.JPG";
    images[1] = "imageOfMe2.JPG";
    images[2] = "imageOfMe3.JPG";
    setTimeout("changeImage()", 5000);
}

main();