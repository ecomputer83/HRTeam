import { BehaviorSubject } from 'rxjs';

import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const organizationService = {
    addOrganization,
    registerAsAdmin,
    addCompany,
    getCompanies,
    getCompany
};

function addOrganization(name, rcnumber, address, contact, contactnumber, contactemail, contactaddress) {
    var req = {
        name: name,
        contactPerson: contact,
        phone: contactnumber,
        email: contactemail,
        address: address,
        contactAddress: contactaddress,
        registrationNumber: rcnumber
    }
    return fetch(`${config.apiurl}/organization`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {
        
            return id;
        });
}

function registerAsAdmin(orgId, contact, contactnumber, contactemail, password, confirmPassword) {
    var req = {
        organizationId: orgId,
        fullName: contact,
        phoneNumber: contactnumber,
        email: contactemail,
        password: password,
        confirmPassword: confirmPassword
      }
      return fetch(`${config.apiurl}/account/registerasadmin`, requestOptions.post(req))
      .then(handleResponse)
      .then(id => {
      
          return id;
      });
}

function addCompany(name, address, contactPerson, phone, email) {
    var req = {
        name, address, contactPerson, phone, email
    }
    return fetch(`${config.apiurl}/company`, requestOptions.post(req))
      .then(handleResponse)
      .then(id => {
      
          return id;
      });
}

function getCompanies() {
    return fetch(`${config.apiurl}/company`, requestOptions.get())
      .then(handleResponse)
      .then(model => {
      
          return model;
      });
}

function getCompany(id) {
    return fetch(`${config.apiurl}/company/${id}`, requestOptions.get())
      .then(handleResponse)
      .then(model => {
      
          return model;
      });
}