import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createList(title: string) {
    //Send a request to create a list
    return this.webReqService.post('lists', {title});
  }

  getLists() {
    return this.webReqService.get('lists');
  }

  deleteList(listId: string) {
    return this.webReqService.delete(`lists/${listId}`);
  }

  getTasks(listId: String) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    return this.webReqService.post(`lists/${listId}/tasks`, {title});
  }

  

}
