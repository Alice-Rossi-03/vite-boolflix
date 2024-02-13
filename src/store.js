import { reactive } from 'vue' 

export const store = reactive ({
    cardListMovies: [],
    cardListTvs: [],
    apiUrl: 'https://developers.themoviedb.org/3',
    apiUrlMovies: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=9cc9fcb5482c5e3d9b233e9976513ee0',
    apiUrlTv: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=9cc9fcb5482c5e3d9b233e9976513ee0',
    searchText: ''
})
