import { RoleClaims } from './role-claims'

export interface Permission {
  roleId: number;
  userRoles: RoleClaims[];
}
