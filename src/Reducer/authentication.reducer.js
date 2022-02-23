////let user = JSON.parse(localStorage.getItem('user'));
////let token = JSON.parse(localStorage.getItem('token'));

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
                message: "Authentification réussie"
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

//export default function authentication(state = initialState, action) {
//    console.log(action)
//    switch (action.type) {
//        case "LOGIN":
//            return {
//                isLoggedIn: true,
//                user: action.payload.user,
//                token: action.payload.token,
//                message: "Authentification réussie"
//            };
//        case "LOGOUT":
//            return {
//                isLoggedIn: false,
//                user: null,
//                token: null,
//                message: ""
//            };
//        case "FAIL-LOGIN":
//            return {
//                isLoggedIn: false,
//                user: null,
//                token: null,
//                message: "Echec Authentification"
//            };
//        default:
//            return state
//    }
//}

