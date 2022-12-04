import NodeLinkedList from "./NodeLinkedList"

type SearchResult = NodeLinkedList | undefined
/**
 * Search Operation
 * Searchs a node containing value 'val' 
 * from current NodeLinkedList
 * @param val value to be searched
 * @param node start of our search
 * @returns SearchResult
 */
const search = ( val:any, node:NodeLinkedList ):SearchResult => {
	while(node.val !== val && node.next)
		node = node.next
	return node.val === val ? node : undefined
}

export default search