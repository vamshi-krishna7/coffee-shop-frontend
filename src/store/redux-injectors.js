import {
    useInjectReducer as useReducer,
    useInjectSaga as useSaga,
  } from "redux-injectors";
  
  /**
   * Wraps the useInjectReducer function from redux-injectors with stricter types.
   *
   * @param params - Parameters for injecting a reducer.
   * @returns The result of the useInjectReducer hook.
   */
  export function useInjectReducer(params) {
    return useReducer(params);
  }
  
  /**
   * Wraps the useInjectSaga function from redux-injectors with stricter types.
   *
   * @param params - Parameters for injecting a saga.
   * @returns The result of the useInjectSaga hook.
   */
  export function useInjectSaga(params) {
    return useSaga(params);
  }
  