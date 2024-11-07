let textures = [];
let numTextures = 2; // number of textures in the textures folder MUST be updated manually everytime a texture is added or removed
let threeDcorners = [];
let twoDcorners = new Array(4,2);
let face;


function preload() {
    // loading all the textures into one array called textures from the textures folder ALL textures must be named texture0.jpg, texture1.jpg, texture2.jpg, etc. and must be JPEG files
    for (let i = 0; i < numTextures; i++) {
        textures[i] = loadImage(`textures/texture${i}.jpg`);
    }
}

function setup() {
    createCanvas(800, 800, WEBGL);
    threeDcorners = [new Point(-400,400,0), new Point(400,400,0), new Point(400, -400, 0), new Point(-400, -400, 0)];
    for (let i = 0; i < threeDcorners.length; i++) {
        twoDcorners[i,0] = threeDcorners[i].vectorizeX();
        twoDcorners[i,1] = threeDcorners[i].vectorizeY();
    }
    face = new Face(twoDcorners, threeDcorners, true, textures[1], null);
}
function draw() {
    background(0);
    stroke(255);
    face.drawFace();
}
