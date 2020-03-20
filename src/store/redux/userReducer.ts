//ACTION TYPES
export const SET_USER_STATE = 'SET_USER_STATE';

//ACTION CREATORS
export const setUserState = (action: any) => {
  return { type: SET_USER_STATE, action };
};

export default function userReducer(
  state = {},
  { type, action }: { type: string; action: any }
): any {
  switch (type) {
    case SET_USER_STATE:
      return { ...state, email: action };
    default:
      return state;
  }
}
