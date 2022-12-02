import LinkedList from "./LinkedList"
import Node from "./Node"

/**
 * Add Operation
 * Creates a new node at the lists tail
 * @param val value to be added
 * @returns {LinkedList}
*/
const add = <T>(ll:LinkedList<T>, val?:T):LinkedList<T> => {
	let node = Node(val)
	if(!ll.head) ll.head = node
	ll.tail = node
	return ll
}

export default add