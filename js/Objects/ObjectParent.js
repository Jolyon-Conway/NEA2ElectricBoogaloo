/*
 * this is the parent class for all shapes in the simulation
 */

class ObjectParent {
    constructor(passive, image, isImage, colour) {
        this.passive = passive;
        this.image = image;
        this.isImage = isImage;
        this.colour = colour;
    }

    // rotates the object about the origin
    rotateAboutO(theta, axis) {
        switch (axis) {
            case 'x':
                for (let i = 0; i < this.threeDPoints.length; i++) {
                    this.threeDPoints[i].rotateX(theta)
                }
                break
            case 'y':
                for (let i = 0; i < this.threeDPoints.length; i++) {
                    this.threeDPoints[i].rotateY(theta);
                }
                break
            case 'z':
                for (let i = 0; i < this.threeDPoints.length; i++) {
                    this.threeDPoints[i].rotateZ(theta);
                }
                break
        }
    }

    //rotates the object about a point
    rotateAboutPoint(theta, axis, point) {
        for (let i = 0; i < this.threeDPoints.length; i++) {
            this.threeDPoints[i].x -= point.x;
            this.threeDPoints[i].y -= point.y;
            this.threeDPoints[i].z -= point.z;
        }
        this.rotateAboutO(theta, axis);
        for (let i = 0; i < this.threeDPoints.length; i++) {
            this.threeDPoints[i].x += point.x;
            this.threeDPoints[i].y += point.y;
            this.threeDPoints[i].z += point.z;
        }
    }
    // finds the centre of mass of the object
    centreOfMass() {
        let x = 0;
        let y = 0;
        let z = 0;
        for (let i = 0; i < this.threeDPoints.length; i++) {
            x += this.threeDPoints[i].x;
            y += this.threeDPoints[i].y;
            z += this.threeDPoints[i].z;
        }
        x /= this.threeDPoints.length;
        y /= this.threeDPoints.length;
        z /= this.threeDPoints.length;
        return new Point(x, y, z);
    }
}