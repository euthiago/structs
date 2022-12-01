import add from "./add"
import to_array from "./to_array"

describe("Linked List to_array operation", () => {

	// initialization
	let root = add(1)
	add(2, root)
	add(3, root)
	add(4, root)
	let cur = add(5, root, true)

	it("Should produce an array from our LinkedList values", () => {

		let arr = to_array(root)
		root = add(1)
		expect(arr).toEqual([1,2,3,4,5])

	})

	it("Should produce an array from the tail", () => {

		let arr = to_array(cur)
		expect(arr).toEqual([5])

	})


	
})