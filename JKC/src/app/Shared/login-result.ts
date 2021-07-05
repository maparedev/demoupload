export class LoginResult {
    token: string;
    expiration : Date;
    username: string;
}

export class LoginRequest {
    username : string;
    password: string;
}