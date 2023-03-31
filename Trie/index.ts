import trieNode, { TrieNode } from "./TrieNode"

/**
 * A prefix tree
 */
export type Trie = {
	/**
	* Inserts a key into our Trie
	*/
	insert: (key:string) => Trie,
	/**
	* Removes a key from our Trie
	*/
	remove: (key:string) => Trie,
	/**
	* The number of keys in this Trie
	*/
	size: number,
	/**
	* Checks whether the Trie is empty or not
	*/
	isEmpty: () => boolean,
	/**
	 * Checks if a particular key is present
	 */
	has: (key:string) => boolean,
	/**
	 * Given a prefix, returns an array containing
	 * keys that share that prefix 
	 * @param {string} prefix the prefix to search with
	 * @param {number} maxResults returns at max this ammount of keys
	 */
	find: (prefix:string, maxResults?:number) => string[],

}

export type TrieOptions = {
	immutable?:boolean,
	caseInsensitive?:boolean
}

/**
 * Creats a Trie
 * @param arr optional list of keys to populate the Trie
 */
const trie = (arr?:string[], options?:TrieOptions):Trie => {

	
	const { 
		immutable = false,
		caseInsensitive = false
	} = options || {}

	// lazy inititialization
	let instance: Trie | undefined
	let size = 0
	const root = trieNode()

	/**
	 * Iterates through the key characters
	 * checking if they are present in our Trie
	 * inserting each character into a TrieNode
	 * as we find any missing
	 * Also makrs TrieNodes as isEndOfKey is necessary
	 * @param key 
	 */
	const insert = (key:string) => {

		// no length early return guard
		if( key.length === 0 ) 
			return returnTrie()

		// case insensitive support
		if(caseInsensitive)
			key = key.toLocaleLowerCase()

		let node = root
		for(let i=0; i<key.length; i++) {

			// is this the end of our key?
			const isEndOfKey = i === key.length-1

			// the TrieNode has the character
			if(node.keys.has(key[i])){

				// forcing TS to consider this result as a valid TrieNode
				// as for some reason it currently ignores Map.has as a guard
				node = (node.keys.get(key[i]) as TrieNode)

				// if we are at the end of the key
				// mark the current node as isEndOfKey
				if(isEndOfKey){

					if(!node.isEndOfKey) size++
					node.isEndOfKey = true

				}
				
			}else{

				// creating the new TrieNode
				if(isEndOfKey) size++
				node = node.insert(key[i], isEndOfKey)

			}
			
		}

		return returnTrie()

	}



	/*

		The remove operation can be quite trick,
		this brief documentation of the algorithm
		should make the this approach clear:

		assuming our Trie have these keys:
			app
			appl
			apples
			applet

		if we are removing "a",
		nothing changes, as no "a" key is present

		if we are removing "app",
		TrieNode ending in "app" has isEndOfKey set to false
		and Trie size -= 1
		We have children after "app", so we can stop here

		if we are removing "apples", no other keys have
		"apples" as prefix. we need to remove all previous
		TrieNodes that were part of "apples", but not part
		of any other key. 
		By keeping track of the last TrieNode that had
		isEndOfKey set to true before we reach "apples",
		we can look out for the first TrieNode found that
		have only one child up to our "apples" TrieNode
		If such TrieNode is available, delete it, otherwise
		delete the TrieNode that ends in the desired "apples" key
		Once that is done, also decrement the Trie size
		For this particular example, we should only remove
		the "s" TrieNode following the "apples" chain

	*/

	/**
	 * Iterates through the key characters
	 * checking if they are present in our Trie
	 * inserting each character into a TrieNode
	 * as we find any missing
	 * Also makrs TrieNodes as isEndOfKey is necessary
	 * @param key 
	 */
	const remove = (key:string) => {

		// no length early return guard
		if( key.length === 0 ) 
			return returnTrie()

		// case insensitive support
		if(caseInsensitive)
			key = key.toLocaleLowerCase()

		let notToBeRemoved:TrieNode|undefined
		let charKeyToBeRemoved:string|undefined
		
		let node = root
		let parentOfLastNode = root
		for(let i=0; i<key.length; i++) {

			// if any character of our key is not
			// present in the TrieNode chain,
			// do nothing
			if(!node.keys.has(key[i])) 
				return returnTrie()
			
			// the character is present as a child TrieNode
			// forcing TS to consider this result as a valid TrieNode
			// as for some reason it currently ignores Map.has as a guard
			let next = (node.keys.get(key[i]) as TrieNode)

			// if we are attempting to mark a TrieNode 
			// for removal, but we found a TrieNode containing
			// mode then one child, reset the notToBeRemoved flag
			if(node.keys.size > 1)
				notToBeRemoved = undefined

			// if notToBeRemoved is undefined and we found
			// a TrieNode that is not end of a key,
			// save the node and key to be removed info
			// if we found another end of key, than
			// mark it as the notToBeRemoved
			if(!notToBeRemoved && !next.isEndOfKey && next.keys.size === 1){
				notToBeRemoved = node
				charKeyToBeRemoved = key[i]
			}else{
				notToBeRemoved = undefined
			}

			// keep track of the parent of the last node
			if(i === key.length-1)
				parentOfLastNode = node

			// keep iterating
			node = next


		}

		// once we reached the last character
		// and properly found the TrieNode to be removed,
		// decrement the Trie size
		size--

		// if this was the last key, make sure our
		// root node has no children
		if(size === 0){
			root.isEndOfKey = false
			root.keys.clear()
			return returnTrie()
		}
		
		// if this was the last key of our Trie or
		// if the last TrieNode for the current key
		// also has children, just remove the isEndOfKey mark
		if(node.keys.size > 0){
			node.isEndOfKey = false
			return returnTrie()
		}

		// at this point, the TrieNode does not have children
		// and we must remove all intermediary TrieNodes since
		// the notToBeRemoved found, if any
		if(notToBeRemoved && charKeyToBeRemoved){
			notToBeRemoved.keys.delete(charKeyToBeRemoved)
		}else{
			// perhaps this was just the last TrieNode
			// withour intermadiary TrieNodes, then just
			// remove it from the it's parent TrieNode
			parentOfLastNode.keys.delete(key[key.length-1])
		}

		return returnTrie()

	}

	/**
	 * False if the Trie has no keys stored
	 */
	const isEmpty = () => size === 0

	/**
	 * Traverse the TrieNodes matching
	 * the key string, returning early
	 * if a character is not present
	 * Return true only if the whole
	 * key is present and the TrieNode
	 * for its last character is marked
	 * as isEndOfKey
	 */
	const has = (key:string) => {

		// no length early return guard
		if( key.length === 0 ) 
			return false

		// case insensitive support
		if(caseInsensitive)
			key = key.toLocaleLowerCase()

		let node = root
		for( const c of key ) {
			if(!node.keys.has(c))
				return false
			// once again forcing current TS to
			// understand the previous guard clause
			node = (node.keys.get(c) as TrieNode)
		}

		return node.isEndOfKey

	}

	const find = (prefix="", maxResults=Number.POSITIVE_INFINITY ) => {

		// no length early return guard
		if( prefix.length === 0 ) 
			return []

		// case insensitive support
		if(caseInsensitive)
			prefix = prefix.toLocaleLowerCase()

		// user does not want any result
		if(maxResults < 1 || size === 0) return []

		// starting from the root TrieNode
		let node = root

		// making sure the whole prefix is present first
		for(const c of prefix) {

			// return early if the prefix is not present in our Trie
			if(!node.keys.has(c)) return []

			// current TS needs to be informed this IS a TrieNode
			node = (node.keys.get(c) as TrieNode)

		}

		// initializing the results array
		const results:string[] = []

		// the current node might just be the first result
		if(node.isEndOfKey) results.push(prefix)
		
		// storing the ammout of results found for quick usage
		let resultsFound = results.length

		// the nodes we will explore next
		let nextNodes = Array.from(node.keys)

		// using a moving index instead of shifting the array
		// perhaps in a future version we might use a 
		// configurable different approach
		let i = 0

		// iterate until maxResults is reached or
		// we run out of nodes to explore
		while(i < nextNodes.length){

			// by getting the next node we are effectively BFSing
			const [key, node] = nextNodes[i]

			// did we find a new word?
			if(node.isEndOfKey){
				// adding the word to our results
				results.push(prefix+key)
				// explicitly incrementing the counter
				resultsFound++
				// stopping "early" when maxResults is reached
				if(resultsFound === maxResults) 
					break
			}

			// if this node had children, make sure
			// they are added to our list of nodes to explore
			nextNodes = nextNodes.concat( Array.from(node.keys).map( ([childKey, childNode]) => 
				[key+childKey, childNode] 
			))

			// explicitly increasing i
			i++

		}

		return results
	}

	const returnTrie = ():Trie => {

		// lazy instancing and immutability support
		if(!instance || immutable) {
			instance = {
				size,
				isEmpty,
				insert,
				remove,
				has,
				find
			}
			return instance
		}

		instance.size = size
		return instance

	}


	/**
	 * 
	 * Initialization with array of keys
	 * Pretty elegant :)
	 * 
	 */
	if(arr) arr.map(insert)

	return returnTrie()

}

export default trie