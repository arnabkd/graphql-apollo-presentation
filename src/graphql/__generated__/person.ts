/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: person
// ====================================================

export interface person_person_friends {
  __typename: "Person";
  id: string;
  name: string;
}

export interface person_person_pets_Dog {
  __typename: "Dog";
  id: string;
  name: string;
  makeSound: string;
  barkLoudly: string;
}

export interface person_person_pets_Cat {
  __typename: "Cat";
  id: string;
  name: string;
  makeSound: string;
  beLazy: string;
}

export type person_person_pets = person_person_pets_Dog | person_person_pets_Cat;

export interface person_person {
  __typename: "Person";
  id: string;
  name: string;
  dateOfBirth: any;
  description: string;
  friends: person_person_friends[];
  pets: person_person_pets[];
}

export interface person {
  person: person_person;
}

export interface personVariables {
  input: string;
}
