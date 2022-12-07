import Queue from "./Queue"

describe("Linked List", () => {

	it("Should produce a Queue", () => {

		let ll:Queue<number> = Queue()
		expect(ll).toBeDefined()
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

})