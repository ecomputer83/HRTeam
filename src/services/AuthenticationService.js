import { BehaviorSubject } from 'rxjs';

import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email, password) {
    
    return fetch(`${config.apiurl}/account/token`, requestOptions.post({ email, password }))
        .then(handleResponse)
        .then(model => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({user : model.user, role : model.role[0]}));
            localStorage.setItem('Token', model.token);
            if(model.extra){
                localStorage.setItem('CompanyEmployee', JSON.stringify(model.token)); 
            }
            currentUserSubject.next({user : model.user, role : model.role[0]});

            return model.user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}