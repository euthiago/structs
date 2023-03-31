import trieNode, { TrieNode } from "./trieNode"

describe("TrieNode", () => {

	let tn:TrieNode
	it("trieNode: Should create a TrieNode", () => {

		tn = trieNode()
		expect(tn).toBeDefined()
		expect(tn.isEndOfKey).toBe(false)
		expect(tn.keys.size).toBe(0)

	})


	it("trieNode: Should create a TrieNode set as end of key", () => {

		tn = trieNode(true)
		expect(tn).toBeDefined()
		expect(tn.isEndOfKey).toBe(true)
		expect(tn.keys.size).toBe(0)

	})

	it("insert: Should insert a new trieNode as direct child", () => {

		tn.insert("a")
		expect(tn).toBeDefined()
		expect(tn.isEndOfKey).toBe(true)
		expect(tn.keys.size).toBe(1)
		expect(tn.keys.get("a")).toBeDefined()
		expect(tn.keys.get("a")?.isEndOfKey).toBe(false)

	})


	it("insert: Should insert a new trieNode as direct child ending a key", () => {

		tn.insert("b", true)
		expect(tn).toBeDefined()
		expect(tn.keys.size).toBe(2)
		expect(tn.keys.get("b")).toBeDefined()
		expect(tn.keys.get("b")?.isEndOfKey).toBe(true)

	})


	it("insert: Attempting to insert existing keys change nothing", () => {

		tn.insert("a")
		expect(tn).toBeDefined()
		expect(tn.keys.size).toBe(2)
		expect(tn.keys.get("a")).toBeDefined()
		expect(tn.keys.get("a")?.isEndOfKey).toBe(false)

	})

	it("insert: Existing keys can be overriden to become end of Trie keys", () => {

		tn.insert("a", true)
		expect(tn).toBeDefined()
		expect(tn.keys.size).toBe(2)
		expect(tn.keys.get("a")).toBeDefined()
		expect(tn.keys.get("a")?.isEndOfKey).toBe(true)

	})

	it("insert: Existing keys canot be overriden sieze being end of Trie keys", () => {

		tn.insert("a", false)
		expect(tn).toBeDefined()
		expect(tn.keys.size).toBe(2)
		expect(tn.keys.get("a")).toBeDefined()
		expect(tn.keys.get("a")?.isEndOfKey).toBe(true)

	})
})