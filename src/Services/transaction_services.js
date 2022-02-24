import { apiUrl } from '../Environnements';
import { authHeader } from '../_helpers';

export const transactionsService = {
    getAll,
    getByMonth,
    getByCredit,
    getByDebit
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Transactions`, requestOptions).then(handleResponse);
}

function getByMonth(accountID) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Transactions/byMonth/${accountID}`, requestOptions).then(handleResponse);
}

function getByCredit(accountID) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Transactions/byCredit/${accountID}`, requestOptions).then(handleResponse);
}

function getByDebit(accountID) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Transactions/byDebit/${accountID}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                /*location.reload(true);*/
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

