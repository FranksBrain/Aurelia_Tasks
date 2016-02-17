export class Welcome {
    heading: string = 'Welcome to Aurelia!';
    firstName: string = 'Frank';
    lastName: string = 'Brain';

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    submit(): void {
        alert(`Welcome, ${this.fullName}!`);
    }
}