<template>
    <div class="performanceappraisal">
        <div class="main-wrapper">
            <layout-header></layout-header>
            <layout-sidebar></layout-sidebar>
            <!-- Page Wrapper -->
            <div class="page-wrapper">

                <!-- Page Content -->
                <div class="content container-fluid">

                    <!-- Page Header -->
                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Performance Appraisal</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/index">Dashboard</router-link>
                                    </li>
                                    <li class="breadcrumb-item active">Performance</li>
                                </ul>
                            </div>
                            <div class="col-auto float-right ml-auto">
                                <a @click="openDialog" class="btn add-btn" data-toggle="modal" data-target="#add_appraisal"><i
                                        class="fa fa-plus"></i> Add New</a>
                            </div>
                        </div>
                    </div>
                    <!-- /Page Header -->
                    <!----Datatable-->
                    <div class="row">
                        <div class="col-md-12">
                        <div class="table-responsive">

                    <v-data-table
                        :headers="headers"
                        :items="performanceAppraisals"
                        sort-by=""
                        class="elevation-1"
                    >
                        <template v-slot:[`item.actions`]="{ item }">
        
                            <div class="dropdown dropdown-action">
                                <a
                                    href="#"
                                    class="action-icon dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                    ><i class="material-icons">more_vert</i></a
                                >
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a
                                    class="dropdown-item"
                                    @click="setEditPerformance(item)"
                                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                                    >
                                    <a
                                    class="dropdown-item"
                                    @click="setDeletePerformance(item)"
                                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                                    >
                                </div>
                            </div>
                        </template>
                        <template v-slot:[`item.profile`]="{ item }">
                            <h2 class="table-avatar blue-link">
                                <router-link to="/profile" class="avatar"
                                    ><img alt="" src="~@/assets/profiles/avatar-02.jpg"
                                /></router-link>
                                <router-link to="/profile">{{
                                    `${item.employee.firstName} ${item.employee.lastName}`
                                }}</router-link>
                            </h2>
                        </template>
                        <template v-slot:[`item.status`]="{ item }">
                        {{item.status == 1 ? 'Active': 'Inactive'}}
                        </template>
                    </v-data-table>
                            </div>
                        </div>
                    </div>
                    <!---/Datatable-->
                </div>
                <!-- /Page Content -->

                <!-- Add Performance Appraisal Modal -->
                <v-dialog v-model="dialog" max-width="725px">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Give Performance Appraisal</h5>
                            <button type="button" class="close" @click="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="onSubmit">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <!-- <div class="form-group">
                                            <label class="col-form-label">Employee</label>
                                            <select class="select">
                                                <option>Select Employee</option>
                                                <option>John Doe</option>
                                                <option>Mike Litorus</option>
                                            </select>
                                        </div> -->
                                        <div class="form-group">
                                            <label>Select Employee <span class="text-danger">*</span></label>
                                            <select class="form-control" v-model="employeeId" @change="onEmployeeChange($event)">
                                            <option>Select Staff</option>
                                            <option
                                                v-for="member in employees"
                                                :key="member.id"
                                                :value="member.id"
                                            >
                                                {{ member.lastName + " " + member.firstName }}
                                            </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Select Date <span class="text-danger">*</span></label>
                                            <div class="cal-icon">
                                                <datepicker
                                                    v-model="appraisaldate"
                                                    bootstrap-styling
                                                    class="form-control datetimepicker"
                                                    type="date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12" v-if="indicator">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="tab-box">
                                                    <div class="row user-tabs">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                                            <ul class="nav nav-tabs nav-tabs-solid">
                                                                <li class="nav-item"><a href="#appr_technical"
                                                                        data-toggle="tab"
                                                                        class="nav-link active">Technical</a></li>
                                                                <li class="nav-item"><a href="#appr_organizational"
                                                                        data-toggle="tab"
                                                                        class="nav-link">Organizational</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-content">
                                                    <div id="appr_technical"
                                                        class="pro-overview tab-pane fade show active">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="bg-white">
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th colspan="5">Technical
                                                                                    Competencies</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th colspan="2">Indicator</th>
                                                                                <th colspan="2">Expected Value</th>
                                                                                <th>Set Value</th>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Customer
                                                                                    Experience</td>
                                                                                <td colspan="2">{{indicator.tech_CE}}</td>
                                                                                <td><select
                                                                                        v-model="tech_CE"
                                                                                        name="customer_experience"
                                                                                        class="form-control"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Marketing</td>
                                                                                <td colspan="2">{{indicator.tech_Marketing}}</td>
                                                                                <td><select name="marketing"
                                                                                        class="form-control"
                                                                                        v-model="tech_Marketing"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Management</td>
                                                                                <td colspan="2">{{indicator.tech_Management}}</td>
                                                                                <td><select name="management"
                                                                                        class="form-control"
                                                                                        v-model="tech_Management"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Administration</td>
                                                                                <td colspan="2">{{indicator.tech_Administration}}</td>
                                                                                <td><select name="administration"
                                                                                        class="form-control"
                                                                                        v-model="tech_Administration"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Presentation Skill</td>
                                                                                <td colspan="2">{{indicator.tech_Presentation}}</td>
                                                                                <td><select
                                                                                        name="presentation_skill"
                                                                                        class="form-control"
                                                                                        v-model="tech_Presentation"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Quality
                                                                                    Of Work</td>
                                                                                <td colspan="2">{{indicator.tech_QOW}}</td>
                                                                                <td><select name="quality_of_work"
                                                                                        class="form-control"
                                                                                        v-model="tech_QOW"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Efficiency</td>
                                                                                <td colspan="2">{{indicator.tech_Efficiency}}</td>
                                                                                <td><select name="efficiency"
                                                                                        class="form-control"
                                                                                        v-model="tech_Efficiency"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="appr_organizational">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="bg-white">
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th colspan="5">Organizational
                                                                                    Competencies</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th colspan="2">Indicator</th>
                                                                                <th colspan="2">Expected Value</th>
                                                                                <th>Set Value</th>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Integrity</td>
                                                                                <td colspan="2">{{indicator.org_Integrity}}</td>
                                                                                <td>
                                                                                    <select name="integrity"
                                                                                        class="form-control"
                                                                                        v-model="org_Integrity"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Professionalism</td>
                                                                                <td colspan="2">{{indicator.org_Professionalism}}</td>
                                                                                <td>
                                                                                    <select name="professionalism"
                                                                                        class="form-control"
                                                                                        v-model="org_Professionalism"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Team
                                                                                    Work</td>
                                                                                <td colspan="2">{{indicator.org_Teamwork}}</td>
                                                                                <td>
                                                                                    <select name="team_work"
                                                                                        class="form-control"
                                                                                        v-model="org_Teamwork"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Critical
                                                                                    Thinking</td>
                                                                                <td colspan="2">{{indicator.org_CriticalThinking}}</td>
                                                                                <td>
                                                                                    <select name="critical_thinking"
                                                                                        class="form-control"
                                                                                        v-model="org_CriticalThinking"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Conflict
                                                                                    Management</td>
                                                                                <td colspan="2">{{indicator.org_Conflict}}</td>
                                                                                <td>
                                                                                    <select
                                                                                        v-model="org_Conflict"
                                                                                        name="conflict_management"
                                                                                        class="form-control"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Attendance</td>
                                                                                <td colspan="2">{{indicator.org_Attendance}}</td>
                                                                                <td>
                                                                                    <select name="attendance"
                                                                                        class="form-control"
                                                                                        v-model="org_Attendance"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Ability
                                                                                    To Meet Deadline</td>
                                                                                <td colspan="2">{{indicator.org_ATMD}}</td>
                                                                                <td>
                                                                                    <select
                                                                                        name="ability_to_meet_deadline"
                                                                                        class="form-control"
                                                                                        v-model="org_ATMD"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label class="col-form-label">Status</label>
                                            <select class="form-control" v-model="status">
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </v-dialog>
                <!-- /Add Performance Appraisal Modal -->

                <!-- Edit Performance Appraisal Modal -->
                <v-dialog v-model="dialogEdit" max-width="725px">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Performance Appraisal</h5>
                                <button type="button" class="close" @click="closeEdit">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="onPutSubmit">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label class="col-form-label">Employee</label>
                                                <select class="form-control" v-model="appraisal.employeeId" @change="onEmployeeChange($event)">
                                            <option>Select Staff</option>
                                            <option
                                                v-for="member in employees"
                                                :key="member.id"
                                                :value="member.id"
                                            >
                                                {{ member.lastName + " " + member.firstName }}
                                            </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Select Date <span class="text-danger">*</span></label>
                                            <div class="cal-icon">
                                                <datepicker
                                                    v-model="appraisal.appraisalDate"
                                                    bootstrap-styling
                                                    class="datetimepicker"
                                                    type="date"
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-sm-12" v-if="indicator">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="tab-box">
                                                    <div class="row user-tabs">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                                            <ul class="nav nav-tabs nav-tabs-solid">
                                                                <li class="nav-item"><a href="#appr_technical"
                                                                        data-toggle="tab"
                                                                        class="nav-link active">Technical</a></li>
                                                                <li class="nav-item"><a href="#appr_organizational"
                                                                        data-toggle="tab"
                                                                        class="nav-link">Organizational</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-content">
                                                    <div id="appr_technical"
                                                        class="pro-overview tab-pane fade show active">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="bg-white">
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th colspan="5">Technical
                                                                                    Competencies</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th colspan="2">Indicator</th>
                                                                                <th colspan="2">Expected Value</th>
                                                                                <th>Set Value</th>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Customer
                                                                                    Experience</td>
                                                                                <td colspan="2">{{indicator.tech_CE}}</td>
                                                                                <td><select
                                                                                        v-model="appraisal.tech_CE"
                                                                                        name="customer_experience"
                                                                                        class="form-control"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Marketing</td>
                                                                                <td colspan="2">{{indicator.tech_Marketing}}</td>
                                                                                <td><select name="marketing"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.tech_Marketing"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Management</td>
                                                                                <td colspan="2">{{indicator.tech_Management}}</td>
                                                                                <td><select name="management"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.tech_Management"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Administration</td>
                                                                                <td colspan="2">{{indicator.tech_Administration}}</td>
                                                                                <td><select name="administration"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.tech_Administration"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Presentation Skill</td>
                                                                                <td colspan="2">{{indicator.tech_Presentation}}</td>
                                                                                <td><select
                                                                                        name="presentation_skill"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.tech_Presentation"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Quality
                                                                                    Of Work</td>
                                                                                <td colspan="2">{{indicator.tech_QOW}}</td>
                                                                                <td><select name="quality_of_work"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.tech_QOW"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Efficiency</td>
                                                                                <td colspan="2">{{indicator.tech_Efficiency}}</td>
                                                                                <td><select name="efficiency"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.tech_Efficiency"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="appr_organizational">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="bg-white">
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th colspan="5">Organizational
                                                                                    Competencies</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th colspan="2">Indicator</th>
                                                                                <th colspan="2">Expected Value</th>
                                                                                <th>Set Value</th>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Integrity</td>
                                                                                <td colspan="2">{{indicator.org_Integrity}}</td>
                                                                                <td>
                                                                                    <select name="integrity"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.org_Integrity"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Professionalism</td>
                                                                                <td colspan="2">{{indicator.org_Professionalism}}</td>
                                                                                <td>
                                                                                    <select name="professionalism"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.org_Professionalism"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Team
                                                                                    Work</td>
                                                                                <td colspan="2">{{indicator.org_Teamwork}}</td>
                                                                                <td>
                                                                                    <select name="team_work"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.org_Teamwork"    
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Critical
                                                                                    Thinking</td>
                                                                                <td colspan="2">{{indicator.org_CriticalThinking}}</td>
                                                                                <td>
                                                                                    <select name="critical_thinking"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.org_CriticalThinking"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Conflict
                                                                                    Management</td>
                                                                                <td colspan="2">{{indicator.org_Conflict}}</td>
                                                                                <td>
                                                                                    <select
                                                                                        v-model="appraisal.org_Conflict"
                                                                                        name="conflict_management"
                                                                                        class="form-control"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Attendance</td>
                                                                                <td colspan="2">{{indicator.org_Attendance}}</td>
                                                                                <td>
                                                                                    <select name="attendance"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.org_Attendance"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Ability
                                                                                    To Meet Deadline</td>
                                                                                <td colspan="2">{{org_ATMD}}</td>
                                                                                <td>
                                                                                    <select
                                                                                        name="ability_to_meet_deadline"
                                                                                        class="form-control"
                                                                                        v-model="appraisal.org_ATMD"
                                                                                    >
                                                                                        <option>None
                                                                                        </option>
                                                                                        <option> Beginner
                                                                                        </option>
                                                                                        <option>
                                                                                            Intermediate</option>
                                                                                        <option> Advanced
                                                                                        </option>
                                                                                        <option> Expert /
                                                                                            Leader</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label class="col-form-label">Status</label>
                                                <select class="form-control" v-model="appraisal.status">
                                                    <option value="1">Active</option>
                                                    <option value="0">Inactive</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </v-dialog>
                <!-- /Edit Performance Appraisal Modal -->

                <!-- Delete Performance Appraisal Modal -->
                <v-dialog v-model="dialogDelete" max-width="725px">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-header">
                                    <h3>Delete Performance Appraisal List</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div class="modal-btn delete-action">
                                    <div class="row">
                                        <div class="col-6">
                                            <a href="javascript:void(0);"
                                                class="btn btn-primary continue-btn">Delete</a>
                                        </div>
                                        <div class="col-6">
                                            <a href="javascript:void(0);" data-dismiss="modal"
                                                class="btn btn-primary cancel-btn">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </v-dialog>
                <!-- /Delete Performance Appraisal Modal -->

            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
