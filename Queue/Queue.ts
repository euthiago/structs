import { Option } from "../SharedTypes/Option"

type Queue<T> = {
	front: () => Option<T>,
	rear: () => Option<T>,
	size: () => number,
	enqueue: (val:T) => Queue<T>
	dequeue: () => Option<T>
}

const Queue = <T>():Queue<T> => {

	const data 	= <T>[]
	let idx_f  	= -1
	let idx_r	= -1

	const size 	= () => idx_r-idx_f
	const front	= () => data[idx_f]
	const rear	= () => data[idx_r]

	const enqueue = (val:T):Queue<T> => {
		data[++idx_r] = val
		return returnQueue()
	}

	const dequeue = ():Option<T> => data[idx_f--]
	
	const returnQueue = ():Queue<T> => ({
		size,
		front,
		rear,
		enqueue,
		dequeue
	})

	return returnQueue()

}