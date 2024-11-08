class Face {
    constructor(threeDPoints, isImage, image, colour) {
        this.threeDPoints = threeDPoints;
        this.isImage = isImage;
        this.image = image;
        this.colour = colour;
        this.twoDPoints = this.threeDPoints.map(point => {
            return [point.vectorizeX(), point.vectorizeY()]
        })
    }

    drawFace() { //this will either draw the face as an image or a square depending on the isImage boolean
        if (this.isImage) {
            // Apply the image as a texture.
            texture(this.image);
            textureMode(NORMAL);
            // Draw the face.
            // Use the image's width and height as uv coordinates.
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
}