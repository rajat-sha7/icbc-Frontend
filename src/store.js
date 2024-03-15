import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Component/Slice/authSlice.js";

import { persistStore, persistReducer } from 'redux-persist';


import storage from 'redux-persist/lib/storage'; 





const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth:persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});


const persistor = persistStore(store);














// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./user/userSlice.js";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({ user: userReducer });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false
//     }),
// });

// export const persistor = persistStore(store);
