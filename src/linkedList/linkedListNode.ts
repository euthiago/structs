
/**
 * A LinkedList Node
 */
export type LinkedListNode<T> = {
	/**
	 * The value this current node is holding
	 */
	val?: T,
	/**
	 * The next Node on our list
	 */
	next?: LinkedListNode<T>
}

/**
 * A LinkedListNode for our LinkedList
 * @param val Value the LinkedListNode will hold
 * @param next The next LinkedListNode in our LinkedList
 */
const linkedListNode = <T>(val?:T, next?:LinkedListNode<T>):LinkedListNode<T> => ({
	val, next
})

export default linkedListNode