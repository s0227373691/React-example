
import { FETCH_REGION } from '../actions/types';

export const fetchSerachRegion = () => dispatch => {
    fetch("https://hotels4.p.rapidapi.com/get-meta-data", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "hotels4.p.rapidapi.com",
            "x-rapidapi-key": "5a1568ed77msh896d3f9612ed275p140b94jsn917c60c22662",
        },
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_REGION,
            payload: data
        }))
        .catch(err => {
            console.log(err);
        });
}