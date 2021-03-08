<template>
  <div class="vacancies">
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
              <div class="col-sm-12">
                <h3 class="page-title">Welcome Admin!</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/index">Dashboard</router-link>
                  </li>
                  <li class="breadcrumb-item active">Ranks</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-lg-12 mx-auto">
              <div class="card">
                <div class="card-header">
                  <div class="d-flex justify-content-between">
                    <h4 class="card-title mb-0">Ranks</h4>
                    <div class="col-auto float-right ml-auto">
                      <a
                        href="#"
                        class="btn add-btn"
                        data-toggle="modal"
                        data-target="#add_leave_type"
                        ><i class="fa fa-plus"></i>New Rank</a
                      >
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="rank in ranks" v-bind:key="rank.id">
                          <td>{{ rank.rankName }}</td>
                          <td>
                            <div class="view-icons">
                              <a
                                @click="setEditRank(rank)"
                                class="btn btn-link active"
                                data-toggle="modal"
                                data-target="#edit_rank"
                              >
                                <i class="fa fa-pencil m-r-5"></i>
                              </a>
                              <a
                                class="btn btn-link active"
                                @click="setDeleteRank(rank)"
                                data-toggle="modal"
                                data-target="#delete_rank"
                              >
                                <i class="fa fa-trash-o m-r-5"></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <!-- <tr>
                          <td>Junior</td>
                          <td>
                            <div class="view-icons">
                              <a
                                href="#"
                                class="btn btn-link active"
                                data-toggle="modal"
                                data-target="#edit_leave_type"
                              >
                                <i class="fa fa-pencil m-r-5"></i>
                              </a>
                              <a
                                href="#"
                                class="btn btn-link active"
                                data-toggle="modal"
                                data-target="#delete_leave_type"
                              >
                                <i class="fa fa-trash-o m-r-5"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Senior</td>
                          <td>
                            <div class="view-icons">
                              <a
                                href="#"
                                class="btn btn-link active"
                                data-toggle="modal"
                                data-target="#edit_leave_type"
                              >
                                <i class="fa fa-pencil m-r-5"></i>
                              </a>
                              <a
                                class="btn btn-link active"
                                @click="setRank(rank)"
                                data-toggle="modal"
                                data-target="#delete_rank"
                              >
                                <i class="fa fa-trash-o m-r-5"></i>
                              </a>
                            </div>
                          </td>
                        </tr> -->
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!-- /Page Content -->
            <!-- Add Employee Modal -->
            <v-dialog v-model="dialog" max-width="725px">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Add Rank</h5>
                    <button
                      type="button"
                      class="close"
                      @click="close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="onSubmit">
                      <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
								                            <strong>Error!</strong> {{error}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                    <div class="col-md-12">
							                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="message">
								                            <strong>Success!</strong> {{message}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                </div> 
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label class="col-form-label"
                              >Rank <span class="text-danger">*</span></label
                            >
                            <input
                              class="form-control"
                              type="text"
                              v-model="rankName"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="table-responsive m-t-15">
                        <table class="table table-striped custom-table">
                          <thead>
                            <tr>
                              <th>Module Permission</th>
                              <th class="text-center">Read</th>
                              <th class="text-center">Write</th>
                              <th class="text-center">Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Holidays</td>
                              <td class="text-center">
                                <input
                                  v-model="readHoliday"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input v-model="writeHolidays" type="checkbox" />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="deleteHolidays"
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Leaves</td>
                              <td class="text-center">
                                <input
                                  v-model="readLeave"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="writeLeave"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input v-model="deleteLeave" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td>Assets</td>
                              <td class="text-center">
                                <input
                                  v-model="readAssets"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="writeAssets"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="deleteAssets"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Timing Sheets</td>
                              <td class="text-center">
                                <input
                                  v-model="readTimesheet"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="writeTimesheet"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="deleteTimesheet"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="submit-section">
                        <button class="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
            </v-dialog>
            <!-- /Add Employee Modal -->

            <!-- Edit Employee Modal -->
            <v-dialog v-model="dialogEdit" max-width="725px" v-if="rank">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Edit Rank</h5>
                    <button
                      type="button"
                      class="close"
                      @click="closeEdit"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
								                            <strong>Error!</strong> {{error}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                    <div class="col-md-12">
							                            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="message">
								                            <strong>Success!</strong> {{message}}
								                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
									                            <span aria-hidden="true">&times;</span>
								                            </button>
							                            </div>
                                                    </div>
                                                </div> 
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label class="col-form-label"
                              >Rank <span class="text-danger">*</span></label
                            >
                            <input
                              v-model="rank.rankName"
                              class="form-control"
                              value="Junior"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="table-responsive m-t-15">
                        <table class="table table-striped custom-table">
                          <thead>
                            <tr>
                              <th>Module Permission</th>
                              <th class="text-center">Read</th>
                              <th class="text-center">Write</th>
                              <th class="text-center">Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Holidays</td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.readHoliday"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input v-model="rank.rankPermission.writeHolidays" type="checkbox" />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.deleteHolidays"
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Leaves</td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.readLeave"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.writeLeave"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input v-model="rank.rankPermission.deleteLeave" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td>Assets</td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.readAssets"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.writeAssets"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.deleteAssets"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Timing Sheets</td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.readTimsheet"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.writeTimesheet"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                              <td class="text-center">
                                <input
                                  v-model="rank.rankPermission.deleteTimesheet"
                                  checked=""
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="submit-section">
                        <button
                          @click.prevent="updateRank"
                          class="btn btn-primary submit-btn"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
            </v-dialog>
            <!-- /Edit Employee Modal -->

            <!-- Delete Employee Modal -->
            <v-dialog v-model="dialogDelete" max-width="725px">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="form-header">
                      <h3>Delete Rank</h3>
                      <p>Are you sure want to delete?</p>
                    </div>
                    <div class="modal-btn delete-action">
                      <div class="row">
                        <div class="col-6">
                          <a
                            class="btn btn-primary continue-btn"
                            @click.prevent="removeRank"
                            data-dismiss="modal"
                            >Delete</a
                          >
                        </div>
                        <div class="col-6">
                          <a
                            href="javascript:void(0);"
                            data-dismiss="modal"
                            class="btn btn-primary cancel-btn"
                            >Cancel</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </v-dialog>
            <!-- /Delete Employee Modal -->
          </div>
        </div>
        <!-- /Page Content -->
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
import LayoutSidebar from "@/components/layouts/orgAdminSidebar.vue";
import { organizationService } from "@/services/organizationService";
import { required } from "vuelidate/lib/validators";
import Vue from "vue";
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
  mounted() {
    this.getRanks();
  },
  data() {
    return {
      dialog: false,
      dialogEdit: false,
    dialogDelete: false,
      rankName: '',
      readHoliday: false,
      readLeave: false,
      readAssets: false,
      readTimesheet: false,
      writeHolidays: false,
      writeLeave: false,
      writeAssets: false,
      writeTimesheet: false,
      deleteHolidays: false,
      deleteLeave: false,
      deleteAssets: false,
      deleteTimesheet: false,
      rank: null,
      ranks: [],
      loading: false,
      error: "",
      message: "",
      isCreateNewRank: false,
      submitted: false,
    };
  },
  validations: {
    rankName: { required },
  },
  methods: {
    getRanks() {
      organizationService.getRanks().then((o) => {
        this.ranks = o;
      });
    },
    // handleNewRank() {
    //   handleNewRank = !this.isCreateNewRank
    // },

    close() {
      this.dialog = false
    },

    closeEdit() {
      this.dialogEdit = false;
    },

    closeDelete() { 
      this.dialogDelete = false;
    },

    setEditRank(model) {
      this.rank = model;
      this.dialogEdit = true
    },

    setDeleteRank(model) {
      this.rank = model;
      this.dialogDelete = true
    },

    removeRank() {
      const id = this.rank.id;
      organizationService.removeRank(id).then((id) => {
        organizationService.getRanks().then((l) => {
          this.ranks = l;
          this.dialogDelete = false;
        });
      });
    },

    updateRank() {
      this.submitted = true;
      this.loading = true;
      organizationService
        .updateRank(
          this.rank.id,
          this.rank.rankName,
          this.rank.rankPermission.readHoliday,
          this.rank.rankPermission.readLeave,
          this.rank.rankPermission.readAssets,
          this.rank.rankPermission.readTimesheet,
          this.rank.rankPermission.writeHolidays,
          this.rank.rankPermission.writeLeave,
          this.rank.rankPermission.writeAssets,
          this.rank.rankPermission.writeTimesheet,
          this.rank.rankPermission.deleteHolidays,
          this.rank.rankPermission.deleteLeave,
          this.rank.rankPermission.deleteAssets,
          this.rank.rankPermission.deleteTimesheet,
          this.rank.rankPermission.id
        )
        .then((id) => {
          this.message = "Rank updated successfully"
          organizationService.getRanks().then((w) => {
            this.ranks = w;
            this.dialogEdit = true
          });
        },
        error => {
          this.error = error;
        });
    },

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.loading = true;
      organizationService
        .addRank(
          this.rankName,
          this.readHoliday,
          this.readLeave,
          this.readAssets,
          this.readTimesheet,
          this.writeHolidays,
          this.writeLeave,
          this.writeAssets,
          this.writeTimesheet,
          this.deleteHolidays,
          this.deleteLeave,
          this.deleteAssets,
          this.deleteTimesheet
        )
        .then(
          (id) => {
            this.message = "Rank created successfully"
            organizationService.getRanks().then((o) => {
              this.ranks = o;
            });
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
    },
  },
  name: "ranks",
};
</script>