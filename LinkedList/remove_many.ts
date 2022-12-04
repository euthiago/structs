import LinkedList from "./LinkedList"
import Node from "./Node"

/**
 * Remove Operation
 * Removes the first *n* nodes that have value 'val'
 * @param val value of the node to be remove
 * @param ammount the maximum number of nodes to be removed
 * @returns {LinkedList}
*/
const remove_many = <T>(ll:LinkedList<T>, val?:T, ammount:number=1):LinkedList<T> => {
	// no nodes to remove
	if(!ll.head || ammount < 1) return ll
	// using a dummy head, so head becomes
	// just another node
	let dummy 	= Node(undefined, ll.head)
	let prev 	= dummy 
	let cur 	= dummy.next
	while(ammount > 0 && cur){
		// if cur has value 'val', remove it
		if(cur && cur.val === val){
			// decrement ammount
			ammount--
			// removes the node
			prev.next = cur.next
			// if the node was the tail,
			// then prev becomes the tail
			// stops the ammount loop
			if(!prev.next){
				ll.tail = prev
				break
			}
			// for ammounts > 0
			// set cur to the next non checked node
			cur = prev.next
		}
		// get the next node with value === val
		while( ammount > 0 && cur && cur.val !== val ){
			prev	= cur
			cur 	= cur.next
		}
	}
	// moving back the head
	ll.head = dummy.next
	// if only one node, tail is that node
	// this scenario is reached when all nodes
	// have the same value and we remove them
	if(!ll.head?.next)
		ll.tail = ll.head
	// returns the LinkedList
	return ll
}

export default remove_many