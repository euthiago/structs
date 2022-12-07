import { Option } from "../SharedTypes/Option"

/**
 * Returns the number of elements in this Queue
 */
type Size = () => number 

/**
 * Returns, but does not remove, the front element
 */
type Front<T> = () => T

/**
 * Returns, but does not remove, the rear Elemment
 */
type Rear<T> = () => T

/**
 * Adds an element to the end of our Qeue
 * @param val The element to be added
 * @returns {Queue} the Queue
 */
type Enqueue<T> = (val:T) => Queue<T> 

/**
 * Removes an element from the front of the Queue
 * @returns {T} the dequeued element
 */
type Dequeue<T> = () => Option<T> 

/**
 * Returns an array listing all elements
 * present in the Queue in order
 * @returns {T[]} Array containing the elements of this Queue
 */
 type ToArray<T> = () => T[]

/**
 * A First In First Out Queue
 */
type Queue<T> = {
	front: Front<T>,
	rear: Rear<T>,
	size: Size,
	enqueue: Enqueue<T>
	dequeue: Dequeue<T>
	to_array: ToArray<T>
}

const Queue = <T>():Queue<T> => {

	const data 	= Array<T>()
	let idx_f  	= 0
	let idx_r	= 0

	const size 	= () => idx_r-idx_f
	const front = () => data[idx_f]
	const rear	= () => data[idx_r-1]

	const enqueue = (val:T):Queue<T> => {
		data[idx_r] = val
		idx_r++
		return returnQueue()
	} 

	const dequeue = ():Option<T> => {
		let el:Option<T>
		if(idx_f < idx_r){
			el = data[idx_f] as Option<T>
			delete data[idx_f]
			idx_f++
		}
		return el
	}

	const to_array = ():T[] => 
		data.slice(0)
	
	const from_array = ():T[] => 
		data.slice(0)
	
	const returnQueue = ():Queue<T> => ({
		size,
		front,
		rear,
		enqueue,
		dequeue,
		to_array
	})

	return returnQueue()

}


export default Queue