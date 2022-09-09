import { useState, useEffect } from "react";
import { Chart, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
import {Col} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {
  countriesSelector,
  fetchCountries,
  fetchCountry,
  fetchGlobal,
  changeCountry,
  itemsSelector,
  newitemsSelector,
  statusSelector,
  countrySelector
} from "../../../redux/Slice/covidSlice";




Chart.register(...registerables);


function MyChart() {
    const [selectedCountry, setSelectedCountry] = useState("");
  const dispatch = useDispatch();
  const countries = useSelector(countriesSelector);
  const country2 = useSelector(countrySelector);
  const items = useSelector(itemsSelector);
  const newitems = useSelector(newitemsSelector); 
  const status = useSelector(statusSelector);
  useEffect(() => {
    dispatch(fetchGlobal());
    dispatch(fetchCountries());
  }, []);

    const handleChange = (e) => {
        const val = e.target.value;

        let name = countries?.find((country) => country.iso2 === val).name;
        
    setSelectedCountry(val);
    dispatch(changeCountry(name));
    dispatch(fetchCountry(val));
    }

    const active = (items, newitems) => {
        let active =newitems ? (newitems?.confirmed.value - newitems?.recovered.value - newitems?.deaths.value ) :(items?.confirmed.value-items?.recovered.value-items?.deaths.value);
    
        return active
    }
    const infected =(items, newitems) => {
        let infected = newitems ? (newitems?.confirmed.value) : (items?.confirmed.value);

        return infected
    }

    const death = (items,newitems)=> {
        let death = newitems ? newitems?.deaths.value :items?.deaths.value;
        return death
    }
    const recovered = (items, newitems) => {
        let recovered = newitems ? newitems?.recovered.value :items?.recovered.value;
        return recovered
    }
    if (status === 'idle') {
        return(<h1>LOADING</h1>)
      }
      if (status === 'loading') {
        return(<h1>LOADING</h1>)
      }      
    const labels = ['Infected', 'Recovered', 'Deaths', 'Active'];
    const data = {
      labels: labels,
      datasets: [{
        data: [infected(items,newitems), recovered(items, newitems), death(items,newitems), active(items,newitems),],
        backgroundColor: [
          '#AFD6FC',
          '#d2f3d8',
          '#f1cbcb',
          '#F3E0C8',

        ],
        borderColor: [
          '#AFD6FC',
          '#d2f3d8',
          '#f1cbcb',
          '#F3E0C8',
        ],
        borderWidth: 1
      }]
    };


    return (
        <Col style={{textAlign:'center'}}>
            <div className='mt-5 my-3'>
<form  onChange={handleChange}>
      <select className='forminput' name="languages" id="lang">
      <option value={'TR'}>
                Global
              </option>
      {countries.map((country, index) => (
              <option key={index} value={country.iso2}>
                {country.name}
              </option>
            ))}
      </select>
</form>
            </div>

            <Bar
            className="m-4 p-4"
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Current state in ${country2 ? country2 : 'Global'}`
            },
            legend: {
              display: false,
           }
          },
          scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 250
            },
          }
        }}
      />
        </Col>
        )
}

export default MyChart