import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';

export const employeeService = {
    addEmployee,
    addEmployeeExperience,
    addEmployeeEducation,
    addEmployeeEmergency,
    addEmployeeBank,
    addEmployeeFamily,
    updateEmployee,
    updateEmployeeExperience,
    updateEmployeeEducation,
    updateEmployeeEmergency,
    updateEmployeeBank,
    updateEmployeeFamily,
    getEmployees,
    getEmployeeDetail,
    removeEmployee,
    removeEmployeeEducation,
    removeEmployeeExperience,
    removeEmployeeFamily,
    removeEmployeeEmergency,
    updateEmployeePersonalInfo,
    updateEmployeeProfileInfo
}

function addEmployee(companyId, rankId, firstName, lastName, email, phone, designationId) {
    var req = {
        rankId,
        companyId,
        firstName,
        lastName,
        email,
        phone,
        designationId,
    }
    return fetch(`${config.apiurl}/employee/PostEmployee`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function addEmployeeExperience(employeeId, companyName, position, startYear, endYear) {
    var req = {
        employeeId,
        companyName,
        position,
        startYear,
        endYear
    }
    return fetch(`${config.apiurl}/employee/PostEmployeeExp`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function addEmployeeEducation(employeeId, institute, discipline, startYear, endYear) {
    var req = {
        employeeId,
        institute,
        discipline,
        startYear,
        endYear
    }
    return fetch(`${config.apiurl}/employee/PostEmployeeEducation`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function addEmployeeEmergency(employeeId, name, relationship, phone1, phone2, sname, srelationship, sphone1, sphone2) {
    var req = {
        employeeId,
        name,
        relationship,
        phone1,
        phone2
    }
    return fetch(`${config.apiurl}/employee/PostEmployeeEmergency`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {
                var req = {
                    employeeId,
                    name: sname,
                    relationship: srelationship,
                    phone1: sphone1,
                    phone2: sphone2
                }


            return fetch(`${config.apiurl}/employee/PostEmployeeEmergency`, requestOptions.post(req))
        .then(handleResponse);
        });
}

function addEmployeeBank(employeeId, bankAccountNumber, bankName) {
    var req = {
        employeeId,
        bankAccountNumber,
        bankName
    }
    return fetch(`${config.apiurl}/employee/PostEmployeeBank`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function addEmployeeFamily(employeeId, name, relationship, phoneNo) {
    var req = {
        employeeId,
        name,
        relationship,
        phoneNo
    }
    return fetch(`${config.apiurl}/employee/PostEmployeeFamily`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function updateEmployee( id, companyId, rankId, firstName, lastName, email, phone, designationId) {
    this.getEmployeeDetail(id)
    .then(model => {
    var req = {
        id,
        rankId,
        companyId,
        firstName,
        lastName,
        email,
        phone,
        designationId,
    }
    return fetch(`${config.apiurl}/employee/UpdateEmployee/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
    });
}

function updateEmployeePersonalInfo(id, passportIdentificationNumber, nationality, phone, religion, maritalStatus) {
    this.getEmployeeDetail(id)
    .then(model => {
        model.passportIdentificationNumber = passportIdentificationNumber;
        model.nationality = nationality,
        model.phone = phone,
        model.religion = religion,
        model.maritalStatus = maritalStatus

        fetch(`${config.apiurl}/employee/UpdateEmployee/${id}`, requestOptions.put(model))
        .then(handleResponse)
        .then(id => {

            return id;
        });

        return model;
    })
}

function updateEmployeeProfileInfo(id, firstName, lastName, phone, birthday, gender, address) {
    this.getEmployeeDetail(id)
    .then(model => {
        model.firstName = firstName;
        model.lastName = lastName,
        model.phone = phone,
        model.birthday = birthday,
        model.gender = gender,
        model.address = address

        fetch(`${config.apiurl}/employee/UpdateEmployee/${id}`, requestOptions.put(model))
        .then(handleResponse)
        .then(id => {

            return id;
        });

        return model;
    })
}

function updateEmployeeExperience( id, employeeId, companyName, position, startYear, endYear) {
    var req = {
        employeeId,
        companyName,
        position,
        startYear,
        endYear
    }
    return fetch(`${config.apiurl}/employee/UpdateEmployeeExperience/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function updateEmployeeEducation( id, employeeId, institute, discipline, startYear, endYear) {
    var req = {
        employeeId,
        institute,
        discipline,
        startYear,
        endYear
    }
    return fetch(`${config.apiurl}/employee/UpdateEmployeeEducation/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function updateEmployeeEmergency( id, employeeId, name, relationship, phone1, phone2, sid, sname, srelationship, sphone1, sphone2) {
    var req = {
        employeeId,
        name,
        relationship,
        phone1,
        phone2
    }
    return fetch(`${config.apiurl}/employee/UpdateEmployeeEmergency/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            var req = {
                employeeId,
                name: sname,
                relationship: srelationship,
                phone1: sphone1,
                phone2: sphone2
            }
            return fetch(`${config.apiurl}/employee/UpdateEmployeeEmergency/${sid}`, requestOptions.put(req))
            .then(handleResponse);
        });
}

function updateEmployeeBank( id, employeeId, bankAccountNumber, bankName) {
    var req = {
        employeeId,
        bankAccountNumber,
        bankName
    }
    return fetch(`${config.apiurl}/employee/PostEmployeeBank/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function updateEmployeeFamily(id, employeeId, name, relationship, phoneNo) {
    var req = {
        employeeId,
        name,
        relationship,
        phoneNo
    }
    return fetch(`${config.apiurl}/employee/UpdateEmployeeFamily/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getEmployees(companyId) {

    return fetch(`${config.apiurl}/employee/Getallemployees/${companyId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {

            return model
        });

}

function getEmployeeDetail(employeeId) {

    return fetch(`${config.apiurl}/employee/GetEmployee/${employeeId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function removeEmployee(employeeId) {

    return fetch(`${config.apiurl}/employee/DeleteEmployee/${employeeId}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function removeEmployeeEducation(Id) {

    return fetch(`${config.apiurl}/employee/DeleteEmployeeEducation/${Id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function removeEmployeeExperience(Id) {

    return fetch(`${config.apiurl}/employee/DeleteEmployeeExperience/${Id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function removeEmployeeFamily(Id) {

    return fetch(`${config.apiurl}/employee/DeleteEmployeeFamily/${Id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}
function removeEmployeeEmergency(Id) {

    return fetch(`${config.apiurl}/employee/DeleteEmployeeEmergency/${Id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

