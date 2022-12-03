import add from "./add"
import LinkedList from "./LinkedList"
import remove from "./remove"

describe("LinkedList Add operation", () => {

	// initialization
	let ll = LinkedList()

	it("Nothing happens removing an inexistent value form an empty list", () => {

		remove(ll, 1)
		expect(ll).toBeDefined()
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	it("Nothing happens removing an inexistent value form a populated list", () => {

		add(ll, 1)
		remove(ll, 2)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)
		expect(ll.tail?.next).not.toBeDefined()

	})

	it("Removes the only node from the list", () => {

		remove(ll, 1)
		expect(ll).toBeDefined()
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	it("Removes the tail node from a list", () => {

		add(ll, 1)
		add(ll, 2)
		remove(ll, 2)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)
		expect(ll.tail?.next).not.toBeDefined()

	})

	it("Removes the head node from a list", () => {

		add(ll, 2)
		remove(ll, 1)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(2)
		expect(ll.tail?.val).toBe(2)
		expect(ll.tail?.next).not.toBeDefined()

	})

	it("Removes a node in the middle of a list", () => {

		add(ll, 1)
		add(ll, 3)
		remove(ll, 1)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(2)
		expect(ll.tail?.val).toBe(3)
		expect(ll.tail?.next).not.toBeDefined()

	})

})