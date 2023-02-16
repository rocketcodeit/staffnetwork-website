export interface PaginatedResult<T> {
    data: T[],
    paginationInfo: { page: number, pageSize: number, pageCount: number, total: number }
}
