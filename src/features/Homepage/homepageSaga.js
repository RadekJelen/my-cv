import { delay, call, takeEvery, put } from "redux-saga/effects"
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess, setRepositories } from "./homepageSlice";
import { getRepositories } from "../Portfolio/getRepositories"

function* fetchRepositoriesHandler() {
  try {
    yield delay(3000);
    const repositories = yield call(getRepositories);
    yield put(fetchRepositoriesSuccess(repositories));
    yield put(setRepositories(repositories));
  } catch {
    yield put(fetchRepositoriesError());
  }
};



export function* homepageSaga() {
  yield takeEvery(fetchRepositories.type, fetchRepositoriesHandler);
}