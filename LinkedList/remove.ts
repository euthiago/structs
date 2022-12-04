import LinkedList from "./LinkedList"
import remove_many from "./remove_many"

/**
 * Remove Operation
 * Removes the first node that has value val
 * @param val value of the node to be remove
 * @returns {LinkedList}
*/
const remove = <T>(ll:LinkedList<T>, val?:T):LinkedList<T> => 
	remove_many(ll, val, 1)

export default remove