</template>
<script>
    import LayoutHeader from '@/components/layouts/Header.vue'
    import LayoutSidebar from '@/components/layouts/Sidebar.vue'
    import Datepicker from "vuejs-datepicker"
    import { employeeService} from '@/services/employeeService.js'
    import { authenticationService } from '@/services/authenticationService'
    import { performanceService } from "@/services/performanceService.js"
    export default {
        components: {
            LayoutHeader,
            LayoutSidebar,
            Datepicker
        },
        data () {
            return {
                dialog: false,
                dialogEdit: false,
                dialogDelete: false,
                headers: [
                    { text: 'Employee', value: 'profile' },
                    { text: 'Designation', value: 'employee.designation.name' },
                    { text: 'Department', value: 'employee.designation.department.name' },
                    { text: 'Appraisal Date', value: 'appraisalDate', sortable: false },
                    { text: 'Status', value: 'status', sortable: false },
                    { text: 'Action', value: 'actions', sortable: false },
                ],
                employees: [],
                employeeId: "",
                performanceAppraisals: [],
                appraisal: {},
                indicator: {},
                appraisaldate: "",
                status: "",
                tech_CE: "",
                tech_Marketing: "",
                tech_Management: "",
                tech_Administration: "",
                tech_Presentation: "",
                tech_QOW: "",
                tech_Efficiency: "",
                org_Integrity: "",
                org_Professionalism: "",
                org_Teamwork: "",
                org_CriticalThinking: "",
                org_Conflict: "",
                org_Attendance: "",
                org_ATMD: "",
                company: authenticationService.currentOfficeValue,
            }
        },
        methods: {
            close () {
                this.dialog = false;
            },
            openDialog () {
                this.dialog = true;
            },
            closeEdit () {
                this.dialogEdit = false;
            },
            closeDelete () {
                this.dialogDelete = false;
            },
            setEditPerformance (item) {
                this.appraisal = item
                this.getValue(item.employeeId);
                this.dialogEdit = true;
            },
            setDeletePerformance (item) {
                this.appraisal = item
                this.dialogDelete = true;
            },
            getEmployees() {
                employeeService.getEmployees(this.company.id).then(
                    (model) => {
                    this.employees = model;
                    console.log(model);
                    },
                    (error) => {
                    error = error;
                    }
                );
            },
            getPerformanceAppraisals () {
                const companyId = this.company.id;
                performanceService.getPerformanceAppraisals(companyId)
                .then(
                    (model) => {
                    this.performanceAppraisals = model;
                    console.log(`model`, model)
                    },
                    error => { error = error }
                )
            },
            onEmployeeChange (event) {
                var value = event.target.value
                this.getValue(value);
            },
            async getValue (value) {
                var designation = await employeeService.getDesignation(parseInt(value));

                performanceService.getPerformanceIndicator(designation.id).then(
                    m => this.indicator = m,
                    err => this.error = err
                )
            },
            getPerformanceIndicator (designationId) {
                performanceService.getPerformanceIndicator(designationId)
                .then(
                    (model) => {
                    this.indicator = model;
                    console.log(`model`, model)
                    },
                    error => { error = error }
                )
            },
            onSubmit () {
                this.submitted = true;
      
                this.loading = true;
                performanceService
                    .addPerformanceAppraisal(
                        this.tech_CE, 
                        this.tech_Marketing, 
                        this.tech_Management, 
                        this.tech_Administration, 
                        this.tech_Presentation, 
                        this.tech_QOW, 
                        this.tech_Efficiency,
                        this.org_Integrity,
                        this.org_professionalism,
                        this.org_Teamwork,
                        this.org_CriticalThinking,
                        this.org_Conflict,
                        this.org_Attendance,
                        this.org_ATMD,
                        this.employeeId,
                        this.appraisaldate,
                        this.indicator.id,
                        this.status
                    )
                        .then(
                        (id) => {
                            performanceService.getPerformanceAppraisals(this.company.id).then((u) => {
                            this.performanceAppraisals = u;
                            console.log(`u`, u)
                            this.close();
                        })
                        },
                        (error) => {
                            this.error = error;
                            this.loading = false;
                        }
                        )
            },
            onPutSubmit () {
                this.submitted = true;
      
                this.loading = true;
                performanceService
                    .updatePerformanceAppraisal(
                        this.appraisal.id,
                        this.appraisal.tech_CE, 
                        this.appraisal.tech_Marketing, 
                        this.appraisal.tech_Management, 
                        this.appraisal.tech_Administration, 
                        this.appraisal.tech_Presentation, 
                        this.appraisal.tech_QOW, 
                        this.appraisal.tech_Efficiency,
                        this.appraisal.org_Integrity,
                        this.appraisal.org_professionalism,
                        this.appraisal.org_Teamwork,
                        this.appraisal.org_CriticalThinking,
                        this.appraisal.org_Conflict,
                        this.appraisal.org_Attendance,
                        this.appraisal.org_ATMD,
                        this.appraisal.employeeId,
                        this.appraisal.appraisaldate,
                        this.indicator.id,
                        parseInt(this.appraisal.status)
                    )
                        .then(
                        (id) => {
                            performanceService.getPerformanceAppraisals(this.company.id).then((u) => {
                            this.performanceAppraisals = u;
                            console.log(`u`, u)
                            this.close();
                        })
                        },
                        (error) => {
                            this.error = error;
                            this.loading = false;
                        }
                        )
            },
            updatePerformanceAppraisal () {
                this.submitted = true;
                this.loading = true;

                performanceService
                    .updatePerformanceAppraisal(
                        this.appraisal.tech_CE, 
                        this.appraisal.tech_Marketing, 
                        this.appraisal.tech_Management, 
                        this.appraisal.tech_Administration, 
                        this.appraisal.tech_Presentation, 
                        this.appraisal.tech_QOW, 
                        this.appraisal.tech_Efficiency,
                        this.appraisal.org_Integrity,
                        this.appraisal.org_Professionalism,
                        this.appraisal.org_Teamwork,
                        this.appraisal.org_CriticalThinking,
                        this.appraisal.org_Conflict,
                        this.appraisal.org_Attendance,
                        this.appraisal.org_ATMD,
                        this.appraisal.employeeId,
                        this.appraisal.appraisalDate,
                        this.appraisal.designationPerformanceId,
                        parseInt(this.appraisal.status)
                    )
                        .then(
                        (id) => {
                            performanceService.getPerformanceAppraisals(this.company.id).then((u) => {
                            this.performanceAppraisal = u;
                            console.log(`u`, u)
                            this.closeEdit();
                            });
                        },
                            (error) => {
                                this.error = error;
                                this.loading = false;
                            }
                        );

            },
            deletePerformanceAppraisal () {
                const id = this.performanceAppraisal.id;
                performanceService.performanceAppraisal(id)
                    .then(id => {
                        performanceService.getPerformanceAppraisals(this.company.id)
                            .then(
                                model => { 
                                    this.performanceAppraisals = model
                                    console.log(model)
                                    this.closeDelete() 
                                },
                                error => { error = error }
                            )
                    })
                },
            },
        mounted() {
            this.getEmployees()
            this.getPerformanceAppraisals()
            // Date Time Picker

            if ($('.datetimepicker').length > 0) {
                $('.datetimepicker').datetimepicker({
                    format: 'DD/MM/YYYY',
                    icons: {
                        up: "fa fa-angle-up",
                        down: "fa fa-angle-down",
                        next: 'fa fa-angle-right',
                        previous: 'fa fa-angle-left'
                    }
                });
            }

            // Select 2
            if ($('.select').length > 0) {
                $('.select').select2({
                    minimumResultsForSearch: -1,
                    width: '100%'
                });
            }
            // Multiselect
            if ($('#customleave_select').length > 0) {
                $('#customleave_select').multiselect();
            }
            if ($('#edit_customleave_select').length > 0) {
                $('#edit_customleave_select').multiselect();
            }
            // Datatable

            if ($('.datatable').length > 0) {
                $('.datatable').DataTable({
                    "bFilter": false,
                });
            }
            if ($('.floating').length > 0) {
                $('.floating').on('focus blur', function (e) {
                    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');
            }
        },
        name: 'performanceappraisal'
    }
</script>