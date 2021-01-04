export type RootStackParamList = {
  Root: undefined
  CreateModal: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Feed: undefined;
  Search: undefined;
  Create?: undefined
  Cart: undefined
  Profile: undefined
}

export type FeedParamList = {
  FeedScreen: undefined
}

export type ProfileParamList = {
  ProfileScreen: undefined
  ProductScreen: { productId: string }
}

export type SearchParamList = {
  SearchScreen: undefined
}
