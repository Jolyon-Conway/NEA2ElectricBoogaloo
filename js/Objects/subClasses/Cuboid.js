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
        let facesArr = [];
        // face 1
        facesArr[0][0] = this.twoDPoints[0]
        facesArr[0][1] = this.twoDPoints[1]
        facesArr[0][2] = this.twoDPoints[2]
        facesArr[0][3] = this.twoDPoints[3]
        // face 2
        facesArr[1][0] = this.twoDPoints[1]
        facesArr[1][1] = this.twoDPoints[5]
        facesArr[1][2] = this.twoDPoints[6]
        facesArr[1][3] =  this.twoDPoints[2]
        // face 3
        facesArr[2][0] = this.twoDPoints[0]
        facesArr[2][1] = this.twoDPoints[1]
        facesArr[2][2] = this.twoDPoints[4]
        facesArr[2][3] = this.twoDPoints[5]
        // face 4
        facesArr[3][0] = this.twoDPoints[0]
        facesArr[3][1] = this.twoDPoints[5], this.twoDPoints[7], this.twoDPoints[3]
        // face 5
        facesArr[4] = [this.twoDPoints[4], this.twoDPoints[5], this.twoDPoints[6], this.twoDPoints[7]];
        // face 6
        facesArr[5] = [this.twoDPoints[3], this.twoDPoints[8], this.twoDPoints[6], this.twoDPoints[2]];
        console.log(facesArr)
        // return array
        return facesArr;
    }
        
}