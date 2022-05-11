class User {
  constructor(id, name, favorites, recentlyViewed) {
    this.id = id;
    this.name = name;
    this.favorites = favorites ? [...favorites] : [];
    this.recentlyViewed = recentlyViewed ? [...recentlyViewed] : [];
  }
}

export default User;
