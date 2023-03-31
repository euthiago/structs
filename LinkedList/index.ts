import { Comparator } from "../Comparators/Comparator"
import Eq from "../Comparators/Eq"
import linkedListNode, { LinkedListNode } from "./linkedListNode"

/**
 * A LinkedList 
 */
export type LinkedList<T> = {
	/**
	 * Reads first node of our list
	 */
	head?: LinkedListNode<T>,
	/**
	 * Reads the node of our list
	 */
	tail?: LinkedListNode<T>,
	/**
	 * Add Operation
	 * Creates a new node at the lists tail
	 * @param {T} val a value the new Node will hold
	*/
	add: (val?:T) => LinkedList<T>,
	/**
	 * Remove Many Operation
	 * Efficient way of removing many nodes from the list.
	 * Can be used with a Custom Comparator 
	 * to remove elements that match an arbitrary condition
	 * @param {T} val value of the nodes to be removed
	 * @param {number} ammount the maximum number of nodes to be removed (defaults to 1)
	 * @param {Comparator} comparator Function that accepts a value of a node and returns true if it is to be removed
	*/
	removeMany: (val?:T, ammount?:number, comparator?:Comparator<T>) => LinkedList<T>,
	/**
	 * Remove Operation
	 * Removes the first node holding value 'val'
	 * You may choose a custom comparator if Equality
	 * is not what you need to choose which node to remove
	 * @param {T} val value of the node to be removed
	 * @param {Comparator} comparator  Function that accepts a value of a node and returns true if it is to be removed
	*/
	remove: (val?:T, comparator?:Comparator<T>) => LinkedList<T>,
	/**
	 * Remove All Operation
	 * Removes all nodes that have value val
	 * You may choose a custom comparator if Equality
	 * is not what you need to choose which nodes to remove
	 * @param {T} val value of the nodes to be removed
	 * @param {Comparator} comparator  Function that accepts a value of a node and returns true if it is to be removed
	*/
	removeAll: (val?:T, comparator?:Comparator<T>) => LinkedList<T>,
}

/**
 * LinkedList options
 * 
 */
export type LinkedListOptions = {
	/**
	 * Makes this structure immutable
	 * 
	 * Notice the difference:
	 * const ll = LinkedList<number>()
	 * ll.add(1) // ll.head === 1
	 *
	 * const ll_immut = LinkedList<number>(true)
	 * const ll2 = ll.add(1) // ll.head === undefined && ll2.head === 1
	 * 
	 * @default false
	 */
	immutable?: boolean
}

/**
 *  LinkedList 
 * This implementation has an internal reference to its
 * tail, allowing constant time insertions.
 * Removing nodes from head also happens in constant time,
 * unless you want to remove all occurrences, of course,
 * This makes this structure useful for simple First In First Out (FIFO)
 * applications, such as simple Queue-like usages.
 */
const linkedList = <T>(options?:LinkedListOptions):LinkedList<T> => {

	// default values
	const { immutable=false } = options || {}

	let instance:LinkedList<T> | undefined
	let head:LinkedListNode<T> | undefined
	let tail:LinkedListNode<T> | undefined

	const add = (val?:T):LinkedList<T> => {
		
		let node = linkedListNode(val)
		if(!head){
			head = node
			tail = node
		}else{
			if(tail) tail.next = node
			tail = node
		}
		return returnLinkedList()
	
	}

	const removeMany = (val?:T, ammount:number=1, comparator:Comparator<T>=Eq):LinkedList<T> => {

		// no nodes to remove
		if(!head || ammount < 1) return returnLinkedList()

		// using a dummy head, so head becomes
		// just another node
		let dummy 	= linkedListNode(undefined, head)
		let prev 	= dummy 
		let cur 	= dummy.next
		while(ammount > 0 && cur){
			
			// if cur has value 'val', remove it
			if(cur && comparator(cur.val, val)){
				// decrement ammount
				ammount--
				// removes the node
				prev.next = cur.next
				// if the node was the tail,
				// then prev becomes the tail
				// stops the ammount loop
				if(!prev.next){
					tail = prev
					break
				}
				// for ammounts > 0
				// set cur to the next non checked node
				cur = prev.next
			}
			// get the next node with value === val
			while( ammount > 0 && cur && !comparator(cur.val, val) ){
				prev	= cur
				cur 	= cur.next
			}
		}
		// moving back the head
		head = dummy.next
		// if only one node, tail is that node
		// this scenario is reached when all nodes
		// have the same value and we remove them
		if(!head?.next)
			tail = head
		// returns the LinkedList
		return returnLinkedList()
	}

	const remove = (val?:T, comparator?:Comparator<T>):LinkedList<T> => 
		removeMany(val, 1, comparator)

	const removeAll = (val?:T, comparator?:Comparator<T>):LinkedList<T> => 
		removeMany(val, Number.POSITIVE_INFINITY, comparator)
	
	/**
	 * Returns the LinkedList
	 * either mutably or immutably
	 */
	const returnLinkedList = ():LinkedList<T> => {
		
		/**
		 * First time returning and immutability support
		 */
		if( !instance || immutable ){
			// new assignment
			instance = {
				head,
				tail,
				add,
				remove,
				removeAll,
				removeMany
			}
			return instance
		}

		instance.head = head
		instance.tail = tail

		return instance
	
	}

	return returnLinkedList()
}

export default linkedList