/**
 * 
 * Generator at http://benalman.com/code/test/jquery-run-code-bookmarklet/
 * 
 * TODO - configurable options etc.
 */

var r = function(n){
        return Math.floor( (n || 10) * Math.random() );
    },
    els = [
        //'html',
        //'head',
        //'title',
        //'base',
        //'link',
        //'meta',
        //'style',
        //'script',
        //'noscript',
        'body',
        'section',
        'nav',
        'article',
        'aside',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'hgroup',
        'header',
        'footer',
        'address',
        'p',
        'hr',
        'pre',
        'blockquote',
        'ol',
        'ul',
        'li',
        'dl',
        'dt',
        'dd',
        'figure',
        'figcaption',
        'div',
        'a',
        'em',
        'strong',
        'small',
        's',
        'cite',
        'q',
        'dfn',
        'abbr',
        'time',
        'code',
        'var',
        'samp',
        'kbd',
        'sub',
        'sup',
        'i',
        'b',
        'u',
        'mark',
        'ruby',
        'rt',
        'rp',
        'bdi',
        'bdo',
        'span',
        'br',
        'wbr',
        'ins',
        'del',
        'img',
        'iframe',
        'embed',
        'object',
        'param',
        'video',
        'audio',
        'source',
        'track',
        'canvas',
        'map',
        'area',
        'table',
        'caption',
        'colgroup',
        'col',
        'tbody',
        'thead',
        'tfoot',
        'tr',
        'td',
        'th',
        'form',
        'fieldset',
        'legend',
        'label',
        'input',
        'button',
        'select',
        'datalist',
        'optgroup',
        'option',
        'textarea',
        'keygen',
        'output',
        'progress',
        'meter',
        'details',
        'summary',
        'command',
        'menu'],
    shuffle = function(it){
        return it[r(it.length)];
    },
    c = function(){
        return 'rgb(' + r(256) + ',' + r(256) + ',' + r(256) + ')';
    },
    /**
     * @param {Boolean} inc - `true` includes print units; `false` excludes everything but `px`
     */
    u = function(inc){
        var units = ['px'];
        if (inc !== false) {
            units.push('em', 'ex');
        }
        if (inc === true) {
            units.push('in', 'cm', 'mm', 'pt', 'pc');
        }
        return shuffle(units);
    },
    ru = function(n, inc){
        return r(n) + u(inc);
    },
    stylesFn = {
        // borderBottom
        // borderBottomColor
        // borderBottomStyle
        // borderBottomWidth
        // borderLeft
        // etc.
        'borderColor': function(){
            return c();
        },
        'borderStyle': function(){
            var bs = ['none', 'solid', 'default', 'hidden', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'];
            return shuffle(bs);
        },
        'borderWidth': function(){
            return ru();
        },
        'border': function(){
            return stylesFn.borderWidth() + ' ' + stylesFn.borderStyle() + ' ' + stylesFn.borderColor();
        },
        'borderRadius': function(){
            return ru();
        },
        'padding': function(){
            return ru();
        }
		// TODO - text-shadow
		// TODO - box-shadow
		// TODO - changing up fonts?
		// TODO - line-height
		// TODO - gradients?
		// TODO - rotations?
		// TODO - background color changes
		// TODO - super-impose some kind of «brought to you by "punch-it-up"» logo
    },
    styles = [], p;

for (p in stylesFn) {
    if (stylesFn.hasOwnProperty(p)) {
        styles.push(p);
    }
}

$('html *').css({
    border: stylesFn.border(),
    'borderRadius': stylesFn.borderRadius(),
    'padding': stylesFn.padding()
});

// TODO - have it output the changes to the console - JUST IN CASE THEY'RE ACTUALLY AWESOMER