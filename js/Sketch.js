let textures = [];
let numTextures = 4; // number of textures in the textures folder MUST be updated manually everytime a texture is added or removed
let faces = []
let shapes = []
let threeDPoints1 = []
let threeDPoints2 = []


function preload() {
    // loading all the textures into one array called textures from the textures folder ALL textures must be named texture0.jpg, texture1.jpg, texture2.jpg, etc. and must be JPEG files
    for (let i = 0; i < numTextures; i++) {
        textures[i] = loadImage(`textures/texture${i}.jpg`);
    }
}

function setup() {
    createCanvas(800, 800, WEBGL);
    threeDPoints1[0] = new Point(-300, 100, 100);
    threeDPoints1[1] = new Point(-100, 100, 100);
    threeDPoints1[2] = new Point(-100, -100, 100);
    threeDPoints1[3] = new Point(-300, -100, 100);
    threeDPoints1[4] = new Point(-300, 100, -100);
    threeDPoints1[5] = new Point(-100, 100, -100);
    threeDPoints1[6] = new Point(-100, -100, -100);
    threeDPoints1[7] = new Point(-300, -100, -100);
    shapes[0] = new Cuboid(threeDPoints1, false, textures[3], true, "red");
    threeDPoints2[0] = new Point(200, 100, 0)
    threeDPoints2[1] = new Point(100, -100, -100)
    threeDPoints2[2] = new Point(300, -100, -100)
    threeDPoints2[3] = new Point(200, -100, 100)
    shapes[1] = new Pyramid(threeDPoints2, false, textures[2], true, "yellow")

}
function draw() {
    background(0);
    stroke(255);
    faces = []
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].rotateAboutO(1, 'y')
    }

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].vectorizeAll();
        let newFaces = shapes[i].findFaces();
        for (let j = 0; j < newFaces.length; j++) {
            faces.push(new Face(newFaces[j], shapes[i].isImage, shapes[i].image, shapes[i].colour));
        }
    }
    for (let i = 0; i < faces.length; i++) {
        //sort faces based on the average z value of the face's points
        for (let j = 0; j < faces.length - 1; j++) {
            if (faces[j].findMeanDist() < faces[j + 1].findMeanDist()) {
                let temp = faces[j];
                faces[j] = faces[j + 1];
                faces[j + 1] = temp;
            }           
        }
    }
    for (let i = 0; i < faces.length; i++) {
        faces[i].drawFace();
    }
    
}
