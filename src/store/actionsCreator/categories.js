import { browseApi } from '~/api';
import { addCategories } from '~/store/reducers/categories';

export const fetchCategories = (countryCode, limit) => {
  return (dispatch) => {
    browseApi
      .getCategories(countryCode, limit)
      .then((response) => {
        if (!response) {
          throw new Error('Could not fetch data');
        }
        dispatch(addCategories(response.categories.items));
      })
      .catch((err) => console.log(err));
  };
};
