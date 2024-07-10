let ctx;
let hexagons = [];
let hoveredHexIndex = -1;

function drawHexagon(x, y, size, fillColor) {
    const angle = Math.PI / 3;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(x + size * Math.cos(angle * i), y + size * Math.sin(angle * i));
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.stroke();
}

function drawLargerHexagon(centerX, centerY, largeSize, smallSize) {
    const height = Math.sqrt(3) * smallSize;
    const width = 2 * smallSize;
    hexagons = [];
    let index = 0;

    for (let q = -largeSize + 1; q < largeSize; q++) {
        for (let r = Math.max(-largeSize + 1, -q - largeSize + 1); r < Math.min(largeSize, -q + largeSize); r++) {
            const x = centerX + (width * (3/4 * q));
            const y = centerY + (height * (r + 0.5 * q));
            const isOuterRing = (Math.abs(q) === largeSize - 1 || Math.abs(r) === largeSize - 1 || Math.abs(q + r) === largeSize - 1);
            const fillColor = isOuterRing ? 'blue' : 'white';
            drawHexagon(x, y, smallSize, fillColor);
            hexagons.push({ index: index, center: { x: x, y: y }, size: smallSize, isOuterRing: isOuterRing });
            index++;
        }
    }
}

function isPointInHexagon(px, py, hx, hy, size) {
    const dx = Math.abs(px - hx) / size;
    const dy = Math.abs(py - hy) / size;
    return dx <= 1.5 && dy <= Math.sqrt(3) / 2 && dy <= -Math.sqrt(3) * dx + Math.sqrt(3);
}

function getHexagonIndex(px, py) {
    for (let i = 0; i < hexagons.length; i++) {
        const hex = hexagons[i];
        if (isPointInHexagon(px, py, hex.center.x, hex.center.y, hex.size)) {
            return i;
        }
    }
    return -1;
}

function drawAllHexagons() {
    for (const hex of hexagons) {
        const fillColor = hex.isOuterRing ? 'blue' : 'white';
        drawHexagon(hex.center.x, hex.center.y, hex.size, fillColor);
    }
}

function handleMouseMove(event) {
    const rect = ctx.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const index = getHexagonIndex(mouseX, mouseY);
    
    if (index !== hoveredHexIndex) {
        hoveredHexIndex = index;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawAllHexagons();
        if (index !== -1) {
            const hex = hexagons[index];
            drawHexagon(hex.center.x, hex.center.y, hex.size, 'green');
        }
    }
}

function handleMouseClick(event) {
    if (hoveredHexIndex !== -1) {
        console.log("Hexagon Index: " + hexagons[hoveredHexIndex].index);
    }
}

// Initialize the canvas and context
window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    
    // Draw a larger hexagon composed of smaller hexagons

    main();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleMouseClick);
};

function main() {
    drawLargerHexagon(400, 400, 4, 30);
}