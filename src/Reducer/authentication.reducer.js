
let initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
    message: ""
};


export default function authentication(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true,
                user: action.payload,
                message: ""
            };
        case "LOGOUT":
            return {
                isLoggedIn: false,
                user: null,
                message: ""
            };
        case "FAIL-LOGIN":
            return {
                isLoggedIn: false,
                user: null,
                message: "Echec Authentification"
            };
        default:
            return state
    }
}


