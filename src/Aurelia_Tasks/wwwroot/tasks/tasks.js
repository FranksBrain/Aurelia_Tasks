import {inject} from 'aurelia-framework';
import {TaskData} from './taskData';

@inject(TaskData)
export class TaskItems{
    constructor(taskData){
        this.data = taskData;
    }

    activate(){
        return this.data.getAll()
            .then(taskItems => this.taskItems = taskItems);
    }
}


/*import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class TaskItems {
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

    activate() {
        return this.http.fetch('taskItems')
          .then(response => response.json())
          .then(taskItems => this.taskItems = taskItems);
    }
}
*/