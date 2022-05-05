import { UserRole } from './user-role'

export interface ManagerUserRoles {
  userid: number;
  email: string;
  userRoles: UserRole[];
}
