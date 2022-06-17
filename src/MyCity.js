import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    NavLink,
    useParams,
    useSearchParams,
    Navigate,
    useNavigate,
    Link,
  } from 'react-router-dom';
import "./App.css";
const setActive = ({ isActive }) => (isActive ? 'active' : '');
function NavMenu() {
    return (
      <div className="navMenu">
        <NavLink to="/" className={setActive}>
          Головна
        </NavLink>
        <NavLink to="/most_famous_landmark" className={setActive}>
            Найвідоміше місце
        </NavLink>
        <NavLink to="/famous_landmarks" className={setActive}>
            Відомі місця
        </NavLink>
        
        
      </div>
    );
  }
  function NotFound() {
    return (
      <div className="notFound">
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
  function Home() {
      return (
          <div className="home">
              <h1>Чернівці</h1>
              <img src="http://molbuk.ua/uploads/posts/2011-11/1320243409_4-042.jpg"></img>
              <p>адміністративний, політичний і релігійний центр Чернівецької області, важливий культурний та науково-освітній осередок України. Місто розміщене на південному заході України за 40 км від румунського кордону. Чисельність населення міста становить 264,3 тис. осіб (01.01.2022). Територія Чернівців становить 153 км². Місто — центр Чернівецької агломерації, населення якої складає 723,1 тис. осіб. Чернівці — історична столиця Буковинського краю, місто відоме своїми архітектурними ансамблями, одну з яких — пам'ятку архітектури «Резиденція митрополитів Буковини і Далмації» — включено до списку Світової спадщини ЮНЕСКО[2]. Місто кілька разів посідало чільні місця у різноманітних рейтингах туристичної привабливості, комфортності проживання тощо[3][4]. У наш час за містом закріпився неофіційний статус — «Пісенна столиця України»[5].</p>
          </div>
      );
  }
  
  function MostFamousLandmark() {
        return (
            <div className="mostFamousLandmark">
                <h1>Найвідоміша пам'ятка</h1>
                <li><strong>Чернівецький національний університет імені Юрія Федьковича</strong> </li>
                <img src="https://i2.wp.com/vidviday.ua/blog/wp-content/uploads/2016/01/Attachment-1-23.jpeg?fit=1200%2C408&ssl=1"/>
            </div>
        );
    }
    
const famous_landmarks = [
    {
      id: 1,
      name: 'Центральна площа і ратуша',
      photo: 'https://upload.wikimedia.org/wikipedia/uk/thumb/4/45/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%B0_%D1%80%D0%B0%D1%82%D1%83%D1%88%D0%B0.Jpg/1200px-%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%B0_%D1%80%D0%B0%D1%82%D1%83%D1%88%D0%B0.Jpg',
    },
    {
      id: 2,
      name: 'Вулиця Ольги Кобилянської',
      photo: 'https://upload.wikimedia.org/wikipedia/uk/e/ec/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96._%D0%92%D1%83%D0%BB%D0%B8%D1%86%D1%8F_%D0%9E%D0%BB%D1%8C%D0%B3%D0%B8_%D0%9A%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%97.jpg',
    },
    {
        id: 3,
        name: 'Будинок-корабль',
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Chernivtsi_Schiff.JPG",
    },
    {
        id: 4,
        name: 'Вірменська церква',
        photo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/%D0%92%D1%96%D1%80%D0%BC%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%BA%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%A1%D0%B2%D1%8F%D1%82%D0%B8%D1%85_%D0%B0%D0%BF%D0%BE%D1%81%D1%82%D0%BE%D0%BB%D1%96%D0%B2_%D0%9F%D0%B5%D1%82%D1%80%D0%B0_%D1%82%D0%B0_%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0.Jpg",
    },
    {
        id: 5,
        name: 'Костел Воздвиження Святого Хреста',
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Feast_of_the_Cross_Church_in_Fastiv_DSC07163.jpg",
    },
    {
        id: 6,
        name: 'Турецька площа',
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/%D0%A2%D1%83%D1%80%D0%B5%D1%86%D1%8C%D0%BA%D0%B0_%D0%BA%D1%80%D0%B8%D0%BD%D0%B8%D1%86%D1%8F.jpg/375px-%D0%A2%D1%83%D1%80%D0%B5%D1%86%D1%8C%D0%BA%D0%B0_%D0%BA%D1%80%D0%B8%D0%BD%D0%B8%D1%86%D1%8F.jpg",
    },
    {
        id: 7,
        name: 'Чернівецький художній музей',
        photo: "https://upload.wikimedia.org/wikipedia/uk/7/7f/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D1%96%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9.Jpg",
    },
    {
        id: 8,
        name: 'Миколаївський кафедральний собор',
        photo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%D0%A3%D0%9F%D0%A6_%28%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96%29.JPG",
    },
    {
        id: 9,
        name: 'Собор Святого духа',
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%22%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%94%D1%83%D1%85%D0%B0%22_%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D1%86%D1%96.jpg",
    },
  ];
  function LandmarksList() {
    return (
      <div className="landmarksList">
        <h1>landmarks List</h1>
        <ul>
          {famous_landmarks.map((p) => (
            <li key={p.id}>
              <NavLink to={`/famous_landmarks/${p.id}`}>
                {p.name} <img src = {p.photo}/> 
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  function FamousLandmarkList() {
    return (
        <div className="famousLandmarkList">
            <ul>
                {famous_landmarks.map((p) => (
                    <li key={p.id}>
                        <NavLink to={`/famous_landmarks/${p.id}`}>
                            {p.name} 
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
    }
    function FamousLandmark(){
        const params = useParams();
        const landId = params.id;
        const landmark = famous_landmarks.find((land) => land.id === parseInt(landId));
        if (landmark === undefined) {
          return <NotFound />;
        } else {
          return (
            <div className = "App">
              <h2>
                {landmark.name} <br/> 
                <img src = {landmark.photo} height = {500} weight = {500}/> 
              </h2>
            </div>
          );
        }
    }
    function FamousLandmarks() {
        return (
            <div className="famousLandmark">
                <h1>Визначні місця</h1>
                <Outlet/>
            </div>
        );
    }

    

  export default function MyCity() {
    return (
        <div className = "App">
            <Router>
                <NavMenu />
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/most_famous_landmark" element={<MostFamousLandmark/>} />
                    <Route path="/famous_landmarks/*" element={<FamousLandmarks />}>
                        <Route index element={<FamousLandmarkList />} />
                        <Route path=":id" element={<FamousLandmark />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>         
    );
} 

