/*
 * this is the class for the cuboid object, containing the 3D points of the cuboid, and the
 * 2D points of the cuboid, and the methods to translate between them.
 */

class Cuboid extends ObjectParent {
    threeDPoints = [];

    constructor(threeDPoints, passive, image, isImage, colour) {
        super(passive, image, isImage, colour);
        this.threeDPoints = threeDPoints;
        this.twoDPoints = [];
    }

    vectorizeAll() { // converts all 3D points to 2D points
       this.twoDPoints = this.threeDPoints.map(point => {
            return [point.vectorizeX(), point.vectorizeY()];
       });
    }

    pointToPoint() {
        // draw lines from 1 to 2, 4, 5
        line(this.twoDPoints[0][0], this.twoDPoints[0][1], this.twoDPoints[1][0], this.twoDPoints[1][1]);
        line(this.twoDPoints[0][0], this.twoDPoints[0][1], this.twoDPoints[3][0], this.twoDPoints[3][1]);
        line(this.twoDPoints[0][0], this.twoDPoints[0][1], this.twoDPoints[4][0], this.twoDPoints[4][1]);
        // draw lines from 3 to 2, 4, 7
        line(this.twoDPoints[2][0], this.twoDPoints[2][1], this.twoDPoints[1][0], this.twoDPoints[1][1]);
        line(this.twoDPoints[2][0], this.twoDPoints[2][1], this.twoDPoints[3][0], this.twoDPoints[3][1]);
        line(this.twoDPoints[2][0], this.twoDPoints[2][1], this.twoDPoints[6][0], this.twoDPoints[6][1]);
        // draw lines from 6 to 2, 5, 7
        line(this.twoDPoints[5][0], this.twoDPoints[5][1], this.twoDPoints[1][0], this.twoDPoints[1][1]);
        line(this.twoDPoints[5][0], this.twoDPoints[5][1], this.twoDPoints[4][0], this.twoDPoints[4][1]);
        line(this.twoDPoints[5][0], this.twoDPoints[5][1], this.twoDPoints[6][0], this.twoDPoints[6][1]);
        // draw lines from 8 to 4, 5, 7
        line(this.twoDPoints[7][0], this.twoDPoints[7][1], this.twoDPoints[3][0], this.twoDPoints[3][1]);
        line(this.twoDPoints[7][0], this.twoDPoints[7][1], this.twoDPoints[4][0], this.twoDPoints[4][1]);
        line(this.twoDPoints[7][0], this.twoDPoints[7][1], this.twoDPoints[6][0], this.twoDPoints[6][1]);
    }

    findFaces() {
        this.vectorizeAll()
        let facesArr = Array.from({ length: 6 }, () => new Array(4));
        // face 1
        facesArr[0][0] = this.threeDPoints[0]
        facesArr[0][1] = this.threeDPoints[1]
        facesArr[0][2] = this.threeDPoints[2]
        facesArr[0][3] = this.threeDPoints[3]
        // face 2
        facesArr[1][0] = this.threeDPoints[1]
        facesArr[1][1] = this.threeDPoints[5]
        facesArr[1][2] = this.threeDPoints[6]
        facesArr[1][3] = this.threeDPoints[2]
        // face 3
        facesArr[2][0] = this.threeDPoints[4]
        facesArr[2][1] = this.threeDPoints[5]
        facesArr[2][2] = this.threeDPoints[1]
        facesArr[2][3] = this.threeDPoints[0]
        // face 4
        facesArr[3][0] = this.threeDPoints[4]
        facesArr[3][1] = this.threeDPoints[0]
        facesArr[3][2] = this.threeDPoints[3]
        facesArr[3][3] = this.threeDPoints[7]
        // face 5
        facesArr[4][0] = this.threeDPoints[7]
        facesArr[4][1] = this.threeDPoints[6]
        facesArr[4][2] = this.threeDPoints[5]
        facesArr[4][3] = this.threeDPoints[4]
        // face 6
        facesArr[5][0] = this.threeDPoints[3]
        facesArr[5][1] = this.threeDPoints[2]
        facesArr[5][2] = this.threeDPoints[6]
        facesArr[5][3] = this.threeDPoints[7]
        // return array
        return facesArr;
    }
        
}