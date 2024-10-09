export const ADD_TASK = "ADD_TASK";
export const SET_SEARCH_KEY = "SET_SEARCH_KEY";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const setSearchKey = (searchKey) => {
  return {
    type: SET_SEARCH_KEY,
    payload: searchKey,
  };
};