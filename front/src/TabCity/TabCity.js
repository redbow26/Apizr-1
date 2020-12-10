import React, {Component} from "react";

class TabCity extends Component {

    state = {
        beach: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/beach')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    beach: json
                })
            })
    }

    render() {


        return (
            <div className="TabCity">
                <table style={ { margin: "auto", border: "1px solid black", borderCollapse: "collapse" } } >
                    <thead>
                        <tr>
                            <th style={ { border: "1px solid black", borderCollapse: "collapse", minWidth: "5em" } } >Plage</th>
                            <th style={ { border: "1px solid black", borderCollapse: "collapse", minWidth: "10em" } } >Qualité de l'eau</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.beach.map( (b) => {
                            return (
                                <tr>
                                    <td style={ { border: "1px solid black", borderCollapse: "collapse", minWidth: "5em" } } >{b.name}</td>
                                    <td style={ { border: "1px solid black", borderCollapse: "collapse", minWidth: "10em" } } >{b.quality}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TabCity;
