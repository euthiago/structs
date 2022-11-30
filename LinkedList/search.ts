import LLNode from "./LLNode"

type SearchResult = LLNode | undefined
/**
 * Search Operation
 * Searchs a node containing value 'val' 
 * from current LLNode
 * @param val value to be searched
 * @param node start of our search
 * @returns SearchResult
 */
const search = ( val:any, node:LLNode ):SearchResult => {
	while(node.val !== val && node.next)
		node = node.next
	return node.val === val ? node : undefined
}

export default search