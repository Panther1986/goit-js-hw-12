const API_KEY = '42127236-8bfdbbfbeed8a2dadaca720e8';
const BASE_URL = 'https://pixabay.com/api/';


export default class GalerryApiService {
    constructor() {
        this.userQuery = '';
        this.page = 1;

    }

    async fetchArticles() {
        
       const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.userQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=15`);

        this.incrementPage();

        return response.data;

    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.userQuery;
    }

    set query(newQuery) {
        this.userQuery = newQuery;
    }
}