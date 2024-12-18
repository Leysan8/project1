import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="/configurator">Перейти в Конфигуратор</Link>
    </div>
  );
};

export default HomePage;
