import { BehaviorSubject } from 'rxjs';

import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';

export const organizationService = {
    addOrganization,
    registerAsAdmin,
    getLeaveTypes,
    addLeaveType,
    removeLeaveType,
    addCompany,
    addAccountSetting,
    getCompanies,
    getCompany,
    getAccountSetting,
    addRank,
    getRanks,
    updateCompany,
    updateAccountSetting,
    removeCompany,
    registerAsHR,
    addDepartment,
    getDepartments,
    addDesignation,
    getDesignations,
    updateDesignation,
    removeDesignation,
    updateDepartment,
    removeDepartment,
    removeRank,
    getBanks,
    updateRank
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

function addAccountSetting(companyId, bankAccountForSalary, bankCodeForSalary, bankAccountForPension,
    bankCodeForPension, bankAccountForTax, bankCodeForTax, employerCodeForPension, remitaUserAccount, salaryPayDay) {
    var req = {
        companyId: companyId,
        bankAccountForSalary,
        bankCodeForSalary,
        bankAccountForPension,
        bankCodeForPension,
        bankAccountForTax,
        bankCodeForTax,
        employerCodeForPension,
        remitaUserAccount,
        salaryPayDay
    }
    return fetch(`${config.apiurl}/company/PostAccount`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function addRank(rank, readHoliday, readLeave, readAssets, readTimesheet,
    writeHoliday, writeLeave, writeAssets, writeTimesheet,
    deleteHolidays, deleteLeave, deleteAssets, deleteTimesheet) {
    var req = {
        rankName: rank,
        rankPermission: {
            readHoliday,
            readLeave,
            readAssets,
            readTimesheet,
            writeHoliday,
            writeLeave,
            writeAssets,
            writeTimesheet,
            deleteHolidays,
            deleteLeave,
            deleteAssets,
            deleteTimesheet
        }
    }
    return fetch(`${config.apiurl}/Organization/addrank`, requestOptions.post(req))
        .then(handleResponse)
}

function getRanks() {
    return fetch(`${config.apiurl}/Organization/ranks`, requestOptions.get())
        .then(handleResponse)
        .then(model => {

            return model
        });
}

function updateRank(id, rank, readHoliday, readLeave, readAssets, readTimesheet,
    writeHoliday, writeLeave, writeAssets, writeTimesheet,
    deleteHolidays, deleteLeave, deleteAssets, deleteTimesheet, permissionid) {
    var req = {
        id,
        rankName: rank,
        rankPermission: {
            id: permissionid,
            RankId: id,
            readHoliday,
            readLeave,
            readAssets,
            readTimesheet,
            writeHoliday,
            writeLeave,
            writeAssets,
            writeTimesheet,
            deleteHolidays,
            deleteLeave,
            deleteAssets,
            deleteTimesheet
        }
    }
    return fetch(`${config.apiurl}/Organization/updaterank/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function removeRank(id) {
    return fetch(`${config.apiurl}/Organization/DeleteRank?id=${id}`, requestOptions.delete())
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

function registerAsHR(companyId, firstName, lastName, address, gender, phone, email) {
    var req = {
        companyId: companyId,
        firstName,
        lastName,
        phone,
        email,
        address,
        gender
    }
    return fetch(`${config.apiurl}/employee/postHR`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function addLeaveType(name) {
    var req = {
        name: name
    }
    return fetch(`${config.apiurl}/Organization/addleavetype`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getLeaveTypes() {

    return fetch(`${config.apiurl}/Organization/leavetypes`, requestOptions.get())
        .then(handleResponse)
        .then(model => {

            return model
        });
}

function getAccountSetting(id) {

    return fetch(`${config.apiurl}/company/GetAccount?id=${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {

            return model
        });
}

function removeLeaveType(id) {
    return fetch(`${config.apiurl}/Organization/DeleteLeaveType?id=${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function addCompany(name, abbrv, address, contactPerson, phone, email) {
    var req = {
        name, abbrv, address, contactPerson, phone, email
    }
    return fetch(`${config.apiurl}/company`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function addDesignation(name, department) {
    var req = {
        name,
        departmentId: department
    }
    console.log(req)
    return fetch(`${config.apiurl}/Miscellaneous/createDesignation`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getDesignations() {
    return fetch(`${config.apiurl}/Miscellaneous/getDesignations`, requestOptions.get())
        .then(handleResponse)
        .then(model => {

            return model;
        });
}

function getBanks() {
    return fetch(`${config.apiurl}/Miscellaneous/getLookup?type=Banks`, requestOptions.get())
        .then(handleResponse)
        .then(model => {

            return model;
        });
}

function updateDesignation(id, departmentId, name) {
    var req = {
        id,
        departmentId,
        name
    }
    return fetch(`${config.apiurl}/Miscellaneous/updateDesignation`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function removeDesignation(id) {
    return fetch(`${config.apiurl}/Miscellaneous/deleteDesignation?id=${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function addDepartment(name) {
    var req = {
        name
    }
    return fetch(`${config.apiurl}/Miscellaneous/createDepartment`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getDepartments() {
    return fetch(`${config.apiurl}/Miscellaneous/getDepartments`, requestOptions.get())
        .then(handleResponse)
        .then(model => {

            return model;
        });
}

function updateDepartment(id, name) {
    var req = {
        id,
        name
    }
    return fetch(`${config.apiurl}/Miscellaneous/updateDepartment`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function removeDepartment(id) {
    return fetch(`${config.apiurl}/Miscellaneous/deleteDepartment?id=${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(id => {

            return id;
        });
}


function updateCompany(id, name, abbrv, address, contactPerson, phone, email) {
    var req = {
        name, abbrv, address, contactPerson, phone, email
    }
    return fetch(`${config.apiurl}/company?id=${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function updateAccountSetting(id, companyId, bankAccountForSalary, bankCodeForSalary, bankAccountForPension,
    bankCodeForPension, bankAccountForTax, bankCodeForTax, employerCodeForPension, remitaUserAccount, salaryPayDay) {
        var req = {
            companyId: companyId,
            bankAccountForSalary,
            bankCodeForSalary,
            bankAccountForPension,
            bankCodeForPension,
            bankAccountForTax,
            bankCodeForTax,
            employerCodeForPension,
            remitaUserAccount,
            salaryPayDay
        }
    return fetch(`${config.apiurl}/company/putaccount?id=${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function removeCompany(id) {
    return fetch(`${config.apiurl}/company/Inactive?Id=${id}`, requestOptions.put())
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