/**
 * Calculates the dot product of two 2D vectors
 * @param v1 
 * @param v2 
 * @returns scalar
 */
function dotProduct2D(v1: vector2D, v2: vector2D): scalar {
    return v1.x * v2.x + v1.y + v2.y;
}

/**
 * Calculates the vector addition of two 2D vectors
 * @param v1 
 * @param v2 
 * @returns vector2D
 */
function vectorAdd2D(v1: vector2D, v2: vector2D): vector2D {
    return { x: v1.x + v2.x, y: v1.y + v2.y }
}