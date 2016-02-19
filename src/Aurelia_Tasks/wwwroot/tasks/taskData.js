import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class TaskData{
    heading = 'Tasks';
    taskItems = [];

    constructor(http) {
        http.configure(config => {
            config
              .useStandardConfiguration()
              .withBaseUrl('/api/');
        });

        this.http = http;
    }

    getAll() {
        return this.http.fetch('taskItems')
        //return this.http.fetch('taskItems')
          .then(response => response.json())
          .then(taskItems => this.taskItems = taskItems);
    }
    
    getById(id){
        return this.http.fetch(`taskItems/${id}`)
            .then(response => response.json())
            .then(taskItem => this.taskItem = taskItem);
    }
}