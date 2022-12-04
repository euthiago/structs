import NodeLinkedList from "./NodeLinkedList"

/**
 * Add Before Operation
 * Creates a new NodeLinkedList and make 'node'
 * its 'next' value
 * @param val value to be added
 * @param node any node of a Linked List
 * @returns NodeLinkedList the new node added
 */
const add_before = ( val:any, node:NodeLinkedList ):NodeLinkedList => 
	NodeLinkedList(val, node)

export default add_before