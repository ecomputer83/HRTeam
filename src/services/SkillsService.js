import { BehaviorSubject } from 'rxjs';
import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';


export const skillsService = {
    addSkillType,
    getSkillTypes,
    updateSkillType,
    removeSkillType,
    addSkill,
    getSkills,
    removeSkill,
    updateSkill,
    addskillGrade,
    getskillGrades,
    removeskillGrade,
    updateskillGrade,
    addTerminationType,
    getTerminationTypes
}

function addSkillType(name, companyId) {
    var load = {
        name,
        companyId
    }
    return fetch(`${config.apiurl}/Skill/createSkillType`, requestOptions.post(load))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function getSkillTypes(id) {
    return fetch(`${config.apiurl}/Skill/getSkillTypes?id=${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            return model;
        });
}

function updateSkillType(id, companyId, name) {
    var load = {
        id,
        companyId,
        name
    }
    return fetch(`${config.apiurl}/Skill/updateSkillType`, requestOptions.put(load))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function removeSkillType(id) {
    return fetch(`${config.apiurl}/Skill/deleteSkillType?id=${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function addSkill(companyId, name, description, type) {
    var req = {
        companyId,
        name,
        description,
        type
    }
    return fetch(`${config.apiurl}/Skill/createSkill`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function getSkills(id) {
    return fetch(`${config.apiurl}/Skill/getSkills/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            return model
        });
}

function removeSkill(id) {
    return fetch(`${config.apiurl}/Skill/deleteSkill?id=${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function updateSkill(id, companyId, name, description, type) {
    var load = {
        id,
        companyId,
        name,
        description,
        type
    }
    return fetch(`${config.apiurl}/Skill/updateSkill`, requestOptions.put(load))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function addskillGrade(companyId, name, rating, type) {
    var req = {
        companyId,
        name,
        rating,
        type
    }
    return fetch(`${config.apiurl}/Skill/createSkillGrade`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function getskillGrades(companyId) {
    return fetch(`${config.apiurl}/Skill/getSkillGrades/${companyId}`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            return model
        });
}

function removeskillGrade(id) {
    return fetch(`${config.apiurl}/Skill/deleteSkillGrade?id=${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function updateskillGrade(id, companyId, name, rating, type) {
    var load = {
        id,
        name,
        companyId,
        rating,
        type
    }
    return fetch(`${config.apiurl}/Skill/updateSkillGrade`, requestOptions.put(load))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function addTerminationType(name) {
  var load = {
    name
  }
  return fetch(`${config.apiurl}/Miscellaneous/createTerminationType`, requestOptions.post(load))
      .then(handleResponse)
      .then(id => {
          return id;
      });
}

function getTerminationTypes() {
  return fetch(`${config.apiurl}/Miscellaneous/getTerminationTypes`, requestOptions.get())
      .then(handleResponse)
      .then(model => {
          return model;
      });
}

