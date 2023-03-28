
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
	* Returns the number of keys in this Trie
	*/
	size: () => number,
	/**
	* Checks whether the Queue is empty or not
	*/
	isEmpty: () => boolean,
}

/**
 * Creats a Trie
 * @param arr optional list of keys to populate the Trie
 */
const createTrie = (arr?:string[]):Trie => {

	

	const insert 


	const returnTrie = ():Trie => ({
		size,
		isEmpty,
		front,
		rear,
		enqueue,
		dequeue,
		toArray
	})

	return returnTrie()

}

export default createTrie