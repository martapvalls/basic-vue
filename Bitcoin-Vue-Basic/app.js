Vue.component('coinDetail', {
    props: ['coin'],
    data(){
        return {
            showPrices: false,
            value: 0,
            darkMode: false,
        }
    },
    computed:{
        title(){
            return `${this.coin.name} - ${this.coin.symbol}`
        },
        convertedValue(){
            if(!this.value){
                return 0
            }
            return this.value / this.coin.price
        }
    },
    methods:{
        toggleShowPrices(){
            this.showPrices = !this.showPrices
        },
        toggleDarkMode(){
            this.darkMode = !this.darkMode
            this.$emit('change-color')
        }
    },
    template: `
    <div class="coin-detail-container">
        <img 
            v-on:mouseover="toggleShowPrices"
            v-on:mouseout="toggleShowPrices" 
            v-bind:src="coin.img" v-bind:alt="coin.name">
    
        <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
        {{ title }}
            <span v-if="coin.changePercent > 0">✋</span>
            <span v-else-if="coin.changePercent < 0"> 🖕</span>
            <span v-else>👎 </span>
        </h1>
        <span v-on:click="toggleShowPrices"> {{ showPrices ? '🙈 HIDE PRICES 🙈' : '🐵 SHOW PRICES 🐵'}} </span>
        <input type="number" v-model="value">
        <span> {{ convertedValue }} </span>

        <slot name="text"></slot>
        <slot name="link"></slot>

        <ul v-show=showPrices>
            <li
            class="uppercase"
            v-bind:class='{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }' 
            v-for="(p, i) in coin.pricesWithDays"
            v-bind:key="p.day">
                {{ i }} - {{ p.day }} - {{ p.value }}
            </li>
        </ul>
        <button v-on:click="toggleDarkMode">{{ darkMode ? 'Click me for Light mode' : 'Click me for Dark mode'}}</button>
    </div>
    `
})


new Vue({
    el: '#app',
    data(){
        return{
            btc:{
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: 10,
                price: 8400,
                pricesWithDays: [
                    { day: 'Monday', value: 8400 },
                    { day: 'Tuesday', value: 7900 },
                    { day: 'Wednesday', value: 8200 },
                    { day: 'Thursday', value: 9000 },
                    { day: 'Friday', value: 9400 },
                    { day: 'Saturday', value: 10000 },
                    { day: 'Sunday', value: 10200 },
                ],

            },
            color: 'f4f4f4',
        }
    },
    created(){
        console.log('Created')
    },
    mounted(){
        console.log('Mounted')
    },
    methods:{
        updateColor(){
            this.color= this.color.split('').reverse().join('')
        }
    }
})