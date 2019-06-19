//Interfaces Used

export interface Iauth {
  isAuthenticated: boolean;
  user: Iuser;
}
export interface Iuser {
  name: string;
  email: string;
  birthDate: string;
  UID: string | null;
}

//Types
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GET_PROFILE = "GET_PROFILE";
//Actions are here

export interface ISET_CURRENT_USER {
  type: typeof SET_CURRENT_USER;
  payload: Iauth;
}
export type AuthActionTypes = ISET_CURRENT_USER;
