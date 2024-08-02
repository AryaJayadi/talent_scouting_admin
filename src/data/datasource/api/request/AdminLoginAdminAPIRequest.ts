export interface AdminLoginAdminAPIRequest {
    name: string;
    password: string;
}

export function createAdminLoginAdminAPIRequest(
    name: string,
    password: string,
): AdminLoginAdminAPIRequest {
    return {
        name,
        password
    }
}