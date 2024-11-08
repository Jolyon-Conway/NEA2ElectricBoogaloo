class Pyramid extends ObjectParent {
    threeDPoints = [];

    constructor(threeDPoints, passive, image, isImage, colour) {
        super(passive);
        super(image);
        super(isImage);
        super(colour);
        this.threeDPoints = threeDPoints;
        this.twoDPoints = [];
    }

    vectorizeAll() { // converts all 3D points to 2D points
        this.twoDPoints = this.threeDPoints.map(point => {
            return [point.vectorizeX(), point.vectorizeY()];
        });
    }

    pointToPoint() {
        // draw lines from 1 to 2, 3, 4
        line(this.twoDPoints[0][0], this.twoDPoints[0][1], this.twoDPoints[1][0], this.twoDPoints[1][1]);
        line(this.twoDPoints[0][0], this.twoDPoints[0][1], this.twoDPoints[2][0], this.twoDPoints[2][1]);
        line(this.twoDPoints[0][0], this.twoDPoints[0][1], this.twoDPoints[3][0], this.twoDPoints[3][1]);
        // draw lines from 2 to 3 and 4
        line(this.twoDPoints[1][0], this.twoDPoints[1][1], this.twoDPoints[2][0], this.twoDPoints[2][1]);
        line(this.twoDPoints[1][0], this.twoDPoints[1][1], this.twoDPoints[3][0], this.twoDPoints[3][1]);
        // draw line from 3 to 4
        line(this.twoDPoints[2][0], this.twoDPoints[2][1], this.twoDPoints[3][0], this.twoDPoints[3][1]);
    }
}