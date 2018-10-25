import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
const { publicRuntimeConfig: config } = getConfig();


export const getMainMenu = async () => {
	const menuRes = await fetch(
		`${config.wordpressUrl}/wp-json/menus/v1/menus/header-menu`
	)
	const menu = await menuRes.json();
	return menu.items;
}

export const getPosts = async () => {
	const postsResponse = await fetch(
		`${config.wordpressUrl}/wp-json/wp/v2/posts`
	).then(res => {
		return res.json();
	}).catch(err => {
		console.error(err);
		return [];
	})
	return postsResponse;
}

export const getNewsBanner = async () => {
	const newsBannerResponse = await fetch(
		`${config.wordpressUrl}/wp-json/wp/v2/banner`
	).then(res => {
		return res.json();
	}).catch((err) => {
		console.error(err);
		return [{
			title: {
				rendered: "Soccer Painters Banner"
			}
		}]
	});
	return newsBannerResponse[0];
}

export const getMatchReports = async () => {
	const matchReportsResponse = await fetch(
		`${config.wordpressUrl}/wp-json/wp/v2/match_report?_embed`
	).then(res => {
		return res.json();
	}).catch(err => {
		console.error(err);
		return [];
	})
	return matchReportsResponse;
}

export const getArticles = async () => {
	const articlesResponse = await fetch(
		`${config.wordpressUrl}/wp-json/wp/v2/article?_embed`
	).then(res => {
		return res.json();
	}).catch(err => {
		console.error(err);
		return [];
	});
	return articlesResponse;
}