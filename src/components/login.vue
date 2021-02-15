<template>
	<div class="login">

		<body class="account-page" style="font-family: 'CircularStd', sans-serif;
    font-size: .9375rem;
    color: #1f1f1f;
    background-color: #f7f7f7;
    min-height: 100%;
    overflow-x: hidden;">

			<!-- Main Wrapper -->
			<div class="main-wrapper">
				<div class="account-content" style="padding: 35px 0;">
					<!-- <router-link to="/joblist"" class=" btn btn-primary apply-btn">Apply Job</router-link> -->
					<div class="container">
						<!-- Account Logo -->
						<div class="account-logo">
							<router-link to="/index"><img src="../assets/logo2.png" alt="Dreamguy's Technologies">
							</router-link>
						</div>
						<!-- /Account Logo -->

						<div class="account-box">
							<div class="account-wrapper">
								<h3 class="account-title">Login</h3>
								<p class="account-subtitle">Access to our dashboard</p>

								<!-- Account Form -->
								<form  @submit.prevent="onSubmit">
									<div class="form-group">
										<label>Email Address</label>
										<input type="text" v-model.trim="$v.username.$model" name="username" class="form-control" :class="{ 'is-invalid': submitted && $v.username.$error }" />
                						<div v-if="submitted && !$v.username.required" class="invalid-feedback">Username is required</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col">
												<label>Password</label>
											</div>
											<div class="col-auto">
												<a class="text-muted" href="forgotpassword">
													Forgot password?
												</a>
											</div>
										</div>
										<input type="password" v-model.trim="$v.password.$model" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.password.$error }" />
                						<div v-if="submitted && !$v.password.required" class="invalid-feedback">Password is required</div>
									</div>
									<div class="form-group text-center">
										<button class="btn btn-primary account-btn" :disabled="loading" type="submit">Login</button>
									</div>
									<div class="account-footer">
										<p>Don't have an account yet? <router-link to="/index">Dashboard</router-link>
										</p>
									</div>
								</form>
								<!-- /Account Form -->

							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Main Wrapper -->
		</body>
	</div>
</template>

<script>
	import { required } from 'vuelidate/lib/validators';

import { router } from '@/router';
import { authenticationService } from '@/services/authenticationService';

export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            returnUrl: '',
            error: ''
        };
    },
    validations: {
      username: { required },
      password: { required }
    },
    created () {
        // redirect to home if already logged in
        if (authenticationService.currentUserValue) { 
			if(authenticationService.currentUserValue.user.userType == 1){
            return router.push('/companies');
          }else if(authenticationService.currentUserValue.user.userType == 3){
            return router.push('/employeedashboard');
          }else{
          return router.push('/');
          }
            
        }

        // get return url from route parameters or default to '/'
        this.returnUrl = this.$route.query.returnUrl || '/';
    },
    methods: {
        onSubmit () {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }

            this.loading = true;
            authenticationService.login(this.username, this.password)
                .then(
                    user => {
						if(user.userType == 1){
            				return router.push('/companies');
          				}else if(user.userType == 3){
            				return router.push('/employeedashboard');
          				}else{
          					return router.push('/');
          				}
					},
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
        }
    }
};
</script>