import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';

@inject(Validation)
export class Welcome {
    heading = 'Welcome to Tasks';
    

    constructor(validation){
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.validation = validation.on(this)
        .ensure('firstName')
        .isNotEmpty()
        .hasMinLength(10);
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    submit(){
        alert(`Welcome, ${this.fullName}!`);
    }
}