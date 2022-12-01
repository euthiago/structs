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
 * This is the classical node that is often used
 * as the Linked List data structure itself
 * Following this module, we also have a compreensive
 * list of operations for what Linked List Nodes
 * are used for, such as add, remove and search
 * 
 * @param val holds any arbitrary value
 * @param next the node that follows this one
 * @returns LLNode
 */
const LLNode = ( val?:any, next?:LLNode ):LLNode => 
	({ val, next })

export default LLNode