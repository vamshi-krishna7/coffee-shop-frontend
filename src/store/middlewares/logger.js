import { group, groupEnd, info, logger } from "../../lib/Logger/logger";

const reduxLoggerMiddleware = (store) => (next) => (action) => {
  group(action.type);
  info("dispatching", action);
  const result = next(action);
  logger("next state", store.getState());
  groupEnd("");
  return result;
};

export default reduxLoggerMiddleware;
