/*
 * This is the class for the point object. It contains the 3D coordinates of the point, as well as
 * the 2D coordinates of the point. It also contains procedures for translating the 3D point to 2D,
 * rotating the point, and translating the point.
 */

class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 0;
        this.h = 0;
    }

    // functions for translating the 3D point to 2D
    vectorizeX() {
        this.w = this.x*(400/(600-this.z));
        return this.w;
    }

    vectorizeY() {
        this.h = -this.y*(400/(600-this.z));
        return this.h;
    }

    // procedures for rotating the point
    rotateX(theta) {
        theta = theta*Math.PI/180;
        let tempY = (this.y * Math.cos(theta)) - (this.z * Math.sin(theta));
        let tempZ = (this.y * Math.sin(theta)) + (this.z * Math.cos(theta));
        this.y = tempY;
        this.z = tempZ;
    }

    rotateY(theta) {
        theta = theta*Math.PI/180;
        let tempX = (this.x * Math.cos(theta)) + (this.z * Math.sin(theta));
        let tempZ = (-this.x * Math.sin(theta)) + (this.z * Math.cos(theta));
        this.x = tempX;
        this.z = tempZ;
    }

    rotateZ(theta) {
        theta = theta*Math.PI/180;
        let tempX = (this.x * Math.cos(theta)) - (this.y * Math.sin(theta));
        let tempY = (this.x * Math.sin(theta)) + (this.y * Math.cos(theta));
        this.x = tempX;
        this.y = tempY;
    }

    // procedures for translating points
    translate(dx, dy, dz) {
        this.x += dx;
        this.y += dy;
        this.z += dz;
    }

    findDistanceFromCamera() {
        let xDist = this.x - 0;
        let yDist = this.y - 0;
        let zDist = this.z - 600;
        let Dist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2) + Math.pow(zDist, 2));
        return Dist;
    }
}