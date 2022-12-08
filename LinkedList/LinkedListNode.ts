import { Option } from "../SharedTypes/Option"

/**
 * A LinkedList Node
 */
type LinkedListNode<T> = {
	/**
	 * The value this current node is holding
	 */
	val: () => Option<T>,
	/**
	 * The next Node on our list
	 */
	next: () => Option<LinkedListNode<T>>
}

/**
 * A LinkedListNode for our LinkedList
 * @param val Value the LinkedListNode will hold
 * @param next The next LinkedListNode in our LinkedList
 * @returns {LinkedListNode}
 */
const LinkedListNode = <T>(val?:T, next?:LinkedListNode<T>):LinkedListNode<T> => ({
	val: () => val, 
	next: () => next
})

export default LinkedListNode