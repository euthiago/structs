import { Option } from "../SharedTypes/Option"


type Queue<T> = {
	/**
	* Returns, but does not remove, the front element
	*/
	front: () => T,
	/**
	* Returns, but does not remove, the rear Elemment
	*/
	rear: () => T,
	/**
	* Returns the number of elements in this Queue
	*/
	size: () => number,
	/**
	* Checks whether the Queue is empty or not
	*/
	is_empty: () => boolean,
	/**
	* Adds an element to the end of our Queue
	* @param val The element to be added
	* @returns {Queue} the Queue
	*/
	enqueue: (val:T) => Queue<T>,
	/**
	 * Removes an element from the front of the Queue
	 * @returns {Option<T>} the element or undefined, if empty
	 */
	dequeue: () => Option<T>,
	/**
	 * Returns an array listing all elements
	 * present in the Queue in order
	 * @returns {T[]} Array containing the elements of this Queue
	 */
	to_array: () => T[],
}
/**
 * A First In First Out data structure
 * @param arr optional list of elements to populate the Queue
 * @returns {Queue} the newly created Queue
 */
const Queue = <T>(arr?:T[]):Queue<T> => {

	// support for array initialization
	const data 	= arr ? arr.slice() : Array<T>()
	let idx_f  	= 0
	let idx_r	= data.length

	const size 		= () => idx_r-idx_f
	const is_empty 	= () => idx_r === idx_f
	const front 	= () => data[idx_f]
	const rear		= () => data[idx_r-1]

	const enqueue = (val:T):Queue<T> => {
		data[idx_r] = val
		idx_r++
		return returnQueue()
	} 

	const dequeue = ():Option<T> => {
		let el:Option<T>
		if(idx_f < idx_r){
			el = data[idx_f]
			delete data[idx_f]
			idx_f++
		}
		return el
	}

	const to_array = ():T[] => 
		data.slice(0)
	
	const returnQueue = ():Queue<T> => ({
		size,
		is_empty,
		front,
		rear,
		enqueue,
		dequeue,
		to_array
	})

	return returnQueue()

}

/**
 * Created a Queue from an Array
 * First element of the Array will
 * be the first element of the Queue
 * @param arr The input array
 * @returns {Queue} a new Queue
 */
Queue.fromArray = <T>(arr?:T[]):Queue<T> => Queue(arr)

export default Queue