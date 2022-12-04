import { Comparator } from "./Comparator"

/**
 * Uses Javascripts greater then operator (>)
 * Is the left hand side greater then the right hand side?
 * 
 * @param lhs left hand side element that will be compared
 * @param rhs right hand side element that will be compared
 * @returns {boolean}
 */
const Gt:Comparator<any> = (lhs:any, rhs:any):boolean =>  
	lhs > rhs

export default Gt