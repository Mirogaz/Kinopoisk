export interface UsePaginationReturn {
    page: number;
    totalPages: number;
    firstContentIndex?: number;
    lastContentIndex?: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (page: number) => void;
}

interface UsePaginationProps {
    contentPerPage: number;
    count: number;
}

export type UsePagination = (props: UsePaginationProps) => (UsePaginationReturn);