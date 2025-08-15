import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, country }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => setArticle(data.articles))
  }, [category, country]);

  return (
    <>
      <h1 className="text-center text-xl sm:text-2xl font-semibold mb-4">
        <b>Latest </b>
        <span className="inline-flex items-center px-2 py-1 rounded-md font-medium bg-red-500 text-white">
          {category} News
        </span>
      </h1>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-12 p-4 sm:p-5 sm:pl-28">
        {article.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </>
  )
}

export default NewsBoard;
