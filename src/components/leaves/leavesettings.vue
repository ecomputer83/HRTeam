<template>
    <div class="leavesettings">
        <div class="main-wrapper">
            <layout-header></layout-header>
            <layout-sidebar></layout-sidebar>
            <!-- Page Wrapper -->
            <div class="page-wrapper">

                <!-- Page Content -->
                <div class="content container-fluid">

                    <!-- Page Header -->
                    <div class="page-header">
                        <div class="row">
                            <div class="col">
                                <h3 class="page-title">Leave Settings</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/index">Dashboard</router-link>
                                    </li>
                                    <li class="breadcrumb-item active">Leave Settings</li>
                                </ul>
                            </div>
                            <div class="col-auto float-right ml-auto">
                                <a class="btn add-btn" @click="InitiateSettings"><i class="fa fa-plus"></i>
                                    {{newInit ? 'Initiate Setting': 'Re-initiate Setting'}}</a>
                            </div>
                        </div>
                    </div>
                    <!-- /Page Header -->

                    <div class="row">
                        <div class="col-md-12">

                            <!-- Annual Leave -->
                            <div class="card leave-box" :id="'leave_' + item.leaveType.name" v-for="item in LeaveSettings" :key="item.id">
                                <div class="card-body">
                                    <div class="h3 card-title with-switch">
                                        {{item.leaveType.name}}
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" v-model="item.status"
                                                :id="'switch_' + item.leaveType.name">
                                            <label class="onoffswitch-label" for="switch_annual">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="leave-item">

                                        <!-- Annual Days Leave -->
                                        <div class="leave-row">
                                            <div class="leave-left">
                                                <div class="input-box">
                                                    <div class="form-group">
                                                        <label>Days</label>
                                                        <input type="text" class="form-control" v-model="item.days" disabled>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="leave-right">
                                                <button class="leave-edit-btn" @click="selectSetting(item)">Edit</button>
                                                <button class="btn btn-primary leave-save-btn hide"  @click="UpdateSettings($event)">Save</button>
                                            </div>
                                        </div>
                                        <!-- /Annual Days Leave -->

                                        <!-- Carry Forward -->
                                        <div class="leave-row">
                                            <div class="leave-left">
                                                <div class="input-box">
                                                    <label class="d-block">Carry forward</label>
                                                    <div class="leave-inline-form">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" v-model="item.carryOver"
                                                                name="inlineRadioOptions" id="carry_no" value="false"
                                                                disabled>
                                                            <label class="form-check-label" for="carry_no">No</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" v-model="item.carryOver"
                                                                name="inlineRadioOptions" id="carry_yes" value="true"
                                                                disabled>
                                                            <label class="form-check-label" for="carry_yes">Yes</label>
                                                        </div>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Max</span>
                                                            </div>
                                                            <input type="text" class="form-control" v-model="item.carryOverMax" disabled>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="leave-right">
                                                <button class="leave-edit-btn" @click="selectSetting(item)">
                                                    Edit
                                                </button>
                                                <button class="btn btn-primary leave-save-btn hide"  @click="UpdateSettings($event)">Save</button>
                                            </div>
                                        </div>
                                        <!-- /Carry Forward -->

                                        <!-- Earned Leave -->
                                        <div class="leave-row">
                                            <div class="leave-left">
                                                <div class="input-box">
                                                    <label class="d-block">Earned leave</label>
                                                    <div class="leave-inline-form">
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" v-model="item.earnedLeave"
                                                                name="inlineRadioOptions" id="earned_no" value="false"
                                                                disabled>
                                                            <label class="form-check-label" for="earned_no">No</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" v-model="item.earnedLeave"
                                                                name="inlineRadioOptions" id="earned_yes"
                                                                value="true" disabled>
                                                            <label class="form-check-label" for="earned_yes">Yes</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="leave-right">
                                                <button class="leave-edit-btn" @click="selectSetting(item)">
                                                    Edit
                                                </button>
                                                <button class="btn btn-primary leave-save-btn hide"  @click="UpdateSettings($event)">Save</button>
                                            </div>
                                        </div>
                                        <!-- /Earned Leave -->

                                    </div>

                                    <!-- Custom Policy -->
                                    <div class="custom-policy">
                                        <div class="leave-header">
                                            <div class="title">Custom policy</div>
                                            <div class="leave-action">
                                                <button class="btn btn-sm btn-primary" type="button" @click="openDialog(item.id)"><i class="fa fa-plus"></i> Add
                                                    custom policy</button>
                                            </div>
                                        </div>
                                        <div class="table-responsive" v-if="item.leavePolicies.length > 0">
                                            <table class="table table-hover table-nowrap leave-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th class="l-name">Name</th>
                                                        <th class="l-days">Days</th>
                                                        <th class="l-assignee">Assignee</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="p in item.leavePolicies" :key="p.id">
                                                        <td>{{p.policyName}} </td>
                                                        <td>{{p.days}}</td>
                                                        <td>
                                                            <div class="tt" v-for="i in p.companyLeavePolicies" :key="i.id">
                                                            <a href="#" class="avatar"><img alt=""
                                                            src="~@/assets/profiles/avatar-02.jpg" v-if="!i.employee.passportPhoto">
                                                            <img alt="" :src="media + i.employee.passportPhoto" width="38" v-if="i.employee.passportPhoto"></a>
                                                            <span class="tttext">{{i.employee.firstName + ' ' + i.employee.lastName}}</span>
                                                            </div>
                                                        </td>
                                                        <td class="text-right">
                                                            <div class="dropdown dropdown-action">
                                                                <a aria-expanded="false" data-toggle="dropdown"
                                                                    class="action-icon dropdown-toggle" href="#"><i
                                                                        class="material-icons">more_vert</i></a>
                                                                <div class="dropdown-menu dropdown-menu-right">
                                                                    <a class="dropdown-item"
                                                                        @click="setEditPolicy(p)"><i
                                                                            class="fa fa-pencil m-r-5"></i> Edit</a>
                                                                    <a class="dropdown-item"
                                                                        @click="setDeletePolicy(p)"><i
                                                                            class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <!-- /Custom Policy -->

                                </div>
                            </div>
                            <!-- /Annual Leave -->

                        </div>
                    </div>

                </div>
                <!-- /Page Content -->

                <!-- Add Custom Policy Modal -->
                <v-dialog v-model="dialog" max-width="725px">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Add Custom Policy</h5>
                                <button type="button" class="close" @click="close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                    <div class="form-group">
                                        <label>Policy Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" v-model="policy.policyName">
                                    </div>
                                    <div class="form-group">
                                        <label>Days <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" v-model="policy.days" >
                                    </div>
                                    <div class="form-group leave-duallist">
                                        <label>Add employee</label>
                                        <div class="row">
                                            <div class="col-lg-5 col-sm-5">
                                                <select id="customleave_select" v-model="pickEmployees"
                                                    class="form-control" size="8" multiple="multiple">
                                                    <option :value="item.id" v-for="item in employees" :key="item.id">{{item.firstName + ' ' + item.lastName}} </option>
                                                </select>
                                            </div>
                                            <div class="multiselect-controls col-lg-2 col-sm-2">
                                                <button type="button" id="customleave_select_rightAll"  @click="selectedAllFrom"
                                                    class="btn btn-block btn-white"><i
                                                        class="fa fa-forward"></i></button>
                                                <button type="button" id="customleave_select_rightSelected"  @click="selectedFrom"
                                                    class="btn btn-block btn-white"><i
                                                        class="fa fa-chevron-right"></i></button>
                                                <button type="button" id="customleave_select_leftSelected"  @click="selectedTo"
                                                    class="btn btn-block btn-white"><i
                                                        class="fa fa-chevron-left"></i></button>
                                                <button type="button" id="customleave_select_leftAll"  @click="selectedAllTo"
                                                    class="btn btn-block btn-white"><i
                                                        class="fa fa-backward"></i></button>
                                            </div>
                                            <div class="col-lg-5 col-sm-5">
                                                <select id="customleave_select_to"
                                                    class="form-control" size="8" multiple="multiple"></select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="submit-section">
                                        <button class="btn btn-primary submit-btn" @click="addPolicy">Submit</button>
                                    </div>
                            </div>
                        </div>
                </v-dialog>
                <!-- /Add Custom Policy Modal -->

                <!-- Edit Custom Policy Modal -->
                <v-dialog v-model="dialogEdit" max-width="725px">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit Custom Policy</h5>
                                <button type="button" class="close" @click="closeEdit">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label>Policy Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" value="LOP">
                                    </div>
                                    <div class="form-group">
                                        <label>Days <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" value="4">
                                    </div>
                                    <div class="form-group leave-duallist">
                                        <label>Add employee</label>
                                        <div class="row">
                                            <div class="col-lg-5 col-sm-5">

                                                <select name="edit_customleave_from" id="edit_customleave_select"
                                                    class="form-control" size="5" multiple="multiple">
                                                    <option value="1">Bernardo Galaviz </option>
                                                    <option value="2">Jeffrey Warden</option>
                                                    <option value="2">John Doe</option>
                                                    <option value="2">John Smith</option>
                                                    <option value="3">Mike Litorus</option>
                                                </select>
                                            </div>
                                            <div class="multiselect-controls col-lg-2 col-sm-2">
                                                <button type="button" id="edit_customleave_select_rightAll"
                                                    class="btn btn-block btn-white"><i
                                                        class="fa fa-forward"></i></button>
                                                <button type="button" id="edit_customleave_select_rightSelected"
                                                    class="btn btn-block btn-white"><i
                                                        class="fa fa-chevron-right"></i></button>
                                                <button type="button" id="edit_customleave_select_leftSelected"
                                                    class="btn btn-block btn-white"><i
                                                        class="fa fa-chevron-left"></i></button>
                                                <button type="button" id="edit_customleave_select_leftAll"
                                                    class="btn btn-block btn-white"><i
                                                        class="fa fa-backward"></i></button>
                                            </div>
                                            <div class="col-lg-5 col-sm-5">
                                                <select name="customleave_to" id="edit_customleave_select_to"
                                                    class="form-control" size="8" multiple="multiple"></select>
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
                <!-- /Edit Custom Policy Modal -->

                <!-- Delete Custom Policy Modal -->
                <v-dialog v-model="dialogDelete" max-width="425px">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="form-header">
                                    <h3>Delete Custom Policy</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div class="modal-btn delete-action">
                                    <div class="row">
                                        <div class="col-6">
                                            <a href="javascript:void(0);"
                                                class="btn btn-primary continue-btn">Delete</a>
                                        </div>
                                        <div class="col-6">
                                            <a href="javascript:void(0);" @click="closeDelete"
                                                class="btn btn-primary cancel-btn">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </v-dialog>
                <!-- /Delete Custom Policy Modal -->

            </div>
            <!-- /Page Wrapper -->
        </div>
    </div>
