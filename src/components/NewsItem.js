import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    let { des, title, imgurl, url } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={imgurl} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{des}</p>
              <Link to={url} class="btn btn-primary">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
