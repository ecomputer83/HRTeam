import { authenticationService } from '@/services/authenticationService';

const requestOptions = {
    get() {
        return {
            method: 'GET',
            ...headers()
        };
    },
    post(body) {
        return {
            method: 'POST',
            ...headers(),
            body: JSON.stringify(body)
        };
    },
    postForm(formData) {
        return {
            method: 'POST',
            ...headers(true),
            body: formData
        };
    },
    patch(body) {
        return {
            method: 'PATCH',
            ...headers(),
            body: JSON.stringify(body)
        };
    },
    put(body) {
        return {
            method: 'PUT',
            ...headers(),
            body: JSON.stringify(body)
        };
    },
    putForm(formData) {
        return {
            method: 'PUT',
            ...headers(true),
            body: formData
        };
    },
    delete() {
        return {
            method: 'DELETE',
            ...headers()
        };
    }
}

function headers(form) {
    const currentUser = authenticationService.currentUserValue || {};
    const hostname = document.location.host;
    // console.log(hostname);
    const authHeader = currentUser.token ? { 'Authorization': 'Bearer ' + currentUser.token } : {}
    return {
        headers: (form) ?  {
            ...authHeader,
            'Holder': hostname
        } : {
            ...authHeader,
            'Content-Type': 'application/json',
            'Holder': hostname
        }
    }
}

export default requestOptions