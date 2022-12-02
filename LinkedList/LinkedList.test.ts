import LinkedList from "./LinkedList"

describe("Linked List", () => {

	// initialization
	let ll:LinkedList

	it("Should produce a LinkedList", () => {

		ll = LinkedList()
		expect(ll).toBeDefined()
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()
		ll.add("test")
	})

	// it("Should produce a LLNode with defined val", () => {

	// 	node = LLNode(1)
	// 	expect(node).not.toBeUndefined()
	// 	expect(node.val).toBe(1)
	// 	expect(node.next).toBeUndefined()

	// })

	// it("Should produce a LLNode with defined next", () => {

	// 	node = LLNode(undefined, node)
	// 	expect(node).not.toBeUndefined()
	// 	expect(node.val).toBeUndefined()
	// 	expect(node.next).toBeDefined()
	// 	expect(node.next?.next).not.toBeDefined()
	// 	expect(node.next?.val).toBe(1)

	// })

	// it("Should produce a LLNode with val and next node", () => {

	// 	node = LLNode(2, node)
	// 	expect(node).not.toBeUndefined()
	// 	expect(node.val).toBe(2)
	// 	expect(node.next).toBeDefined()
	// 	expect(node.next?.val).toBe(undefined)

	// })

})