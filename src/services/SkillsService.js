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
    updateSkill
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

function getSkillTypes() {
    return fetch(`${config.apiurl}/Skill/getSkillTypes`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            return model
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
    return fetch(`${config.apiurl}/Skill/deleteSkillType/${id}`, requestOptions.delete())
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

function getSkills() {
    return fetch(`${config.apiurl}/Skill/getSkills`, requestOptions.get())
        .then(handleResponse)
        .then(model => {
            return model
        });
}

function removeSkill(id) {
    return fetch(`${config.apiurl}/Skill/deleteSkill/${id}`, requestOptions.delete())
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
    return fetch(`${config.apiurl}/api/Skill/updateSkill`, requestOptions.put(load))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}
