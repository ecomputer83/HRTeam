import { BehaviorSubject } from 'rxjs';

import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentOfficeSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentOffice')));
const currentRankSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentRank')));
export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    currentRank: currentRankSubject.asObservable(),
    currentOffice: currentOfficeSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value },
    get currentRankValue () { return currentRankSubject.value },
    get currentOfficeValue () { return currentOfficeSubject.value }
};

function login(email, password) {
    
    return fetch(`${config.apiurl}/account/token`, requestOptions.post({ email, password }))
        .then(handleResponse)
        .then(model => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({user : model.user, role : model.role[0]}));
            localStorage.setItem('Token', model.token);
            if(model.extra){
                if(model.extra.company){
                localStorage.setItem('currentOffice', JSON.stringify(model.extra.company)); 
                localStorage.setItem('currentRank', JSON.stringify(model.extra.rank));
                currentUserSubject.next({user : model.user, role : model.role[0], employee: model.extra.employee});
                currentOfficeSubject.next(model.extra.company);
                currentRankSubject.next(model.extra.rank);
                }else{
                localStorage.setItem('currentOffice', JSON.stringify(model.extra));
                currentUserSubject.next({user : model.user, role : model.role[0]});
                currentOfficeSubject.next(model.extra);
                }
            }
            

            return model.user;
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