import { defineStore } from 'pinia';
import { ref } from 'vue'
import axiosInstance from '@/services/axios.js';


export const useAlertsStore = defineStore('alerts', () => {
  const books = ref([]);
  const bookNum = ref(null);
  

  const getBooks = async (searchTerm, category = '', sort = 'relevance') => {
    books.value = [];
    try {
      let result = await axiosInstance.get(`?q=${searchTerm}+subject:${category}&maxResults=40&&orderBy=${sort}&key=AIzaSyD_JUf6Lz0dvjlTANO6yoD3318LCHIemdc`);

      if (result.data && result.data.items) {
        result.data.items.forEach((item) => books.value.push(item))
        console.log(result);
        return
      } else {
        console.error("Получены некорректные данные");
      }
    } catch (error) {
      console.error("Произошла ошибка при выполнении запроса:", error);
    }
  }

  const getDate = async (date) => {
    books.value = [];
    try {
      let result = await axiosInstance.post('/api/test', date);

      // if (result.data && result.data.items) {
      //   result.data.items.forEach((item) => books.value.push(item))
      //   console.log(result);
      //   return
      // } else {
      //   console.error("Получены некорректные данные");
      // }
      console.log(result);
    } catch (error) {
      console.error("Произошла ошибка при выполнении запроса:", error);
    }
  }
 
  return {
    getBooks,
    getDate,
  }
})