<template>
  <div class="d-flex flex-wrap">
    <div class="d-flex flex-wrap">
    <div class="col-xs-6 col-md-6 p-0 pl-sm-2">
      <div class="job-card">
        <p>Welcome Message when applied for this vacancy</p>
        <quill-editor
          v-model="settings.welcomeMessage"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </div>
    </div>
    <div class="col-xs-6 col-md-6 p-0 pl-sm-2">
      <div class="job-card">
        <p>Rejected message when application rejected by HR</p>
        <quill-editor
          v-model="settings.rejectMessage"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </div>
    </div>
    </div>
    <div class="col-xs-12 col-md-12 job-card">
      <div class="d-flex align-items-center">
        <input type="checkbox" v-model="settings.phoneInterviewChecked"  /> &nbsp;&nbsp;&nbsp;<label class="col-form-label">  Phone Interview for this vacancy</label>
      </div>
      
      <div class="job-card" v-if="settings.phoneInterviewChecked">
        <p>Welcome message when application proceed to phone interview stage</p>
        <quill-editor
          v-model="settings.welcomeMessageToPhoneInterview"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </div>
    </div>
    <div class="col-xs-12 col-md-12 job-card">
      <div class="d-flex align-items-center">
        <input type="checkbox" v-model="settings.careerTestingChecked"  /> &nbsp;&nbsp;&nbsp;<label class="col-form-label">  Career / Aptitude Test Interview for this vacancy</label>
      </div>
      
      <div class="job-card" v-if="settings.careerTestingChecked">
        <!-- <div class="form-group">
            <input v-model="settings.googleFormsForCareerTesting" placeholder="Add the Google forms url for the Test" type="text" class="form-control" name="settings_googleforms" id="settings_googleforms" />
        </div>
        <div class="form-group">
            <input v-model="settings.responseSpreadsheetForGoogleForms" placeholder="Add the Google sheet url for the response of the google forms above" type="text" class="form-control" name="settings_googlesheet" id="settings_googlesheet" />
        </div>
        <div class="form-group">
            <input type="checkbox" v-model="settings.setAutomaticScoring"  /> &nbsp;&nbsp;&nbsp;<label class="col-form-label">  Set Automatic scoring of the response</label>
        </div> -->
        <!-- <div class="d-flex" v-if="settings.setAutomaticScoring">
            <div class="col-xs-6 col-md-6 p-0 pl-sm-2">
                <label class="col-form-label">  Score for each question</label>
            <input v-model="settings.scorePerQuestion" placeholder="Score for each question" type="number" class="form-control" name="settings_scoreperquest" id="settings_scoreperquest" />
            </div>
            <div class="col-xs-6 col-md-6 p-0 pl-sm-2">
                <label class="col-form-label">  What is the average score an application must have</label>
            <input v-model="settings.passAverageScore" placeholder="What is the average score an application must have" type="number" class="form-control" name="settings_passscore" id="settings_passscore" />
            </div>
        </div> -->
        <p>Welcome message when application proceed to Career / Aptitude Test stage</p>
        <quill-editor
          v-model="settings.welcomeMessageToCareerTesting"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </div>
    </div>
    <div class="col-xs-12 col-md-12 job-card">
      <div class="d-flex align-items-center">
        <input type="checkbox" v-model="settings.faceToFaceInterviewChecked"  /> &nbsp;&nbsp;&nbsp;<label class="col-form-label">  Face To Face Interview for this vacancy</label>
      </div>
      
      <div class="job-card" v-if="settings.faceToFaceInterviewChecked">
        <p>Welcome message when application proceed to face to face interview stage</p>
        <quill-editor
          v-model="settings.welcomeMessageToFaceToFaceInterview"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "job-requisition",
  props: {
         settings: {}
      },
  data() {
    return {
          //requisition: this.requisition,
          //content: "<p>I am Example</p>",
          editorOption: {},
    }
  },
  mounted() {
    this.$emit('update:settings', this.settings);
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    onEditorChange1({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>
