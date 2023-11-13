import React from "react";

class App extends React.Component {
render() {
    let {des,title} = this.props;
	return (
        
        <>
        <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src="..." alt="Card image cap"/>
        <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{des}</p>
        <a href="/" class="btn btn-primary">Read more</a>
        </div>
        </div>

        </>
        )
    }
    }
    
    export default App;
    