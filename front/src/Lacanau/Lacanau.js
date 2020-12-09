import React, {Component} from "react";

class Lacanau extends Component {

    state = {
        quality: 100
    }

    handleQuality = e => {
        if (0 <= e.target.value <= 100)
        this.setState({
            quality: e.target.value
        })
    }

    render() {
        return (
            <div className="Lacanau" style={ { margin: "auto", marginTop: "10%" } }>
                <div style={ {width: '50%', float: 'left', align: 'center'} }>
                    <input type="number" min={0} max={100} value={this.state.quality} onChange={this.handleQuality}/>
                </div>
                <div style={ {width: '50%', float: 'right', textAlign: 'center'} }>
                    { this.state.quality != null && this.state.quality <= 50 && "Pollution" }
                    { this.state.quality != null && 50 < this.state.quality && this.state.quality <= 90 && "Propre" }
                    { this.state.quality != null && 90 < this.state.quality && this.state.quality <= 100 && "Très propre" }

                </div>
            </div>
        );
    }
}

export default Lacanau;
