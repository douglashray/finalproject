import axios from "axios";

export const FETCH_TEAM = "FETCH_TEAM";
export const FETCH_GAMES = "FETCH_GAMES";
export const FETCH_AIRPORT_DESTINATION = "FETCH_AIRPORT_DESTINATION";
export const FETCH_DEPARTURE = "FETCH_DEPARTURE";
export const FETCH_HOTEL_DESTINATION = "FETCH_HOTEL_DESTINATION";
export const FETCH_HOTELS = "FETCH_HOTELS";
export const FETCH_FLIGHTS = "FETCH_FLIGHTS";



// export async function fetchTeam(search) {
// // export async function fetchTeam(search) {
//   // const query = search || '';

//   // // console.log('actions' + search);
//   // // console.log('actions query' + query);

//   const options = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
//   params: {search: search},
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//   }
// };

//   const request = await
//   axios.request(options).then(function (response) {
//     // console.log(response.data);
//     return response.data;
//   }).catch(function (error) {
//     console.error(error);
//   });

//   return {
//     type: FETCH_TEAM,
//     payload: request
//   }
// }

export const fetchTeam = (search) => async dispatch => {
  // console.log('fetchTeam' + JSON.stringify(search));
    const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
    params: {search: search},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  
    await axios.request(options).then(function (response) {
      
      dispatch({type: FETCH_TEAM,
        payload: response.data});
    }).catch(function (error) {
      console.error(error);
    });
  };

  
// export async function fetchGames(name, venueId) {
//   console.log('fetchGames' + JSON.stringify(name) + JSON.stringify(venueId));
//   const options = {
//     method: 'GET',
//     url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
//     params: {season: '2022', team: name, venue: venueId},
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//     }
//   };

//   const request = await
//   axios.request(options).then(function (response) {
//     return response.data;
//   }).catch(function (error) {
//     console.error(error);
//   });

//   return {
//     type: FETCH_GAMES,
//     payload: request
//   }
// }

export const fetchGames = (name, venueId) => async dispatch => {
  console.log('fetchGames' + JSON.stringify(name) + JSON.stringify(venueId));
  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {season: '2022', team: name, venue: venueId},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  await
  axios.request(options).then(function (response) {
    dispatch({
      type: FETCH_GAMES,
      payload: response.data
    });
  }).catch(function (error) {
    console.error(error);
  });
 
}

export async function fetchAirportDestination(city) {
const options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
  params: {name: city},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
  }
};

const request = await
  axios.request(options).then(function (response) {
    console.log('fetchAirportDestination' + JSON.stringify(response.data));
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });

  return {
    type: FETCH_AIRPORT_DESTINATION,
    payload: request
  }

}

export async function fetchDeparture(city) {
  const options = {
    method: 'GET',
    url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
    params: {name: city},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
  };
  
  const request = await
    axios.request(options).then(function (response) {
      console.log('fetchDeparture' + JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      console.error(error);
    });
  
    return {
      type: FETCH_DEPARTURE,
      payload: request
    }
  
  }

export async function fetchHotelDestination(city) {
  const options = {
    method: 'GET',
    url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations-by-geo',
    params: {longitude: '14.418540', latitude: '50.073658'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
  };
  
  const request = await
    axios.request(options).then(function (response) {
      console.log('fetchHotelDestination' +response.data);
      return response.data;
    }).catch(function (error) {
      console.error(error);
    });
  
    return {
      type: FETCH_HOTEL_DESTINATION,
      payload: request
    }
  
  }

  export const fetchHotels = (stayDetails) => async dispatch => {
    console.log('fetchHotels' + JSON.stringify(stayDetails));
      const options = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
        params: {
          sort_order: 'HDR',
          location_id: '3000035825',
          date_checkout: '2022-11-16',
          date_checkin: '2022-11-15',
          star_rating_ids: '3.0,3.5,4.0,4.5,5.0',
          rooms_number: '1',
          amenities_ids: 'FINTRNT,FBRKFST'
        },
        headers: {
          'X-RapidAPI-Key': '5e85bc9967mshd77583dcb698abfp19a727jsn9b804fd5116d',
          'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
      };
    
      await axios.request(options).then(function (response) {
        
        dispatch({type: FETCH_HOTELS,
          payload: response.data});
      }).catch(function (error) {
        console.error(error);
      });
    };

    export const fetchFlights = () => async dispatch => {
      console.log('fetchFlights' + JSON.stringify());
      const options = {
        method: 'GET',
        url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
        params: {
          itinerary_type: 'ROUND_TRIP',
          class_type: 'ECO',
          location_arrival: 'LHR',
          date_departure: '2022-11-15',
          location_departure: 'DEN',
          sort_order: 'PRICE',
          number_of_stops: '1',
          price_max: '20000',
          number_of_passengers: '1',
          duration_max: '2051',
          price_min: '100',
          date_departure_return: '2022-11-17'
        },
        headers: {
          'X-RapidAPI-Key': '5e85bc9967mshd77583dcb698abfp19a727jsn9b804fd5116d',
          'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
      };
      await axios.request(options).then(function (response) {
        console.log('fetchAirportDestination' + JSON.stringify(response.data.segment));
        
        dispatch({type: FETCH_FLIGHTS,
          payload: response.data.segment});
      }).catch(function (error) {
        console.error(error);
      });
    };