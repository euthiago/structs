import { Primitive } from "../sharedTypes/primitive"

/**
 * Guard that checks if something is Primitive
 * @param maybePrimitive what we are checking if it is Primitive
 * @returns {boolean}
 */
const isPrimitive = (maybePrimitive:unknown): maybePrimitive is Primitive =>
	['bigint', 'number', 'string', 'null', 'undefined', 'boolean', 'symbol'].includes(typeof maybePrimitive)

export default isPrimitive