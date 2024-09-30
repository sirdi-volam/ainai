import '../assets/styles/Article.css'
import post1 from '../assets/images/article/post1.jpeg'
import post3 from '../assets/images/article/post3.jpeg'
import dot from '../assets/images/article/dot.png'
import postVideo from '../assets/images/article/post-video.png'
import play from '../assets/images/article/play.png'

export const Article = () => {
  return (
    <>

      <article className="article">
        <div className="article-card_content">
          <div className="article-card">
            <p className="article-card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
              tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
              nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div className="article-card_public">
            <div className="article-card_public_desc">
              <p className="article-card_public__date">
                21.06.2020
              </p>
            </div>
            <button className="button-reed">
              Читать
            </button>
          </div>
        </div>
      </article>



      <article className="article">
        <div className="article-img">
          <img src={post1} alt="Статья" />
        </div>
        <div className="article-card_content">
          <div className="article-card">
            <p className="article-card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
              tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
              nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div className="article-card_public">
            <div className="article-card_public_desc">
              <p className="article-card_public__date">
                21.06.2020
              </p>
              <img src={dot} alt="Точка" className="dot" />
              <p className="article-card_public__tags">
                создание сайтов
              </p>
            </div>
            <button className="button-reed">
              Читать
            </button>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article-video">
          <img src={postVideo} alt="Видео" className="post-video" />
          <img src={play} alt="Начать просмотр" className="play-video" />
        </div>
        <div className="article-card_content">
          <div className="article-card">
            <p className="article-card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
              tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
              nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div className="article-card_public">
            <div className="article-card_public_desc">
              <p className="article-card_public__date">
                21.06.2020
              </p>
              <img src={dot} alt="Точка" className="dot" />
              <p className="article-card_public__tags">
                продвижение видео
              </p>
            </div>
            <button className="button-reed">
              Читать
            </button>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="article-img">
          <img src={post3} alt="Статья" />
        </div>
        <div className="article-card_content">
          <div className="article-card">
            <p className="article-card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum,
              posuere
              tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu
              auctor
              nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div className="article-card_public">
            <div className="article-card_public_desc">
              <p className="article-card_public__date">
                21.06.2020
              </p>
              <img src={dot} alt="Точка" className="dot" />
              <p className="article-card_public__tags">
                создание сайтов
              </p>
            </div>
            <button className="button-reed">
              Читать
            </button>
          </div>
        </div>
      </article>
    </>
  )
}
