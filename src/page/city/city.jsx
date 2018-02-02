import React from 'react';
import PropTypes from 'prop-types';


const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};


class CitySelector extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const cityCode = e.target.value;
        this.props.onSelectCity(cityCode);
    }

    render() {
        return (
            <select onChange={(e) => this.onChange(e)}>
            {
                Object.keys(CITY_CODES).map(
                    cityName => <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
                )
            }
            </select>
        )
    }
}

CitySelector.propTypes = {
    onSelectCity:PropTypes.func.isRequired
}

export default CitySelector;