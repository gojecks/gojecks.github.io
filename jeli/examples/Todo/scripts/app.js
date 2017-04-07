jEli
    .jModule('Todo', {
        delimiter: ['${', '}'],
        requiredModules: []
    })
    .jController('todoController', todoControllerFn)
    .jElement('appDirective', function() {
        return {};
    })
    .jComponent({
        selector: "appComponent",
        controller: appComponentCtrl,
        controllerAs: '$app',
        template: '<app-directive>${$app.name}</app-directive>'
    });

function appComponentCtrl() {
    this.name = "This is coming from component";
}

function todoControllerFn() {
    this.pageHeading = "My First Todo App";
    this.todos = [];
    this.removeItemCount = 0;
    this.addTodo = function() {
        if (this.todoDescription) {
            this.todos.push({ description: this.todoDescription, done: false });
            this.todoDescription = "";
        }
    };

    this.removeTodo = function(todo) {
        if (this.todos[index]) {
            this.todos.splice(index, 1);
        }
    };

    this.markAsRemoved = function(force) {
        if (force) {
            this.removeItemCount++;
        } else {
            this.removeItemCount--;
        }
    };

    this.todoDescription = "";
}