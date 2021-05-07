<template>
    <div class="attendance">
        <div class="main-wrapper">
            <layout-header></layout-header>
            <layout-sidebar></layout-sidebar>
            <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <!-- Page Header -->
                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3 class="page-title">Attendance</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/index">Dashboard</router-link>
                                    </li>
                                    <li class="breadcrumb-item active">Attendance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Page Header -->
                    <!-- Search Filter -->
                    <div class="row filter-row">
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus">
                                <input type="text" class="form-control floating">
                                <label class="focus-label">Employee Name</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus select-focus">
                                <select class="form-control" style="height: 55px !important;" v-model="month">
                                                    <option>Select Month</option>
                                                    <option v-for="item in months" :key="item.value" :value="item.value">{{item.label}}</option>
                                                </select>
                                <label class="focus-label">Select Month</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group form-focus select-focus">
                                <select class="form-control" style="height: 55px !important;" v-model="year">
                                                    <option>Select Year</option>
                                                    <option v-for="item in years" :key="item.value" :value="parseInt(item.value)">{{item.label}}</option>
                                                </select>
                                <label class="focus-label">Select Year</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <a @click="onSubmit()" class="btn btn-success btn-block"> Search </a>
                        </div>
                    </div>
                    <!-- /Search Filter -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th>Employee</th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                            <th>10</th>
                                            <th>11</th>
                                            <th>12</th>
                                            <th>13</th>
                                            <th>14</th>
                                            <th>15</th>
                                            <th>16</th>
                                            <th>17</th>
                                            <th>18</th>
                                            <th>19</th>
                                            <th>20</th>
                                            <th>21</th>
                                            <th>22</th>
                                            <th>23</th>
                                            <th>24</th>
                                            <th>25</th>
                                            <th>26</th>
                                            <th>27</th>
                                            <th>28</th>
                                            <th>29</th>
                                            <th>30</th>
                                            <th>31</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in attendances" :key="item.employeeId">
                                            <td>
                                                <h2 class="table-avatar">
                                                    <router-link to="/profile" class="avatar avatar-xs"><img alt=""
                                                            src="~@/assets/profiles/avatar-09.jpg"></router-link>
                                                    <router-link to="/profile">{{item.employee.firstName + ' ' + item.employee.lastName}}</router-link>
                                                </h2>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day1 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day1 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day1 == 0"></i>
                                            </td>
                                             <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day2 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day2 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day2 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day3 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day3 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day3 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day4 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day4 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day4 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day5 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day5 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day5 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day6 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day6 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day6 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day7 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day7 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day7 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day8 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day8 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day8 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day9 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day9 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day9 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day10 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day10 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day10 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day11 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day11 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day11 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day12 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day12 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day12 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day13 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day13 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day13 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day14 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day14 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day14 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day15 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day15 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day15 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day16 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day16 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day16 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day17 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day17 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day17 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day18 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day18 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day18 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day19 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day19 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day19 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day20 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day20 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day20 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day21 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day21 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day21 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day22 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day22 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day22 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day23 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day23 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day23 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day24 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day24 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day24 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day25 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day25 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day25 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day26 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day26 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day26 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day27 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day27 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day27 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day28 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day28 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day28 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day29 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day29 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day29 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day30 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day30 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day30 == 0"></i>
                                            </td> <td>
                                                <a href="javascript:void(0);" data-toggle="modal" v-if="item.day31 == 1"
                                                    data-target="#attendance_info"><i
                                                        class="fa fa-check text-success"></i></a>
                                                <div class="half-day" v-if="item.day31 == 2">
                                                    <span class="first-off"><a href="javascript:void(0);"
                                                            data-toggle="modal" data-target="#attendance_info"><i
                                                                class="fa fa-check text-success"></i></a></span>
                                                    <span class="first-off"><i
                                                            class="fa fa-close text-danger"></i></span>
                                                </div>
                                                <i class="fa fa-close text-danger" v-if="item.day31 == 0"></i>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Page Content -->

                <!-- Attendance Modal -->
                <div class="modal custom-modal fade" id="attendance_info" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Attendance Info</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card punch-status">
                                            <div class="card-body">
                                                <h5 class="card-title">Timesheet <small class="text-muted">11 Mar
                                                        2019</small></h5>
                                                <div class="punch-det">
                                                    <h6>Punch In at</h6>
                                                    <p>Wed, 11th Mar 2019 10.00 AM</p>
                                                </div>
                                                <div class="punch-info">
                                                    <div class="punch-hours">
                                                        <span>3.45 hrs</span>
                                                    </div>
                                                </div>
                                                <div class="punch-det">
                                                    <h6>Punch Out at</h6>
                                                    <p>Wed, 20th Feb 2019 9.00 PM</p>
                                                </div>
                                                <div class="statistics">
                                                    <div class="row">
                                                        <div class="col-md-6 col-6 text-center">
                                                            <div class="stats-box">
                                                                <p>Break</p>
                                                                <h6>1.21 hrs</h6>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-6 text-center">
                                                            <div class="stats-box">
                                                                <p>Overtime</p>
                                                                <h6>3 hrs</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card recent-activity">
                                            <div class="card-body">
                                                <h5 class="card-title">Activity</h5>
                                                <ul class="res-activity-list">
                                                    <li>
                                                        <p class="mb-0">Punch In at</p>
                                                        <p class="res-activity-time">
                                                            <i class="fa fa-clock-o"></i>
                                                            10.00 AM.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="mb-0">Punch Out at</p>
                                                        <p class="res-activity-time">
                                                            <i class="fa fa-clock-o"></i>
                                                            11.00 AM.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="mb-0">Punch In at</p>
                                                        <p class="res-activity-time">
                                                            <i class="fa fa-clock-o"></i>
                                                            11.15 AM.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="mb-0">Punch Out at</p>
                                                        <p class="res-activity-time">
                                                            <i class="fa fa-clock-o"></i>
                                                            1.30 PM.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="mb-0">Punch In at</p>
                                                        <p class="res-activity-time">
                                                            <i class="fa fa-clock-o"></i>
                                                            2.00 PM.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p class="mb-0">Punch Out at</p>
                                                        <p class="res-activity-time">
                                                            <i class="fa fa-clock-o"></i>
                                                            7.30 PM.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Attendance Modal -->

            </div>
            <!-- Page Wrapper -->
        </div>

    </div>
