import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type GenerateDataMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type GenerateDataMutation = { __typename?: 'Mutation', generateData: Array<{ __typename?: 'Person', id: string }> };


export const GenerateDataDocument = gql`
    mutation generateData {
  generateData {
    id
  }
}
    `;
export type GenerateDataMutationFn = Apollo.MutationFunction<GenerateDataMutation, GenerateDataMutationVariables>;

/**
 * __useGenerateDataMutation__
 *
 * To run a mutation, you first call `useGenerateDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateDataMutation, { data, loading, error }] = useGenerateDataMutation({
 *   variables: {
 *   },
 * });
 */
export function useGenerateDataMutation(baseOptions?: Apollo.MutationHookOptions<GenerateDataMutation, GenerateDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateDataMutation, GenerateDataMutationVariables>(GenerateDataDocument, options);
      }
export type GenerateDataMutationHookResult = ReturnType<typeof useGenerateDataMutation>;
export type GenerateDataMutationResult = Apollo.MutationResult<GenerateDataMutation>;
export type GenerateDataMutationOptions = Apollo.BaseMutationOptions<GenerateDataMutation, GenerateDataMutationVariables>;