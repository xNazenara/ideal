const HomePage = () => {
  return (
    <div>
      <div className="initial-container">
        <div className="initial-container-filter">
          <div className="initial-top">
            <div className="initial-title">
              <div className="initial-title-text">
                Восстановление функций опорно-двигательного
                аппарата-позвоночника специалистом с 35-летним опытом в
                уникальных условиях Фитнес-SPA центра
              </div>
              <button className="initial-title-button">
                Записаться на приём
              </button>
            </div>
            <img className="initial-logo" src="/ideal_logo.webp" />
          </div>
          <div className="initial-360">
            <a
              href="http://osteo-ideal-sochi.tilda.ws/page15706916.html"
              target="_blank"
            >
              <img
                className="initial-360-logo"
                src="/three_hundred_sixty_icon.webp"
              />
            </a>
          </div>
          <div className="initial-contacts">
            <div className="initial-contacts-block">
              <img
                className="initial-contacts-image"
                src="/location_icon.webp"
              />
              <div className="initial-contacts-info">
                <div className="initial-contacts-text">
                  г. Сочи, ул. Просвещения, д.110,
                </div>
                <div className="initial-contacts-text">
                  Пансионат «Охотник», Спа-центр
                </div>
              </div>
            </div>
            <div className="initial-contacts-block">
              <img
                className="initial-contacts-image"
                src="/phone_numbers_icon.webp"
              />
              <div className="initial-contacts-info">
                <div className="initial-contacts-text">+7(918)-308-45-45</div>
                <div className="initial-contacts-text">+7(918)-404-04-99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cubes-container">
        <div className="container-title">
          СПОРТИВНО-ОЗДОРОВИТЕЛЬНЫЙ ЦЕНТР "ИДЕАЛ"
        </div>
        <div className="cubes-subcontainer">
          <div className="cubes-row">
            <div className="cubes-left-block">
              <img className="cubes-block-image" src="/woman.webp" />
              <div className="cubes-left-block-blue"></div>
            </div>
            <div className="cubes-right-block">
              <div className="cubes-block-title">ЧТО МЫ ПРЕДЛАГАЕМ?</div>
              <div className="cubes-block-text">Программа</div>
              <div className="cubes-block-title">"ОТДЫХ и ОЗДОРОВЛЕНИЕ"</div>
              <div className="cubes-block-text">
                Включает в себя комфортное размещение в городе-курорте Сочи и
                широкий спектр восстановительно-профилактических и
                оздоровительных услуг
              </div>
              <button className="cubes-button">
                Другие программы и услуги
              </button>
              <div className="cubes-right-block-green"></div>
            </div>
          </div>
          <div className="cubes-bottom-block">
            <div className="cubes-block-title">ЧТО МЫ ВОССТАНАВЛИВАЕМ?</div>
            <div className="cubes-block-text">
              <img className="cubes-block-tick" src="tick.png" />
              Позвоночник
            </div>
            <div className="cubes-block-text">
              <img className="cubes-block-tick" src="tick.png" />
              Суставы
            </div>
            <div className="cubes-block-text">
              <img className="cubes-block-tick" src="tick.png" />
              Мышечно-связочный аппарат
            </div>
            <button className="cubes-button">Цены и акции</button>
            <div className="cubes-bottom-block-pink"></div>
          </div>
        </div>
      </div>
      <div className="videos-container">
        <div className="container-title">Видео</div>
        <div className="videos-block-container">
          <div className="videos-block">
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/leD8BxVev9s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videos-description">
              Биодинамическая коррекция позвоночника и суставов.
            </div>
          </div>
          <div className="videos-block">
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/akoj18-wT44"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videos-description">
              Постизометрическа релаксация.
            </div>
          </div>
        </div>
        <div className="videos-block-big">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/BzgFhxhEm-w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="videos-block-big">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/wwbqnQZ0Dgk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
