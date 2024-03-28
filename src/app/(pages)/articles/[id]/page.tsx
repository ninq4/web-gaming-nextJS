
import SingleArticle from '@/components/ui/SingleArticle/SingleArticle';



export default function page({ params }: { params: number }) {
  return <SingleArticle params={params} />
}
