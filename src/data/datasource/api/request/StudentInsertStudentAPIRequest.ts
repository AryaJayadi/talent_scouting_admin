export interface StudentInsertStudentAPIRequest {
    Nim: string;
    Name: string;
    Phone: string;
    Gpa: number;
    Major: string;
    Address: string;
    City: string;
    State: string;
    PictureUrl: string;
    Description: string;
    PersonalUrl: string;
    Email: string;
    Password: string;
}

export function createStudentInsertStudentAPIRequest(
    nim?: string,
    name?: string,
    phone?: string,
    gpa?: number,
    major?: string,
    address?: string,
    city?: string,
    state?: string,
    pictureUrl?: string,
    description?: string,
    personalUrl?: string,
    email?: string,
    password?: string
): StudentInsertStudentAPIRequest {
    return {
        Nim: nim ?? "",
        Name: name ?? "",
        Phone: phone ?? "",
        Gpa: gpa ?? 0,
        Major: major ?? "",
        Address: address ?? "",
        City: city ?? "",
        State: state ?? "",
        PictureUrl: pictureUrl ?? "",
        Description: description ?? "",
        PersonalUrl: personalUrl ?? "",
        Email: email ?? "",
        Password: password ?? "",
    };
}
