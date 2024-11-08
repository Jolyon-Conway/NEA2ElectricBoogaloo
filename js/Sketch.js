let textures = [];
let numTextures = 2; // number of textures in the textures folder MUST be updated manually everytime a texture is added or removed
let faces = []
let shapes = []
let threeDPoints = []

function preload() {
    // loading all the textures into one array called textures from the textures folder ALL textures must be named texture0.jpg, texture1.jpg, texture2.jpg, etc. and must be JPEG files
    for (let i = 0; i < numTextures; i++) {
        textures[i] = loadImage(`textures/texture${i}.jpg`);
    }
}

function setup() {
    createCanvas(800, 800, WEBGL);
    threeDPoints[0] = new Point(-100, 100, 100);
    threeDPoints[1] = new Point(100, 100, 100);
    threeDPoints[2] = new Point(100, -100, 100);
    threeDPoints[3] = new Point(-100, -100, 100);
    threeDPoints[4] = new Point(-100, 100, -100);
    threeDPoints[5] = new Point(100, 100, -100);
    threeDPoints[6] = new Point(100, -100, -100);
    threeDPoints[7] = new Point(-100, -100, -100);
    shapes[0] = new Cuboid(threeDPoints, false, textures[0], true, "red");
}
function draw() {
    background(0);
    stroke(255);
    
    faces = []
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].vectorizeAll()
        let newFaces = shapes[i].findFaces()
        for (let j = 0; j < newFaces.length; i++) {
            faces.append(new Face(newFaces[j], shapes[i].isImage, shapes[i].image, shapes[i].colour))
        }
    }
    for (let i = 0; i < faces.length; i++) {
        faces[i].drawFace();
    }
}
