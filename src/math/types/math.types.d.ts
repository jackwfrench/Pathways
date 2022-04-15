/**
 * A negative of positive value
 */
type scalar = number;

/**
 * A 2D point in cartesian coordinates
 */
type point2D = {
    x: scalar,
    y: scalar
}

/**
 * A 3D point in cartesian coordinates
 */
type point3D = point2D & { z: scalar };

/**
 * A two dimensional vector represented with x (the first dimension) and y (the second dimension)
 */
type vector2D = {
    x: scalar;
    y: scalar;
};

/**
 * A three dimensional vector represented with x (the first dimension), y (the second dimension)
 * and z (the third dimension)
 */
type vector3D = vector2D & { z: scalar };

/**
 * A 2 dimensional shape represented by an array of points
 */
type shape2D = {
    points: Array<point2D>;
}

/**
 * A 2 dimensional line represented by some point add some vector
 */
type vectorLine2D = {
    point: point2D,
    vector: vector2D
}