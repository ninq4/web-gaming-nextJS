'use client';
import GlobalAPI from '@/utils/GlobalAPI';
import React, { useEffect, useState } from 'react';

const useArticles = () => {
  const [articlesList, setArticlesList] = useState([]);
  const getArticles = () => {
    GlobalAPI.getArticles().then((resp: any) => {
      setArticlesList(resp.data.data);
    });
  };
  useEffect(() => {
    getArticles();
  }, []);
  return articlesList;
};

export default useArticles;
