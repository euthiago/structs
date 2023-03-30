import Le from "../Comparators/Le"
import heap, { Heap, HeapOptions } from "./Heap"

export type MinHeap<T> = Heap<T>
export type MinHeapOptions<T> =  Omit<HeapOptions<T>, "comparator">

/**
 * MinHeap Data Structure
 * A Heap whose nodes have values smaller 
 * then their children's
 * Equivalent to Heap using Le comparator
 * @param {Array<T>} arr initial values to populate our Heap
 */
const minHeap = <T>(arr?:Array<T>, options?:MinHeapOptions<T> ):Heap<T> => 
	heap(arr, {comparator:Le, ...options})

export default minHeap