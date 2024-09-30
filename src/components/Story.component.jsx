import './Story.css'
import story1 from '../assets/images/story1.png'
import story2 from '../assets/images/story2.png'
import story3 from '../assets/images/story3.png'
import story4 from '../assets/images/story4.png'

export const Story = () => {
  return (
    <>
      <div className="story">
        <div className="story_card">
          <div className="story_card__title">
            <p>Создание сайтов</p>
          </div>
          <div className="story_card__date">
            <p>01.01.2020</p>
          </div>
          <div className="story_card__img">
            <img src={story1} alt="story" />
          </div>
        </div>
        <div className="story_card">
          <div className="story_card__title">
            <p>Создание сайтов</p>
          </div>
          <div className="story_card__date">
            <p>01.01.2020</p>
          </div>
          <div className="story_card__img">
            <img src={story2} alt="story" />
          </div>
        </div>
        <div className="story_card">
          <div className="story_card__title">
            <p>Создание сайтов</p>
          </div>
          <div className="story_card__date">
            <p>01.01.2020</p>
          </div>
          <div className="story_card__img">
            <img src={story3} alt="story" />
          </div>
        </div>
        <div className="story_card">
          <div className="story_card__title">
            <p>Создание сайтов</p>
          </div>
          <div className="story_card__date">
            <p>01.01.2020</p>
          </div>
          <div className="story_card__img">
            <img src={story4} alt="story" />
          </div>
        </div>
      </div>
    </>
  )
}
