<template>
  <div class="jobprofileinfo">
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
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Job Profile</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-md-12">
              
								<div class="card">
									<div class="card-body">
										<h4 class="card-title">Account Manager</h4>
										<ul class="nav nav-tabs nav-tabs-bottom nav-justified col-md-6">
											<li class="nav-item"><a class="nav-link active" href="#basictab1" data-toggle="tab">Summary</a></li>
											<li class="nav-item"><a class="nav-link" href="#basictab2" data-toggle="tab">Details</a></li>
										</ul>
										<div class="tab-content">
											<div class="tab-pane show active" id="basictab1">
                        <div class="row">
                          <section class="review-section information col-md-6">
                            <div class="card-header">
                              <h4 class="card-title mb-0">General</h4>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-nowrap review-table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <form>
                                                            <div class="form-group">
                                                                <label for="name">Name</label>
                                                                <input type="text" class="form-control" id="name">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="depart3">Professional Experience</label>
                                                                <input type="text" class="form-control" id="depart3">
                                                            </div>
                                                            <div class="form-group">
                                                              <label>Job level:</label>
                                                              <select class="select form-control">
                                                                <option>-- Select --</option>
                                                                <option value="1">Student/Intern</option>
                                                                <option value="2">Entry Level</option>
                                                                <option value="3">Professional</option>
                                                                <option value="4">Specialist</option>
                                                                <option value="5">Team Leader</option>
                                                              </select>
                                                            </div>
                                                            <div class="form-group">
                                                              <label>Department:</label>
                                                              <select class="select form-control">
                                                                <option>-- Select --</option>
                                                                <option value="1">Administration</option>
                                                                <option value="2">Audit and Finance</option>
                                                                <option value="3">Security</option>
                                                                <option value="4">Medical</option>
                                                                <option value="5">Works</option>
                                                              </select>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="qualif">Salary Min. </label>
                                                                <input type="text" class="form-control" id="qualif">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="qualif">Salary Max. </label>
                                                                <input type="text" class="form-control" id="qualif">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="qualif">Average Salary </label>
                                                                <input type="text" class="form-control" id="qualif">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="qualif">Qualification: </label>
                                                                <input type="text" class="form-control" id="qualif">
                                                            </div>
                                                            
                                                            <div class="form-group">
                                                                <label class="qualif">Description</label>
                                                                <div>
                                                                    <textarea rows="10" cols="10" class="form-control" placeholder="Enter text here"></textarea>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </td>                                             
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                          </section>
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                      <h4 class="card-title mb-0">Skill Level</h4>
                                      <div class="col-auto float-right ml-auto">
                                          <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_skill"><i
                                            class="fa fa-plus"></i>New Skill Level</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Skill</th>
                                                    <th>Required Grade</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Business English</td>
                                                    <td>C1 - Advanced</td>
                                                    <td>Language Skill</td>
                                                </tr>
                                                <tr>
                                                    <td>Miller-Hillman method</td>
                                                    <td>Handling Complexicity, Business Developer</td>
                                                    <td>Professional Skill</td>
                                                </tr>
                                                <tr>
                                                    <td>Object Handling</td>
                                                    <td>Dooley</td>
                                                    <td>july@example.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between">
                                      <h4 class="card-title mb-0">Vacancies</h4>
                                      <div class="col-auto float-right ml-auto">
                                          <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_vacancy"><i
                                            class="fa fa-plus"></i>New Vacancy</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover mb-0">
                                            <thead>
                                                <tr>
                                                  <th>Department</th>
                                                  <th>Quantity</th>
                                                  <th>Job Location</th>
                                                  <th>Expected Salary</th>
                                                  <th>Status Reason</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Business English</td>
                                                    <td>C1 - Advanced</td>
                                                    <td>Language Skill</td>
                                                    <td>#105,000</td>
                                                    <td>Receiving Applications</td>
                                                </tr>
                                                <tr>
                                                    <td>Miller-Hillman method</td>
                                                    <td>Handling Complexicity, Business Developer</td>
                                                    <td>Professional Skill</td>
                                                    <td>#725,000</td>
                                                    <td>Receiving Applications</td>
                                                </tr>
                                                <tr>
                                                    <td>Object Handling</td>
                                                    <td>Dooley</td>
                                                    <td>july@example.com</td>
                                                    <td>#93,500</td>
                                                    <td>Receiving Applications</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
											</div>
											<div class="tab-pane" id="basictab2">
												<div class="row">
                          <div class="col-md-12">
                            <div class="card">
                              <div class="card-header">
                                <h4 class="card-title mb-0">Validation</h4>
                              </div>
                              <div class="card-body">
                                <form action="#">
                                  <div class="form-group">
                                    <label>Show required for:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Applicant Portal</option>
                                      <option value="2">Labour Office (bfa)</option>
                                      <option value="3">Xing</option>
                                    </select>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title mb-0">Stepstone: General</h4>
                            </div>
                            <div class="card-body">
                              <form action="#">
                                <div class="form-group">
                                  <label>Keywords:</label>
                                  <input type="text" class="form-control">
                                </div>
                                  <div class="form-group">
                                    <label>Language:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Arabic</option>
                                      <option value="2">English</option>
                                      <option value="3">German</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Reply Settings:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Email</option>
                                      <option value="2">URL</option>
                                    </select>
                                  </div>
                                <div class="form-group">
                                  <label>Company Portal URL:</label>
                                  <input type="text" class="form-control">
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title mb-0">Stepstone: Job Categorization and Display Information</h4>
                            </div>
                            <div class="card-body">
                              <form action="#">
                                <div class="form-group">
                                  <label>Channel:</label>
                                  <input type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Industry:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Advertising, Communication and PR</option>
                                      <option value="2">Agriculture, Fishing and Forestry</option>
                                      <option value="3">Armed Forces</option>
                                      <option value="4">Art, Culture, Entertainment & Sport</option>
                                      <option value="5">Auditing/Accounting</option>
                                      <option value="6">Automotive Sector</option>
                                      <option value="7">Banking, Financial Services and Insurance</option>
                                      <option value="8">Building & Construction</option>
                                      <option value="9">Chemical & Petrochemical Industry</option>
                                      <option value="10">Conservation and Environment</option>
                                      <option value="11">Consulting</option>
                                      <option value="12">Distribution, Transport & Logistics</option>
                                      <option value="13">Education and Training</option>
                                      <option value="14">Electricity, Gas and Water Supply</option>
                                      <option value="15">Fast Moving Consumer Goods/Durables</option>
                                      <option value="16">Food and Beverages</option>
                                      <option value="17">Hotels, Restaurants & Catering</option>
                                      <option value="18">HR Services, Recruitment & Selection</option>
                                      <option value="19">IT and Internet</option>
                                      <option value="20">Legal</option>
                                      <option value="21">Leisure and Tourism</option>
                                      <option value="22">Manufacturing</option>
                                      <option value="23">Media, Audiovisual & Publishing</option>
                                      <option value="24">Medical Technology</option>
                                      <option value="25">Medical, Health and Social Care</option>
                                      <option value="26">Mining and Quarrying</option>
                                      <option value="27">Other</option>
                                      <option value="28">Other Business Activities & Services</option>
                                      <option value="29">Pharmaceutical Sector</option>
                                      <option value="30">Printing Industry</option>
                                      <option value="31">Public Administration</option>
                                      <option value="32">Public Services</option>
                                      <option value="33">Real Estate</option>
                                      <option value="34">Research & Development</option>
                                      <option value="35">Space & Aerospace</option>
                                      <option value="36">Steel Industry</option>
                                      <option value="37">Telecommunication Services</option>
                                      <option value="38">Textiles, Clothing and Leather & Fashion</option>
                                      <option value="39">Wholesale & Retail trade</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Experience:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">No Experience/First Jobs</option>
                                      <option value="2">Experience required</option>
                                      <option value="3">Executive Jobs</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Employment Type:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Full Time</option>
                                      <option value="2">Part Time</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Contract Type:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Temporary</option>
                                      <option value="2">Temporary wiht possibility of permanence</option>
                                      <option value="3">Freelance</option>
                                      <option value="4">Internship</option>
                                      <option value="5">Student Job</option>
                                      <option value="6">Seasonal Job</option>
                                    </select>
                                  </div>
                                <div class="form-group">
                                  <label>Company Portal URL:</label>
                                  <input type="text" class="form-control">
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title mb-0">Stepstone: Contract Details</h4>
                            </div>
                            <div class="card-body">
                              <form action="#">
                                <div class="form-group">
                                  <label>Name:</label>
                                  <input type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Duration (In days):</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">30</option>
                                      <option value="2">60</option>
                                      <option value="3">90</option>
                                      <option value="4">360</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Contract End Date <span class="text-danger">*</span></label>
                                    <div class="cal-icon"><input class="form-control datetimepicker" type="text">
                                    </div>
                                  </div>
                                  <div class="row">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title mb-0">Xing: All Vacancy Details</h4>
                            </div>
                            <div class="card-body">
                              <form action="#">
                                <div class="form-group">
                                  <label>Keywords:</label>
                                  <input type="text" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Industry:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Advertising, Communication and PR</option>
                                      <option value="2">Agriculture, Fishing and Forestry</option>
                                      <option value="3">Armed Forces</option>
                                      <option value="4">Art, Culture, Entertainment & Sport</option>
                                      <option value="5">Auditing/Accounting</option>
                                      <option value="6">Automotive Sector</option>
                                      <option value="7">Banking, Financial Services and Insurance</option>
                                      <option value="8">Building & Construction</option>
                                      <option value="9">Chemical & Petrochemical Industry</option>
                                      <option value="10">Conservation and Environment</option>
                                      <option value="11">Consulting</option>
                                      <option value="12">Distribution, Transport & Logistics</option>
                                      <option value="13">Education and Training</option>
                                      <option value="14">Electricity, Gas and Water Supply</option>
                                      <option value="15">Fast Moving Consumer Goods/Durables</option>
                                      <option value="16">Food and Beverages</option>
                                      <option value="17">Hotels, Restaurants & Catering</option>
                                      <option value="18">HR Services, Recruitment & Selection</option>
                                      <option value="19">IT and Internet</option>
                                      <option value="20">Legal</option>
                                      <option value="21">Leisure and Tourism</option>
                                      <option value="22">Manufacturing</option>
                                      <option value="23">Media, Audiovisual & Publishing</option>
                                      <option value="24">Medical Technology</option>
                                      <option value="25">Medical, Health and Social Care</option>
                                      <option value="26">Mining and Quarrying</option>
                                      <option value="27">Other</option>
                                      <option value="28">Other Business Activities & Services</option>
                                      <option value="29">Pharmaceutical Sector</option>
                                      <option value="30">Printing Industry</option>
                                      <option value="31">Public Administration</option>
                                      <option value="32">Public Services</option>
                                      <option value="33">Real Estate</option>
                                      <option value="34">Research & Development</option>
                                      <option value="35">Space & Aerospace</option>
                                      <option value="36">Steel Industry</option>
                                      <option value="37">Telecommunication Services</option>
                                      <option value="38">Textiles, Clothing and Leather & Fashion</option>
                                      <option value="39">Wholesale & Retail trade</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Language:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Arabic</option>
                                      <option value="2">English</option>
                                      <option value="3">German</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Job Discipline:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Analysis and Statistics</option>
                                      <option value="2">Administration</option>
                                      <option value="3">Consulting</option>
                                      <option value="3">Consumer Services</option>
                                      <option value="4">Purchasing Materials Management and Logistics</option>
                                      <option value="5">Finance Accounting and Controlling</option>
                                      <option value="5">Teaching R AND D</option>
                                      <option value="5">Health Medical and Social</option>
                                      <option value="5">Graphic design and Architecture</option>
                                      <option value="5">Engineering and Technical</option>
                                      <option value="5">IT and Software Development</option>
                                      <option value="5">Management and Corporate Development</option>
                                      <option value="5">Marketing and Advertising</option>
                                      <option value="5">HR</option>
                                      <option value="5">PR and Journalism</option>
                                      <option value="5">Production and Manufacturing</option>
                                      <option value="5">Product Management</option>
                                      <option value="5">Project Management</option>
                                      <option value="5">Process Management and QA</option>
                                      <option value="5">LAW</option>
                                      <option value="5">Sales and Commerce</option>
                                      <option value="5">Other Disciplines</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                      <label>Career Level:</label>
                                      <select class="select form-control">
                                        <option>-- Select --</option>
                                        <option value="1">Student/Intern</option>
                                        <option value="2">Entry Level</option>
                                        <option value="3">Professional</option>
                                        <option value="1">Team Lead</option>
                                        <option value="2">Management</option>
                                        <option value="3">Upper Management (CxO)</option>
                                      </select>
                                    </div>
                                  <div class="form-group">
                                      <label>Employment Type:</label>
                                      <select class="select form-control">
                                        <option>-- Select --</option>
                                        <option value="1">Full Time</option>
                                        <option value="2">Part Time</option>
                                        <option value="3">Student</option>
                                        <option value="1">Seasonal</option>
                                        <option value="2">Trainee/Voluntary</option>
                                        <option value="3">Internship</option>
                                        <option value="3">Temporary Work</option>
                                        <option value="3">Contract Worker</option>
                                      </select>
                                  </div>
                                  <div class="form-group">
                                      <label>Reply Setting:</label>
                                      <select class="select form-control">
                                        <option>-- Select --</option>
                                        <option value="1">Email</option>
                                        <option value="2">URL</option>
                                        <option value="3">Private Message</option>
                                      </select>
                                    </div>
                                    <div class="form-group">
                                    <label>Point of Contact Type:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">User</option>
                                      <option value="2">Company</option>
                                      <option value="3">None</option>
                                    </select>
                                  </div>

                              </form>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-header">
                              <h4 class="card-title mb-0">Labour Office: Professional Details</h4>
                            </div>
                            <div class="card-body">
                              <form action="#">
                                <div class="form-group">
                                  <label>Salary</label>
                                  <input type="text" class="form-control">
                                </div>
                                  <div class="form-group">
                                    <label>Job Type Offer:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Job - Placement possible</option>
                                      <option value="2">Self-employment - No placement possible</option>
                                      <option value="3">Apprenticeship - Placement possible</option>
                                      <option value="4">Trainee - Placement possible for Social Insurance Obligation</option>
                                      <option value="4">Qualified employees only - Placement possible</option>
                                      <option value="4">Management only - Placement possible</option>
                                      <option value="4">Support Staff only - Placement possible</option>
                                      <option value="4">Artist - Placement only over Artist Placement (ZAV) possible</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Collective Agreement</label>
                                    <input type="text" class="form-control">
                                  </div>
                                  <div class="form-group">
                                    <label>Education Requirement:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Applicant must possess exactly this degree</option>
                                      <option value="2">Applicant must possess at least this degree</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Education Degree:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Applicant must possess exactly this degree</option>
                                      <option value="2">Applicant must possess at least this degree</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Professional Degree:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Applicant must possess exactly this degree</option>
                                      <option value="2">Applicant must possess at least this degree</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label>Alternate Education Degree:</label>
                                    <select class="select form-control">
                                      <option>-- Select --</option>
                                      <option value="1">Applicant must possess exactly this degree</option>
                                      <option value="2">Applicant must possess at least this degree</option>
                                    </select>
                                  </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        </div>
											</div>
										</div>
									</div>
								</div>
							</div>
          </div>
        <!-- /Page Content -->
      </div>
    </div>
    <!-- Add Skill Modal -->
				<div id="add_skill" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">New SKill</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Job Profile <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Skill</label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Required Grade <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
                  </div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Skill Modal -->
        <!-- Add Vacancy Modal -->
				<div id="add_vacancy" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">New Vacancy</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Job Profile <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Skill</label>
												<input class="form-control" type="text">
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Required Grade <span
														class="text-danger">*</span></label>
												<input class="form-control" type="text">
											</div>
										</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
                  </div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- /Add Vacancy Modal -->
    <!-- /Page Wrapper -->
  </div>
  </div>
</template>
<script>
  import LayoutHeader from '@/components/layouts/Header.vue'
  import LayoutSidebar from '@/components/layouts/Sidebar.vue'
  import Vue from 'vue'
  export default {
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
    mounted() {
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

            if ($('.floating').length > 0) {
                $('.floating').on('focus blur', function (e) {
                    $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                }).trigger('blur');
            }
    },
    methods: {
    },
    name: 'JobProfileInfo'
  }
</Script>