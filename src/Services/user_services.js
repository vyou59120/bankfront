import { apiUrl } from '../Environnements';
import { authHeader } from '../_helpers';

export const userService = {
    Login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
    getAllCommerciaux
};

function Login(Email, Motdepasse) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, Motdepasse })
    };

    return fetch(`${apiUrl}/Logins/authenticate`, requestOptions)
        .then(res => res.json())
        .then(user => {
            if (user['id'] != 0) {
                localStorage.setItem('token', JSON.stringify(user['token']));
                switch (user['role']) {
                    case 'CLIENT':
                        return getClientByEmail(user['email']).then(user => {
                            localStorage.setItem('user', JSON.stringify(user));
                            return user
                        })
                        break;
                    case 'STAFF':
                        return getCommercialByEmail(user['email']).then(user => {
                            localStorage.setItem('user', JSON.stringify(user));
                            return user
                        })
                    case 'ADMIN':
                        return getDirecteurByEmail(user['email']).then(user => {
                            localStorage.setItem('user', JSON.stringify(user));
                            return user
                        })
                        break;
                    default:
                        console.log("sorry");
                        break;
                }
            } else {
                return user
            }
            /*localStorage.setItem('user', JSON.stringify(user));*/
           /* return user;*/
        });
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Users`, requestOptions).then(handleResponse);
}

function getAllCommerciaux() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Commercials`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Users/${id}`, requestOptions).then(handleResponse);
}

function getClientByEmail(email) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Users/email/${email}`, requestOptions).then(handleResponse);
}

function getCommercialByEmail(email) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Commercials/email/${email}`, requestOptions).then(handleResponse);
}

function getDirecteurByEmail(email) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Directeurs/email/${email}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/Users`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/Users/${user.id}`, requestOptions).then(handleResponse);;
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                /*location.reload(true);*/
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        return data;
    });
}

function handleLogin(response) {
    console.log("handlelogin")
    console.log(response)
    console.log(response.ok)
    console.log(response.text())
 
    return response.text().then(text => {
        console.log(text)
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                /*location.reload(true);*/
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}