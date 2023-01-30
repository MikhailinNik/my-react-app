import { genreOptions } from './const';
import { checkboxes } from './../db';
export interface SortBy {
	popularityDesc: string;
	popularityAsc: string;
	rateDesc: string;
	rateAsc: string;
}

export interface SortByYear {
	1: number;
	2: number;
	3: number;
	4: number;
}

export interface AuthSort {
	seeLater: string;
	favorite: string;
}

interface Login {
	login: string;
	password: number;
}

export const defaultName: string = '';
export const SORT_BY: SortBy = {
	popularityDesc: 'Пополярные по убыванию',
	popularityAsc: 'Пополярные по возрастанию',
	rateDesc: 'Рейтинг по убыванию',
	rateAsc: 'Рейтинг по возрастанию',
};
export const FIRST_PAGE: number = 1;

export const SORT_BY_YEAR: SortByYear = {
	1: 2020,
	2: 2019,
	3: 2018,
	4: 2017,
};

export const AUTH_SORT: AuthSort = {
	seeLater: 'Смотреть позже',
	favorite: 'Избранные',
};

export const LOGIN: Login = {
	login: '123',
	password: 123,
};

export const popularOptions = {
	popular: 'Популярный',
	unknown: 'Неизвестный',
};

export const voteOptions = {
	high: 'Высокая',
	low: 'Низкая',
};
