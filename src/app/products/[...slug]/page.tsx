import Image from 'next/image'
import Navbar from '@/components/common/nav'
import Footer from '@/components/common/footer'
import ArticlePage from '@/components/sections/articlePage/articlePage'
import DataPage from '@/components/sections/dataPage/dataPage'
import data from '@/data/db.json'

export default function Page({ params }: { params: { slug: string } }) {

let slugy = params.slug.toString();
let indexSlug = slugy.indexOf("-");
const category = slugy.substring(0, indexSlug);
const articleID = parseInt(slugy.substring(indexSlug + 1, slugy.length), 10);

interface Data {
  [key: string]: any; // lub bardziej szczegółowy typ zamiast `any`, jeśli jest znany
}
const dataCategory = (data as Data)[category];
const article = dataCategory.find((article: { id: number }) => article.id === articleID);
const articlesThisCategory = dataCategory;

  return (
      <>
        <Navbar />
        <ArticlePage {...article} />
        <DataPage articles={articlesThisCategory}/>
        <Footer />
      </>
  )
}


