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

    findFaces() {
        this.vectorizeAll()
        let facesArr = Array.from({ length: 4 }, () => new Array(3));
        // face 1
        facesArr[0][0] = this.threeDPoints[0]
        facesArr[0][1] = this.threeDPoints[1]
        facesArr[0][2] = this.threeDPoints[2]
        // face 2
        facesArr[1][0] = this.threeDPoints[0]
        facesArr[1][1] = this.threeDPoints[1]
        facesArr[1][2] = this.threeDPoints[3]
        // face 3
        facesArr[2][0] = this.threeDPoints[0]
        facesArr[2][1] = this.threeDPoints[2]
        facesArr[2][2] = this.threeDPoints[3]
        // face 4
        facesArr[3][0] = this.threeDPoints[1]
        facesArr[3][1] = this.threeDPoints[2]
        facesArr[3][2] = this.threeDPoints[3]
        return facesArr;
    }
}