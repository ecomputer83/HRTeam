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
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                                            <select class="form-control" v-model="employeeId">
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
                                                    v-model="date"
                                                    bootstrap-styling
                                                    class="form-control datetimepicker"
                                                    type="date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
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
                                                                                <td colspan="2">Intermediate</td>
                                                                                <td><select
                                                                                        v-model="tech_CE"
                                                                                        name="customer_experience"
                                                                                        class="form-control"
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                        <option value="4"> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Marketing</td>
                                                                                <td colspan="2">Advanced</td>
                                                                                <td><select name="marketing"
                                                                                        class="form-control"
                                                                                        v-model="tech_Marketing"    
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                        <option value="4"> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Management</td>
                                                                                <td colspan="2">Advanced</td>
                                                                                <td><select name="management"
                                                                                        class="form-control"
                                                                                        v-model="tech_Management"
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                        <option value="4"> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Administration</td>
                                                                                <td colspan="2">Advanced</td>
                                                                                <td><select name="administration"
                                                                                        class="form-control"
                                                                                        v-model="tech_Administration"
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                        <option value="4"> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Presentation Skill</td>
                                                                                <td colspan="2">Expert / Leader</td>
                                                                                <td><select
                                                                                        name="presentation_skill"
                                                                                        class="form-control"
                                                                                        v-model="tech_Presentation"    
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                        <option value="4"> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Quality
                                                                                    Of Work</td>
                                                                                <td colspan="2">Expert / Leader</td>
                                                                                <td><select name="quality_of_work"
                                                                                        class="form-control"
                                                                                        v-model="tech_QOW"    
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                        <option value="4"> Expert /
                                                                                            Leader</option>
                                                                                    </select></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Efficiency</td>
                                                                                <td colspan="2">Expert / Leader</td>
                                                                                <td><select name="efficiency"
                                                                                        class="form-control"
                                                                                        v-model="tech_Efficiency"    
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                        <option value="4"> Expert /
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
                                                                                <td colspan="2">Beginner</td>
                                                                                <td>
                                                                                    <select name="integrity"
                                                                                        class="form-control"
                                                                                        v-model="org_Integrity"
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Professionalism</td>
                                                                                <td colspan="2">Beginner</td>
                                                                                <td>
                                                                                    <select name="professionalism"
                                                                                        class="form-control"
                                                                                        v-model="org_Professionalism"    
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Team
                                                                                    Work</td>
                                                                                <td colspan="2">Intermediate</td>
                                                                                <td>
                                                                                    <select name="team_work"
                                                                                        class="form-control"
                                                                                        v-model="org_Teamwork"    
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Critical
                                                                                    Thinking</td>
                                                                                <td colspan="2">Advanced</td>
                                                                                <td>
                                                                                    <select name="critical_thinking"
                                                                                        class="form-control"
                                                                                        v-model="org_CriticalThinking"
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Conflict
                                                                                    Management</td>
                                                                                <td colspan="2">Intermediate</td>
                                                                                <td>
                                                                                    <select
                                                                                        v-model="org_Conflict"
                                                                                        name="conflict_management"
                                                                                        class="form-control"
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">
                                                                                    Attendance</td>
                                                                                <td colspan="2">Intermediate</td>
                                                                                <td>
                                                                                    <select name="attendance"
                                                                                        class="form-control"
                                                                                        v-model="org_Attendance"
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td scope="row" colspan="2">Ability
                                                                                    To Meet Deadline</td>
                                                                                <td colspan="2">Advanced</td>
                                                                                <td>
                                                                                    <select
                                                                                        name="ability_to_meet_deadline"
                                                                                        class="form-control"
                                                                                        v-model="org_ATMD"
                                                                                    >
                                                                                        <option value="">None
                                                                                        </option>
                                                                                        <option value="1"> Beginner
                                                                                        </option>
                                                                                        <option value="2">
                                                                                            Intermediate</option>
                                                                                        <option value="3"> Advanced
                                                                                        </option>
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
                                            <select class="select form-control" v-model="status">
                                                <option>Active</option>
                                                <option>Inactive</option>
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
                <div id="edit_appraisal" class="modal custom-modal fade" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Performance Appraisal</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label class="col-form-label">Employee</label>
                                                <select class="select">
                                                    <option>Select Employee</option>
                                                    <option>John Doe</option>
                                                    <option selected>Mike Litorus</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Select Date <span class="text-danger">*</span></label>
                                                <div class="cal-icon"><input class="form-control datetimepicker"
                                                        value="7/08/2019" type="text"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="tab-box">
                                                        <div class="row user-tabs">
                                                            <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                                                <ul class="nav nav-tabs nav-tabs-solid">
                                                                    <li class="nav-item"><a href="#appr_technical1"
                                                                            data-toggle="tab"
                                                                            class="nav-link active">Technical</a></li>
                                                                    <li class="nav-item"><a href="#appr_organizational1"
                                                                            data-toggle="tab"
                                                                            class="nav-link">Organizational</a></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-content">
                                                        <div id="appr_technical1"
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
                                                                                    <td colspan="2">Intermediate</td>
                                                                                    <td>
                                                                                        <select
                                                                                            name="customer_experience"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                            <option value="4"> Expert /
                                                                                                Leader</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">
                                                                                        Marketing</td>
                                                                                    <td colspan="2">Advanced</td>
                                                                                    <td>
                                                                                        <select name="marketing"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                            <option value="4"> Expert /
                                                                                                Leader</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">
                                                                                        Management</td>
                                                                                    <td colspan="2">Advanced</td>
                                                                                    <td>
                                                                                        <select name="management"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                            <option value="4"> Expert /
                                                                                                Leader</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">
                                                                                        Administration</td>
                                                                                    <td colspan="2">Advanced</td>
                                                                                    <td>
                                                                                        <select name="administration"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                            <option value="4"> Expert /
                                                                                                Leader</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">
                                                                                        Presentation Skill</td>
                                                                                    <td colspan="2">Expert / Leader</td>
                                                                                    <td>
                                                                                        <select
                                                                                            name="presentation_skill"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                            <option value="4"> Expert /
                                                                                                Leader</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">Quality
                                                                                        Of Work</td>
                                                                                    <td colspan="2">Expert / Leader</td>
                                                                                    <td>
                                                                                        <select name="quality_of_work"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                            <option value="4"> Expert /
                                                                                                Leader</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">
                                                                                        Efficiency</td>
                                                                                    <td colspan="2">Expert / Leader</td>
                                                                                    <td>
                                                                                        <select name="efficiency"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                            <option value="4"> Expert /
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
                                                        <div class="tab-pane fade" id="appr_organizational1">
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
                                                                                    <td colspan="2">Beginner</td>
                                                                                    <td>
                                                                                        <select name="integrity"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">
                                                                                        Professionalism</td>
                                                                                    <td colspan="2">Beginner</td>
                                                                                    <td>
                                                                                        <select name="professionalism"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">Team
                                                                                        Work</td>
                                                                                    <td colspan="2">Intermediate</td>
                                                                                    <td>
                                                                                        <select name="team_work"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">Critical
                                                                                        Thinking</td>
                                                                                    <td colspan="2">Advanced</td>
                                                                                    <td>
                                                                                        <select name="critical_thinking"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">Conflict
                                                                                        Management</td>
                                                                                    <td colspan="2">Intermediate</td>
                                                                                    <td>
                                                                                        <select
                                                                                            name="conflict_management"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">
                                                                                        Attendance</td>
                                                                                    <td colspan="2">Intermediate</td>
                                                                                    <td>
                                                                                        <select name="attendance"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td scope="row" colspan="2">Ability
                                                                                        To Meet Deadline</td>
                                                                                    <td colspan="2">Advanced</td>
                                                                                    <td>
                                                                                        <select
                                                                                            name="ability_to_meet_deadline"
                                                                                            class="form-control">
                                                                                            <option value="">None
                                                                                            </option>
                                                                                            <option value="1"> Beginner
                                                                                            </option>
                                                                                            <option value="2">
                                                                                                Intermediate</option>
                                                                                            <option value="3"> Advanced
                                                                                            </option>
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
                                                <select class="select">
                                                    <option>Active</option>
                                                    <option>Inactive</option>
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
                    </div>
                </div>
                <!-- /Edit Performance Appraisal Modal -->

                <!-- Delete Performance Appraisal Modal -->
                <div class="modal custom-modal fade" id="delete_appraisal" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
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
                    </div>
                </div>
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
                headers: [
                    { text: 'Employee', value: 'salaryDate' },
                    { text: 'Designation', value: 'salaryDate' },
                    { text: 'Department', value: 'netSalary' },
                    { text: 'Appraisal Date', value: 'payslip', sortable: false },
                    { text: 'Status', value: 'payslip', sortable: false },
                    { text: 'Action', value: 'actions', sortable: false },
                ],
                employees: [],
                employeeId: "",
                performanceAppraisals: [],
                performanceAppraisal: {},
                date: "",
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
            onSubmit () {
                this.submitted = true;
      
                this.loading = true;
                performanceService
                    .addPerformanceAppraisal(
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
                        this.performanceAppraisal.tech_CE, 
                        this.performanceAppraisal.tech_Marketing, 
                        this.performanceAppraisal.tech_Management, 
                        this.performanceAppraisal.tech_Administration, 
                        this.performanceAppraisal.tech_Presentation, 
                        this.performanceAppraisal.tech_QOW, 
                        this.performanceAppraisal.tech_Efficiency,
                        this.performanceAppraisal.org_Integrity,
                        this.performanceAppraisal.org_Professionalism,
                        this.performanceAppraisal.org_Teamwork,
                        this.performanceAppraisal.org_CriticalThinking,
                        this.performanceAppraisal.org_Conflict,
                        this.performanceAppraisal.org_Attendance,
                        this.performanceAppraisal.org_ATMD,
                        this.performanceAppraisal.designationId,
                        this.performanceAppraisal.addedBy
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