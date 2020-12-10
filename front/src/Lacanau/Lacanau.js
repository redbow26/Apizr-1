import React, {Component} from "react";

class Lacanau extends Component {

    state = {
        quality: 100
    }

    handleQuality = e => {
        if (0 <= e.target.value <= 100)
        this.setState({
            quality: e.target.value,
            send: false
        })
    }

    sendData = async() => {
        try {
            let result = await fetch('http://localhost:3001/lacanau', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    quality: this.state.quality
                })
            });
            if (result) this.setState({send: true});
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="Lacanau">
                <div>
                    <input type="number" min={0} max={100} value={this.state.quality} onChange={this.handleQuality}/>
                    <button onClick={this.sendData}>Sauvegarder les données</button>
                    <br/>
                    {this.state.send && <span>Data Send</span>}
                </div>
                <div style={ {marginTop: '50px'} }>
                    { this.state.quality != null && this.state.quality <= 50 &&
                    <img style={{ maxWidth: "400px", maxHeight: "400px"}} src="https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/06/22/node_93634/37558607/public/2020/06/22/B9723803459Z.1_20200622170706_000%2BGKBG74UKE.1-0.jpg?itok=o7Qeu5Zt1592838435" alt="Pollution"/> }
                    { this.state.quality != null && 50 < this.state.quality && this.state.quality <= 90 &&
                    <img style={{ maxWidth: "400px", maxHeight: "400px"}} src="https://www.vie-publique.fr/sites/default/files/en_bref/image_principale/eaux_baignade_Europe_qualite_157551510_Drupal.jpg" alt="Eau propre"/> }
                    { this.state.quality != null && 90 < this.state.quality && this.state.quality <= 100 &&
                    <img style={{ maxWidth: "400px", maxHeight: "400px"}} src="https://previews.123rf.com/images/warongdech/warongdech1508/warongdech150800023/43044932-arri%C3%A8re-plan-de-motif-ondul%C3%A9-d-eau-propre-dans-un-bleu-.jpg" alt="Eau très propre"/> }

                </div>
            </div>
        );
    }
}

export default Lacanau;
