import axios from "axios";

export const FETCH_TEAM = "FETCH_TEAM";
export const FETCH_GAMES = "FETCH_GAMES";
export const FETCH_AIRPORT_DESTINATION = "FETCH_AIRPORT_DESTINATION";
export const FETCH_HOTEL_DESTINATION = "FETCH_HOTEL_DESTINATION";


export async function fetchTeam(search) {
// export async function fetchTeam(search) {
  // const query = search || '';

  // // console.log('actions' + search);
  // // console.log('actions query' + query);

  const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
  params: {search: search},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

  const request = await
  axios.request(options).then(function (response) {
    // console.log(response.data);
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });

  return {
    type: FETCH_TEAM,
    payload: request
  }
}

export async function fetchGames(name, venueId) {
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

  const request = await
  axios.request(options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });

  return {
    type: FETCH_GAMES,
    payload: request
  }
}

export async function fetchAirportDestination(city) {
const options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
  params: {name: 'Manchester', country:'United Kingdom'},
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