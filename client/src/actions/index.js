import axios from "axios";

export const FETCH_TEAM = "FETCH_TEAM";
export const FETCH_GAMES = "FETCH_GAMES";
export const FETCH_AIRPORT_DESTINATION = "FETCH_AIRPORT_DESTINATION";
export const FETCH_DEPARTURE = "FETCH_DEPARTURE";
export const FETCH_HOTEL_DESTINATION = "FETCH_HOTEL_DESTINATION";
export const FETCH_HOTELS = "FETCH_HOTELS";
export const FETCH_FLIGHTS = "FETCH_FLIGHTS";
export const AUTHENTICATION_USER = "AUTHENTICATION_USER";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";



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


export const fetchGames = (name, venueId) => async dispatch => {
  // console.log('fetchGames' + JSON.stringify(name) + JSON.stringify(venueId));
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
 
};

export const fetchAirportDestination = (city) => async dispatch => {
// export async function fetchAirportDestination(city) {
const options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
  params: {name: city},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
  }
};

// const request = await
await
  axios.request(options).then(function (response) {
    // console.log('fetchAirportDestination' + JSON.stringify(response.data));
    // return response.data;
    dispatch({
      type: FETCH_AIRPORT_DESTINATION,
      payload: response.data
    });
  }).catch(function (error) {
    console.error(error);
  });

  // return {
  //   type: FETCH_AIRPORT_DESTINATION,
  //   payload: request
  // }

};

export const fetchDeparture = (city) => async dispatch => {
// export async function fetchDeparture(city) {
  const options = {
    method: 'GET',
    url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
    params: {name: city},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
  };
  
  // const request = 
  await
    axios.request(options).then(function (response) {
      // console.log('fetchDeparture' + JSON.stringify(response.data));
      // return response.data;
      dispatch({
        type: FETCH_DEPARTURE,
        payload: response.data
      });
    }).catch(function (error) {
      console.error(error);
    });
  
    // return {
    //   type: FETCH_DEPARTURE,
    //   payload: request
    // }
  
};

export const fetchHotelDestination = (lon, lat) => async dispatch => {
  
// export async function fetchHotelDestination(city) {
  const options = {
    method: 'GET',
    url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations-by-geo',
    params: {longitude: lon, latitude: lat},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
  };
  
  // const request = 
  await
    axios.request(options).then(function (response) {
      // console.log('fetchHotelDestination' + JSON.stringify(response.data));
      // return response.data;
      dispatch({
        type: FETCH_HOTEL_DESTINATION,
        payload: response.data
      });
    }).catch(function (error) {
      console.error(error);
    });
  
    // return {
    //   type: FETCH_HOTEL_DESTINATION,
    //   payload: request
    // }
  
};

export const fetchHotels = (id, checkin, checkout) => async dispatch => {
  // console.log('fetchHotels' + JSON.stringify(stayDetails));
    const options = {
      method: 'GET',
      url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
      params: {
        sort_order: 'HDR',
        location_id: id,
        date_checkout: checkout,
        date_checkin: checkin,
        star_rating_ids: '3.5,4.0,4.5',
        rooms_number: '1',
        amenities_ids: 'FINTRNT,FBRKFST'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
      }
    };

    // console.log('options' + options)
    // console.log('options' + JSON.stringify(options))
  
    await axios.request(options).then(function (response) {
      
      dispatch({type: FETCH_HOTELS,
        payload: response.data});
    }).catch(function (error) {
      console.error(error.response);
    });
};

export const fetchFlights = (departure, destination, date_departure, date_departure_return) => async dispatch => {
  // console.log('fetchFlights' + JSON.stringify());
  const options = {
    method: 'GET',
    url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
    params: {
      itinerary_type: 'ROUND_TRIP',
      class_type: 'ECO',
      location_arrival: destination,
      date_departure: date_departure,
      location_departure: departure,
      sort_order: 'PRICE',
      number_of_stops: '1',
      price_max: '20000',
      number_of_passengers: '1',
      duration_max: '2051',
      price_min: '250',
      date_departure_return: date_departure_return
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
  };
  await axios.request(options).then(function (response) {
    // console.log('fetchFlights.segment' + JSON.stringify(response.data.segment));

    // console.log('fetchFlights.slice' + JSON.stringify(response.data.slice));
    
    dispatch({type: FETCH_FLIGHTS,
      payload: response.data});
  }).catch(function (error) {
    console.error(error.response);
  });
};

export const signup = (form, callback) => dispatch => {
  console.log('signup' + JSON.stringify(form));
  axios.post('/signup', form)
    .then(function(response) {
      dispatch({ type: AUTHENTICATION_USER, payload: response.data });
      localStorage.setItem('token', response.data.token);
      callback();
    })
    .catch(function (error) {
      console.log(error);
      dispatch({ type: AUTHENTICATION_ERROR, payload: error });
    });
};

export const login = (form, callback) => dispatch => {
  axios.post('/login', form)
    .then(function(response) {
      dispatch({ type: AUTHENTICATION_USER, payload: response.data });
      localStorage.setItem('token', response.data.token);
      callback();
    })
    .catch(function (error) {
      dispatch({ type: AUTHENTICATION_ERROR, payload: error });
    });
};

export const logout = (callback) => dispatch => {
  localStorage.removeItem('token');

  dispatch({ type: AUTHENTICATION_ERROR, payload: '' });
  callback()
};