import axios from 'axios';

const httpRequest = axios.create({
    //baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// async: khi gọi hàm nó sẽ trả về 1 promise
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
