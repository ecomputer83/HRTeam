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
    updatePerformanceAppraisal,
    removePerformanceAppraisal,
    AddProfessionalExcellenceSettings,
    getProfessionalExcellenceSettings,
    UpdateProfessionalExcellenceSettings,
    removeProfessionalExcellenceSettings
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
    addedBy
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
        addedBy
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
            console.log(model)
            return model
        });

}

function getDesignationPerformance(id) {
    return fetch(`${config.apiurl}/Designation/GetDesignationPerformance/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
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
        addedBy
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
        addedBy
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
    designationId,
    addedBy
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
        addedBy
    }
    return fetch(`${config.apiurl}/Designation/PostPerformanceIndicator`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {

            return id;
        });
}

function getPerformanceAppraisals () {
    return fetch(`${config.apiurl}/Designation/GetPerformanceAppraisals`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
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
    designationId,
    addedBy
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
    addedBy
}
return fetch(`${config.apiurl}/Designation/PutPerformanceIndicator/${id}`, requestOptions.put(req))
    .then(handleResponse)
    .then(id => {
        return id;
    });
}

function removePerformanceAppraisal(id) {
    return fetch(`${config.apiurl}/Designation/DeletePerformanceIndicator/${id}`, requestOptions.delete())
    .then(handleResponse)
    .then(id => {
        return id;
    })
}

function AddProfessionalExcellenceSettings(keyResult, keyPerformanceIndicator, weightAge) {
    var req = {
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

function getProfessionalExcellenceSettings() {
    return fetch(`${config.apiurl}/PerformanceReview/GetProffesionalExcellenceSettings/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            console.log(model)
            return model
        });

}

function UpdateProfessionalExcellenceSettings(id, keyResult, keyPerformanceIndicator, weightAge) {
var req = {
    id,
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