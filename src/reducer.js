export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // "BQARpznW19Hk6yrZAQ0wyEOr-6viGacFobM_Kf6UfxSCR0XKHBro8hD4uPkf8nmkJw3QZE_izY9MY3IYKRty09FEMaaKV_znf3aObSY9P_1WLGtUyIq91PKHxP9qZ5bbWKrkfuz3zL-zknGNCfW1E5GhzT0iTuxF-uzrgZqRHf5aL-OG",
  // new token atr BQA8IAMuZXz1jPfinMN_F9PsimLqVE0AbUEOYWm7oy5fJu17Fd4blWs7C0kSFa4x5tkq4ExLL7yRe2FULV2zbMxHXKN9U6yU7g50NZKq3o9X9QGgbcrAkXlvxpQVyPpUkuCTiU6Q8WDkLXyQD4MfpLtkBewAeCmULbRC9mrA3Zwcl_2K
  // token:
  //   "BQDhd4X5LyizX-JZsrp6vl0f5WaCUTuqRW-3Ax-9ihRkQgU3cN9MMtLYVIDgiNFCrW_h-FAoXhxL6yHC_GKQLbPA-Gp9we4rNoBZnYNLoXZr39hWEfVQPwwI0chwjvTl1TTzX52Syu1WfKgLv0fFInZSFcjjF1F5fIWcYinu9QRD-N1KPXUg",
  // // tokenut trebiue pus pe null
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
export default reducer;
