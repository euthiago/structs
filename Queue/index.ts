
export type Queue<T> = {
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
	isEmpty: () => boolean,
	/**
	* Adds an element to the end of our Queue
	* @param val The element to be added
	* @returns {Queue} the Queue
	*/
	enqueue: (val:T) => Queue<T>,
	/**
	 * Removes an element from the front of the Queue
	 */
	dequeue: () => T | undefined,
	/**
	 * Returns an array listing all elements
	 * present in the Queue in order
	 */
	toArray: () => T[],
}
/**
 * A First In First Out data structure
 * @param arr optional list of elements to populate the Queue
 */
const queue = <T>(arr?:T[]):Queue<T> => {

	// support for array initialization
	const data 	= arr ? arr.slice() : Array<T>()
	let idx_f  	= 0
	let idx_r	= data.length

	const size 		= () => idx_r-idx_f
	const isEmpty 	= () => idx_r === idx_f
	const front 	= () => data[idx_f]
	const rear		= () => data[idx_r-1]

	const enqueue = (val:T):Queue<T> => {
		data[idx_r] = val
		idx_r++
		return returnQueue()
	} 

	const dequeue = ():T | undefined => {
		let el:T | undefined
		if(idx_f < idx_r){
			el = data[idx_f]
			delete data[idx_f]
			idx_f++
		}
		return el
	}

	const toArray = ():T[] => 
		data.slice(0)
	
	const returnQueue = ():Queue<T> => ({
		size,
		isEmpty,
		front,
		rear,
		enqueue,
		dequeue,
		toArray
	})

	return returnQueue()

}

export default queue