import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";

/**
 * Exporting the store that holds our various slices needed
 */
export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
