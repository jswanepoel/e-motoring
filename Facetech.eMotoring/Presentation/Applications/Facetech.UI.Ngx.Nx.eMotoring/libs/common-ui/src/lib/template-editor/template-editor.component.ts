import { Component, ViewChild } from '@angular/core';
import { Editor } from 'primeng/editor';
//import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
//ClassicEditor.create(... ); // [Function]

@Component({
  selector: 'ngx-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.css']
})
export class TemplateEditorComponent {

  toolbar = ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'];
  heading = {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
    ]
  };
  config = {
    url: '/springboot/upload',
    useCkfinder: false
  };
  content: any;


  ////////toolbar = ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo', '|', '|',
  ////////  'highlight:yellowMarker',
  ////////  'highlight:greenMarker',
  ////////  'highlight:blueMarker',
  ////////  'highlight:pinkMarker',
  ////////  '|',
  ////////  'highlight:greenPen',
  ////////  'highlight:redPen',
  ////////  '|',
  ////////  'removeHighlight', '|', '|',
  ////////  //'mediaEmbed',
  ////////  'imageUpload'
  ////////];

  ////////plugins = [Image];  //, ImageToolbar, ImageCaption, ImageStyle

  ////////image: {
  ////////  toolbar: ['imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side']
  ////////}

  ////////private quill: any;
  ////////@ViewChild(Editor) editorComponent: Editor;

  // '|', 'DBFields',

  //toolbar: [
  //  { name: 'document', items: ['Source', '-', 'Undo', 'Redo'] },
  //  { name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'] },
  //  { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
  //  //{ name: 'insert', items: ['Image', 'Format'] },
  //  { name: 'tools', items: ['Maximize', 'ShowBlocks', 'About'] }
  //];

  ////////heading = {
  ////////  options: [
  ////////    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
  ////////    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
  ////////    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
  ////////  ]
  ////////};

  //DBFields = {
  //  options: [
  //    { model: 'personName', title: 'Name' },
  //    { model: 'personSurname', title: 'Surname' },
  //    { model: 'birthdate', title: 'Date of Birth' }
  //  ]
  //};

  //config = {
//    url: '/springboot/upload',
    //useCkfinder: false
  //};

  ////////content: any;

  constructor() {
    //DecoupledEditor
    //  .create(document.querySelector('#editor'))
    //  .then(editor => {
    //    console.log(Array.from(editor.ui.componentFactory.names));
    //  })
    //  .catch(error => {
    //    console.error(error);
    //  });
  }

  ngAfterViewInit() {
    //this.quill = this.editorComponent.quill;
    //this.content = "";
  }
}




