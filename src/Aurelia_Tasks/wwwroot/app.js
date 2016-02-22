export class App{
    configureRouter(config, router){
        config.title = 'Tasks';
        config.map([
            { route: ['','welcome'], name:'welcome', moduleId: './welcome', nav:true, title:'Welcome' },
            { route: 'welcome2', name:'welcome2', moduleId: './welcome2', nav:true, title:'Welcome2' },
            { route: 'tasks', name:'tasks', moduleId: 'tasks/tasks', nav:true, title:'Tasks' },
            { route: 'users', name:'githubbers', moduleId: './githubbers', nav:true, title:'Githubbers'  },
            { route: 'edit/:id', name:'edit', moduleId: 'tasks/edit' },
            { route: 'create', name:'create', moduleId: 'tasks/edit' },
            { route: 'child-router', name: 'child-router', moduleId: './child-router', nav:true, title:'Child Router' }
        ]);

        this.router = router;
    }
}