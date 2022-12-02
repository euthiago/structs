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
 * The classical way of representing a LinkedList
 * Some implementations of the LinkedList data structure
 * simpy mantain a node (that can point to other nodes)
 * as the Linked List itself. If you want this approach,
 * then LLNode is for you. For a richer representation
 * with support for constant time insertions, check out
 * our LinkedList implementation
 * 
 * @param val holds any arbitrary value
 * @param next the node that follows this one
 * @returns {LLNode}
 */
const LLNode = ( val?:any, next?:LLNode ):LLNode => 
	({ val, next })

export default LLNode