console.log('vue ok', Vue);
const { createApp } = Vue;
const apiUri = 'http://localhost/php-dischi-json/discs.php';
const app = createApp({
    data() {
        return {
            movies: []
        }
    },
    created() {
        axios.get(apiUri).then(res => {
            this.movies = res.data;
        })
    }
})

app.mount('#app')