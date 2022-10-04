let Domain = require ('../domain')

export const BASE_API = Domain.API_SERVER;

export const BASE_API_2 = Domain.API_SERVER_2

export const BASE_API_3 = Domain.API_SERVER_3

export const movies = BASE_API + '/movies.json';

export const workout = BASE_API_2 + 'users';

export const login = BASE_API_3 +'/login'