/**
 * The Comparator type
 * Used to check equality
 */
export type Comparator<T> = (a?:T, b?:T, ...rest:any[]) => boolean