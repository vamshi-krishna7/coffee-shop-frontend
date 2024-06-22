import { configureStore } from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
// import reduxLoggerMiddleware from "./middlewares/logger";
import createRootReducer from "./reducers";
import rootSaga from "./rootSaga";

/**
 * Configures and creates the application store.
 *
 * @returns The configured application store.
 */
export default function configureAppStore() {
  const rootReducer = createRootReducer();

  // Create the Saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Create the store with middleware
  const middlewares = (defaultMiddleware) => [
    ...defaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
        ignoreState: true,
      },
    }),
    sagaMiddleware,
    // reduxLoggerMiddleware,
  ];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: () => rootReducer,
      runSaga: sagaMiddleware.run,
    }),
  ];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: process.env.NODE_ENV !== "production",
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
