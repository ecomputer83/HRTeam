import { BehaviorSubject } from 'rxjs';
import config from '../../config/index';
import requestOptions from '@/helpers/RequestOptions';
import handleResponse from '@/helpers/HandleResponses';

export const attendanceService = {
    addEmployeeTimetable,
    getEmployeeTimetable,
    removeEmployeeTimetable,
    getMonthlyattendance,
    updateEmployeeTimetable
}

function addEmployeeTimetable(employeeId, attendedDate, punchInTime) {
    var req = {
        attendedDate,
        punchInTime,
        punchOutTime: null,
        employeeId
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

function getMonthlyattendance(id, month, year) {
    return fetch(`${config.apiurl}/Employee/GetMonthlyAAttendanceReview/${id}?month=${month}&year=${year}`, requestOptions.get())
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

function updateEmployeeTimetable(id, employeeId, attendedDate, punchInTime, punchOutTime) {
    var data = {
        employeeId, attendedDate, punchInTime, punchOutTime
    }
    return fetch(`${config.apiurl}/Employee/UpdateEmployeeTimetable/${id}`, requestOptions.put(data))
        .then(handleResponse)
        .then(id => {
            return id;
        });
}