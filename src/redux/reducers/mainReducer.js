import { combineReducers } from "@reduxjs/toolkit";

import dashboardReducer from "./dashboardReducer";

const mainReducer = combineReducers({
  dashboard: dashboardReducer
})

export default mainReducer