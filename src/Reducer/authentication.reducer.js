let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};
let role = JSON.parse(localStorage.getItem('role'));

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            return {
                isLoggedIn: false,
                user: null,
                token: null,
            };
        default:
            return state
    }
}

