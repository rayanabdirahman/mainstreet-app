export enum UserRole {
  STORE = 'store',
  BUYER = 'buyer'
}

// when stores sign up: create an organisation
// then invite store to use platform
export type Organisation = {
  _id: string
  name: string
  members: string[]
}

export type UserModel = {
  _id: string
  name: string
  username: string
  email: string
  avatar: string
  role: UserRole
  // organisation will be null if user role is BUYER
  organisation?: string | null
  createdAt: string
  updatedAt: string
}

export interface AuthTokenModel {
  token: string
}

export interface SignUpModel {
  name: string
  username: string
  email: string
  password: string
  // set on frontend depending whether user decides to create a store or not
  role?: UserRole
}

export interface SignInModel {
  email: string
  password: string
}
