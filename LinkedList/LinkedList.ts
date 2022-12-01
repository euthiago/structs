import add from "./add"
import add_after from "./add_after"
import from_array from "./from_array"
import LLNode from "./LLNode"
import remove from "./remove"
import search from "./search"
import to_array from "./to_array"


type LinkedList = {
	head?: LLNode,
	tail?: LLNode,	
	add: Function,
	remove: Function,
	add_after: Function,
	to_array: Function,
	from_array: Function
	search: Function
}

/**
 * The Linked List Node is often used
 * as the whole data structure for Linked Lists
 * But sometimes we want more flexibility or 
 * extra features that can often be game changing
 * This structure in intended for those scenarios.
 * Quick access to the lists tail or operations 
 * chaining are some of the most common use cases.
 * @method add adds a node to the end of the list containing value 'val'
 * @method remove removes the first node containing the value
 * @method add_after searchs for a node and adds a new one after it
 * @method search searchs for a node with value 'val'
 * @method to_array converts the list to a JS array
 * @method from_array creates a LinkedList from a JS array
 */
const LinkedList = ():LinkedList => {

	const self = {
		head: undefined,
		tail: undefined,
	} as LinkedList
	
	self.add = (val?:any) => {
		let node:LLNode = add(val, self.tail)
		if(!self.head)
			self.head = node 
		self.tail = node
		return self
	}

	self.remove = (val?:any) =>  {
		remove(val, self.head)
		return self
	}

	self.add_after = (val:any, node:LLNode) => {
		add_after(val, node)
		return self
	}

	self.search = (val:any) => 
		self.head ? search(val, self.head) : undefined
	
	self.to_array = (): Array<any> => {
		if(!self.head) return []
		return to_array(self.head)
	}

	self.from_array = (arr:any[]): LinkedList => {
		self.head = from_array(arr)
		return self
	}

	return self

}