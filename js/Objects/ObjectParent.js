class ObjectParent {
    constructor(passive) {
        this.passive = passive;
    }

    // rotates the object about the origin
    rotateAboutO(threeDPoints, theta, axis) {
        switch (axis) {
            case 'x':
                for (let i = 0; i < threeDPoints.length; i++) {
                    threeDPoints[i].rotateAboutX(threeDPoints[i], theta);
                }
            case 'y':
                for (let i = 0; i < threeDPoints.length; i++) {
                    threeDPoints[i].rotateAboutY(threeDPoints[i], theta);
                }
            case 'z':
                for (let i = 0; i < threeDPoints.length; i++) {
                    threeDPoints[i].rotateAboutZ(threeDPoints[i], theta);
                }
        }
    }

    //rotates the object about a point
    rotateAboutPoint(threeDPoints, theta, axis, point) {
        for (let i = 0; i < threeDPoints.length; i++) {
            threeDpoints[i].x -= point.x;
            threeDpoints[i].y -= point.y;
            threeDpoints[i].z -= point.z;
        }
        this.rotateAboutO(threeDPoints, theta, axis);
        for (let i = 0; i < threeDPoints.length; i++) {
            threeDpoints[i].x += point.x;
            threeDpoints[i].y += point.y;
            threeDpoints[i].z += point.z;
        }
    }
    // finds the centre of mass of the object
    centreOfMass(threeDPoints) {
        let x = 0;
        let y = 0;
        let z = 0;
        for (let i = 0; i < threeDPoints.length; i++) {
            x += threeDPoints[i].x;
            y += threeDPoints[i].y;
            z += threeDPoints[i].z;
        }
        x /= threeDPoints.length;
        y /= threeDPoints.length;
        z /= threeDPoints.length;
        return new Point(x, y, z);
    }
}