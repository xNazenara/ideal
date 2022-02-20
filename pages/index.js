const HomePage = () => {
  return (
    <div>
      <div className="initial-container">
        <div className="initial-container-filter" />

        <div className="initial-top">
          <div className="initial-title">
            <div className="initial-title-text">
              Восстановление функций опорно-двигательного аппарата-позвоночника
              специалистом с 35-летним опытом в уникальных условиях Фитнес-SPA
              центра
            </div>
            <button className="initial-title-button">
              Записаться на приём
            </button>
          </div>
          <img className="initial-logo" src="/ideal_logo.webp" />
        </div>
        <div className="initial-360">
          <img className="initial-360-logo" src="/three_hundred_sixty_icon" />
        </div>
        <div className="initial-contacts">
          <div className="initial-contacts-block">
            <img className="initial-contacts-image" src="/location_icon.webp" />
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
  );
};

export default HomePage;
