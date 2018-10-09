const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		server.get("/match_report/:slug", (req, res) => {
			console.log('MATCH REPORT');
			const actualPage = "/match_report";
			const queryParams = { slug: req.params.slug, apiRoute: "match_report" };
			app.render(req, res, actualPage, queryParams);
		});

		server.get("/post/:slug", (req, res) => {
			console.log('POST ARTICLE');
			const actualPage = "/post";
			const queryParams = { slug: req.params.slug, apiRoute: "post" };
			app.render(req, res, actualPage, queryParams);
		});

		server.get("/page/:slug", (req, res) => {
			const actualPage = "/post";
			const queryParams = { slug: req.params.slug, apiRoute: "page" };
			app.render(req, res, actualPage, queryParams);
		});

		server.get("/category/:slug", (req, res) => {
			const actualPage = "/category";
			const queryParams = { slug: req.params.slug };
			app.render(req, res, actualPage, queryParams);
		});

		server.get("/_preview/:id/:wpnonce", (req, res) => {
			const actualPage = "/preview";
			const queryParams = { id: req.params.id, wpnonce: req.params.wpnonce };
			app.render(req, res, actualPage, queryParams);
		});

		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, err => {
			if (err) throw err;
			console.log("> Ready on http://localhost:3000");
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
