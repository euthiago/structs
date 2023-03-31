import { Comparator } from "../comparators/comparator"
import linkedList, { LinkedList } from "."

describe("Linked List", () => {

	let ll:LinkedList<number> 
	it("Should produce a LinkedList", () => {

		ll = linkedList<number>()
		expect(ll).toBeDefined()
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	it("add: Adding a node on an empty LinkedList", () => {

		ll.add(1)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)
		expect(ll.tail?.next).not.toBeDefined()
 
	})

	it("add: Adding a node on an populated LinkedList", () => {

		ll.add(2)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.head?.next).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(2)
		expect(ll.tail?.next).not.toBeDefined()

	})

	it("add: Adding a node again on an populated LinkedList", () => {

		ll.add(3)
		expect(ll).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.tail?.val).toBe(3)
		expect(ll.tail?.next).not.toBeDefined()

	})

	it("removeMany: Nothing happens if ammount is 0", () => {

		ll.removeMany(1, 0)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(3)

	})

	it("removeMany: Nothing happens if ammount is negative", () => {

		ll.removeMany(1, -1)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(3)

	})

	it("removeMany: Removes only one node", () => {

		ll.removeMany(1)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(2)
		expect(ll.tail?.val).toBe(3)

	})

	it("removeMany: Removes two nodes", () => {

		ll.add(2)
		ll.removeMany(2, 2)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(3)
		expect(ll.tail?.val).toBe(3)


	})

	it("removeMany: Removes one node even if ammount is greater then 1", () => {

		ll.removeMany(3, 2)
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	it("removeMany: Respects the custom comparator", () => {

		// greaterThen comparator
		// gotta account for undefined values as well
		const greaterThen:Comparator<number> = (a?:number, b?:number): boolean => 
			(a !== undefined && b !== undefined) && a > b
			
		ll.add(1)
		ll.add(3)
		// removes one itens greater then 1
		ll.removeMany(1, 1, greaterThen)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})

	it("remove: Removes only one node from the list", () => {

		ll.add(1)
		ll.add(1)
		ll.remove(1)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})
	
	it("remove: Does not remove a node if the custom comparator cannor match", () => {
		// greaterThen comparator
		// gotta account for undefined values as well
		const lessThen:Comparator<number> = (a?:number, b?:number): boolean => 
			(a !== undefined && b !== undefined) && a < b
			
		ll.remove(1, lessThen)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})
	
	it("removeAll: Removes all values in the middle of our list", () => {

		ll.add(1)
		ll.add(1)
		ll.add(1)
		ll.add(2)
		ll.add(2)
		ll.add(2)
		ll.add(3)
		ll.add(3)
		ll.add(3)
		ll.removeAll(2)
		expect(ll.tail?.val).toBe(3)
		expect(ll.head?.val).toBe(1)

	})

	it("removeAll: Removes all values from the end of the list", () => {

		ll.removeAll(3)
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})

	it("removeAll: Removes all values from the beginning of the list", () => {

		ll.removeAll(1)
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	it("removeAll: Works on empty lists", () => {

		ll.removeAll(2)
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	it("Chaining example", () => {

		const ll2 = linkedList<number>()
			.add(1)
			.add(2)
			.add(3)
			.add(4)
			.add(5)
			.remove(1)
			
		expect(ll2.tail?.val).toBe(5)
		expect(ll2.head?.val).toBe(2)

	})

	it("Immutability example", () => {

		const immut_ll = linkedList<number>({ immutable: true })
		const new_immut_ll = immut_ll.add(1)
		expect(immut_ll.head).not.toBeDefined()
		expect(immut_ll.tail).not.toBeDefined()
		expect(new_immut_ll.head?.val).toBe(1)
		expect(new_immut_ll.tail?.val).toBe(1)

	})

})