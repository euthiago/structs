import { Comparator } from "../sharedTypes/comparator"

/**
 * Uses Javascripts less than or equals operator (<)
 * Is the left hand side less than or equals the right hand side?
 * 
 * @param lhs left hand side element that will be compared
 * @param rhs right hand side element that will be compared
 * @returns {boolean}
 */
const le:Comparator<any> = (lhs:any, rhs:any):boolean =>  
	lhs <= rhs

export default le