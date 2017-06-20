const fs   = require("fs");
const path = require("path");
const marked = require('marked');

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: true
});

let mdExt  = "md";

function extension (element) {
	let extName = path.extname(element);
	return extName === '.' + mdExt;
}

fs.readdir(".", function (err, list) {
	list.filter(extension).forEach(function (filename) {

		let rawFile = fs.readFileSync(filename, "utf8");

		// ------------------------------------------------------------------------

		let regex;

		/**
		 * Parse before
		 */

		rawFile = marked(rawFile);

		/**
		 * Parse after
		 */

		regex   = /-&gt;/gmi;
		rawFile = rawFile.replace(regex, `&rarr;`);

		regex   = /<img src="(.*?)" alt="(.*?)">/gmi;
		rawFile = rawFile.replace(regex, `<img class="ui fluid rounded image" src="$1" alt="$2">`);

		regex   = /<h([1-5]) id="(.*?)">(.*?)<\/h([1-5])>/gmi;
		rawFile = rawFile.replace(regex, `<h$1 class="ui header" id="$2">$3</h$4>`);

		// Read template -----------------------------------------------------------
		let template = fs.readFileSync("template.html", "utf8");

		template     = template.replace("{title}", "title");
		template     = template.replace("{header}", "header");
		template     = template.replace("{description}", rawFile);
		template     = template.replace("{document}", rawFile);

		// Write template -----------------------------------------------------------
		fs.writeFileSync(filename.replace(".md", ".html"), template, "utf8");
		console.log(filename + " -> " + filename.replace(".md", ".html"));
	});
});