class MovieCollection extends Array{
  constructor(name,...items){
    super();
    [...items].forEach( (item) => this.push(item));
    this.name = name;
  }

  addMovie(movie) {
    this.push(movie);
  }

  topRated(limit = 10) {
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  }
}

export default MovieCollection;