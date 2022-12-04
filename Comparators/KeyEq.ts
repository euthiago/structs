import { Comparator } from "./Comparator"

/**
 * Creates a Comparator that checks for
 * Javascripts strict equality (===) 
 * at the values of a property 'key' of two objects
 * (arrays and functions are also objects)

 * @param a left hand side element that will be compared for equality
 * @param b right hand side element that will be compared for equality
 * @returns {boolean}
 */
type Key = number | string
type OptObject = Object | undefined
const KeyEq:Comparator<Object> = (a:OptObject, b:OptObject, key:Key):boolean =>  
	( a !== undefined && b !== undefined ) && a[key] === b[key]

export default KeyEq