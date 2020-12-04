import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        commit('setTodos', response.data);
        console.log(state.todos);
    },

    async addTodo({ commit }, title) {
        const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos', 
        {title, completed: false}
        );

        commit('newTodo', response.data);
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },

    async filterTodos({ commit }, event) {
        let limit = event.target.options[event.target.options.selectedIndex].value;
        if(limit === "All") {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);

            commit('setTodos', response.data);
        } else {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

            commit('setTodos', response.data);
        }
    },

    async updateTodo({ commit }, todoToUpdate) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todoToUpdate.id}`, todoToUpdate);

        console.log(response.data);

        commit('completeTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todosResponse) => state.todos = todosResponse,
    newTodo: (state, newTodoItem) => state.todos.unshift(newTodoItem),
    removeTodo: (state, id) => {
        state.todos.forEach( (item, index) => {
            if(item.id == id) {
                state.todos.splice(index, 1);
            }
        });
    },
    completeTodo: (state, todoToUpdate) => {
        const index = state.todos.findIndex(todo => todo.id === todoToUpdate.id);
        if(index != -1) {
            state.todos.splice(index, 1, todoToUpdate);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}