const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

// API - запросы
const getBenefists = () => axiosClient.get('/benefits?populate=*');
// API - запрос на получение статьей
const getArticles = () => axiosClient.get('/articles?populate=*');

export default {
    getBenefists,
    getArticles,
}