import React, {useEffect} from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";


function NotFound() {


  useEffect(() => {
    document.title = 'Страница не найдена | РАДОН';
  });

  return (
    <div className="notfound">
      <div className="notfound-wrapper">
        <h3 className="notfound__status">404</h3>
        <p className="notfound__message">Страница не найдена</p>
        <Link className="notfound__link" to="/">
          На главную
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
