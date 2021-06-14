/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: personQuery
// ====================================================

export interface personQuery_person_friends {
  __typename: "Person";
  id: string;
  name: string;
}

export interface personQuery_person_pets_Dog {
  __typename: "Dog";
  id: string;
  name: string;
  makeSound: string;
  barkLoudly: string;
}

export interface personQuery_person_pets_Cat {
  __typename: "Cat";
  id: string;
  name: string;
  makeSound: string;
  beLazy: string;
}

export type personQuery_person_pets = personQuery_person_pets_Dog | personQuery_person_pets_Cat;

export interface personQuery_person {
  __typename: "Person";
  id: string;
  name: string;
  description: string;
  dateOfBirth: any;
  friends: personQuery_person_friends[];
  pets: personQuery_person_pets[];
}

export interface personQuery {
  person: personQuery_person;
}

export interface personQueryVariables {
  input: string;
}
