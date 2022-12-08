import { Comparator } from "../Comparators/Comparator"
import Eq from "../Comparators/Eq"
import { Option } from "../SharedTypes/Option"
import LinkedListNode from "./LinkedListNode"

/**
 * A LinkedList 
 */
type LinkedList<T> = {
	/**
	 * Reads first node of our list
	 */
	head: Option<LinkedListNode<T>>,
	/**
	 * Reads the node of our list
	 */
	tail: Option<LinkedListNode<T>>,
	/**
	 * Add Operation
	 * Creates a new node at the lists tail
	 * @param {T} val a value the new Node will hold
	 * @returns {LinkedList} the LinkedList
	*/
	add: (val?:T) => LinkedList<T>,
	/**
	 * Remove Many Operation
	 * Efficient way of removing many nodes from the list.
	 * Can be used with a Custom Comparator 
	 * to remove elements that match an arbitrary condition
	 * @param {T} val value of the node to be removed
	 * @param {number} ammount the maximum number of nodes to be removed (defaults to 1)
	 * @param {Comparator} comparator Function that accepts a value of a node and returns true if it is to be removed
	 * @returns {LinkedList} returns the LinkedList
	*/
	remove_many: (val?:T, ammount?:number, comparator?:Comparator<T>) => LinkedList<T>,
}


/**
 * LinkedList 
 * This implementation has an internal reference to its
 * tail, allowing constant time insertions.
 * Removing nodes from head also happens in constant time,
 * unless you want to remove all occurrences, of course,
 * This makes this structure useful for simple First In First Out (FIFO)
 * applications, such as simple Queue-like usages.
 * @returns {LinkedList}
 * 
 */
const LinkedList = <T>():LinkedList<T> => {

	let head:Option<LinkedListNode<T>>
	let tail:Option<LinkedListNode<T>>

	const add = (val?:T):LinkedList<T> => {
		
		let node = LinkedListNode(val)
		if(!head){
			head = node
			tail = node
		}else{
			if(tail) tail.next = node
			tail = node
		}
		return returnLinkedList()
	
	}

	const remove_many = (val?:T, ammount:number=1, comparator:Comparator<T>=Eq):LinkedList<T> => {

		// no nodes to remove
		if(!head || ammount < 1) return returnLinkedList()

		// using a dummy head, so head becomes
		// just another node
		let dummy 	= LinkedListNode(undefined, head)
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

	const returnLinkedList = () => ({
		head,
		tail,
		add,
		remove_many,
	})
	
	return returnLinkedList()
}

export default LinkedList