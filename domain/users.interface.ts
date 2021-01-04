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

export type User = {
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
