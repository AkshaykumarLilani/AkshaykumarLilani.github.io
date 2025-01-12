import { CHANGE_THEME } from './actionTypes';

export const changeThemeToDarkAction = () => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_THEME, payload: 'dark' });
    };
};

export const changeThemeToLightAction = () => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_THEME, payload: 'light' });
    };
};
