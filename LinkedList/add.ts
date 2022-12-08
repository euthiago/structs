import LinkedList from "./LinkedList"
import Node from "./LinkedListNode"

/**
 * Add Operation
 * Creates a new node at the lists tail
 * @param val value to be added
 * @returns {LinkedList}
*/
const add = <T>(ll:LinkedList<T>, val?:T):LinkedList<T> => {
	let node = Node(val)
	// no head
	if(!ll.head){
		ll.head = node
		ll.tail = node
	}else{
		// no tail should be unreachable, but ts cannot know it
		if(ll.tail)
			ll.tail.next = node
		ll.tail = node
	}
	return ll
}

export default add