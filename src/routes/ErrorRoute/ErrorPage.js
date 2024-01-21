import { Link, useRouteError } from "react-router-dom";

import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <body id="error-page" class="nalo">
        <div className="stars">
          <div className="central-body">
            <h2 className="ErrorMessage">
              <i>{error.statusText || error.message}</i>
              <br />
              <i>{error.status}</i>
            </h2>
            <Link className="btn-go-home" to={"/"}>
              Regresa a la pagina!
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}
