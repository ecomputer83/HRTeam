<template>
  <div class="d-flex flex-wrap">
    <div class="col-xs-12 col-md-12 job-card">
      <div class="d-flex align-items-center">
        <label for="requisition_title" class="mr-5 mb-0">Title </label
        ><input
          value="title"
          type="text"
          class="form-control"
          name="requisition_title"
          id="requisition_title"
        />
      </div>
      <hr />
    </div>
    <div class="col-xs-12 col-md-6 p-0 pr-sm-2">
      <div class="job-card">
        <p>Header</p>
        <quill-editor
          v-model="content1"
          ref="myQuillEditor1"
          :options="editorOption1"
          @blur="onEditorBlur1($event)"
          @focus="onEditorFocus1($event)"
          @ready="onEditorReady1($event)"
        >
        </quill-editor>
      </div>
    </div>
    <div class="col-xs-12 col-md-6 p-0 pl-sm-2">
      <div class="job-card">
        <p>Job Definition</p>
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        >
        </quill-editor>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "job-requisition",
  data() {
    return {
          content: "<p>I am Example</p>",
          content1: "<p>I am Example</p>",
          editorOption: {},
          editorOption1: {},
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    onEditorBlur1(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus1(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady1(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange1({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>
