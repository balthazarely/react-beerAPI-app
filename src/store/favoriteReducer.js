import { data } from "../components/API/Data";
import { CREATE_FAVORITE, DELETE_FAVORITE } from "./FavoriteConstants";

const initialState = {
  favorites: data,
};

export default function favoriteReducer(
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
