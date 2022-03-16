Vue.component('task-list', {
    template: '#task-list',
    props: {
        tasks: { default: [] }
    },
    data() {
        return {
            newTask: ''
        };
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.tasks.push({
                    title: this.newTask,
                });
                this.newTask = '';
                this.show = true
            }
        },
    }
});

Vue.component('task-item', {
    template: '#task-item',
    props: ['task'],
});

new Vue({
    el: '.app',
    data: {
        tasks: [],
        show = false
    }
});