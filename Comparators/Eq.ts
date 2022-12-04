import { Comparator } from "./Comparator"

/**
 * Uses Javascripts strict equality (===) 
 * 
 * @param lhs left hand side element that will be compared for equality
 * @param rhs right hand side element that will be compared for equality
 * @returns {boolean}
 */
const Eq:Comparator<any> = (lhs:any, rhs:any):boolean =>  
	lhs === rhs

export default Eq