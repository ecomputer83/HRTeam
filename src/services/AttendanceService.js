import { BehaviorSubject } from 'rxjs';
import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';

export const attendanceService = {
    addEmployeeTimetable,
    getEmployeeTimetable,
    removeEmployeeTimetable,
    updateEmployeeTimetable
}

function addEmployeeTimetable(employee, attendedDate, time, punch) {
    var req = {
        attendedDate,
        time,
        punch,
        employeeId: employee
    }
    return fetch(`${config.apiurl}/Employee/PostEmployeeTimetable`, requestOptions.post(req))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function getEmployeeTimetable(id) {
    return fetch(`${config.apiurl}/Employee/GetEmployeeTimetable/${id}`, requestOptions.get())
        .then(handleResponse)
        .then(id => {
            return id;
        });
}

function removeEmployeeTimetable(id) {
    return fetch(`${config.apiurl}/Employee/DeleteEmployeeTimetable/${id}`, requestOptions.delete())
        .then(handleResponse)
        .then(id => {
            return id;
        });

}

function updateEmployeeTimetable(id, employee, attendedDate, time, punch) {
    var data = {
        employee, attendedDate, time, punch
    }
    return fetch(`${config.apiurl}/Employee/UpdateEmployeeTimetable/${id}`, requestOptions.put(data))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}