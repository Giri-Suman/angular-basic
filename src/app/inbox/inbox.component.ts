import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { InboxService } from './inbox.service';
import { ArchiveService } from '../archive/archive.service';
import { Router } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit  {
  name = 'Angular';
  @Input() archiveYear: string ;
   data:any;
   dataTable:any;
   constructor(private route:Router,private inboxService:InboxService,private archiveSercive:ArchiveService,private chRef: ChangeDetectorRef){

   }

  ngOnInit() {
    console.log(this.route.url);
  if (this.archiveYear===undefined)
  this.inboxService.getInbox().subscribe(data=>{
   this.data=data["requests"];
   console.log(this.data);
   this.chRef.detectChanges();
   this.dataTableLoad();  
  });
  else{
    this.archiveSercive.getArchive().subscribe(element => {
      element["archive"].forEach(ele => {
       if(ele.year===this.archiveYear)
       this.data=ele.requests;
      });  
      console.log(this.data);
      this.chRef.detectChanges();
      this.dataTableLoad();   
     });
  }
 
  }
  dataTableLoad()
   {
    let table = $('table');
    this.dataTable = table.DataTable({
    ordering:false,
    length:false,
    info: false,      
    lengthChange: false,
    pagingType: 'simple_numbers',
    pageLength: this.archiveYear===undefined ? 10 :100,
    searching: false,
    "bDestroy": true,
    language: {
   "paginate": {
   "previous": "<",
   "next" : ">"
  }
},  
   drawCallback: () => {
     $('.paginate_button.next').on('click', () => {
         this.nextButtonClickEvent();
       });
     
   },
   preDrawCallback: function (settings) {
    var api = new $.fn.dataTable.Api(settings);
    var pagination = $(this)
        .closest('.dataTables_wrapper')
        .find('.dataTables_paginate');
    pagination.toggle(api.page.info().pages > 1);
}
 
  });
   
   }

  buttonInRowClick(event: any): void {
    event.stopPropagation();
    console.log('Button in the row clicked.');
  }

  wholeRowClick(): void {
    console.log('Whole row clicked.');
  }

  nextButtonClickEvent(): void {
    //do next particular records like  101 - 200 rows.
    //we are calling to api

    console.log('next clicked')
  }
  previousButtonClickEvent(): void {
    //do previous particular the records like  0 - 100 rows.
    //we are calling to API
  }


}
