import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { isBrowser } from 'core/utils/default';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({ serializableCheck: false });

    if (isBrowser()) {
      const logger = createLogger({
        collapsed: true,
        duration: true,
      });

      middleware.push(logger);
    }

    return middleware;
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
