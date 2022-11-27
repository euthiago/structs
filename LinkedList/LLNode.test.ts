import LLNode from "./LLNode"

describe("Linked List Node", () => {

	// initialization
	let node:LLNode

	it("Should produce a LLNode", () => {

		node = LLNode()
		expect(node).not.toBeNull()
		expect(node.val).toBeNull()
		expect(node.next).toBeNull()

	})

})