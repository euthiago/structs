import add from "./add"
import LinkedList from "./LinkedList"
import remove_many from "./remove_many"

describe("LinkedList Add operation", () => {

	// initialization
	let ll = LinkedList()
	add(ll, 1)
	add(ll, 2)
	add(ll, 1)
	add(ll, 1)

	it("Nothing happens if ammount is 0", () => {

		remove_many(ll, 1, 0)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})

	it("Nothing happens if ammount is negative", () => {

		remove_many(ll, 1, -1)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})

	it("Removes only one node", () => {

		remove_many(ll, 1, 1)
		expect(ll.head).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.head?.val).toBe(2)

	})

	it("Removes two nodes", () => {

		remove_many(ll, 1, 2)
		expect(ll.tail?.val).toBe(2)

	})

	it("Removes one node even if ammount is greater then 1", () => {

		remove_many(ll, 2, 2)
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

})