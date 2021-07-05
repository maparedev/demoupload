import { AppUserClaim } from "./app-user-claim";

export class AppUserAuth {
  userName: string = "";
  token: string = "";
  expiration : string ="";
  isAuthenticated: boolean = false;
  claims: AppUserClaim[] = [];
}
