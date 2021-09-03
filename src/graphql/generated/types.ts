export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** RFC3339: full-date */
  Date: any;
};

export type AddFriendsInput = {
  first: Scalars['ID'];
  second: Scalars['ID'];
};

export type Cat = Pet & {
  __typename?: 'Cat';
  id: Scalars['ID'];
  name: Scalars['String'];
  makeSound: Scalars['String'];
  beLazy: Scalars['String'];
};


export type Dog = Pet & {
  __typename?: 'Dog';
  id: Scalars['ID'];
  name: Scalars['String'];
  makeSound: Scalars['String'];
  barkLoudly: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPerson: Person;
  addFriends: Scalars['Boolean'];
  generateData: Array<Person>;
  wipeData: WipeDataPayload;
};


export type MutationAddPersonArgs = {
  input: PersonInput;
};


export type MutationAddFriendsArgs = {
  input: AddFriendsInput;
};

export type Person = {
  __typename?: 'Person';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  dateOfBirth: Scalars['Date'];
  friends: Array<Person>;
  pets: Array<Pet>;
};

export type PersonInput = {
  name: Scalars['String'];
};

export type Pet = {
  id: Scalars['ID'];
  name: Scalars['String'];
  makeSound: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allPeople: Array<Person>;
  person: Person;
  search: Array<SearchResult>;
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  input: SearchInput;
};

export type SearchInput = {
  queryString: Scalars['String'];
};

export type SearchResult = Dog | Cat | Person;

export type WipeDataPayload = {
  __typename?: 'WipeDataPayload';
  success: Scalars['Boolean'];
};
