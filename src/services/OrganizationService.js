import { BehaviorSubject } from 'rxjs';

import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const organizationService = {
    addOrganization,
    registerAsAdmin,
    addRank,
    getRanks
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

function addRank(rank, readHoliday, readLeave, readAssets, readTimesheet, 
                      writeHolidays, writeLeave, writeAssets, writeTimesheet, 
                      deleteHolidays, deleteLeave, deleteAssets, deleteTimesheet ) {
  var req = {
      rankName: rank,
      rankPermission: {
      readHoliday,
      readLeave,
      readAssets,
      readTimesheet,
      writeHolidays,
      writeLeave,
      writeAssets,
      writeTimesheet,
      deleteHolidays,
      deleteLeave,
      deleteAssets,
      deleteTimesheet
    }
  }
  return fetch(`${config.apiurl}/organization/addrank`, requestOptions.post(req))
      .then(handleResponse)
}
function getRanks() {
  
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