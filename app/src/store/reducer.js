/*
 * Local import
 */
import datas from './datas';

/*
 * Initial state
 */
const DATAS_GET = '';
/*
 * Initial state
 */
const initialState = {
  info: datas,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const doSomething = () => ({
  type: 'DATAS_GET',
});
