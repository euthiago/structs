import { Comparator } from "../Comparators/Comparator"
import Le from "../Comparators/Le"


export type Heap<T> = {
	/**
	 * Total number of nodes of this Heap
	 */
	size: number

	/**
	 * Inserts an element in our Heap
	 * @param {T} val the value to be inserted in our Heap
	 * @returns {Heap<T>} the Heap
	 */
	add: (val:T) => Heap<T>

	/**
	 * Shows the first element in our Heap
	 * Does not remove it from the Heap
	 * You may choose to peek at another index, 
	 * other then the first (0)
	 * Might be undefined if size is 0 or
	 * the chosen index is larger then the size 
	 * @param {number} index choose another index to peek into (defaults to zero)
	 * @returns {Option<T>} value of the first element
	 */
	peek: (index?:number) => T | undefined

	/**
	 * Shows the value in the Heaps front
	 * keeping the Heap valid afterwards
	 * @param {T} val the value of the node we wish to remove 
	 * @returns {Heap<T>} the new Heap after the node removal
	 */
	remove: (val:T) => Heap<T>

	/**
	 * Returns the Heap after removing its front element
	 * IMPORTANT: To maintain scope isolation and chainability
	 * this returns the new Heap instead of the extracted value
	 * You can access the front value using peek()
	 * @returns {Heap<T>} the Heap
	 */
	extract: () => Heap<T>

	/**
	 * Returns the Heap as an Array
	 */
	toArray: () => Array<T>

	/**
	 *  Returns the Heap as a Sorted Array
	 *  in O(n*log(n)) time
	 */
	toSortedArray: () => Array<T>
	// __TODO__ peek multiple?
	// __TODO__ remove multiple?
	// __TODO__ pop?
	// __TODO__ peekLast?

}

/**
 * Heap Options
 */
export type HeapOptions<T> = {
	/**
	 * The comparator function. 
	 * Defaults to Less Than or Equals.
	 */
	comparator?: Comparator<T>,
	/**
	 * Internal props become immutable
	 * EX: const h = heap<number>()	// h.size === 0
	 * const i = h.add(1) // h.size === 0 && i.size === 1
	 * 
	 */
	immutable?: boolean
}

/**
 * Creates a Heap Data Structure
 * A complete binary tree that satisfies the Heap Invariant
 * Tipically, the Heap Invatiant, or heap property, is satisfied
 * if all children nodes have smaller keys then their parents,
 * or all children nodes have larger keys then their parents.
 * Respectively, those form MaxHeaps and MinHeaps.
 * This particular Heap implementation allows custom comparators.
 * **Less Then or Equals** is used for MinHeap
 * **Greater Then or Equals** is used for MaxHeap
 * Should you find another useful comparator for type T,
 * you might create your own custom Heap easily by passing
 * as the second argument
 * @param {Array<T>} arr initial values to populate our Heap
 * @param {Comparator<T>} comparator By default Less Then or Equals is used. Making this a MinHeap
 */
