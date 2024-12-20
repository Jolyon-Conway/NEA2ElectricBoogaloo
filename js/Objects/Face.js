/*
this is the class which represents a face of a 3D object. 
It contains the 3D points which make up the face, the 2D points 
which are used to draw the face on the canvas, a boolean which determines 
whether the face is an image or a square, the image which is used as 
a texture if the face is an image, the colour of the face if it is 
a square, and the centre of the face. The class contains a method 
to draw the face on the canvas, a method to find the centre of the face, 
and a method to find the mean distance of the face from the camera.
*/
class Face {
    constructor(threeDPoints, isImage, image, colour) {
        this.threeDPoints = threeDPoints;
        this.isImage = isImage;
        this.image = image;
        this.colour = colour;
        this.twoDPoints = Array.from({ length: 4 }, () => new Array(2));
        this.twoDPoints = this.threeDPoints.map(point => {
            return [point.vectorizeX(), point.vectorizeY()];
        });
        this.centre = this.findCentre()
    }

    drawFace() { //this will either draw the face as an image or a square depending on the isImage boolean
        if (this.isImage) {
            // Apply the image as a texture.
            texture(this.image);
            textureMode(NORMAL);
            // Draw the face.
            // Use the image's width and height as uv coordinates.
            tint(255,255)
            strokeWeight(0) // removes z-fighting
            stroke(0,0,0,0)
            beginShape();
            vertex(this.twoDPoints[0][0], this.twoDPoints[0][1], 0, 0, 0);
            vertex(this.twoDPoints[1][0], this.twoDPoints[1][1], 0, 1, 0);
            vertex(this.twoDPoints[2][0], this.twoDPoints[2][1], 0, 1, 1);
            vertex(this.twoDPoints[3][0], this.twoDPoints[3][1], 0, 0, 1);
            endShape();
        } else {
            fill(this.colour);
            beginShape();
            vertex(this.twoDPoints[0][0], this.twoDPoints[0][1]);
            vertex(this.twoDPoints[1][0], this.twoDPoints[1][1]);
            vertex(this.twoDPoints[2][0], this.twoDPoints[2][1]);
            vertex(this.twoDPoints[3][0], this.twoDPoints[3][1]);
            endShape();
        }
    }

    findCentre() {
        let sumX = 0;
        let sumY = 0;
        let sumZ = 0;
        for (let i = 0; i < this.threeDPoints.length; i++) {
            sumX += this.threeDPoints[i].x;
            sumY += this.threeDPoints[i].y;
            sumZ += this.threeDPoints[i].z;
        }
        return new Point(sumX / 4, sumY / 4, sumZ / 4);
    }

    findMeanDist() {
        let sum = 0;
        for (let i = 0; i < this.threeDPoints.length; i++) {
            sum += this.threeDPoints[i].findDistanceFromCamera();
        }
        return sum / 4;
    }
}