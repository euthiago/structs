/**
 * A LinkedList Node
 */
export type Node<T> = {
	val?:T,
	next?:Node<T>
}

/**
 * A Node for our LinkedList
 * @param val Value the Node will hold
 * @param next The next node in our LinkedList
 * @returns {Node}
 */
const Node = <T>(val?:T, next?:Node<T>):Node<T> => 
	({ val, next, })

export default Node