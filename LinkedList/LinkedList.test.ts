import LinkedList from "./LinkedList"

describe("Linked List", () => {

	let ll:LinkedList<number> 
	it("Should produce a LinkedList", () => {

		ll = LinkedList()
		expect(ll).toBeDefined()
		expect(ll.head()).not.toBeDefined()
		expect(ll.tail()).not.toBeDefined()

	})

	it("Adding a node on an empty LinkedList", () => {

		ll.add(1)
		expect(ll).toBeDefined()
		expect(ll.head()).toBeDefined()
		expect(ll.tail()).toBeDefined()
		expect(ll.head()?.val()).toBe(1)
		expect(ll.tail()?.val()).toBe(1)
		expect(ll.tail()?.next()).not.toBeDefined()

	})

	it("Adding a node on an populated LinkedList", () => {

		ll.add(2)
		expect(ll).toBeDefined()
		expect(ll.head()).toBeDefined()
		expect(ll.tail()).toBeDefined()
		expect(ll.head()?.val()).toBe(1)
		expect(ll.tail()?.val()).toBe(2)
		expect(ll.tail()?.next()).not.toBeDefined()

	})

	it("Adding a node again on an populated LinkedList", () => {

		ll.add(3)
		expect(ll).toBeDefined()
		expect(ll.tail()).toBeDefined()
		expect(ll.tail()?.val()).toBe(3)
		expect(ll.tail()?.next()).not.toBeDefined()

	})
})