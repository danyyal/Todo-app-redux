import { ADD_TASK, SET_SEARCH_KEY } from "./actions";

const initialState = {
	tasks: [],
	search: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case SET_SEARCH_KEY:
			return {
				...state,
				search: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;