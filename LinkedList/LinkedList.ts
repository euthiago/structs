import { Node } from "./Node"

/**
 * A LinkedList 
 */
type LinkedList<T> = {
	head?: Node<T>,
	tail?: Node<T>
}

/**
 * LinkedList 
 * This implementation has an internal reference to its
 * tail, allowing constant time insertions.
 * Removing nodes from head also happens in constant time,
 * unless you want to remove all occurrences, of course,
 * This makes this structure ideal for simple First In First Out (FIFO)
 * applications, such as simple Queues. 
 * 
 * Why not just use an Array?
 * Array unshifting and shifting time cost potentially scales with the 
 * array length and that makes them not the greatest for FIFO operations
 * 
 * @returns {LinkedList}
 * 
 */
const LinkedList = <T>():LinkedList<T> => 
({
	head: undefined,
	tail: undefined,
})

export default LinkedList