import postsActions from "../actions/postsActions";
import { IData } from "../../Interfaces";

type PostsActions =
  | ReturnType<typeof postsActions.fetchDataSuccess>
  | ReturnType<typeof postsActions.fetchDataFail>;

type PostsState = {
  lists: IData[];
  err: string | null;
};

const initialState: PostsState = {
  lists: [],
  err: null,
};

const posts = (state: PostsState = initialState, action: PostsActions) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return { ...state, lists: action.lists, err: null };
    case "FETCH_DATA_FAIL":
      return { ...state, lists: [], err: action.err };
    default:
      return state;
  }
};

export default posts;
