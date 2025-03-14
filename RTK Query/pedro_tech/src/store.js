const { configureStore } = require("@reduxjs/toolkit");
const { setupListeners } = require("@reduxjs/toolkit/query");
const { jsonPlaceholderApi } = require("./services/jsonPlaceholderApi");

const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});


