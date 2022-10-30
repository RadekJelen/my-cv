import { all } from "redux-saga/effects";
import { homepageSaga } from "./features/Homepage/homepageSaga";

export default function* rootSaga() {
  yield all([
    homepageSaga(),
  ]);
};