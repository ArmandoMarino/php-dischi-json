console.log('vue ok', Vue);
const { createApp } = Vue;
const apiUri = 'http://localhost/php-dischi-json/discs.php';
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
            let url = apiUri;
            if (this.selected) url += `?genres=${this.selected}`;

            axios.get(url).then(res => {
                this.discs = res.data;
            })
        }
    },
    created() {
        this.onSelectedChange();
    }
})

app.mount('#app')