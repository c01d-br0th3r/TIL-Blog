import { combineReducers } from "redux";
import posts from "./postsReducers";

const rootReducer = combineReducers({ posts });

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
