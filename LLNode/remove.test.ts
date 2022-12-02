import add from "./add"
import LLNode from "./LLNode"
import remove from "./remove"

describe("Linked List remove operation", () => {

	// initialization
	let root:LLNode = LLNode(1)

	it("Should return an undefined value", () => {
		let cur = remove(1, root)
		expect(cur).toBeUndefined()
	})

	it("Should remove the second node", () => {
		add(2, root)
		let cur = remove(2, root)
		expect(cur).toBeDefined()
		expect(cur?.next).not.toBeDefined() 
	})

	it("Should remove the second node and keep the third", () => {
		add(2, root)
		add(3, root)
		let cur = remove(2, root)
		expect(cur).toBeDefined()
		expect(cur?.next).toBeDefined() 
		expect(cur?.next?.val).toBe(3) 
	})

	it("Should remove the first node", () => {
		let cur = remove(1, root)
		expect(cur).toBeDefined()
		expect(cur?.next).not.toBeDefined() 
	})

})