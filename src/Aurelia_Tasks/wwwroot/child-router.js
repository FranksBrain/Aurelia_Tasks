export class ChildRouter{
    heading = 'Child Router';

    configureRouter(config, router){
        config.map([
            { route: ['','welcome'], name:'welcome', moduleId: './welcome', nav:true, title:'Welcome' },
            { route: 'tasks', name:'tasks', moduleId: 'tasks/tasks', nav:true, title:'Tasks' },
            { route: 'users', name:'githubbers', moduleId: './githubbers', nav:true, title:'Githubbers'  },
            { route: 'child-router', name: 'child-router', moduleId: './child-router', nav:true, title:'Child Router' }
        ]);

        this.router = router;
    }
}