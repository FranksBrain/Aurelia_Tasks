import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient, json)
export class TaskData{
    heading = 'Tasks';
    taskItems = [];

    constructor(http) {
        http.configure(config => {
            config
              .useStandardConfiguration()
              //.withBaseUrl('http://localhost:59011/api/');
        });

        this.http = http;
    }

    getAll() {
        return this.http.fetch('/api/taskItems')
        //return this.http.fetch('taskItems')
          .then(response => response.json())
          .then(taskItems => this.taskItems = taskItems);
    }
    
    getById(id){
        return this.http.fetch(`/api/taskItems/${id}`)
            .then(response => response.json())
            .then(taskItem => this.taskItem = taskItem);
    }

    save(taskItem) {
        if(taskItem.taskItemId) {
            return this.http.fetch('/api/taskItems', {
            method: 'put',
            body: json(taskItem)
        }).then(response => response.json())
          .then(taskItem => this.taskItem = taskItem);
            //return this.http.fetch('/api/taskItems', taskItem).then(response => response.json())
            //    .then(taskItem => this.taskItem = taskItem)
        }
        return this.http.fetch('/api/taskItems', {
            method: 'post',
            body: json(taskItem)
        }).then(response => response.json());
          //.then(taskItem => this.taskItem = taskItem);
    }
}