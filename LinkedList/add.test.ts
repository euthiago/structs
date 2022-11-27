import add from "./add"
import LLNode from "./LLNode"

describe("Linked List add operation", () => {

	// initialization
	let root:LLNode
	let cur:LLNode

	it("Should produce a LLNode with val 1", () => {

		root = add(1)
		expect(root).not.toBeNull()
		expect(root.val).toBe(1)
		expect(root.next).toBeNull()

	})

	it("Should create a node at tail with value 2", () => {

		cur = add(2, root)
		expect(cur).not.toBeNull()
		expect(root).not.toBeNull()
		expect(cur.val).toBe(2)
		expect(root.val).toBe(1) 
		expect(root.next).toEqual(cur) 
		expect(cur.next).toBeNull()

	})

	it("Should create a node at tail with value 3 using the tail as reference", () => {

		let prev = cur
		cur = add(3, cur)
		expect(cur).not.toBeNull()
		expect(cur.val).toBe(3)
		expect(cur.next).toBeNull()
		expect(prev.next).toEqual(cur)

	})
	
})