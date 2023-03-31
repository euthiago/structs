import { Comparator } from "../sharedTypes/comparator"

/**
 * Uses Javascripts strict equality negatoin (!==) 
 * 
 * @param lhs left hand side element that will be compared for equality
 * @param rhs right hand side element that will be compared for equality
 * @returns {boolean}
 */
const notEq:Comparator<any> = (lhs:any, rhs:any):boolean =>  
	lhs !== rhs

export default notEq