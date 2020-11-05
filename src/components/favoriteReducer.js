import { data } from "./API/Data";
import { CREATE_FAVORITE, DELETE_FAVORITE } from "./constants";

const initialState = {
  favorites: data,
};

export default function favoritesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CREATE_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites.filter((fav) => fav.id !== payload)],
      };
    default:
      return state;
  }
}
