import { searchApi } from '~/api';
import { addSearchResult } from '~/store/reducers/search';

export const fetchSearch = (...args) => {
  return (dispatch) => {
    searchApi
      .getSearch(...args)
      .then((response) => {
        // console.log(response);
        if (!response) {
          throw new Error('Could not fetch data');
        }

        dispatch(addSearchResult(response));
      })
      .catch((err) => console.log(err));
  };
};
