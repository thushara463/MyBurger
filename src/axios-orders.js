import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-c66ec-default-rtdb.firebaseio.com/'
});

export default instance;
