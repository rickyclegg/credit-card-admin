export interface Store<T> {
  getAll(): Promise<T[]>
  add(item: T): Promise<void>
}
