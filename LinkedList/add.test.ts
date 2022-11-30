import LLNode from "./LLNode"
import add from "./add"

describe("Linked List add operation", () => {

	// initialization
	let root:LLNode
	let cur:LLNode

	it("Should produce a LLNode with val 1", () => {

		root = add(1)
		expect(root).not.toBeUndefined()
		expect(root.val).toBe(1)
		expect(root.next).toBeUndefined()

	})

	it("Should create a node at tail with value 2", () => {

		cur = add(2, root)
		expect(cur).not.toBeUndefined()
		expect(root).not.toBeUndefined()
		expect(cur.val).toBe(2)
		expect(root.val).toBe(1)
		expect(root.next).toEqual(cur) 
		expect(cur.next).toBeUndefined()

	})

	it("Should create a node at tail with value 3 using the tail as reference", () => {

		let prev = cur
		cur = add(3, cur)
		expect(cur).not.toBeUndefined()
		expect(cur.val).toBe(3)
		expect(cur.next).toBeUndefined()
		expect(prev.next).toEqual(cur)

	})
	
})