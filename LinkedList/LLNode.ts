/**
 * Our Linked List Node structure
 * @property 
 * @property next 
 */
type LLNode = {
	val?: any,
	next?: LLNode
}

/**
 * Our Linked List Node data structure
 * All operations happen based on this signature
 * Instead of bloating the prototype or properties
 * of the resulting object, this approach allows
 * you to choose which operations to add, thus making
 * the final bundle as minimal as possible
 * If you want to add and remove nodes, include just
 * the operations you need on demand
 * 
 * @param val holds any arbitrary value
 * @param next the node that follows this one
 * @returns LLNode
 */
const LLNode = ( val?:any, next?:LLNode ):LLNode => 
	({ val, next })

export default LLNode