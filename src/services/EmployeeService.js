import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';

export const employeeService = {
    addEmployee,
    changeEmployeePhoto,
    addEmployeeExperience,
    addEmployeeEducation,
    addEmployeeEmergency,
    addEmployeeBank,
    addEmployeeFamily,
    addEmployeeStatutory,
    updateEmployee,
    updateEmployeeExperience,
    updateEmployeeEducation,
    updateEmployeeEmergency,
    updateEmployeeBank,
    updateEmployeeFamily,
    updateEmployeeStatutory,
    getEmployees,
    getEmployeeDetail,
    removeEmployee,
    removeEmployeeEducation,
    removeEmployeeExperience,
    removeEmployeeFamily,
    removeEmployeeEmergency,
    updateEmployeePersonalInfo,
    updateEmployeeProfileInfo,
    removeEmployeePension,
    addEmployeeLeave,
    getEmployeeLeaves,
    //getEmployeeLeaves
    updateEmployeeLeave,
    removeEmployeeLeave,
    addEmployeeResignation,
    getEmployeeResignations,
    updateEmployeeResignation,
    removeEmployeeResignation,
    getEmployeeTerminations,
    addEmployeeTermination,
    updateEmployeeTermination,
    removeEmployeeTermination,
    getEmployeeSalary,
    addEmployeeSalary,
    updateEmployeeSalary,
    removeEmployeeSalary,
    addEmployeePromotion,
    getPromotions,
    removeEmployeePromotion,
    updateEmployeePromotion,
    addExpenseClaim,
    getExpenseClaim,
    getEmployeeSalaries,
    getPaidSalaries,
    addDisciplinaryMeasure,
    getDisciplinaryMeasure,
    getDisciplinaryMeasures,
    updateDisciplinaryMeasure,
    removeDisciplinaryMeasure,
    addQuery,
    removeQuery,
    updateQuery,
    getQuery,
    getQueries,
    getallEmployeeSalaries,
    getDesignation

}



// function addEmployeeResignation(id, employeeId, designationId, name, reason, noticeDate, resignationDate) {
//     var data = {
//         id, employeeId, name, reason, noticeDate, resignationDate, designationId,
//     }
//     return fetch(`${config.apiurl}/Employee/PostEmployeeResignation`, requestOptions.post(data))
//         .then(handleResponse)
//         .then(id => {
//             return id;
//         })
// }

// function getEmployeeResignation(companyId) {

//     return fetch(`${config.apiurl}/Employee/GetEmployeeResignation/${companyId}$`, requestOptions.get())
//         .then(handleResponse)
//         .then(model => {

//             return model
//         });

// }

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

