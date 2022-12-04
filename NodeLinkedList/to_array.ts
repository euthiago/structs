import NodeLinkedList from "./NodeLinkedList"

/**
 * To Array Operation
 * Given a Linked List node,
 * get all values until its the tail is reached
 * and return them as a JS Array
 * @param node any node of a Linked List
 * @returns Array<any>
 */
const to_array = ( node:NodeLinkedList ):Array<any> => {
	let otp:Array<any> = []
	if(!node) return otp
	while(node){
		otp.push(node.val)
		if(!node.next) return otp
		node = node.next
	}
	return otp
}

export default to_array