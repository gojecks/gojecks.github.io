(function() {
    function htmlEscape(s) {
        return s
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    var prettyHTML = {
        indexPagePrettify: ['<!DOCTYPE html>',
            '<html>',
            '<head>',
            '<title>JELIJS</title>',
            '</head>',
            '<body j-module="Todo">',
            '<div :controller="toDoController as $todo">',
            '<h1>{%$todo.pageHeading%}</h1>',
            '<form @submit="$todo.addTodo()">',
            '<input type="text" :model="$todo.todoDescription">',
            '<button type="submit">Add Todo</button>',
            '</form></div>',
            '<script src="scripts/jelijs.min.js"><\/script>',
            '<script src="scripts/app.js"><\/script>',
            '</body>',
            '</html>'
        ],
        todoModulePrettify: ['jEli',
            '.jModule("Todo",{requiredModules : []})',
            '.jController("toDoController", todoControllerFn)'
        ],
        toDoControllerPrettify: ['function todoControllerFn(){',
            'this.pageHeading = "My First Todo App";',
            'this.todos = [];',
            'this.addTodo = function(){',
            'if (this.todoDescription) {',
            'this.todos.push({description : this.todoDescription, done:false});',
            'this.todoDescription = "";',
            '}',
            '};',

            'this.removeTodo = function(index){',
            'if (this.todos[index]) {',
            'this.todos.splice(index, 1);',
            '}',
            '};',

            'this.todoDescription = "";',
            '}'
        ],
        indexPageCompletePrettify: ['<!DOCTYPE html>',
            '<html>',
            '<head>',
            '<title>JELIJS</title>',
            '</head>',
            '<body j-module="Todo">',
            '<div :controller="toDoController as $todo">',
            '<h1>{%$todo.pageHeading%}</h1>',
            '<form @submit="$todo.addTodo()">',
            '<input type="text" :model="$todo.todoDescription">',
            '<button type="submit">Add Todo</button>',
            '</form>',
            '<ul>',
            '<li :for="todo in $todo.todos">',
            '<input type="checkbox" :model="todo.done">',
            '<span :style="{text-decoration: todo.done ? \'line-through\' : \'none\'}">',
            '{%todo.description%}',
            '</span>',
            '<button @click="$todo.removeTodo(todo)">Remove</button>',
            '</li>',
            '</ul>',
            '</div>',
            '<script src="scripts/jelijs.min.js"><\/script>',
            '<script src="scripts/app.js"><\/script>',
            '</body>',
            '</html>'
        ],
        toDoControllerCompletePrettify: function(){
            return htmlEscape(this.todoModulePrettify.concat(this.toDoControllerPrettify).join('\n'));
        },
        jmodulescript: ["var module = jeli.jModule('app',{",
            " requiredModules:[],",
            " delimiter:['${','}']",
            "})"
        ],
        jconfigscript: ["module",
            ".jConfig(function(dictionaryProvider){",
            " dictionaryProvider.addToDictionary({name:'Test App'})",
            "})"
        ],
        jproviderscript: ["module",
            ".jProvider('dictionaryProvider',function(){",
            " var dictionary = []",
            "this.addToDictionary = function(obj){",
            "dictionary.push( obj )",
            "};",
            "this.$get = function($http){",
            "// perform request with $http",
            "return dictionary;",
            "   }",
            "}"
        ],
        jservicescript: ["module",
            ".jService('dictionaryService',function(dictionaryProvider, $http){",
            "this.sync = function(){",
            " // sync the dictionary",
            "   }",
            "}"
        ],
        jfactoryscript: ["module",
            ".jFactory('dictionaryFactory',function(dictionaryProvider, $http){",
            "this.sync = function(){",
            " // sync the dictionary",
            "   }",
            "return this",
            "}"
        ],
        jfilterscript: ["module",
            ".jFilter(name, function($sce){",
            " return function(value){",
            "// return processed value",
            "   }",
            "}"
        ],
        jvaluescript: ["module",
            ".jValue(name,[{}])"
        ],
        jcomponentscript: ["module",
            ".jComponent({",
            "   selector:name",
            "   controller:function(){}",
            "   controllerAs:'//controllerAs'",
            "   style:'// css'",
            "   template:'// html'",
            "})"
        ],
        jcontrollerscript: ["module",
            ".jController(name, function($model){",
            " // controller functionality goes here",
            "})"
        ],
        jelementscript: ["module",
            ".jElement(name, function(){",
            " return {",
            "   template:'// template",
            "   $init:function(ele,attr,model){",
            "   // do something here",
            "   };",
            "});"
        ],
        jinitscript: ["module",
            ".jInit(function(dependencies){",
            "   // do something here",
            "})"
        ],
        modelnewscript: ["model.$new() // unisolated model",
            "model.$new(1) // isolated model"
        ],
        modelevalscript: ["model.$evaluate('a.b.c') //context on same instance",
            "model.$evaluate('a.b.c',context) // expression evaluated on a different context"
        ],
        modelapplyscript: ["model.$apply()"],
        modelwatchscript: ["model.$watch('a.b.c',function(newval, oldval){",
            "   //so something here",
            "}",
            "\n",
            "model.$watch(function(){",
            "   // do something here",
            "   }"
        ],
        modelconsumescript: ["model.$consume()"],
        modelonscript: ["model.$on('test',function(ev){",
            "   // do something here",
            "}"
        ],
        modelbroadcastscript: ["model.$broadcast('test',1)"],
        jmoduledirscript: ['<html :module="moduleName">', 'or', '<body :module="moduleName"></body>']
    };


    for (var name in prettyHTML) {
        build(name);
    }

    function build(name) {

        // this page's own source code
        var quineHtml="";
        switch(typeof prettyHTML[name]){
            case('object'):
                quineHtml = htmlEscape(prettyHTML[name].join('\n'));
            break;
            case('function'):
                quineHtml = prettyHTML[name]();
            break;
            case('string'):
                var ele = document.getElementById(prettyHTML[name]);
                if(ele)
                    quineHtml = htmlEscape(ele.textContent);
            break;
        }

        // Highlight the operative parts:
        quineHtml = quineHtml.replace(
            /&lt;script src[\s\S]*?&gt;&lt;\/script&gt;|&lt;!--\?[\s\S]*?--&gt;|&lt;pre\b[\s\S]*?&lt;\/pre&gt;/g,
            '<span class="operative">$&<\/span>');

        // insert into PRE
        var ele = document.getElementById(name);
        if(ele){
            ele.innerHTML = quineHtml;
        }
        
    }


})();