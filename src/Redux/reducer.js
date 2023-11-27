import { CHANGE_THEME } from "./actionTypes";

let initialState = {
    theme: "light",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            // console.log("CHANGE_THEME REQUEST RECEIVED, Payload: ", action.payload);
            return { ...state, theme: action.payload };
        default:
            // console.log("Default Reducer: ", { state, action });
            return state;
    }
}

export default reducer;