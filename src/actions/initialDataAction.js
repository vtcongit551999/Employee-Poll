import { getInitialData } from "../data/api";
import { receiveUsers } from "./usersAction";
import { receiveQuestions } from "./pollsAction";

const receiveInitialData = () => {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
  };
}

export { receiveInitialData };
