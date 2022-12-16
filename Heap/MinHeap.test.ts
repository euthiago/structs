import MinHeap from "./MinHeap"

describe("MinHeap", () => {

	let h:MinHeap<number>
	it("Creates a MinHeap", () => {

		h = MinHeap()
		expect(h.size).toBe(0)
		expect(h.add).toBeInstanceOf(Function)

	})


	it("A new MinHeapHeap can be created from an unsorted array", () => {
		h = MinHeap([10,5,2,3,11,4,20])
		expect(h.size).toBe(7)
		expect(h.peek(0)).toBe(2)
		expect(h.peek(1)).toBe(3)
		expect(h.peek(2)).toBe(4)
		expect(h.peek(3)).toBe(5)
		expect(h.peek(4)).toBe(11)
		expect(h.peek(5)).toBe(10)
		expect(h.peek(6)).toBe(20)
	})
	
	it("A new MinHeapHeap can be created from an unsorted array (2)", () => {
		h = MinHeap([0, 100, 50, 25, 10, 200, 12, 11, 10, 1000, 2000, 10, 10, ])
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

	it("to_sorted_array: Works on MinHeap", () => {
		let expected = [ 1,2,3,4,5 ]
		h = MinHeap([...expected].reverse())
		expect(h.size).toBe(expected.length);
		expect(h.to_sorted_array()).toEqual(expected);
		
	});
})
