import LLNode from "./LLNode"
import add, { add_and_get } from "./add"

describe("LLNode add operation", () => {

	// initialization
	let root:LLNode
	let cur:LLNode

	it("Should produce a LLNode with val 1", () => {

		root = add(1)
		expect(root).toBeDefined()
		expect(root.val).toBe(1)
		expect(root.next).toBeUndefined()

	})

	it("Should create a node at tail with value 2", () => {

		cur = add(2, root, true)
		expect(cur).toBeDefined()
		expect(root).toBeDefined()
		expect(cur.val).toBe(2)
		expect(root.val).toBe(1)
		expect(root.next).toEqual(cur)
		expect(cur.next).toBeUndefined()

	})

	it("Should create a node at tail with value 3 using the tail as reference", () => {

		let prev = cur
		cur = add(3, cur, true)
		expect(cur).toBeDefined()
		expect(cur.val).toBe(3)
		expect(cur.next).toBeUndefined()
		expect(prev.next).toEqual(cur)

	})
	
	it("Using add_and_get sugar should return the tail", () => {

		let tail = add_and_get(4, root)
		expect(tail).toBeDefined()
		expect(tail.val).toBe(4)
		expect(tail.next).toBeUndefined()

	})
	
})