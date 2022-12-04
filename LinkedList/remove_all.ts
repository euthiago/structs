import LinkedList from "./LinkedList"
import remove_many from "./remove_many"

/**
 * Remove Operation
 * Removes all nodes that have value val
 * @param val value of the node to be remove
 * @returns {LinkedList}
*/
const remove_all = <T>(ll:LinkedList<T>, val?:T):LinkedList<T> => 
	remove_many(ll, val, Number.POSITIVE_INFINITY)

export default remove_all