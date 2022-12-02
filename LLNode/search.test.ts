import add from "./add"
import search from "./search"

describe("Linked List search operation", () => {

	it("Should find the head node", () => {

		let root = add(1)
		let res = search(1, root)
		expect(res).toBeDefined()
		expect(res?.val).toBe(1)

	})

	it("Should not find the head node", () => {

		let root = add(1)
		let res = search(2, root)
		expect(res).not.toBeDefined()

	})

	it("Should not find the tail node", () => {

		let root = add(1)
		add(2, root)
		let res = search(2, root)
		expect(res).toBeDefined()
		expect(res?.val).toBe(2)

	})

	it("Should not find the root node if searching from tail", () => {

		let root = add(1)
		let tail = add(2, root, true)
		let res = search(1, tail)
		expect(res).not.toBeDefined()

	})
	
})