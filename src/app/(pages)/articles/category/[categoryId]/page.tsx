'use client'
import ArticleByCategory from '@/components/ui/ArticleByCategory/ArticleByCategory'
import useArticleByCategory from '@/Hooks/useArticleByCategory'
import React, { useEffect } from 'react'

export default function page({ params }) {
    return <ArticleByCategory params={params}/>
}
