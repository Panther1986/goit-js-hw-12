export default class GalerryApiService {
    constructor() {
        this.userQuery = '';
        this.page = 1;

    }

    fetchArticles() {
        console.log(this);
        const API_KEY = '42127236-8bfdbbfbeed8a2dadaca720e8';

    axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${this.userQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=15`)
        .then(function (response) {
            console.log(response.data.hits);
            this.page += 1;
        })
        
        .catch(function (error) {
        console.log(error);
    })
    }

    get query() {
        return this.userQuery;
    }

    set query(newQuery) {
        this.userQuery = newQuery;
    }
}