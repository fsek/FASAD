import { RoleClaims } from './role-claims'

export interface Permission {
  roleId: number;
  roleName: string;
  roleClaims: RoleClaims[];
}
