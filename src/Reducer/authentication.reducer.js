////let user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
    message: ""
};
////let role = JSON.parse(localStorage.getItem('role'));

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token,
                message: "Authentification réussie"
            };
        case "LOGOUT":
            return {
                isLoggedIn: false,
                user: null,
                token: null,
                message: ""
            };
        case "FAIL-LOGIN":
            return {
                isLoggedIn: false,
                user: null,
                token: null,
                message: "Echec Authentification"
            };
        default:
            return state
    }
}

