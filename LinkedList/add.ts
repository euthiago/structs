import LLNode from "./LLNode"
/**
 * Add Operation
 * Creates a new LLNode, if one is not passed
 * For faster insertion times, O(1), this
 * function can return the tail, otherwise,
 * returns the received LLNode 
 * @param val value to be added
 * @param node any node of a Linked List
 * @param returnsTail returns the tail LLNode after insertion
 * @returns LLNode
 */
const add = ( val?:any, node?:LLNode, returnsTail=false ):LLNode => {
	if(!node)
		return LLNode(val)
	let cur = node 
	while(cur.next)
		cur = cur.next
	cur.next = LLNode(val)
	return returnsTail ? cur.next : node
}

/**
 * Syntax sugar for add("val", node, true)
 * 
 * @param val value to be added
 * @param node any node of a Linked List
 * @returns LLNode (Tail of our Linked List)
 */
const add_and_get = (val?:any, node?:LLNode) =>
	add(val, node, true)

export default add
export { add_and_get }