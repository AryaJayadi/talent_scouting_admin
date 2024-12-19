export interface StudentGetByFilterAPIRequest {
    searchKeyword: string;
    major: string;
    positions: string[];
}

export function createStudentGetByFilterAPIRequest (
    searchKeyword?: string,
    major?: string,
    positions?: string[],
) {
    return {
        searchKeyword: searchKeyword ? searchKeyword : "",
        major: major ? major : "",
        positions: positions ? positions : [],
    }
}