import { takeEvery, put, call } from "redux-saga/effects";
import allActions from "../actions";
import axios from "axios";

function* workerSaga() {
  function getPosts() {
    return axios.get(`http://c01d-br0th3r.kr:8000/api/`);
  }
  try {
    const { data: posts } = yield call(getPosts);
    yield put(allActions.postsActions.fetchDataSuccess(posts.reverse()));
  } catch (err) {
    yield put(allActions.postsActions.fetchDataFail(err));
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_DATA", workerSaga);
}

export default rootSaga;
