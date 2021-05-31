import { BehaviorSubject } from 'rxjs';
import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';


export const jobService = {
    addJobProfile,
    updateJobProfile,
    getJobProfile,
    getJobProfiles,
    getJobProfession,
    getJobSkillLevels,
    addJobSkillLevel,
    addVacancy,
    updateVacancy,
    getVancancies,
    getVancanciesByOrg,
    getVancancyById,
    getVacancySummaries,
    removeJobProfiles,
    getApplications,
    getAcceptedApplications,
    getApplication,
    createApplicationInterview,
    createApplicationScore,
    createApplicationFaceInterview,
    createApplicationNegotiation,
    updateApplication,
    updateApplicationInterview,
    updateApplicationScore,
    updateApplicationFaceInterview,
    updateApplicationNegotiation,
    applyJob
}

function addJobProfile(companyId, rankId, departmentId, title, experience, description, salaryMin, salaryMax, averageSalary, educationRequirement, educationDegree) {
    var load = {
        rankId,
        companyId,
        departmentId,
        title,
        experience,
        description,
        salaryMin,
        salaryMax,
        averageSalary,
        status: 1
    }
    return fetch(`${config.apiurl}/Job`, requestOptions.post(load))
        .then(handleResponse)
        .then(id => {
            var payload = {
                jobProfileId: id,
                educationRequirement,
                educationDegree
            }
            fetch(`${config.apiurl}/Job/createJobProfession`, requestOptions.post(payload))
                .then(handleResponse)
        });
}

function addJobSkillLevel(profileId, skillLevel) {
    skillLevel.jobProfileId = profileId
    return fetch(`${config.apiurl}/Job/createJobSkillLevel`, requestOptions.post(skillLevel))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function addVacancy(vacancy) {

    return fetch(`${config.apiurl}/Job/createVacancy`, requestOptions.post(vacancy))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function applyJob(id, companyId, firstName, lastName, salutation, gender, phone1, phone2, email, address, cv) {
    let formData = new FormData();
    formData.append('CompanyId', companyId);
    formData.append('FirstName', firstName);
    formData.append('LastName', lastName);
    formData.append('Salutation', salutation);
    formData.append('Gender', gender);
    formData.append('Phone1', phone1);
    formData.append('Phone2', phone2);
    formData.append('Email', email);
    formData.append('Address', address);
    formData.append('Uploadfile', cv);
    return fetch(`${config.apiurl}/application/applyJob/${id}`, requestOptions.postForm(formData))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function updateVacancy(vacancy) {

    return fetch(`${config.apiurl}/Job/updateVacancy`, requestOptions.put(vacancy))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function updateApplication(application) {

    return fetch(`${config.apiurl}/Application/PutApplication/${application.id}`, requestOptions.put(application))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function updateApplicationInterview(interview) {

    return fetch(`${config.apiurl}/Application/PutApplicationInterview/${interview.id}`, requestOptions.put(interview))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function updateApplicationFaceInterview(interview) {

    return fetch(`${config.apiurl}/Application/PutApplicationFaceToView/${interview.id}`, requestOptions.put(interview))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function updateApplicationScore(interview) {

    return fetch(`${config.apiurl}/Application/PutApplicationScore/${interview.id}`, requestOptions.put(interview))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function updateApplicationNegotiation(negotiation) {

    return fetch(`${config.apiurl}/Application/PutApplicationNegotiation/${negotiation.id}`, requestOptions.put(negotiation))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function createApplicationInterview(applicationId, interview) {
    interview.applicationId = applicationId
    return fetch(`${config.apiurl}/application/postApplicationInterview`, requestOptions.post(interview))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function createApplicationFaceInterview(applicationId, interview) {
    interview.applicationId = applicationId
    return fetch(`${config.apiurl}/application/postApplicationFaceToView`, requestOptions.post(interview))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function createApplicationScore(applicationId, interview) {
    interview.applicationId = applicationId
    return fetch(`${config.apiurl}/application/postApplicationScore`, requestOptions.post(interview))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function createApplicationNegotiation(applicationId, interview) {
    interview.applicationId = applicationId
    return fetch(`${config.apiurl}/application/postApplicationNegotiation`, requestOptions.post(interview))
        .then(handleResponse)
        .then(id => {
            return id
        });
}

function getVancancies(id) {
    return fetch(`${config.apiurl}/Job/getVacancies?Id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function getApplications(id) {
    return fetch(`${config.apiurl}/Application/GetAllApplication/${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}


function getAcceptedApplications(id) {
    return fetch(`${config.apiurl}/Application/GetAcceptedApplication/${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function getApplication(id) {
    return fetch(`${config.apiurl}/Application/GetApplicationbById/${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}


function getVacancySummaries(id) {
    return fetch(`${config.apiurl}/Job/getVacancySummaries?Id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function getVancanciesByOrg() {
    return fetch(`${config.apiurl}/Job/getVacanciesByOrg`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function getVancancyById(id) {
    return fetch(`${config.apiurl}/Job/getVacancyById?Id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}



function updateJobProfile(id, professionId, rankId, departmentId, title, experience, description, salaryMin, salaryMax, averageSalary, qualification, educationRequirement, educationDegree, status) {

    getJobProfile(id)
    .then(
        model => {
            model.rankId = rankId
            model.departmentId = departmentId
            model.title = title
            model.experience = experience
            model.description = description
            model.salaryMax = salaryMax
            model.salaryMin = salaryMin
            model.averageSalary = averageSalary
            model.status = status

            return fetch(`${config.apiurl}/Job`, requestOptions.post(model))
                .then(handleResponse)
                .then(m => {
                    var payload = {
                        id: professionId,
                        jobProfileId: id,
                        educationRequirement,
                        educationDegree
                    }
                    fetch(`${config.apiurl}/Job/UpdateJobProfession`, requestOptions.post(payload))
                        .then(handleResponse)
                });
            }
        )
}

function getJobProfile(id) {
    return fetch(`${config.apiurl}/Job?Id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function getJobSkillLevels(id) {
    return fetch(`${config.apiurl}/Job/getJobSkillLevels?Id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function getJobProfession(id) {
    return fetch(`${config.apiurl}/Job/GetJobProfessionByProfileId?id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function getJobProfiles(id) {
    return fetch(`${config.apiurl}/Job/GetJobProfiles?Id=${id}`, requestOptions.get())
                .then(handleResponse)
                .then( model => { return model })
}

function removeJobProfiles(id) {

    return fetch(`${config.apiurl}/Job?Id=${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(model => {
            return model
        });

}