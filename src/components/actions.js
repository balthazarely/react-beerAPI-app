import { CREATE_FAVORITE, DELETE_FAVORITE } from "./constants";

export function createFavorite(favorite) {
  return {
    type: CREATE_FAVORITE,
    payload: favorite,
  };
}

export function deleteFavorite(favoriteId) {
  return {
    type: DELETE_FAVORITE,
    payload: favoriteId,
  };
}
