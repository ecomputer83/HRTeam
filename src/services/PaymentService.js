import { BehaviorSubject } from 'rxjs';
import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';

export const paymentService = {
    paySalary,
    payPension,
    payTax,
    getTaxOffice,
    getPensionManager
}

function paySalary(companyId) {
    return fetch(`${config.apiurl}/Payment/PaySalary?id=${companyId}`, requestOptions.post(null))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function payPension(companyId, period) {
    return fetch(`${config.apiurl}/Payment/PayPension?id=${companyId}&period=${period}`, requestOptions.post(null))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function payTax(companyId, period) {
    return fetch(`${config.apiurl}/Payment/PayTax?id=${companyId}&period=${period}`, requestOptions.post(null))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function getTaxOffice(id) {
    return fetch(`${config.apiurl}/Payment/getTaxOffice?Id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function getPensionManager(id) {
    return fetch(`${config.apiurl}/Payment/getPensionManager?Id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}