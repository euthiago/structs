import { add_and_get } from "./add"
import NodeLinkedList from "./NodeLinkedList"

/**
 * We either receive a head node, or undefined
 * if array.length === 0
 */
type FromArrayResult = NodeLinkedList | undefined
/**
 * From Array Operation
 * Given a JS Array, build a LinkedList efficiently
 * @param arr any node of a LinkedList
 * @returns NodeLinkedList (head node)
 */
const from_array = ( arr:Array<any> ):FromArrayResult=> {
	let dummy_head = NodeLinkedList()
	let cur = dummy_head
	for(let val of arr)
		cur = add_and_get(val, cur)
	return dummy_head.next
}

export default from_array