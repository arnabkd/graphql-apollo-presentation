import * as Types from './types';

import { gql } from '@apollo/client';
import { PetInfoFragmentDoc } from './petInfo.generated';
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

export type PersonQueryQueryVariables = Types.Exact<{
  input: Types.Scalars['ID'];
}>;


export type PersonQueryQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, name: string, description: string, dateOfBirth: any, friends: Array<{ __typename?: 'Person', id: string, name: string }>, pets: Array<{ __typename?: 'Cat', beLazy: string, id: string, name: string, makeSound: string } | { __typename?: 'Dog', barkLoudly: string, id: string, name: string, makeSound: string }> } };


export const PersonQueryDocument = gql`
    query personQuery($input: ID!) {
  person(id: $input) {
    id
    name
    description
    dateOfBirth
    friends {
      id
      name
    }
    ...petInfo
  }
}
    ${PetInfoFragmentDoc}`;

/**
 * __usePersonQueryQuery__
 *
 * To run a query within a React component, call `usePersonQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePersonQueryQuery(baseOptions: Apollo.QueryHookOptions<PersonQueryQuery, PersonQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonQueryQuery, PersonQueryQueryVariables>(PersonQueryDocument, options);
      }
export function usePersonQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonQueryQuery, PersonQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonQueryQuery, PersonQueryQueryVariables>(PersonQueryDocument, options);
        }
export type PersonQueryQueryHookResult = ReturnType<typeof usePersonQueryQuery>;
export type PersonQueryLazyQueryHookResult = ReturnType<typeof usePersonQueryLazyQuery>;
export type PersonQueryQueryResult = Apollo.QueryResult<PersonQueryQuery, PersonQueryQueryVariables>;