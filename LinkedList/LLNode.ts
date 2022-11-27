/*
	Node type is already declared by Typescript
	We use LLNode (Linked List Node) instead
*/
type LLNode = {
	val?: any,
	next?: LLNode | null
}

const LLNode = ( val:any=null, next:LLNode|null=null ):LLNode => 
	({ val, next })

export default LLNode