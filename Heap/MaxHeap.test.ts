import createMaxHeap, { MaxHeap } from "./MaxHeap"

describe("MaxHeap", () => {

	let h:MaxHeap<number>
	it("Creates a MaxHeap", () => {

		h = createMaxHeap()
		expect(h.size).toBe(0)
		expect(h.add).toBeInstanceOf(Function)

	})


	it("A new MaxHeapHeap can be created from an unsorted array", () => {
		h = createMaxHeap([10,5,2,3,11,4,20])
		expect(h.size).toBe(7)
		expect(h.peek(0)).toBe(20)
		expect(h.peek(1)).toBe(11)
		expect(h.peek(2)).toBe(10)
		expect(h.peek(3)).toBe(3)
		expect(h.peek(4)).toBe(5)
		expect(h.peek(5)).toBe(4)
		expect(h.peek(6)).toBe(2)
	})
	it("A new MaxHeapHeap can be created from an unsorted array (2)", () => {
		h = createMaxHeap([0, 100, 50, 25, 10, 200, 12, 11, 10, 1000, 2000, 10, 10, ])
		expect(h.size).toBe(13)
		expect(h.peek(0)).toBe(2000)
		expect(h.peek(1)).toBe(1000)
		expect(h.peek(2)).toBe(200)
		expect(h.peek(3)).toBe(25)
		expect(h.peek(4)).toBe(100)
		expect(h.peek(5)).toBe(50)
		expect(h.peek(6)).toBe(12)
		expect(h.peek(7)).toBe(11)
		expect(h.peek(8)).toBe(10)
		expect(h.peek(9)).toBe(0)
		expect(h.peek(10)).toBe(10)
		expect(h.peek(11)).toBe(10)
		expect(h.peek(12)).toBe(10)
	})


	it("toSortedArray: Works on MaxHeap", () => {
		let expected = [ 5, 4, 3, 2, 1 ]
		h = createMaxHeap([...expected].reverse())
		expect(h.size).toBe(expected.length);
		expect(h.toSortedArray()).toEqual(expected);
		
	});
})
