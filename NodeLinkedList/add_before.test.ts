import NodeLinkedList from "./NodeLinkedList"
import add from "./add"
import add_before from "./add_before"

describe("Linked List add_before operation", () => {

	// initialization
	let root:NodeLinkedList
	let node:NodeLinkedList

	it("Should add a node before root", () => {

		root = add(1)
		node = add_before(2, root)
		expect(node).toBeDefined()
		expect(node.val).toBe(2)
		expect(node.next).toBeDefined()
		expect(node.next?.val).toBe(1)

	})

	it("Should add a node before 'node'", () => {

		let new_node = add_before(3, node)
		expect(new_node).toBeDefined()
		expect(new_node.val).toBe(3)
		expect(new_node.next).toBeDefined()
		expect(new_node.next?.val).toBe(2)

	})

})