import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	
  documents: Document[] = [
    {
    	title: "My first Doc",
    	description: "The best biggest docs ever",
    	file_url: "http://google.com",
    	updated_at: "12/08/17",
    	image_url: 'http://google.com'
    },{
    	title: "My 2nd Doc",
    	description: "The best biggest docs ever",
    	file_url: "http://google.com",
    	updated_at: "12/08/17",
    	image_url: 'http://google.com'
    },{
    	title: "Doc the thirds",
    	description: "The best biggest docs ever",
    	file_url: "http://google.com",
    	updated_at: "12/08/17",
    	image_url: 'http://google.com'
    }
  ]
}