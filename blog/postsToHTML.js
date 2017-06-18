const fs = require("fs");
const path = require("path");
let mdExt = "md";

function extension(element) {
    let extName = path.extname(element);
    return extName === '.' + mdExt;
}

fs.readdir(".", function (err, list) {
    list.filter(extension).forEach(function (filename) {
        console.log(filename);

        let rawFile = fs.readFileSync(filename, "utf8");

        // ------------------------------------------------------------------------

        let regex;

        /**
         '/(#+)(.*)/' => 'self::header',                           // headers
         '/\[([^\[]+)\]\(([^\)]+)\)/' => '<a href=\'\2\'>\1</a>',  // links
         '/(\*\*|__)(.*?)\1/' => '<strong>\2</strong>',            // bold
         '/(\*|_)(.*?)\1/' => '<em>\2</em>',                       // emphasis
         '/\~\~(.*?)\~\~/' => '<del>\1</del>',                     // del
         '/\:\"(.*?)\"\:/' => '<q>\1</q>',                         // quote
         '/`(.*?)`/' => '<code>\1</code>',                         // inline code
         '/\n\*(.*)/' => 'self::ul_list',                          // ul lists
         '/\n[0-9]+\.(.*)/' => 'self::ol_list',                    // ol lists
         '/\n(&gt;|\>)(.*)/' => 'self::blockquote ',               // blockquotes
         '/\n-{5,}/' => "\n<hr />",                                // horizontal rule
         '/\n([^\n]+)\n/' => 'self::para',                         // add paragraphs
         '/<\/ul>\s?<ul>/' => '',                                  // fix extra ul
         '/<\/ol>\s?<ol>/' => '',                                  // fix extra ol
         '/<\/blockquote><blockquote>/' => "\n"                    // fix extra blockquote
         */
        // md **
        regex = /\*\*(.*?)\*\*/gmi;
        rawFile = rawFile.replace(regex, `<i>$1</i>`);

        // md \n
        regex = /\n/gmi;
        rawFile = rawFile.replace(regex, `<br>`);

        // md _ _
        regex = /_(.*?)_/gim;
        rawFile = rawFile.replace(regex, `<b>$1</b>`);

        // md lists
        regex = /\n\*(.*)/gim;

       m = regex.exec(rawFile) !== null

        //rawFile = rawFile.replace(regex, `<ul><li>%s</li></ul>`);

        // Read template -----------------------------------------------------------
        let template = fs.readFileSync("template.html", "utf8");
        template = template.replace("{document}", rawFile);

        // Write template -----------------------------------------------------------
        fs.writeFileSync(filename.replace(".md", ".html"), template, "utf8");
    });
});