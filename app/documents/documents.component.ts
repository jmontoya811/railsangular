import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	
  documents: Document[] = [
    {
    	title: "My first Doc",
    	description: "The best biggest docs ever",
    	file_url: "http://google.com",
    	updated_at: "12/08/17",
    	image_url: 'app/assets/imgs/polarbr.png'
    },{
    	title: "My 2nd Doc",
    	description: "The best biggest docs ever",
    	file_url: "http://google.com",
    	updated_at: "12/08/17",
    	image_url: 'app/assets/imgs/polarbr.png'
    },{
    	title: "Doc the thirds",
    	description: "The best biggest docs ever",
    	file_url: "http://google.com",
    	updated_at: "12/08/17",
    	image_url: 'app/assets/imgs/polarbr.png'
    }
  ]
}