import add from "./add"
import LinkedList from "./LinkedList"

describe("LinkedList Add operation", () => {

	// initialization
	let root = LinkedList()

	it("Adding a node on an empty LinkedList", () => {

		add(root, 1)
		expect(root).toBeDefined()
		expect(root.head).toBeDefined()
		expect(root.tail).toBeDefined()
		expect(root.head?.val).toBe(1)
		expect(root.tail?.val).toBe(1)
		expect(root.tail?.next).not.toBeDefined()

	})

	it("Adding a node on an populated LinkedList", () => {

		add(root, 2)
		expect(root).toBeDefined()
		expect(root.head).toBeDefined()
		expect(root.tail).toBeDefined()
		expect(root.head?.val).toBe(1)
		expect(root.tail?.val).toBe(2)
		expect(root.tail?.next).not.toBeDefined()

	})

	it("Adding a node again on an populated LinkedList", () => {

		add(root, 3)
		expect(root).toBeDefined()
		expect(root.tail).toBeDefined()
		expect(root.tail?.val).toBe(3)
		expect(root.tail?.next).not.toBeDefined()

	})

})