const heap = <T>(arr?:Array<T>, options?:HeapOptions<T> ):Heap<T> => {

	const { comparator=Le, immutable=false } = options || {}

	// initialize with a copy of an array or a new array of T
	// IMPORTANT: non empty arrays will trigger a heapifyDown
	// before the return of this building call
	let instance: Heap<T> | undefined
	let data = arr ? [...arr] : Array<T>()
	let size = data.length

	/**
	 * Swaps two heap nodes by their index
	 * in the data array
	 */
	const swap = (a:number, b:number) =>{
		const t = data[a]
		data[a] = data[b]
		data[b] = t
	}

	/**
	 * From the last node and moving up
	 * the Heap until we reach our root
	 * node, checks if the heap property
	 * is valid between the current node
	 * and its parent node, otherwise swap 
	 * them and keep moving up
	 */
	const heapifyUp = () => {
		// last node
		let idx = data.length-1
		// until idx reaches 0
		while(idx > 0){
			// the parent index of idx
			let p_idx = parentIndexOf(idx)
			// checks if the heap property holds
			// and stops the loop if so
			if(comparator(data[p_idx], data[idx])) 
				break
			// swap the values and keep heapifying up
			swap(idx, p_idx)
			idx = p_idx
		}
	}

	/**
	 * From the root node and moving down
	 * the Heap checks if the heap property
	 * is valid between the current node
	 * and its children, otherwise swap them
	 * and keep moving down
	 */
	const heapifyDown = (from:number=0) => {

		// temp indexes stack
		let nodes = Array
			.from({ length:Math.floor(size/2) })
			.map((_, idx) => idx)
			.filter( idx => idx >= from )

		// while we have indexes to validate the heap property
		while(nodes.length > 0){
			// next node index in our temp stack
			let idx = nodes.pop()
			if(idx !== undefined){
				// left and right children index (expected)
				let lc_idx = leftChildIndexOf(idx)
				let rc_idx = rightChildIndexOf(idx)
				// expect idx to be holding the heap property until
				// we find children that break the heap property
				let best_heap_value = idx
				// if left child index is not out of bounds
				// and checks if the heap property is valid
				if(lc_idx < data.length && !comparator(data[best_heap_value], data[lc_idx])){
					best_heap_value = lc_idx
				}
				// does the same for the right child
				// checks if the heap property is valid
				if(rc_idx < data.length && !comparator(data[best_heap_value], data[rc_idx])){
					best_heap_value = rc_idx
				}
				// swaps idx with the best heap value if not already
				// makes sure best_heap_value also gets heapified
				//
				// __IMPORTANT/TODO__
				// not 100% sure if thats the must efficient way of
				// heapifying an array for any given comparator...
				if(best_heap_value !== idx){
					swap(idx, best_heap_value)
					nodes.push(best_heap_value)
				}
				
			}
		}

	}

	/**
	 * Given a nodes index in our data array
	 * returs the index of its parent node
	 * @param {number} idx the current node index
	 * @returns {number} the index of its parent node
	 */
	const parentIndexOf = (idx:number):number => Math.floor((idx-1)/2)
	/**
	 * Given a nodes index in our data array
	 * returs the index of its left child node
	 * @param {number} idx the current node index
	 * @returns {number} the index of its left child node
	 */
	const leftChildIndexOf = (idx:number):number => idx*2+1
	/**
	 * Given a nodes index in our data array
	 * returs the index of its right child node
	 * @param {number} idx the current node index
	 * @returns {number} the index of its right child node
	 */
	const rightChildIndexOf = (idx:number):number => idx*2+2

	/**
	 * Seeks for the index of the node containing a value **val**
	 * @param {T} val We search the index of the node containing this value
	 * @returns {number} the index of the node or -1 
	 */
	const seekIndex = (val:T):number => data.indexOf(val)

	const add = (val:T) => {
		// Adds the node to the end of our heap
		// which is located at the end of our
		// data array as well
		data.push(val)
		// heapify up
		heapifyUp()
		// increments the size
		size++
		// returns the valid Heap
		return returnHeap()
	}

	const peek = (index:number=0) => data[index]

	// To remove a node in our Heap,
	// find its index, swap it with the
	// last index and heapify up
	const _removeByIndex = (index:number=0):Heap<T> => {

		// idx might be -1 if no node had that value
		if(index > -1){
			// if only one node remains, then just remove it
			if(size === 1){
				size = 0
				data = Array<T>()
				return returnHeap()
			}
			// node is the last element
			if(index === size-1){
				data.pop()
			}else{
				// swap the values
				swap(index, size-1)
				// removes the element
				data.pop()
				// heapify up
				heapifyDown()
			}
			// decrease the size
			size--
		}

		// returns the new Heap
		return returnHeap()

	}

	const remove = (val:T)  => 
		_removeByIndex(seekIndex(val))

	const extract = ()  =>
		_removeByIndex()
	

	// if we initilized with a non empty array
	// heapify down to build our first valid Heap
	if(size > 0) heapifyDown()

	const toArray = () => [...data]

	// there might be faster ways
	// of producing this sorted
	// array, either using native sort
	// or checking the node values one
	// by one for O(n) in time
	const toSortedArray = () => {

		let otp = Array<T>()
		while(size > 0){
			otp.push(peek())
			extract()
		}
		return otp

	}

	const returnHeap = ():Heap<T> => {
	
		// first usage and immutability support
		if( !instance || immutable ) {

			instance = {
				size,
				add,
				peek,
				remove,
				extract,
				toArray,
				toSortedArray,
			}

			return instance

		}

		// mutable override
		instance.size = size

		return instance
		
	}

	return returnHeap()

}


export default heap