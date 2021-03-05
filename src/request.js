const api_key = "e20c3b8b839743117793bc4716dea8ab"

const request = {
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-us`,
    fetchNetflixOrginals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${api_key}&with_genres=99`,
}

export default request