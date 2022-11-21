import personalizationApi from '~/api/personalization';
import { addItems } from '~/store/reducers/personalization';

export const fetchTopUserItems = () => {
  return (dispatch) => {
    personalizationApi
      .getUserTopItems('artists')
      .then((response) => {
        if (!response) {
          throw new Error('Could not fetch data');
        }
        dispatch(addItems(response));
      })
      .catch((err) => console.log(err));
  };
};
