export enum UserRole {
  SELLER = 'seller',
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
  createdAt: string
  updatedAt: string
}

export type Store = {
  _id: string
  name: string
  username: string
  email: string
  avatar: string
  role: UserRole
  organisation: string
  createdAt: string
  updatedAt: string
}
