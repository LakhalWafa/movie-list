import uuid from 'uuid/v1';

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          title: action.title,
          id: uuid()
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};
