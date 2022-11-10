/*
	Linked List in functional paradigm
*/
const LinkedList = () => {

	const self = {
		size: 0, 
		head: null, 
		tail: null
	}


	// checks if our list is empty
	self.isEmpty = () => self.head === null

	// adds a new node at the specified position
	// adds at Tail if index is note specified
	// adds at Tail if index is larger or equal to the list size
	// adds at Head if index <= 0
	self.addAt = (val, index) => {

		// default insertion position === tail
		index ??= self.size

		// new node
		let node = ListNode(val)

		if( self.isEmpty() ){
			self.tail = node
			self.head = node
		}else if(index <= 0){
			node.next = self.head 
			self.head = node
		} else{
			if( index >= self.size ){
				self.tail.next = node
				self.tail = node
			}else{
				let pos = 1
				let parent_node = self.head
				while(pos < index)
					parent_node = parent_node.next
				parent_node.next = ListNode(val, parent_node.next)
			}
		}

		self.size++
		return self

	}

	// adds at tail
	self.add = val => self.addAt(val)

	const _remove = (val, onlyOnce=true) => {

		// node with val === head
		if(self.head.val === val){
			self.head = self.head.next
			self.size--
			return self
		}
		
		// finding the node
		// removing all nodes with current val
		let node = self.head 
		while(node !== null){
			
			while(node.next !== null && node.next.val === val){
				node.next = node.next.next
				self.size--
				if(onlyOnce)
					return self
			}
			node = node.next

		}

		// no change
		return self
	}

	// removes the first node with this value
	self.remove = val => _remove(val)
	self.removeAll = val => _remove(val, false)
	
	return self

}

const ListNode = (val=null, next=null) => ({ val, next })

export default LinkedList


/*
	Simple Test Module
*/
const test = () => {

	let ll = LinkedList()
	console.log(ll.size === 0 && ll.tail === null && ll.head === null)

	ll.add(10)
		.addAt(30, 1)
		.add(20)
		.add(30)
		.remove(30)
		.remove(10)
		.add(20)
		.add(20)
		.add(20)
		.add(20)
		.add(10)
		.addAt(20, 500)
		.removeAll(20)
	console.log(ll)


	let ll2 = LinkedList()
	ll2.addAt(10, 1)
	.addAt(20, 1)
	.addAt(30, 1)
	console.log(ll2)
}

test()