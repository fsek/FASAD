export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  permissions: string[];
  loggedIn: boolean; // this is stupid, just store it in another place in global state
}
