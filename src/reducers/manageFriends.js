export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]};
      break;
    case 'REMOVE_FRIEND':
      return {friends: state.friends.slice(0).filter(f => f.id !== action.id )};
      break;
    default:
      return state;
  }


}
