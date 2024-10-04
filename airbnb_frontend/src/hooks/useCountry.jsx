import countries from '../assets/data/countries.json';

const formattedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region
}))

const useCountries = () => {
    const getAll = () => formattedCountries;
    const getByValues = (value) => {
        return formattedCountries.find((item) => item.value === value);
    }

    return {
        getAll,
        getByValues
    }
};

export default useCountries;