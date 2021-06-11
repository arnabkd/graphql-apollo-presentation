/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allPeople
// ====================================================

export interface allPeople_allPeople_friends {
  __typename: "Person";
  id: string;
  name: string;
}

export interface allPeople_allPeople_pets_Dog {
  __typename: "Dog";
  id: string;
  name: string;
  makeSound: string;
  barkLoudly: string;
}

export interface allPeople_allPeople_pets_Cat {
  __typename: "Cat";
  id: string;
  name: string;
  makeSound: string;
  beLazy: string;
}

export type allPeople_allPeople_pets = allPeople_allPeople_pets_Dog | allPeople_allPeople_pets_Cat;

export interface allPeople_allPeople {
  __typename: "Person";
  id: string;
  name: string;
  friends: allPeople_allPeople_friends[];
  pets: allPeople_allPeople_pets[];
}

export interface allPeople {
  allPeople: allPeople_allPeople[];
}
