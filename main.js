import './styles';
import { services } from './services/service';
import { Card } from './components/Card';

const getEl = (el) => document.querySelector(el);

const renderNews = async () => {
  const { news = [] } = await services.getNews();
  const cardList = getEl('#card-list');
  const cardsHtml = news?.map(({ title, description, imgUrl }) => {
    return Card({ title, description, imgUrl });
  }).join('');
  cardList?.insertAdjacentHTML('afterbegin', cardsHtml);
};

renderNews();
