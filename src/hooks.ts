import { User, fetchUsers } from "./api";

export interface UseUsersResponse {
  users: User[];
  loading: boolean;
}

export const useUsers = (): UseUsersResponse => {
  // TODO: fetch users using fetchUsers API and return them

  return { users: [], loading: false };
};
