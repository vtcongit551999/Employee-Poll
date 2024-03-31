import { combineReducers } from "@reduxjs/toolkit";

import authUser from "./authUserReducer";
import questions from "./questionsReducer";
import users from "./usersReducer";

export default combineReducers({
  authUser,
  questions,
  users,
});
