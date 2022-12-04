import { Comparator } from "./Comparator"

/**
 * Uses Javascripts less than operator (<)
 * Is the left hand side less than the right hand side?
 * 
 * @param lhs left hand side element that will be compared
 * @param rhs right hand side element that will be compared
 * @returns {boolean}
 */
const Lt:Comparator<any> = (lhs:any, rhs:any):boolean =>  
	lhs < rhs

export default Lt