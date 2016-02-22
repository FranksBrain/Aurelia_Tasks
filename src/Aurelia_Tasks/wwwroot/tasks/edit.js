import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {TaskData} from './taskData';
import {Router} from 'aurelia-router';

@inject(TaskData, Validation, Router)
export class Edit {
    constructor(taskData, validation, router){
        this.data = taskData;
        this.router = router;
        this.validation = validation.on(this)
            .ensure('taskItem.description')
                .isNotEmpty()
                .hasMinLength(3)
                .hasMaxLength(10);
    }

    activate(params){
        if(params.id) {
            this.data.getById(params.id).then(taskItem => {
                this.taskItem = taskItem;
                this.validation.validate().then(() =>{
                    console.log('passed validation');
                }).catch(error => {
                    console.log('Error: ' + error.properties["taskItem.description"].message);
                });
            });
        }
        else {
            this.taskItem = {};
        }
    }

    save() {
        this.validation.validate().then(() => {
            return this.data.save(this.taskItem);
        }).then(taskItem => {
            console.log(taskItem);
            //let url = this.router.generate('details', {id:taskItem.id});
            let url = this.router.generate('tasks');
            this.router.navigate(url);
        });
    }
}