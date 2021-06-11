/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: petInfo
// ====================================================

export interface petInfo_pets_Dog {
  __typename: "Dog";
  id: string;
  name: string;
  makeSound: string;
  barkLoudly: string;
}

export interface petInfo_pets_Cat {
  __typename: "Cat";
  id: string;
  name: string;
  makeSound: string;
  beLazy: string;
}

export type petInfo_pets = petInfo_pets_Dog | petInfo_pets_Cat;

export interface petInfo {
  __typename: "Person";
  pets: petInfo_pets[];
}
