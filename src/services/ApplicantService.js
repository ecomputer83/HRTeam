import { BehaviorSubject } from 'rxjs';
import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';

export const applicantService = {
    getAllApplicant
}

function getAllApplicant(id) {
    return fetch(`${config.apiurl}/Miscellaneous/getAllApplicant?Id=${id}`, requestOptions.get())
    .then(handleResponse)
    .then(model => {
        return model
    });
}