import { Component, OnInit } from '@angular/core';
import { ArchiveService } from './archive.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  panelOpenState = false;
  year=[];
  constructor(private archiveSercive:ArchiveService) { }

  ngOnInit() {
    this.archiveSercive.getArchive().subscribe(data =>{
      console.log(data);
      data["archive"].forEach(element => {
        this.year.push(element.year);
      });
     
      console.log(this.year);
     });
    
  }
}
