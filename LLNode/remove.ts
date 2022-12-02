import LLNode from "./LLNode"

/**
 * remove function either returns a LLNode or undefined
 */
type RemoveResult = LLNode | undefined

/**
 * Seeks a node containing value 'val' and removes it
 * from the Linked List
 * Returns either undefined (if the list is now empty)
 * or the head
 * 
 * IMPORTANT: we can't mutate the head to undefined from
 * within the function, so it's recommended to assign
 * the result of this function to a var like so:
 * let list = remove("some_value", old_list)
 * In this exemple, if old_list were just a single head node,
 * the value of var 'old_list' would still be the same, but
 * var 'list' would correctly be undefined
 * If old_list had two nodes, then its new value would properly
 * contain only one node if we found a node holding value 'some_value'
 * 
 * @param val 
 * @param node 
 * @returns RemoveResult
 */
const remove = ( val?:any, node?:LLNode ):RemoveResult => {
	// no node, returns the undefined variant
	if(!node) return
	// we need a dummy head, specially in case
	// the removed value belongs to the first node
	let dummy = LLNode(undefined, node)
	// the current node
	let cur = dummy 
	// seek the node holding the val we want to remove
	while( cur.next ){
		if(cur.next?.val === val){
			cur.next = cur.next?.next
			break
		}
		// set cur to cur.next
		cur = cur.next
	}
	// returns from the same point we entered
	return dummy.next

}

export default remove