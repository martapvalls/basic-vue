Vue.component('counter', {
    data(){
        return {
            counter: 0
        }
    },
    methods: {
        increment(){
            this.counter += 1
        },
        decrement(){
            this.counter -= 1
        }
    },
    template: `
    <div class="btn-container">
        <button v-on:click="increment"> + </button>
        <span> {{ counter }} </span>
        <button v-on:click="decrement"> - </button>
    </div>
    `
})

new Vue({
    el: '#app',
    data(){
        return {
            title: 'Hello!!! I am a counter 🔢'
        }
    }
})