// import add from "../LLNode/add"
// import add_after from "../LLNode/add_after"
// import from_array from "../LLNode/from_array"
// import LLNode from "../LLNode/LLNode"
// import remove from "../LLNode/remove"
// import search from "../LLNode/search"
// import to_array from "../LLNode/to_array"

import { Node } from "./Node"

/**
 * A LinkedList 
 */
type LinkedList<T> = {
	head?: Node<T>,
	tail?: Node<T>,
}

/**
 * LinkedList 
 * This implementation offers access to both head and tail
 * Insertions will happen in constant time
 * @returns {LinkedList}
 */
const LinkedList = <T>():LinkedList<T> => 
({
	head: undefined,
	tail: undefined,
})

export default LinkedList