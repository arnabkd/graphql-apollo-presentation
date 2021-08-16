import { OperationVariables, ApolloQueryResult } from "@apollo/client";

export function awaitRefetch<T>(func : (variables?: Partial<OperationVariables> | undefined) 
 => Promise<ApolloQueryResult<T>>) {
  return async () => await func()
 }