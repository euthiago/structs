import Ge from "../Comparators/Ge"
import createHeap, { Heap, HeapOptions } from "./Heap"

export type MaxHeap<T> = Heap<T>
export type MaxHeapOptions<T> =  Omit<HeapOptions<T>, "comparator">

/**
 * MaxHeap Data Structure
 * A Heap whose nodes have values bigger 
 * then their children's
 * Equivalent to Heap using Ge comparator
 * @param {Array<T>} arr initial values to populate our Heap
 */

const createMaxHeap = <T>(arr?:Array<T>, options?:MaxHeapOptions<T> ):Heap<T> => 
	createHeap(arr, { comparator:Ge, ...options })

export default createMaxHeap