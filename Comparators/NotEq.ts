import { Comparator } from "./Comparator"

/**
 * Uses Javascripts strict equality negatoin (!==) 
 * 
 * @param lhs left hand side element that will be compared for equality
 * @param rhs right hand side element that will be compared for equality
 * @returns {boolean}
 */
const NotEq:Comparator<any> = (lhs:any, rhs:any):boolean =>  
	lhs !== rhs

export default NotEq