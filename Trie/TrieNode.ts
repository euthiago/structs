
/**
 * A Trie node
 */
export type TrieNode = {
	/**
	 * Maps a single character to a TrieNode
	 * Also holds information about keys ending
	 * in this particular node
	 */
	keys: Map<string, TrieNode>,
	isEndOfKey: boolean,
	insert: (key:string, isEndOfKey?:boolean) => TrieNode
}

/**
 * Creates a TrieNode
 */
const createTrieNode = (isEndOfKey:boolean=false):TrieNode => {

	const keys = new Map<string, TrieNode>()
	let instance:TrieNode

	const insert = (key:string, isEndOfKey:boolean = false):TrieNode => {

		// string ends at this point, just change 
		if(isEndOfKey && !instance.isEndOfKey)
			instance.isEndOfKey = true

		// we do have this key, just return the instance
		if(keys.has(key)) 
			return instance

		// a new key is being inserted, creates a new node
		const newTrieNode = createTrieNode(isEndOfKey)

		// current node now points to the new node for this key
		keys.set(key, newTrieNode)
		
		// returns the new node
		return newTrieNode
		
	}

	instance = {
		keys,
		isEndOfKey,
		insert
	}

	return instance


}

export default createTrieNode