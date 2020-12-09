import React, {Component} from "react";

class TabCity extends Component {
    render() {
        const plages = [
            {
                name: "test",
                quality: 100
            },
            {
                name: "1",
                quality: 4
            },
            {
                name: "2",
                quality: 5
            },
            {
                name: "3",
                quality: 50
            },
            {
                name: "4",
                quality: 20
            },
        ]

        return (
            <div className="TabCity">
                <table style={ { margin: "auto", border: "1px solid black", borderCollapse: "collapse" } } >
                    <tr>
                        <th style={ { border: "1px solid black", borderCollapse: "collapse", minWidth: "5em" } } >Plage</th>
                        <th style={ { border: "1px solid black", borderCollapse: "collapse", minWidth: "10em" } } >Qualité de l'eau</th>
                    </tr>
                    {
                        plages.map( (plage) => {
                            return (
                                <tr>
                                    <td style={ { border: "1px solid black", borderCollapse: "collapse", minWidth: "5em" } } >{plage.name}</td>
                                    <td style={ { border: "1px solid black", borderCollapse: "collapse", minWidth: "10em" } } >{plage.quality}</td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        );
    }
}

export default TabCity;
