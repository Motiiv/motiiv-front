import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

/* GET_USER에 대한 성공,실패 액션을 생성 */
const [
  TOGGLE_SHOW_FLOAT,
  TOGGLE_SHOW_FLOAT_SUCCESS,
  TOGGLE_SHOW_FLOAT_FAILURE,
] = createRequestActionTypes('mymotiiv/TOGGLE_SHOW_FLOAT');

/* 액션 호출 함수 생성 */
export const toggleShowFloat = createAction(TOGGLE_SHOW_FLOAT);

const toggleShowFloatState = isChecked => {
  return { data: isChecked };
};
/* 해당하는 액션 호출시 Saga실행 */
const toggleShowFloatSaga = createRequestSaga(
  TOGGLE_SHOW_FLOAT,
  toggleShowFloatState,
);

/* 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) */
export function* mymotiivSaga() {
  yield takeLatest(TOGGLE_SHOW_FLOAT, toggleShowFloatSaga);
}

/* State 초기값 */
const initState = {
  onFloatBtn: true,
};

/* 액션을 store에 저장하는 리듀서를 handleActions로 쉽게 처리! */
const mymotiiv = handleActions(
  {
    [TOGGLE_SHOW_FLOAT_SUCCESS]: (state, { payload: isChecked }) => ({
      ...state,
      onFloatBtn: isChecked,
    }),
    [TOGGLE_SHOW_FLOAT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default mymotiiv;
