import createTrie, { Trie } from "./Trie"

describe("Trie", () => {

	let t:Trie
	it("createTrie: Should create a Trie", () => {

		t = createTrie()
		expect(t).toBeDefined()
		expect(t.size).toBe(0)
		expect(t.isEmpty()).toBe(true)

	})

	
	it("insert: Should insert a key", () => {

		t.insert("app")
		expect(t).toBeDefined()
		expect(t.size).toBe(1)
		expect(t.isEmpty()).toBe(false)

	})

	
	it("insert: Should not insert the same key", () => {

		t.insert("app")
		expect(t).toBeDefined()
		expect(t.size).toBe(1)
		expect(t.isEmpty()).toBe(false)

	})

	it("insert: Should insert a different key", () => {

		t.insert("apple")
		t.insert("apples")
		t.insert("applet")
		expect(t).toBeDefined()
		expect(t.size).toBe(4)

	})

	
	it("remove: Should be able to remove a key that shares prefixes", () => {

		t.remove("apples")
		expect(t).toBeDefined()
		expect(t.size).toBe(3)

	})

	
	it("remove: Should be able to remove a key that does not shares prefixes", () => {

		t.remove("applet")
		expect(t).toBeDefined()
		expect(t.size).toBe(2)

	})

	it("remove: Should be able to remove a key that is a prefix of other key", () => {

		t.remove("app")
		expect(t).toBeDefined()
		expect(t.size).toBe(1)

	})

	
	it("remove: Should be able to remove the last key", () => {

		t.remove("apple")
		expect(t).toBeDefined()
		expect(t.size).toBe(0)

	})
	
	it("arr argument: Should accept an array of keys as arguments", () => {

		t = createTrie(["app", "apple", "applet", "apples"])
		expect(t).toBeDefined()
		expect(t.size).toBe(4)

	})

	it("has: Returns true if the key is present", () => {

		expect(t.has("app")).toBe(true)

	})

	it("has: Returns false if the the key is not present, even if all characters are", () => {

		expect(t.has("ap")).toBe(false)

	})

	it("has: Returns false if the the key is not present at all", () => {

		expect(t.has("appp")).toBe(false)

	})
})