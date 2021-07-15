import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';


export const performanceService = {
    addDesignationPerformance,
    getDesignationPerformances,
    getDesignationPerformance,
    updateDesignationPerformance,
    removeDesignationPerformance,
    addPerformanceAppraisal,
    getPerformanceAppraisals,
    getPerformanceIndicator,
    updatePerformanceAppraisal,
    removePerformanceAppraisal,
    AddProfessionalExcellenceSettings,
    getProfessionalExcellenceSettings,
    UpdateProfessionalExcellenceSettings,
    removeProfessionalExcellenceSettings,
    AddPersonalExcellenceSettings,
    getPersonalExcellenceSettings,
    UpdatePersonalExcellenceSettings,
    removePersonalExcellenceSettings
}

function addDesignationPerformance(
    tech_CE, 
    tech_Marketing, 
    tech_Management, 
    tech_Administration, 
    tech_Presentation, 
    tech_QOW, 
    tech_Efficiency,
    org_Integrity,
    org_professionalism,
    org_Teamwork,
    org_CriticalThinking,
    org_Conflict,
    org_Attendance,
    org_ATMD,
    designationId,
    addedBy,
    status
    ) {
    var req = {
        tech_CE,
        tech_Marketing,
        tech_Management,
        tech_Administration,
        tech_Presentation,
        tech_QOW,
        tech_Efficiency,
        org_Integrity,
        org_professionalism,
        org_Teamwork,
        org_CriticalThinking,
        org_Conflict,
        org_Attendance,
        org_ATMD,
        designationId,
        addedBy,
        status
    }
    return fetch(`${config.apiurl}/Designation/PostDesignationPerformance`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getDesignationPerformances() {
    return fetch(`${config.apiurl}/Designation/GetDesignationPerformances`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            // console.log(model)
            return model
        });

}

function getDesignationPerformance(id) {
    return fetch(`${config.apiurl}/Designation/GetDesignationPerformance/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            // console.log(model)
            return model
        });

}

function getPerformanceIndicator(id) {
    return fetch(`${config.apiurl}/Designation/GetDesignationPerformanceByDesignationId/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            // console.log(model)
            return model
        });

}

