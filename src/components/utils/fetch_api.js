/** @format */

import axios from 'axios';

const apiKey = '15f6416b4a05fd751477296c9e2b0403';
const URL = 'https://api.themoviedb.org/3/search/movie';
const URL_TREND = 'https://api.themoviedb.org/3/trending/all/day';
const URL_DETAILS = 'https://api.themoviedb.org/3/movie';

async function fetchFilmsItems({
	page = 1,
	searchItem = '',
	include_adult = true,
	lang = 'en-US',
}) {
	const params = {
		api_key: apiKey,
		include_adult: include_adult,
		language: lang,
		page: page,
		query: searchItem,
	};
	const response = await axios.get(URL, { params });
	return response.data;
}

async function fetchDayTrendingMovies() {
	const params = {
		api_key: apiKey,
		language: 'en-US',
	};
	const response = await axios.get(URL_TREND, { params });
	return response.data;
}

async function fetchMovieDetails(id) {
	const params = {
		api_key: apiKey,
		language: 'en-US',
	};
	const response = await axios.get(`${URL_DETAILS}/${id}`, { params });
	return response;
}

async function fetchMovieOption(id, option, pg) {
	const params = {
		api_key: apiKey,
		language: 'en-US',
		page: pg ? pg : null,
	};
	const response = await axios.get(`${URL_DETAILS}/${id}/${option}`, { params });
	return response;
}

export { fetchFilmsItems, fetchDayTrendingMovies, fetchMovieDetails, fetchMovieOption, apiKey };
