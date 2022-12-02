import LLNode from "./LLNode"
import add_after from "./add_after"
import add from "./add"

describe("Linked List add_after operation", () => {

	// initialization
	let root:LLNode
	let node:LLNode

	it("Should add a node after head", () => {

		root = add(1)
		node = add_after(2, root)
		expect(node).toBeDefined()
		expect(node.val).toBe(2)
		expect(root.next).toBeDefined()
		expect(root.next?.val).toBe(2)

	})

	it("Should add a node after the chosen node", () => {

		let new_node = add_after(3, node)
		expect(new_node).toBeDefined()
		expect(new_node.val).toBe(3)
		expect(node.next).toBeDefined()
		expect(node.next?.val).toBe(3)

	})
	it("Should add a node after the chosen node again", () => {

		let new_node = add_after(4, node)
		expect(new_node).toBeDefined()
		expect(new_node.val).toBe(4)
		expect(node.next).toBeDefined()
		expect(node.next?.val).toBe(4)
		expect(node.next?.next?.val).toBe(3)

	})

})