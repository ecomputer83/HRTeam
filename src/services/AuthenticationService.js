import { BehaviorSubject } from 'rxjs';

import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentOfficeSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentOffice')));
const currentRankSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentRank')));
export const authenticationService = {
    login,
    validate,
    logout,
    currentUser: currentUserSubject.asObservable(),
    currentRank: currentRankSubject.asObservable(),
    currentOffice: currentOfficeSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value },
    get currentRankValue() { return currentRankSubject.value },
    get currentOfficeValue() { return currentOfficeSubject.value }
};

function login(email, password) {

    return fetch(`${config.apiurl}/account/token`, requestOptions.post({ email, password }))
        .then(handleResponse)
        .then(model => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            localStorage.setItem('Token', model.token);
            if (model.extra) {
                if (model.extra.company) {
                    localStorage.setItem('currentUser', JSON.stringify({ user: model.user, role: model.role[0], employee: model.extra.employee, token: model.token }));
                    localStorage.setItem('currentOffice', JSON.stringify(model.extra.company));
                    localStorage.setItem('currentRank', JSON.stringify(model.extra.rank));
                    currentUserSubject.next({ user: model.user, role: model.role[0], employee: model.extra.employee, token: model.token });
                    currentOfficeSubject.next(model.extra.company);
                    currentRankSubject.next(model.extra.rank);
                } else {
                    localStorage.setItem('currentUser', JSON.stringify({ user: model.user, role: model.role[0], token: model.token }));
                    localStorage.setItem('currentOffice', JSON.stringify(model.extra));
                    currentUserSubject.next({ user: model.user, role: model.role[0], token: model.token });
                    currentOfficeSubject.next(model.extra);
                }
            }


            return model.user;
        });
}
function validate(password) {
    var currentUser = this.currentUserValue
    return fetch(`${config.apiurl}/account/validate`, requestOptions.post({ email: currentUser.user.email, password }))
        .then(handleResponse)
        .then(model => {
            return model;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentRank');
    localStorage.removeItem('currentOffice');

    currentUserSubject.next(null);
    currentRankSubject.next(null);
    currentOfficeSubject.next(null);
}