'use client';
import GlobalAPI from '@/utils/GlobalAPI';
import React, { useEffect, useState } from 'react';

const useArticleByCategory = ({ categoryId } : {categoryId: number}) => {
  const [articlesList, setArticlesList] = useState([]);
  const getArticles = () => {
    GlobalAPI.getArticlesByCategory(categoryId).then((resp: any) => {
      setArticlesList(resp.data.data);
    });
  };
  useEffect(() => {
    getArticles();
  }, []);
  return articlesList;
};

export default useArticleByCategory;
