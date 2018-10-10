import fetch from 'isomorphic-unfetch';
import {config} from '../config';


export const getMainMenu = async () => {
	const menuRes = await fetch(
		`${config.apiUrl}/wp-json/menus/v1/menus/header-menu`
	)
	const menu = await menuRes.json();
	return menu.items;
}

export const getPosts = async () => {
	const postsResponse = await fetch(
		`${config.apiUrl}/wp-json/wp/v2/posts`
	)
	const posts = await postsResponse.json();
	return posts;
}

export const getMatchReports = async () => {
	const matchReportsResponse = await fetch(
		`${config.apiUrl}/wp-json/wp/v2/match_report`
	)
	const matchReports = await matchReportsResponse.json();
	return matchReports;
}

export const getNewsBanner = async () => {
	const newsBannerResponse = await fetch(
		`${config.apiUrl}/wp-json/wp/v2/banner`
	)
	const newsBanner = await newsBannerResponse.json()

	return newsBanner[0];
}