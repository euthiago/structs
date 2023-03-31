
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
const trieNode = (isEndOfKey:boolean=false):TrieNode => {

	const keys = new Map<string, TrieNode>()
	let instance:TrieNode

	const insert = (key:string, isEndOfKey:boolean = false):TrieNode => {

		let node:TrieNode

		// do we have a TrieNode for this key?
		if(keys.has(key)) {

			// current TS is forcing the the following 'as' statement
			node = (keys.get(key) as TrieNode)
			// we may mark the node as end of a key of applicable
			if(isEndOfKey) 
				node.isEndOfKey = true

		}else{

			// a new key is being inserted, creates a new node
			node = trieNode(isEndOfKey)
			keys.set(key, node)

		}

		// returns the node
		return node
		
	}

	instance = {
		keys,
		isEndOfKey,
		insert
	}

	return instance


}

export default trieNode