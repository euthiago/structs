import { Comparator } from "./Comparator"

/**
 * Uses Javascripts greater then or equals operator (>)
 * Is the left hand side greater then or equals the right hand side?
 * 
 * @param lhs left hand side element that will be compared
 * @param rhs right hand side element that will be compared
 * @returns {boolean}
 */
const Ge:Comparator<any> = (lhs:any, rhs:any):boolean =>  
	lhs >= rhs

export default Ge