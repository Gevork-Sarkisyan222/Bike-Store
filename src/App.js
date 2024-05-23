import logo from './logo.svg';
import './App.scss';
import heroImage from './images/hero-bike.svg';
import leftImage from './images/left.png';
import SmallCard from './components/SmallCard';
import LargeCard from './components/LargeCard';

// images
import bike1 from './images/bike1.png';
import bike2 from './images/bike2.png';
import helemt from './images/biker-head.png';
import bike3 from './images/bike3.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container header-container">
          <button className="logo">
            <a href="">ООВЕЛОSHOP</a>
          </button>

          <ul className="links">
            <li className="item">
              <a href="">Каталог</a>
            </li>
            <li className="item">
              <a href="">Новинки</a>
            </li>
            <li className="item">
              <a href="">Заказать</a>
            </li>
            <li className="item">
              <a href="">Контакты</a>
            </li>
          </ul>
        </div>
      </header>

      <main className="hero">
        <div className="container hero-container">
          <div className="textContent">
            <h1>Магазин велосипедов с самой быстрой доставкой</h1>
            <p>Закажите велосипед прямо сейчас и мы подарим вам отличную каску.</p>
            <button>Выбрать велосипед</button>
          </div>
          <div className="image">
            <img src={heroImage} alt="image" />
          </div>
        </div>
      </main>

      <section className="contactUs">
        <div className="contact">
          <article className="leftImage">
            <img src={leftImage} alt="leftImage" />
          </article>
          <article className="rightContent">
            <h2>Укажите номер телефона и мы с вам свяжемся для обсуждения заказа.</h2>
            <form className="sendContent">
              <input type="tel" placeholder="Телефон" />
              <button type="submit">Отправить</button>
            </form>
          </article>
        </div>
      </section>

      <section className="catalog">
        <h1>Каталог</h1>
        <div className="container catalog-container">
          <div className="cardSection">
            <SmallCard image={bike1} />
            <SmallCard image={bike2} />
            <LargeCard
              price="12 830"
              image="https://st.depositphotos.com/1010550/4598/i/450/depositphotos_45987581-stock-photo-young-man-riding-mountain-bike.jpg"
            />
            <LargeCard
              price="14 700"
              image="https://cdn.road.cc/sites/default/files/styles/main_width/public/ribble-r872-disc-tiagra-riding-1.jpg"
            />
            <SmallCard image={helemt} />
            <SmallCard image={bike3} />
          </div>
        </div>
      </section>

      <footer className="footer">
        <h1>ООВЕЛОSHOP</h1>
      </footer>
    </div>
  );
}

export default App;
