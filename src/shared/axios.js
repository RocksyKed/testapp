import axios from 'axios';

export const setHttpHeader = (key) => {
    axios.defaults.headers.common['Authorization'] = key;
};

export default axios;