class Face {
    constructor(twoDPoints, threeDPoints, isImage, image, colour) {
        this.twoDPoints = twoDPoints;
        this.threeDPoints = threeDPoints;
        this.isImage = isImage;
        this.image = image;
        this.colour = colour;
    }

    drawFace() { //this will either draw the face as an image or a square depending on the isImage boolean
        if (this.isImage) {
            // Apply the image as a texture.
            texture(this.image);
            // Draw the face.
            // Use the image's width and height as uv coordinates.
            beginShape();
            vertex(this.twoDPoints[0,0], this.twoDPoints[0,1], 0, 0);
            vertex(this.twoDPoints[1,0], this.twoDPoints[1,1], this.image.width, 0);
            vertex(this.twoDPoints[2,0], this.twoDPoints[2,1], this.image.width, this.image.height);
            vertex(this.twoDPoints[3,0], this.twoDPoints[3,1], 0, this.image.height);
            endShape();
        } else {
            fill(this.colour);
            beginShape();
            vertex(this.twoDPoints[0,0], this.twoDPoints[0,1]);
            vertex(this.twoDPoints[1,0], this.twoDPoints[1,1]);
            vertex(this.twoDPoints[2,0], this.twoDPoints[2,1]);
            vertex(this.twoDPoints[3,0], this.twoDPoints[3,1]);
            endShape(CLOSE);
        }
    }
}