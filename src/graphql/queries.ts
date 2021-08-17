import { loader as queryLoader } from 'graphql.macro'

/**
 * Queries
 */
export const allPeopleQuery = queryLoader('../graphql/allPeople.graphql')
export const onePersonQuery = queryLoader('../graphql/onePerson.graphql')

/**
 * Mutations
 */
export const generateDataMutation = queryLoader('../graphql/generateData.graphql')
export const wipeDataMutation = queryLoader('../graphql/wipeData.graphql')
