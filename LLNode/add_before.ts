import LLNode from "./LLNode"

/**
 * Add Before Operation
 * Creates a new LLNode and make 'node'
 * its 'next' value
 * @param val value to be added
 * @param node any node of a Linked List
 * @returns LLNode the new node added
 */
const add_before = ( val:any, node:LLNode ):LLNode => 
	LLNode(val, node)

export default add_before