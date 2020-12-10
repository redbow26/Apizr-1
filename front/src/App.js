import './App.css';
import Lacanau from './Lacanau/Lacanau';
import TabCity from './TabCity/TabCity';
import React, {Component} from "react";

class App extends Component {
  render() {
    return (
        <div className="App">
            <div style={ { marginTop: "10%", paddingBottom: "5%" } } >
                <Lacanau />
            </div>
            <hr/>
            <div style={ { marginTop: "2%" } } >
                <TabCity />
            </div>
        </div>
    );
  }
}

export default App;
