import add from "./add"
import LinkedList from "./LinkedList"
import remove_all from "./remove_all"

describe("LinkedList Add operation", () => {

	// initialization
	let empty_ll = LinkedList()

	let ll = LinkedList()
	add(ll, 1)
	add(ll, 2)
	add(ll, 2)
	add(ll, 2)
	add(ll, 3)

	let ll2 = LinkedList()
	add(ll2, 1)
	add(ll2, 1)
	add(ll2, 1)
	add(ll2, 2)
	add(ll2, 2)
	add(ll2, 2)
	add(ll2, 3)
	add(ll2, 3)
	add(ll2, 3)

	it("Nothing happens if list is empty", () => {

		remove_all(empty_ll, 1)
		expect(empty_ll.head).not.toBeDefined()
		expect(empty_ll.tail).not.toBeDefined()

	})

	it("Removes all values in the middle of our list", () => {

		remove_all(ll, 2)
		expect(ll.tail?.val).toBe(3)
		expect(ll.head?.val).toBe(1)
		expect(ll.head?.next?.val).toBe(3)

	})

	it("Removes all values from the end of the list 2", () => {

		remove_all(ll2, 3)
		expect(ll2.head?.val).toBe(1)
		expect(ll2.tail?.val).toBe(2)

	})

	it("Removes all values from the beginning of the list 2", () => {

		remove_all(ll2, 1)
		expect(ll2.head?.val).toBe(2)
		expect(ll2.tail?.val).toBe(2)

	})

	it("Empty list 2 from removing the remaining equal values", () => {

		remove_all(ll2, 2)
		expect(ll2.head).not.toBeDefined()
		expect(ll2.tail).not.toBeDefined()

	})

})