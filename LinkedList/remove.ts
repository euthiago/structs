import LLNode from "./LLNode"

/*
	Linked List Remove operation
	From a given node, seeks the
	a node with the passed val and 
	remove it

	__IMPORTAT__
	Since setting node to undefined wont 
	mutate its value outside the function,
	for this version we should assign the
	return of this function to a new var:
	let result = remove( 'someval', someNode )
*/
type RemoveResult = LLNode | undefined

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
		// ensure we have cur.next
		if(!cur.next) break
		// set cur to cur.next
		cur = cur.next
	}
	// returns from the same point we entered
	return dummy.next

}

export default remove