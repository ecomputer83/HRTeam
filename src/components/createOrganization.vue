<template>
  <div class="vacancies">
    <div class="main-wrapper">
      <layout-header></layout-header>
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
                  <li class="breadcrumb-item active">Create Organization</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row flex-column justify-content-center">
            <div class="col-xl-6">
              <div class="card flex-fill">
                <div class="card-header">
                  <h4 class="card-title text-center">Create Organization</h4>
                </div>
                <div class="card-body">
                  <form @submit.prevent="handleCreateOrg">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Organization</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">RC Number</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Name</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Number</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Address</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">RC Number</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Contact Email</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          name="email"
                          v-model="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="submit-section">
                      <button class="btn btn-primary submit-btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div v-if="this.isCreateOrg" class="col-xl-6">
              <div class="card flex-fill">
                <div class="card-header">
                  <h4 class="card-title text-center">Create Admin Account</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Username</label>
                        <input
                          id="username"
                          type="username"
                          name="username"
                          v-model="this.email"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Confirm Password</label>
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="submit-section">
                      <button class="btn btn-primary submit-btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Content -->
        </div>
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layouts/Header.vue";
export default {
  components: {
    LayoutHeader,
  },
  data() {
    return {
      email: "",
      isCreateOrg: false,
    };
  },
  methods: {
    handleCreateOrg() {
      console.log(this.email);
      this.isCreateOrg = true;
    },
  },
  name: "createorganization",
};
</script>
