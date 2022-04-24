export const Card = ({ title, description, imgUrl }) => {
  return `
  <li class="list__item" dir="ltr">
  <img
  class="list-item__img"
  src="${imgUrl}"
  alt="${title}"
  />
  <div class="card">
    <div class="flex-center card__description">
      <div class="flex-center description__content">
        <button class="flex-center content__button">
          <i class="button__arrow fa-solid fa-angles-left"></i>
        </button>
        <p class="content__text">
          ${description}
        </p>
      </div>
    </div>
  </div>
</li>
`;
};
