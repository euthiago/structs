import LinkedList from "./LinkedList"

describe("Linked List", () => {

	it("Should produce a LinkedList", () => {

		let ll:LinkedList<number> = LinkedList()
		expect(ll).toBeDefined()
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

})