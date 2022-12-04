import NodeLinkedList from "./NodeLinkedList"
/**
 * Add Operation
 * Creates a new NodeLinkedList, if one is not passed
 * For faster insertion times, O(1), this
 * function can return the tail, otherwise,
 * returns the received NodeLinkedList 
 * @param val value to be added
 * @param node any node of a Linked List
 * @param returnsTail returns the tail NodeLinkedList after insertion
 * @returns NodeLinkedList
 */
const add = ( val?:any, node?:NodeLinkedList, returnsTail=false ):NodeLinkedList => {
	if(!node)
		return NodeLinkedList(val)
	let cur = node 
	while(cur.next)
		cur = cur.next
	cur.next = NodeLinkedList(val)
	return returnsTail ? cur.next : node
}

/**
 * Syntax sugar for add("val", node, true)
 * 
 * @param val value to be added
 * @param node any node of a Linked List
 * @returns NodeLinkedList (Tail of our Linked List)
 */
const add_and_get = (val?:any, node?:NodeLinkedList) =>
	add(val, node, true)

export default add
export { add_and_get }