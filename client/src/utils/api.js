/**
 * Created by jakeforaker on 7/13/16.
 */

const API_URL = process.env.NODE_ENV === 'production' ? 'https://cool-tweets-api-hzxkymcvri.now.sh/api' : 'http://localhost:8080/api';

export default API_URL;