function changeEmployeePhoto(file, id) {
    let formData = new FormData();
    formData.append('file', file);
    return fetch(`${config.apiurl}/employee/PostEmployeePhoto/${id}`, requestOptions.postForm(formData))
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

function addEmployeeStatutory(employeeId, salary, pf, tax) {
    salary.employeeId = employeeId
    pf.employeeId = employeeId
    tax.employeeId = employeeId
    fetch(`${config.apiurl}/employee/PostEmployeeTax`, requestOptions.post(tax))
    return fetch(`${config.apiurl}/employee/PostEmployeeStatutory`, requestOptions.post(salary))
        .then(handleResponse)
        .then(id => {
            fetch(`${config.apiurl}/employee/PostEmployeePension`, requestOptions.post(pf))
            return id;
        });
}

function updateEmployee(id, companyId, rankId, firstName, lastName, email, phone, designationId) {
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
function updateEmployeeStatutory(employeeId, salary, pf, tax) {
    salary.employeeId = employeeId
    pf.employeeId = employeeId
    tax.employeeId = employeeId
    if(tax.id != 0){
        fetch(`${config.apiurl}/employee/UpdateEmployeeTax/${tax.id}`, requestOptions.put(tax))
    }else{
        fetch(`${config.apiurl}/employee/PostEmployeeTax`, requestOptions.post(tax))
    }
    return fetch(`${config.apiurl}/employee/UpdateEmployeeStatutory/${salary.id}`, requestOptions.put(salary))
        .then(handleResponse)
        .then(id => {
            if(pf.id != 0){
                fetch(`${config.apiurl}/employee/UpdateEmployeePension/${pf.id}`, requestOptions.put(pf))
            }else{
                fetch(`${config.apiurl}/employee/PostEmployeePension`, requestOptions.post(pf))
            }
            return id;
        });
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

function updateEmployeeExperience(id, employeeId, companyName, position, startYear, endYear) {
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

function updateEmployeeEducation(id, employeeId, institute, discipline, startYear, endYear) {
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

function updateEmployeeEmergency(id, employeeId, name, relationship, phone1, phone2, sid, sname, srelationship, sphone1, sphone2) {
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

function updateEmployeeBank(id, employeeId, bankAccountNumber, bankName) {
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

function getEmployeeLeaves(companyId) {
    return fetch(`${config.apiurl}/employee/GetEmployeeLeaves/${companyId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}



function removeEmployee(employeeId) {
    console.log(employeeId)
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

function removeEmployeePension(Id) {

    return fetch(`${config.apiurl}/employee/DeleteEmployeePension/${Id}`, requestOptions.delete())
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

function addEmployeeLeave(companyId, employeeId, fromDate, toDate, reason, leaveType) {
    var req = {
        companyId,
        employeeId,
        fromDate,
        toDate,
        reason,
        leaveTypeId: leaveType,
        approvedBy: 0
    }
    //console.log(req)
    return fetch(`${config.apiurl}/Employee/PostEmployeeLeave`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

// function getEmployeeLeaves(id) {
//   return fetch(`${config.apiurl}/Employee/GetEmployeeLeaves/${id}`, requestOptions.get())
//       .then(handleResponse)
//       .then(model => {

//           return model;
//       });
// }

function updateEmployeeLeave(id, companyId, employeeId, fromDate, toDate, reason, leaveType) {
    var req = {
        companyId,
        employeeId,
        fromDate,
        toDate,
        reason,
        leaveTypeId: leaveType,
        approvedBy: 0
    }
    return fetch(`${config.apiurl}/Employee/UpdateEmployeeLeave/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function removeEmployeeLeave(id) {

    return fetch(`${config.apiurl}/Employee/DeleteEmployeeLeave/${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function getEmployeeTerminations(companyId) {
    return fetch(`${config.apiurl}/Employee/GetEmployeeTerminations/${companyId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}

function addEmployeeTermination(date, reason, noticeDate, terminationTypeId, employeeId) {
    var req = {
        date,
        reason,
        noticeDate,
        terminationTypeId,
        employeeId
    }
    //console.log(req)
    return fetch(`${config.apiurl}/Employee/PostEmployeeTermination`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function updateEmployeeTermination(id, date, reason, noticeDate, terminationTypeId, employeeId) {

    var req = {
        id,
        date,
        reason,
        noticeDate,
        terminationTypeId,
        employeeId
    }
    return fetch(`${config.apiurl}/Employee/UpdateEmployeeTermination/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function removeEmployeeTermination(id) {

    return fetch(`${config.apiurl}/Employee/DeleteEmployeeTermination/${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function addEmployeeResignation(resignationDate, reason, noticeDate, employeeId) {
    var req = {
        resignationDate,
        reason,
        noticeDate,
        employeeId
    }
    return fetch(`${config.apiurl}/Employee/PostEmployeeResignation`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getEmployeeResignations(companyId) {
    return fetch(`${config.apiurl}/Employee/GetEmployeeResignations/${companyId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}

function removeEmployeeResignation(id) {

    return fetch(`${config.apiurl}/Employee/DeleteEmployeeResignation/${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function updateEmployeeResignation(id, resignationDate, reason, noticeDate, employeeId) {

    var req = {
        id,
        resignationDate,
        reason,
        noticeDate,
        employeeId
    }
    return fetch(`${config.apiurl}/Employee/UpdateEmployeeResignation/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function addEmployeePromotion(from, to, date, employeeId, companyId) {
    var req = {
        from,
        to,
        date,
        employeeId,
        companyId
    }
    return fetch(`${config.apiurl}/Expense/PostExpensePromotion`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getPromotions(companyid) {
    return fetch(`${config.apiurl}/Expense/GetPromotions/${companyid}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            return model
        });
}



function removeEmployeePromotion(id) {
    return fetch(`${config.apiurl}/Expense/DeleteExpensePromotion/${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });
}

function updateEmployeePromotion(from, to, date, employeeId, companyId) {
    var req = {
        from,
        to,
        date,
        employeeId,
        companyId
    }
    return fetch(`${config.apiurl}/Expense/PutExpensePromotion`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function addExpenseClaim(date, remark, amount, assignee) {
    var req = {
        date,
        remark,
        amount,
        assignee,
        approval: null,
        approvalDate: null
    }
    //console.log(req)
    return fetch(`${config.apiurl}/Expense/PostExpenseClaim`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getExpenseClaim(id) {
    return fetch(`${config.apiurl}/Expense​/GetExpenseClaim​/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}

function addEmployeeSalary(basic, hra, ma, pf, leave, allowance, leaveAllowance, hmo, tax, netSalary, employeeId) {
    var req = {
        basic,
        hra,
        ma,
        pf,
        leave,
        allowance,
        leaveAllowance,
        hmo,
        tax,
        netSalary,
        employeeId
    }
    return fetch(`${config.apiurl}/employee/postEmployeeSalary`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getEmployeeSalary(id) {
    return fetch(`${config.apiurl}/Employee/GetEmployeeSalary/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}

function getDesignation(id) {
    return fetch(`${config.apiurl}/Designation/GetDesignationByEmployee?id=${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}

function getEmployeeSalaries(id) {
    return fetch(`${config.apiurl}/Employee/GetallEmployeeSalaries/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}
function getallEmployeeSalaries(id, month, year) {
    return fetch(`${config.apiurl}/Employee/GetallPrevEmployeeSalaries/${id}?month=${month}&year=${year}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}

function updateEmployeeSalary(id, basic, hra, ma, pf, leave, allowance, leaveAllowance, hmo, tax, netSalary, employeeId) {

    var req = {
        basic,
        hra,
        ma,
        pf,
        leave,
        allowance,
        leaveAllowance,
        hmo,
        tax,
        netSalary,
        employeeId
    }
    
    return fetch(`${config.apiurl}/Employee/UpdateEmployeeSalary/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function removeEmployeeSalary(id) {

    return fetch(`${config.apiurl}/Employee/DeleteEmployeeSalary/${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function getPaidSalaries(id) {
    return fetch(`${config.apiurl}/Employee/GetPaidSalaries/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}

function addDisciplinaryMeasure(date, hrManager, form, reason, remark, employeeId) {
    var req = {
        date,
        hrManager,
        form,
        reason,
        remark,
        employeeId
    }
    return fetch(`${config.apiurl}/Employee/PostDisciplinaryMeasure`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getDisciplinaryMeasure() {
    return fetch(`${config.apiurl}/Employee/GetDisciplinaryMeasure/${this.employeeId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });
}

function getDisciplinaryMeasures(companyId) {
    return fetch(`${config.apiurl}/Employee/GetDisciplinaryMeasures/${companyId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });
}

function updateDisciplinaryMeasure(id, date, hrManager, form, reason, remark, employeeId) {
    var req = {
        id,
        date,
        hrManager,
        form,
        reason,
        remark,
        employeeId
    }
    return fetch(`${config.apiurl}/Employee/UpdateDisciplinaryMeasure/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function removeDisciplinaryMeasure(id) {

    return fetch(`${config.apiurl}/Employee/DeleteDisciplinaryMeasure/${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}

function addQuery(date, hrManager, form, accusation, remark, employeeId) {
    var req = {
        date,
        form,
        accusation,
        remark,
        employeeId
    }
    return fetch(`${config.apiurl}/Employee/PostQuery`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getQuery() {
    return fetch(`${config.apiurl}/Employee/GetQuery/${this.employeeId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });
}

function getQueries(companyId) {
    return fetch(`${config.apiurl}/Employee/GetQueries/${companyId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });
}

function updateQuery(id, date, form, reason, remark, employeeId) {
    var req = {
        id,
        date,
        form,
        accusation,
        remark,
        employeeId
    }
    return fetch(`${config.apiurl}/Employee/UpdateQuery/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function removeQuery(id) {

    return fetch(`${config.apiurl}/Employee/DeleteQuery/${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}