import NodeLinkedList from "./NodeLinkedList"

describe("Linked List Node", () => {

	// initialization
	let node:NodeLinkedList

	it("Should produce a NodeLinkedList with undefined val and next", () => {

		node = NodeLinkedList()
		expect(node).not.toBeUndefined()
		expect(node.val).toBeUndefined()
		expect(node.next).toBeUndefined()

	})

	it("Should produce a NodeLinkedList with defined val", () => {

		node = NodeLinkedList(1)
		expect(node).not.toBeUndefined()
		expect(node.val).toBe(1)
		expect(node.next).toBeUndefined()

	})

	it("Should produce a NodeLinkedList with defined next", () => {

		node = NodeLinkedList(undefined, node)
		expect(node).not.toBeUndefined()
		expect(node.val).toBeUndefined()
		expect(node.next).toBeDefined()
		expect(node.next?.next).not.toBeDefined()
		expect(node.next?.val).toBe(1)

	})

	it("Should produce a NodeLinkedList with val and next node", () => {

		node = NodeLinkedList(2, node)
		expect(node).not.toBeUndefined()
		expect(node.val).toBe(2)
		expect(node.next).toBeDefined()
		expect(node.next?.val).toBe(undefined)

	})

})