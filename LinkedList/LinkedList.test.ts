import LinkedList from "./LinkedList"

describe("Linked List", () => {

	let ll:LinkedList<number> 
	it("Should produce a LinkedList", () => {

		ll = LinkedList()
		expect(ll).toBeDefined()
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	it("add: Adding a node on an empty LinkedList", () => {

		ll = ll.add(1)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)
		expect(ll.tail?.next).not.toBeDefined()

	})

	it("add: Adding a node on an populated LinkedList", () => {

		ll = ll.add(2)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.head?.next).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(2)
		expect(ll.tail?.next).not.toBeDefined()

	})

	it("add: Adding a node again on an populated LinkedList", () => {

		ll = ll.add(3)
		expect(ll).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.tail?.val).toBe(3)
		expect(ll.tail?.next).not.toBeDefined()

	})

	it("remove_many: Nothing happens if ammount is 0", () => {

		ll = ll.remove_many(1, 0)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(3)

	})

	it("remove_many: Nothing happens if ammount is negative", () => {

		ll = ll.remove_many(1, -1)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(3)

	})

	it("remove_many: Removes only one node", () => {

		ll = ll.remove_many(1)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(2)
		expect(ll.tail?.val).toBe(3)

	})

	it("remove_many: Removes two nodes", () => {

		ll = ll.add(2)
		ll = ll.remove_many(2, 2)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(3)
		expect(ll.tail?.val).toBe(3)


	})

	it("remove_many: Removes one node even if ammount is greater then 1", () => {

		ll = ll.remove_many(3, 2)
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	// it("remove_many: Respects the custom comparator", () => {

	// 	// greaterThen comparator
	// 	// gotta account for undefined values as well
	// 	const greaterThen:Comparator<number> = (a?:number, b?:number): boolean => 
	// 		(a !== undefined && b !== undefined) && a > b
			
	// 	add(ll, 1)
	// 	add(ll, 3)
	// 	// removes one item greater then 1
	// 	remove_many(ll, 1, 1, greaterThen)
	// 	expect(ll).toBeDefined()
	// 	expect(ll.head).toBeDefined()
	// 	expect(ll.tail).toBeDefined()
	// 	expect(ll.head?.val).toBe(1)
	// 	expect(ll.tail?.val).toBe(1)

	// })
})