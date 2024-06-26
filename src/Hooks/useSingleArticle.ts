import GlobalAPI from '@/utils/GlobalAPI';
import React, { useEffect, useState } from 'react';

const useSingleArticle = ({ id }: { id: number }) => {
  const [articlesList, setArticlesList] = useState([]);
  const getArticles = () => {
    GlobalAPI.getSingleArticle(id).then((resp: any) => {
      setArticlesList(resp.data.data);
    });
  };
  useEffect(() => {
    getArticles();
  }, [id]);
  return articlesList;
};

export default useSingleArticle;
