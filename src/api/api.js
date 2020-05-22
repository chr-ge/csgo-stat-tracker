import axios from 'axios';

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/csgo/standard/`,
  headers: {'TRN-Api-Key': process.env.REACT_APP_TRACKER_API_KEY}
});