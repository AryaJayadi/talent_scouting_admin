export interface AdminLoginAdminAPIRequest {
    email: string;
    password: string;
}

export function createAdminLoginAdminAPIRequest(
    email: string,
    password: string,
): AdminLoginAdminAPIRequest {
    return {
        email,
        password
    }
}