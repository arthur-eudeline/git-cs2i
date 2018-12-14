var renderer = new marked.Renderer();
var lexer = new marked.Lexer();
var parser = new marked.Parser();

var options = {
    renderer: renderer,
    gfm: true,
    tables: false,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
}

parser.inline = new marked.InlineLexer([], options);
parser.inline.rules = angular.copy(parser.inline.rules); // deep copy, otherwise global marked will be affected

parser.inline.rules.link = /^[!%]{0,1}?\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/;
renderer.link =  function(href, title, text) {
    // this is the standard link renderer that can be altered if desired ...
    if (this.options.sanitize) {
        try {
            var prot = decodeURIComponent(unescape(href))
                .replace(/[^\w:]/g, '')
                .toLowerCase();
        } catch (e) {
            return '';
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
            return '';
        }
    }
    var out = '<a href="' + href + '"';
    if (title) {
        out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
}

function parse(src) {
    parser.inline.links = src.links;
    parser.tokens = src.reverse();
    var out = '';
    while (parser.next()) {
        out += parser.tok();
    }
    return out;
};

function parseText(text) {
    var lex = lexer.lex(text);
    var r = parse(lex);
    return r;
}
