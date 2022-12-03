import LinkedList from "./LinkedList"
import Node from "./Node"

/**
 * Remove Operation
 * Removes the first node that has value val
 * @param val value of the node to be remove
 * @returns {LinkedList}
*/
const remove = <T>(ll:LinkedList<T>, val?:T):LinkedList<T> => {
	// no nodes to remove
	if(!ll.head) return ll
	// head has the value
	if(ll.head.val === val){
		// the new head
		ll.head = ll.head.next
		// checks if we need to update tail as well
		if(!ll.head || !ll.head.next)
			ll.tail = ll.head
	}else{
		// any other node could have the value,
		// we seek the first one
		let prev 	= ll.head
		let cur 	= ll.head.next 
		while(cur && cur.val !== val){
			prev	= cur
			cur 	= cur.next
		}
		console.log("aqui", prev, cur)
		// if a node with value 'val' was found, remove it
		if(cur && cur.val === val){
			prev.next = cur.next
			// if the node was is the tail,
			// then prev becomes the tail
			if(!prev.next)
				ll.tail = prev
		}
			
	}
	// returns the LinkedList
	return ll
}

export default remove