function updateDesignationPerformance(
        id,
        tech_CE, 
        tech_Marketing, 
        tech_Management, 
        tech_Administration, 
        tech_Presentation, 
        tech_QOW, 
        tech_Efficiency,
        org_Integrity,
        org_professionalism,
        org_Teamwork,
        org_CriticalThinking,
        org_Conflict,
        org_Attendance,
        org_ATMD,
        designationId,
        addedBy,
        status
    ) {
    var req = {
        id,
        tech_CE,
        tech_Marketing,
        tech_Management,
        tech_Administration,
        tech_Presentation,
        tech_QOW,
        tech_Efficiency,
        org_Integrity,
        org_professionalism,
        org_Teamwork,
        org_CriticalThinking,
        org_Conflict,
        org_Attendance,
        org_ATMD,
        designationId,
        addedBy,
        status
    }
    return fetch(`${config.apiurl}/Designation/PutDesignationPerformance/${id}`, requestOptions.put(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function removeDesignationPerformance(id) {
    return fetch(`${config.apiurl}/Designation/DeleteDesignationPerformance/${id}`, requestOptions.delete())
    .then(handleResponse)
    .then(id => {
        return id;
    })
}

function addPerformanceAppraisal(
    tech_CE, 
    tech_Marketing, 
    tech_Management, 
    tech_Administration, 
    tech_Presentation, 
    tech_QOW, 
    tech_Efficiency,
    org_Integrity,
    org_professionalism,
    org_Teamwork,
    org_CriticalThinking,
    org_Conflict,
    org_Attendance,
    org_ATMD,
    employeeId,
    appraisalDate,
    designationPerformanceId,
    status
    ) {
    var req = {
        tech_CE,
        tech_Marketing,
        tech_Management,
        tech_Administration,
        tech_Presentation,
        tech_QOW,
        tech_Efficiency,
        org_Integrity,
        org_professionalism,
        org_Teamwork,
        org_CriticalThinking,
        org_Conflict,
        org_Attendance,
        org_ATMD,
        employeeId,
        appraisalDate,
        designationPerformanceId,
        status
    }
    return fetch(`${config.apiurl}/PerformanceReview/AddEmployeePerfomanceAppraisal`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getPerformanceAppraisals (id) {
    return fetch(`${config.apiurl}/PerformanceReview/GetAllEmployeePerfomanceAppraisal/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            // console.log(model)
            return model
        });

}

function updatePerformanceAppraisal(
    id,
    tech_CE, 
    tech_Marketing, 
    tech_Management, 
    tech_Administration, 
    tech_Presentation, 
    tech_QOW, 
    tech_Efficiency,
    org_Integrity,
    org_professionalism,
    org_Teamwork,
    org_CriticalThinking,
    org_Conflict,
    org_Attendance,
    org_ATMD,
    employeeId,
    appraisalDate,
    designationPerformanceId,
    status
) {
var req = {
    tech_CE,
    tech_Marketing,
    tech_Management,
    tech_Administration,
    tech_Presentation,
    tech_QOW,
    tech_Efficiency,
    org_Integrity,
    org_professionalism,
    org_Teamwork,
    org_CriticalThinking,
    org_Conflict,
    org_Attendance,
    org_ATMD,
    employeeId,
    appraisalDate,
    designationPerformanceId,
    status: parseInt(status)
}
return fetch(`${config.apiurl}/PerformanceReview/UpdateEmployeePerfomanceAppraisal/${id}`, requestOptions.put(req))
    .then(handleResponse)
    .then(id => {
        return id;
    });
}

function removePerformanceAppraisal(id) {
    return fetch(`${config.apiurl}/PerformanceReview/DeletePerformanceAppraisal/${id}`, requestOptions.delete())
    .then(handleResponse)
    .then(id => {
        return id;
    })
}

function AddProfessionalExcellenceSettings(companyId, keyResult, keyPerformanceIndicator, weightAge) {
    var req = {
        companyId,
        keyResult, 
        keyPerformanceIndicator, 
        weightAge
    }
    return fetch(`${config.apiurl}/PerformanceReview/AddProffesionalExcellenceSettings`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getProfessionalExcellenceSettings(id) {
    return fetch(`${config.apiurl}/PerformanceReview/GetProffesionalExcellenceSettings/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            // console.log(model)
            return model
        });

}

function UpdateProfessionalExcellenceSettings(id, companyId, keyResult, keyPerformanceIndicator, weightAge) {
var req = {
    id,
    companyId,
    keyResult, 
    keyPerformanceIndicator, 
    weightAge
}
return fetch(`${config.apiurl}/PerformanceReview/UpdateProffesionalExcellenceSettings/${id}`, requestOptions.put(req))
    .then(handleResponse)
    .then(id => {
        return id;
    });
}

function removeProfessionalExcellenceSettings(id) {
    return fetch(`${config.apiurl}/PerformanceReview/DeleteProffesionalExcellenceSettings/${id}`, requestOptions.delete())
    .then(handleResponse)
    .then(id => {
        return id;
    })
}

function AddPersonalExcellenceSettings(companyId, keyResult, keyPerformanceIndicator, weightAge) {
    var req = {
        companyId,
        keyResult, 
        keyPerformanceIndicator, 
        weightAge
    }
    return fetch(`${config.apiurl}/PerformanceReview/AddPersonalExcellenceSettings`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getPersonalExcellenceSettings(id) {
    return fetch(`${config.apiurl}/PerformanceReview/GetPersonalExcellenceSettings/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            // console.log(model)
            return model
        });

}

function UpdatePersonalExcellenceSettings(id, companyId, keyResult, keyPerformanceIndicator, weightAge) {
var req = {
    id,
    companyId,
    keyResult, 
    keyPerformanceIndicator, 
    weightAge
}
return fetch(`${config.apiurl}/PerformanceReview/UpdatePersonalExcellenceSettings/${id}`, requestOptions.put(req))
    .then(handleResponse)
    .then(id => {
        return id;
    });
}

function removePersonalExcellenceSettings(id) {
    return fetch(`${config.apiurl}/PerformanceReview/DeletePersonalExcellenceSettings/${id}`, requestOptions.delete())
    .then(handleResponse)
    .then(id => {
        return id;
    })
}