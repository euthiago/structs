import { Comparator } from "../Comparators/Comparator"
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

	it("remove_many: Respects the custom comparator", () => {

		// greaterThen comparator
		// gotta account for undefined values as well
		const greaterThen:Comparator<number> = (a?:number, b?:number): boolean => 
			(a !== undefined && b !== undefined) && a > b
			
		ll = ll.add(1)
		ll = ll.add(3)
		// removes one itens greater then 1
		ll = ll.remove_many(1, 1, greaterThen)
		expect(ll).toBeDefined()
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})

	it("remove: Removes only one node from the list", () => {

		ll = ll.add(1)
		ll = ll.add(1)
		ll = ll.remove(1)
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
			
		ll = ll.remove(1, lessThen)
		expect(ll.head).toBeDefined()
		expect(ll.tail).toBeDefined()
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})
	
	it("remove_all: Removes all values in the middle of our list", () => {

		ll = ll.add(1)
		ll = ll.add(1)
		ll = ll.add(1)
		ll = ll.add(2)
		ll = ll.add(2)
		ll = ll.add(2)
		ll = ll.add(3)
		ll = ll.add(3)
		ll = ll.add(3)
		ll = ll.remove_all(2)
		expect(ll.tail?.val).toBe(3)
		expect(ll.head?.val).toBe(1)

	})

	it("remove_all: Removes all values from the end of the list", () => {

		ll = ll.remove_all(3)
		expect(ll.head?.val).toBe(1)
		expect(ll.tail?.val).toBe(1)

	})

	it("remove_all: Removes all values from the beginning of the list", () => {

		ll = ll.remove_all(1)
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

	it("remove_all: Works on empty lists", () => {

		ll = ll.remove_all(2)
		expect(ll.head).not.toBeDefined()
		expect(ll.tail).not.toBeDefined()

	})

})