</template>

<script>
    import LayoutHeader from '@/components/layouts/Header.vue'
    import LayoutSidebar from '@/components/layouts/Sidebar.vue'
    import { organizationService } from "@/services/organizationService";
    import { employeeService } from "@/services/employeeService";
    import { authenticationService } from "@/services/authenticationService";
    
    export default {
        components: {
            LayoutHeader,
            LayoutSidebar,
        },
        data() {
            return {
                dialog: false,
                dialogEdit: false,
                dialogDelete: false,
                media: 'data:image/jpeg;base64,',
                LeaveSettings: [],
                employees: [],
                EmployeePolicies: [],
                policy: {
                    id: 0,
                    settingId: 0,
                    policyName: '',
                    days: 0  
                },
                setting: {},
                selectedEmployees: [],
                pickEmployees: [],
                newInit: false,
                company: authenticationService.currentOfficeValue,
            }
        },
        methods: {
            close () {
                this.dialog = false;
            },
            openDialog (settingId) {
                this.policy.settingId = settingId;
                this.dialog = true;
            },
            closeEdit () {
                this.dialogEdit = false;
            },
            closeDelete () {
                this.dialogDelete = false;
            },
            setEditPolicy (item) {
                this.selectPolicy(item)
                this.dialogEdit = true;
            },
            setDeletePolicy (item) {
                this.selectPolicy(item)
                this.dialogDelete = true;
            },
            selectPolicy (item) {
                this.policy = item
                this.selectedEmployees = item.companyLeavePolicy.map(c=>c.employee.id);
            },
            selectSetting (item) {
                this.setting = item
            },
            selectedAllFrom () {
                var selectOption = []
                $(document).find('#customleave_select').find('option').each(function() {
                    selectOption.push(this)
                })
                
                $(document).find('#customleave_select_to').append(selectOption);
                this.selectedEmployees = this.employees
                
            },
            selectedFrom () {
                var selectOption = []
                $(document).find('#customleave_select').find('option:selected').each(function() {
                    selectOption.push(this)
                })
                
                $(document).find('#customleave_select_to').append(selectOption);
                this.selectedEmployees.push(this.pickEmployees[0])
                console.log(this.selectedEmployees)
                
            },
            selectedAllTo () {
                var selectOption = []
                $(document).find('#customleave_select_to').find('option').each(function() {
                    selectOption.push(this)
                })
                
                $(document).find('#customleave_select').append(selectOption);
                
                this.selectedEmployees = []
                
            },
            selectedTo () {
                var selectOption = []
                var values = []
                $(document).find('#customleave_select_to').find('option:selected').each(function() {
                    selectOption.push(this)
                    values.push($(this).val())
                })
                
                $(document).find('#customleave_select').append(selectOption);
                
                values.forEach(v=> {
                    var data = JSON.parse(JSON.stringify(this.selectedEmployees))
                    var index = data.indexOf(parseInt(v))
                    data.splice(index, 1)
                    this.selectedEmployees = data
                    console.log(this.selectedEmployees)
                })
                
            },
            InitiateSettings () {
                organizationService.initiateLeaveSettings(this.company.id)
                    .then(
                        model => { this.LeaveSettings = model
                        this.newInit = false;
                    },
                    error => { error = error }
                )
            },
            async addPolicy () {
                this.policy.days = parseInt(this.policy.days)
                var id = await organizationService.addPolicy(this.policy)
                if(id){
                    await employeeService.addEmployeeLeavePolicy(id, this.selectedEmployees)
                    var policies = await employeeService.getEmployeePolicies(this.company.id)
                    this.EmployeePolicies = policies
                    organizationService.getLeaveSettings(this.company.id)
                    .then(
                        model => { this.LeaveSettings = model
                            this.LeaveSettings.forEach(l => {
                                l.leavePolicies.forEach(p => {
                                    p.companyLeavePolicies = policies.filter(c=>c.policyId == p.id)
                                })
                            })
                            console.log(this.LeaveSettings)
                                if(model.length == 0)
                                    this.newInit = true;
                        },
                        error => { error = error }
                        )
                    this.close()
                }
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
            GetSettings () {
                organizationService.getLeaveSettings(this.company.id)
                    .then(
                        model => { this.LeaveSettings = model
                        if(model.length == 0)
                            this.newInit = true;
                        },
                        error => { error = error }
                )
            },
            GetEmployeePolicies () {
                employeeService.getEmployeePolicies(this.company.id)
                    .then(
                        policies => { this.EmployeePolicies = policies
                        organizationService.getLeaveSettings(this.company.id)
                        .then(
                            model => { this.LeaveSettings = model
                            this.LeaveSettings.forEach(l => {
                                l.leavePolicies.forEach(p => {
                                    p.companyLeavePolicies = policies.filter(c=>c.policyId == p.id)
                                })
                            })
                            console.log(this.LeaveSettings)
                            if(model.length == 0)
                                this.newInit = true;
                            },
                            error => { error = error }
                            )
                        },
                        error => { error = error }
                )
            },

            async UpdateSettings (event) {
                
                this.setting.days = parseInt(this.setting.days)
                this.setting.carryOverMax = parseInt(this.setting.carryOverMax)
                this.setting.carryOver = (this.setting.carryOver == 'true')
                this.setting.earnedLeave = (this.setting.earnedLeave == 'true')
                this.setting.status = (this.setting.status) ? 1 : 0
                await organizationService.updateLeaveSettings(this.setting)
                var policies = await employeeService.getEmployeePolicies(this.company.id)

                this.EmployeePolicies = policies
                organizationService.getLeaveSettings(this.company.id)
                    .then(
                        model => { this.LeaveSettings = model
                            this.LeaveSettings.forEach(l => {
                                l.leavePolicies.forEach(p => {
                                    p.companyLeavePolicies = policies.filter(c=>c.policyId == p.id)
                                })
                            })
                            console.log(this.LeaveSettings)
                                if(model.length == 0)
                                    this.newInit = true;
                        },
                        error => { error = error }
                        )
                            
                $(event.target).parent().find('.leave-cancel-btn').removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
                $(event.target).parent().find(".leave-save-btn").addClass('hide');
                $(event.target).parent().parent().find("input").prop('disabled', true);
                
                
            },

        },
        mounted() {
            this.getEmployees()
            //this.GetSettings()
            this.GetEmployeePolicies()
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
            var getSelect = function(ele) {
                var selected = []
                ele.find('option:selected').each(function() {
                    console.log(this)
                    selected.push($(this))
                })
                return selected;
            }
            // Leave Settings button show
            $(document).on('click', '.leave-edit-btn', function () {
                $(this).removeClass('leave-edit-btn').addClass('btn btn-white leave-cancel-btn').text('Cancel');
                if($(this).closest("div.leave-right").has('leave-save-btn')) {
                $(this).closest("div.leave-right").find(".leave-save-btn").removeClass('hide');
                }
                $(this).parent().parent().find("input").prop('disabled', false);
                return false;
            });
            $(document).on('click', '.leave-cancel-btn', function () {
                $(this).removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
                $(this).closest("div.leave-right").find(".leave-save-btn").addClass('hide');
                $(this).parent().parent().find("input").prop('disabled', true);
                return false;
            });
            $(document).on('change', '#customleave_select', function () {
                //$(this).find('option:selected')
                return false;
            });
            
            $(document).on('change', '.leave-box .onoffswitch-checkbox', function () {
                var id = $(this).attr('id').split('_')[1];
                if ($(this).prop("checked") == true) {
                    $("#leave_" + id + " .leave-edit-btn").prop('disabled', false);
                    $("#leave_" + id + " .leave-action .btn").prop('disabled', false);
                }
                else {
                    $("#leave_" + id + " .leave-action .btn").prop('disabled', true);
                    $("#leave_" + id + " .leave-cancel-btn").parent().parent().find("input").prop('disabled', true);
                    $("#leave_" + id + " .leave-cancel-btn").closest("div.leave-right").find(".leave-save-btn").remove();
                    $("#leave_" + id + " .leave-cancel-btn").removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
                    $("#leave_" + id + " .leave-edit-btn").prop('disabled', true);
                }
            });
            $('.leave-box .onoffswitch-checkbox').each(function () {
                var id = $(this).attr('id').split('_')[1];
                if ($(this).prop("checked") == true) {
                    $("#leave_" + id + " .leave-edit-btn").prop('disabled', false);
                    $("#leave_" + id + " .leave-action .btn").prop('disabled', false);
                }
                else {
                    $("#leave_" + id + " .leave-action .btn").prop('disabled', true);
                    $("#leave_" + id + " .leave-cancel-btn").parent().parent().find("input").prop('disabled', true);
                    $("#leave_" + id + " .leave-cancel-btn").closest("div.leave-right").find(".leave-save-btn").remove();
                    $("#leave_" + id + " .leave-cancel-btn").removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
                    $("#leave_" + id + " .leave-edit-btn").prop('disabled', true);
                }
            });
            if ($('.floating').length > 0) {
                $('.floating').on('focus blur', function (e) {
                    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');
            }
        },
        name: 'leavesettings'
    }
</script>