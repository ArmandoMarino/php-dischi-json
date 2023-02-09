console.log('vue ok', Vue);
const { createApp } = Vue;
let apiUri = 'http://localhost/php-dischi-json/discs.php';
const app = createApp({
    data() {
        return {
            discs: [],
            selected: ''
        }
    },
    methods: {
        onSelectedChange(selected) {
            this.selected = selected;
            if (this.selected) apiUri += `?genres=${this.selected}`;
            axios.get(apiUri).then(res => {
                this.discs = res.data;
            })
        }
    },
    created() {
        this.onSelectedChange();
    }
})

app.mount('#app')