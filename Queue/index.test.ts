import queue, { Queue } from "."

describe("Linked List", () => {

	let q:Queue<number> = queue()
		
	it("Should produce a Queue", () => {

		expect(q.size).toBeInstanceOf(Function)
		expect(q.front).toBeInstanceOf(Function)
		expect(q.rear).toBeInstanceOf(Function)
		expect(q.enqueue).toBeInstanceOf(Function)
		expect(q.dequeue).toBeInstanceOf(Function)

		expect(q.size()).toBe(0)
		expect(q.front()).toBe(undefined)
		expect(q.front()).toBe(undefined)

	})

	it("enqueue: Adds an element", () => {

		q.enqueue(1)
		expect(q.size()).toBe(1)
		expect(q.front()).toBe(1)
		expect(q.rear()).toBe(1)
		
	})

	it("enqueue: Adds a second element", () => {

		q.enqueue(2)
		expect(q.size()).toBe(2)
		expect(q.front()).toBe(1)
		expect(q.rear()).toBe(2)
		
	})

	it("toArray: Creates an Array containing all elements of the Queue", () => {

		let a = q.toArray()
		expect(a.length).toBe(2)
		expect(a[0]).toBe(1)
		expect(a[1]).toBe(2)
		
	})

	it("dequeue: Removes an element", () => {

		expect(q.dequeue()).toBe(1)
		expect(q.size()).toBe(1)
		expect(q.front()).toBe(2)
		expect(q.rear()).toBe(2)
		
	})

	it("isEmpty: Non empty Queue isEmpty() should return false", () => {

		expect(q.isEmpty()).toBe(false)
		
	})

	it("dequeue: Removes the last element", () => {

		expect(q.dequeue()).toBe(2)
		expect(q.size()).toBe(0)
		expect(q.front()).toBe(undefined)
		expect(q.rear()).toBe(undefined)
		
	})
	
	it("isEmpty: Empty Queue isEmpty() should return true", () => {

		expect(q.isEmpty())
		
	})

	it("dequeue: Attempt to remove from empty list", () => {

		expect(q.dequeue()).toBe(undefined)
		expect(q.size()).toBe(0)
		expect(q.front()).toBe(undefined)
		expect(q.rear()).toBe(undefined)
		
	})

	it("Creates a list from an Array", () => {

		let arr = [1,2,3]
		let q = queue(arr)
		expect(q.size()).toBe(3)
		expect(q.front()).toBe(1)
		expect(q.rear()).toBe(3)
		
	})

})