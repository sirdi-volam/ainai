import '../assets/styles/Home.css';
import { Article } from "./Article.component"
import { Aside } from "./Aside.component"
import { Pagination } from './Pagination.component';


export const Home = () => {

  return (
    <>
      <container className='main-container'>
        <Aside />
        <main className="main">
          <Article />
          
          <Pagination />
        </main>
      </container>
    </>
  )
}