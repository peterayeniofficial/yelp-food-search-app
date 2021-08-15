import axios from 'axios';

const YELP_API_KEY =
  'GKXGEbA8kMYcPSnqHAHftmEH-CxbEq9OYLTSwccb0cghCEHuOJBBWTOT8z6ddTsBBeODE82wi4sLDDq0OygYn0N03RxwGZM7Dx0PY0fenFIswaL7NUK187668NAYYXYx';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer ' + YELP_API_KEY,
  },
});
