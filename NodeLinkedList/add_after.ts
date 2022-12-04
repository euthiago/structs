import NodeLinkedList from "./NodeLinkedList"

/**
 * Add After Operation
 * Given a value and a node
 * Adds a new node after the current node
 * If current node was not the tail,
 * the subsequent nodes are moved after the new node
 * @param val value to be added
 * @param node any node of a Linked List
 * @returns NodeLinkedList the new node added
 */
const add_after = ( val:any, node:NodeLinkedList ):NodeLinkedList => {
	let { next } = node 
	node.next = NodeLinkedList(val, next)
	return node.next
}

export default add_after