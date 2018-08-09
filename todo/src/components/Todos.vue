<template>
    <sections>
        <header class="todoapp">
            <h1>Liste de tâche</h1>
            <input type="text" class="new-todo" placeholder="Ajouter une tâche" v-model="newTodo" @keyup.enter="addTodo">
        </header>
        <div class="main">
            <ul class="todo-list">
                <li class="todo" v-for="todo in filtered" :class="{completed: todo.completed}">
                    <div class="view">
                    <input type="checkbox" v-model="todo.completed" class="toggle">
                        <label> {{ todo.name }}</label>
                    </div>
                </li>
            </ul>
        </div>
        <footer class="footer">
            <span class="todo-count">
                <strong>{{ remaining }}</strong> tâches
            </span>
            <ul class="filters">
                <li>
                    <a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a>
                </li>
                <li>
                <a href="#" :class="{selected: filter === 'todo'}"@click.prevent="filter = 'todo'">A acheter</a>
                </li>
                <li>
                    <a href="#" :class="{selected: filter === 'done'}"@click.prevent="filter = 'done'">Plus besoin</a>
                </li>
            </ul>
        </footer>
    </sections>
</template>

<script>
    export default {
        data (){
            return {
                todo: [{
                    name: 'todo', 
                    completed: false,
                }], 
                newTodo: '', 
                filter: 'all', 
            }
        },
        methods: {
            addTodo (){
                this.todo.push({
                    completed: false, 
                    name: this.newTodo, 
                })
                this.newTodo = ''
            }, 
        },
        computed: {
            remaining (){
                return this.todo.filter(todo => !todo.completed).length
            }, 
            filtered (){
                if(this.filter === 'todo'){
                    return this.todo.filter(todo => !todo.completed)
                } else if(this.filter === 'done'){
                    return this.todo.filter(todo => todo.completed)
                }
                return this.todo
            }
        }

    }

</script>

<style src="./todos.css">
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
</style>
