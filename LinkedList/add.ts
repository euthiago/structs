import LLNode from "./LLNode"

/*
	Linked List Add operation
	If the node is not defined
	return a new LLNode
	otherwise, find the tail,
	adds the new LLNode to its next
	property and return the node
*/
const add = ( val?:any, node?:LLNode ):LLNode => {
	if(!node)
		return LLNode(val)
	let cur = node 
	while(cur.next !== null)
		cur = node
	cur.next = LLNode(val)
	return cur.next
}

export default add