import React from 'react';
import ReactDom from 'react-dom';

import './index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageShowTime: '',
            pageHideTime: ''
        }
    }

    componentDidMount() {
        window.addEventListener('pageshow', this.setPageShow.bind(this));
        window.addEventListener('pagehide', this.setPageHide.bind(this));
    }

    render () {
        return (
            <div className="app">
                <p>page shows at: {this.state.pageShowTime}</p>
                <p>page hides at: {this.state.pageHideTime}</p>
                <form action="https://southwest.dev4.southwest.com/air/booking/?redirectToVision=true&clk=GSUBNAV-AIR-BOOK&leapfrogRequest=true" method="get">
                    <input type="text" />
                    <button>submit</button>
                    <button onClick={this.reditect}>Redirect</button>
                </form>
                <a href="https://southwest.dev4.southwest.com/air/booking/?redirectToVision=true&clk=GSUBNAV-AIR-BOOK&leapfrogRequest=true">Follow this link</a>
            </div>
        );
    } 

    setPageShow(evt) {
        this.setState({
            pageShowTime: JSON.stringify(new Date())
        })
    }

    setPageHide(evt) {
        this.setState({
            pageHideTime: JSON.stringify(new Date())
        })
    }

    reditect() {
        window.location.href = "https://southwest.dev4.southwest.com/air/booking/select.html?int=HOMEQBOMAIR&adultPassengersCount=1&departureDate=2018-11-21&departureTimeOfDay=ALL_DAY&destinationAirportCode=HOU&fareType=USD&originationAirportCode=DAL&passengerType=SENIOR&promoCode=&reset=true&returnDate=2018-11-24&returnTimeOfDay=ALL_DAY&seniorPassengersCount=1&tripType=roundtrip"
    }
}

ReactDom.render(<App />, document.getElementById('app'));