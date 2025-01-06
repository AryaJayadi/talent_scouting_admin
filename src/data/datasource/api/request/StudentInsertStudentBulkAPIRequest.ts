export interface StudentInsertStudentBulkAPIRequest {
    studentFile: File | null;
}

export function createStudentInsertStudentBulkAPIRequest(
    file?: File
) : StudentInsertStudentBulkAPIRequest {
    return {
        studentFile: file ?? null,
    }
}