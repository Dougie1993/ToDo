import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  // @ViewChild('ListTitleInput', {static: false}) input: ElementRef<HTMLInputElement>;

  constructor(private taskservice: TaskService) { }

  ngOnInit() {
  }

  createList(title: string) {
    this.taskservice.createList(title).subscribe((response: any) => {
      console.log(response);
    })
    // Now we navigate to lists/response._id

    // console.log(this.input.nativeElement.value);
    // this.input.nativeElement.value = "";
  }

}
