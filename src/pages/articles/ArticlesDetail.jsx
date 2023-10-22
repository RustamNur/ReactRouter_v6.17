import { useParams } from "react-router-dom"
import { useFetch } from "../../hook/useFetch"


const ArticlesDetail = () => {
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id;
    const {data : articles,isPending,error}=useFetch(url)
  return (
      <div>
          {isPending && <h3>Loading...</h3>}
          {error && <h3>{error}</h3>}
          {articles && (
              <>
                  <img src={articles.image} alt={articles.title} height="300" />
                  <h2>Title: {articles.title}</h2>
                  <p>Author: {articles.author}</p>
                  <p>{articles.body}</p>
              </>
          )}
      </div>
  )
}

export default ArticlesDetail