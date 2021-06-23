import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { List } from 'src/app/interface/list.interface';
import { Task } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists : List[];
  tasks : Task[];
  list : List;

  constructor(private taskservice: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.listId) {
        console.log(params);
        this.taskservice.getTasks(params.listId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
          console.log(tasks);
        })
      } else {
        this.tasks = undefined;
      }
      
    })
    this.taskservice.getLists().subscribe((lists: List[]) => {
      console.log(lists);
      this.lists = lists;
    })
  }

  onTaskClick(task: Task) {
    task.completed = !task.completed;
    this.taskservice.complete(task).subscribe(() => {
      console.log('completed Succesfully ', task);
    });
  }

  

}
