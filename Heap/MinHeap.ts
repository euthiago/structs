import Le from "../Comparators/Le"
import Heap from "./Heap"

type MinHeap<T> = Heap<T>

/**
 * MinHeap Data Structure
 * A Heap whose nodes have values smaller 
 * then their children's
 * Check Heap for more info
 * @param {Array<T>} arr initial values to populate our Heap
 */
const MinHeap = <T>(arr?:Array<T>):Heap<T> => 
	Heap(arr, Le)

export default MinHeap