import '../assets/styles/Home.css';
import { Article } from "./Article.component"
import { Aside } from "./Aside.component"


export const Home = () => {


  return (
    <>
      <container className='main-container'>
        <Aside />
        <main className="main">

          <Article />

          <div className="pagination">
            <button className="button-pagination button-back">
              <a href="#back">
                &lt;
              </a>
            </button>
            <button className="button-pagination button-1">
              <a href="#1">
                1
              </a>
            </button>
            <button className="button-pagination button-2">
              <a href="#2">
                2
              </a>
            </button>
            <button className="button-pagination button-3">
              <a href="#3">
                3
              </a>
            </button>
            <button className="button-pagination button-go">
              <a href="#next">
                &gt;
              </a>
            </button>
          </div>
        </main>
      </container>
    </>
  )
}