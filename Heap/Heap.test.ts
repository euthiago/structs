import Heap from "./Heap"

describe("Heap", () => {

	let h:Heap<number>
	it("Creates a Heap", () => {

		h = Heap()
		expect(h.size).toBe(0)
		expect(h.add).toBeInstanceOf(Function)

	})

	it("peek: Peeking empty Heap should return undefined", () => {
		expect(h.peek()).toBeUndefined()
	})
	

	it("add: Inserts an element", () => {
		let old = h
		h = h.add(5)
		expect(h.size).toBe(1)
		expect(old.size).toBe(0)
	})
	
	it("peek: Shows the first element, but does not remove it", () => {
		expect(h.peek()).toBe(5)
		expect(h.size).toBe(1)
	})
	
	it("add: Inserts two elements respecting the  default heap invariation (min heap)", () => {
		h = h.add(4)
		h = h.add(10)
		expect(h.size).toBe(3)
	})

	it("peek: Peeks deeper then the front element", () => {
		expect(h.peek(0)).toBe(4)
		expect(h.peek(1)).toBe(5)
		expect(h.peek(2)).toBe(10)
	})

	it("remove: Removes an element from the end of the Heap", () => {
		h = h.remove(10)
		expect(h.size).toBe(2)
		expect(h.peek(0)).toBe(4)
		expect(h.peek(1)).toBe(5)
		expect(h.peek(2)).toBe(undefined)
	})

	it("remove: Removes an element from the front of the Heap", () => {
		h = h.remove(4)
		expect(h.size).toBe(1)
		expect(h.peek(0)).toBe(5)
	})

	it("A new Heap can be created from an unsorted array", () => {
		h = Heap([10,5,2,3,11,4,20])
		expect(h.size).toBe(7)
		expect(h.peek(0)).toBe(2)
		expect(h.peek(1)).toBe(3)
		expect(h.peek(2)).toBe(4)
		expect(h.peek(3)).toBe(5)
		expect(h.peek(4)).toBe(11)
		expect(h.peek(5)).toBe(10)
		expect(h.peek(6)).toBe(20)
	})
	
	it("A new Heap can be created from an unsorted array (2)", () => {
		h = Heap([0, 100, 50, 25, 10, 200, 12, 11, 10, 1000, 2000, 10, 10, ])
		expect(h.size).toBe(13)
		expect(h.peek(0)).toBe(0)
		expect(h.peek(1)).toBe(10)
		expect(h.peek(2)).toBe(10)
		expect(h.peek(3)).toBe(11)
		expect(h.peek(4)).toBe(10)
		expect(h.peek(5)).toBe(10)
		expect(h.peek(6)).toBe(12)
		expect(h.peek(7)).toBe(100)
		expect(h.peek(8)).toBe(25)
		expect(h.peek(9)).toBe(1000)
		expect(h.peek(10)).toBe(2000)
		expect(h.peek(11)).toBe(200)
		expect(h.peek(12)).toBe(50)
	})
	

	it("to_array: Returns the Heap as an Array", () => {
		h = Heap([0, 100, 50, 25, 10, 200, 12, 11, 10, 1000, 2000, 10, 10, ])
		let expected = [
			0,   10,   10,  11,
		   10,   10,   12, 100,
		   25, 1000, 2000, 200,
		   50
		 ]
		expect(h.to_array()).toEqual(expected)
	})
	
	it("extract: Extracts a value from the Heap", () => {
		let expected = [
			10,   10,   10,  11,
			50,   10,   12, 100,
			25, 1000, 2000, 200
		  ]
		h = h.extract();
		expect(h.size).toBe(12);
		expect(h.to_array()).toEqual(expected);
	});

});
