import Ge from "../Comparators/Ge"
import Heap from "./Heap"

type MaxHeap<T> = Heap<T>

/**
 * MaxHeap Data Structure
 * A Heap whose nodes have values bigger 
 * then their children's
 * Equivalent to Heap using Ge comparator
 * @param {Array<T>} arr initial values to populate our Heap
 */
const MaxHeap = <T>(arr?:Array<T>):Heap<T> => 
	Heap(arr, Ge)

export default MaxHeap