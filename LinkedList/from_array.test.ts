import from_array from "./from_array"

describe("Linked List from_array operation", () => {

	// initialization
	it("Should produce a LinkedList from a JS array", () => {

		let head = from_array([1, 2, "3"])
		expect(head).toBeDefined()
		expect(head?.val).toBe(1)
		expect(head?.next?.val).toBe(2)
		expect(head?.next?.next?.val).toBe("3")
		expect(head?.next?.next?.next).not.toBeDefined()

	})

	it("Should not produce a Linked List", () => {

		let head = from_array([])
		expect(head).not.toBeDefined()

	})


	
})