const initialState = {
    isAuth: false,
    id: null,
    login: ''
};

export const user = (state = initialState, actions) => {

    switch (actions.type) {

        case 'SET_USER_DATA':
            return {
                ...state,
                id: actions.id,
                login: actions.login
            };

        case 'SET_AUTH_TRUE':
            return {
                ...state,
                isAuth: true
            };

        case 'SET_AUTH_FALSE':
            return {
                ...state,
                isAuth: false
            };

        default:
            return state;
    }
};