</template>
<script>
    import LayoutHeader from '@/components/layouts/Header.vue'
    import LayoutSidebar from '@/components/layouts/Sidebar.vue'
    import { attendanceService } from "@/services/attendanceService";
    import { authenticationService } from "@/services/authenticationService";
    export default {
        components: {
            LayoutHeader,
            LayoutSidebar,
        },
        data() {
            return {
                company: authenticationService.currentOfficeValue,
                attendances: [],
                month: null,
                year: null,
                months: [
                { value: 1, label: 'January'}, { value: 2, label: 'February'}, { value: 3, label: 'March'},
                { value: 4, label: 'April'}, { value: 5, label: 'May'}, { value: 6, label: 'June'},
                { value: 7, label: 'July'}, { value: 8, label: 'August'}, { value: 9, label: 'September'},
                { value: 10, label: 'October'}, { value: 11, label: 'November'}, { value: 12, label: 'December'}
                ],
                years: []
            }
        },
        methods: {
            generateYears () {
                var result = [];
                for(var i = 2020; i < (new Date().getFullYear() + 20); i++)
                    result.push({value: i, label: i})

                    this.years = result;
            },

            onSubmit () {
                this.loading = true
                const companyId = this.company.id;
                attendanceService.getMonthlyattendance(companyId, this.month, this.year).then(
                    (model) => {
                        console.log(model);
                        this.attendances = model;
                        this.loading = false
                    },
                    (error) => {
                        error = error;
                        this.loading = false
                    }
                );
            },
        },
        mounted() {
            // Select 2
            if ($('.select').length > 0) {
                $('.select').select2({
                    minimumResultsForSearch: -1,
                    width: '100%'
                });
            }
            this.generateYears();
            // Multiselect
            if ($('#customleave_select').length > 0) {
                $('#customleave_select').multiselect();
            }
            if ($('#edit_customleave_select').length > 0) {
                $('#edit_customleave_select').multiselect();
            }
            if ($('.floating').length > 0) {
                $('.floating').on('focus blur', function (e) {
                    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');
            }
        },
        name: 'attendance'
    }
</script>