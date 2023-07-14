import { combineReducers } from "@reduxjs/toolkit";
import users from "./userSlice";

const rootReducer = combineReducers({ users });

export default rootReducer;
