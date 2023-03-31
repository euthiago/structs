import { Comparator } from "./comparator"

/**
 * Uses Javascripts greater then operator (>)
 * Is the left hand side greater then the right hand side?
 * 
 * @param lhs left hand side element that will be compared
 * @param rhs right hand side element that will be compared
 * @returns {boolean}
 */
const gt:Comparator<any> = (lhs:any, rhs:any):boolean =>  
	lhs > rhs

export default gt