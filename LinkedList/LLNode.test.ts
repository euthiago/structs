import LLNode from "./LLNode"

describe("Linked List Node", () => {

	// initialization
	let node:LLNode

	it("Should produce a LLNode with undefined val and next", () => {

		node = LLNode()
		expect(node).not.toBeUndefined()
		expect(node.val).toBeUndefined()
		expect(node.next).toBeUndefined()

	})

	it("Should produce a LLNode with defined val", () => {

		node = LLNode(1)
		expect(node).not.toBeUndefined()
		expect(node.val).toBe(1)
		expect(node.next).toBeUndefined()

	})

	it("Should produce a LLNode with defined next", () => {

		node = LLNode(undefined, node)
		expect(node).not.toBeUndefined()
		expect(node.val).toBeUndefined()
		expect(node.next).toBeDefined()
		expect(node.next?.next).not.toBeDefined()
		expect(node.next?.val).toBe(1)

	})

	it("Should produce a LLNode with val and next node", () => {

		node = LLNode(2, node)
		expect(node).not.toBeUndefined()
		expect(node.val).toBe(2)
		expect(node.next).toBeDefined()
		expect(node.next?.val).toBe(undefined)

	})

})