interface IOptionsField {
    id: string | number;
    name?: string;
    email?: string;
    password?: string;
    jwt?: string;
    token?: string;
    accessToken?: string;
    refreshToken?: string;
}

export interface IOprions {
    fields: IOptionsField;
    type: 'jwt' | 'one-token' | 'two-token';
}