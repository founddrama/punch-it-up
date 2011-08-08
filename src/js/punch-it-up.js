/**
 * 
 * Generator at http://benalman.com/code/test/jquery-run-code-bookmarklet/
 * 
 * TODO - configurable options etc.
 */

var r = function(n){
        return Math.floor( (n || 10) * Math.random() );
    },
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
    },
    styles = [], p;

for (p in stylesFn) {
    if (stylesFn.hasOwnProperty(p)) {
        styles.push(p);
    }
}

jQuery('html *').css({
    border: stylesFn.border(),
    'borderRadius': stylesFn.borderRadius(),
    'padding': stylesFn.padding()
});

// TODO - have it output the changes to the console - JUST IN CASE THEY'RE ACTUALLY AWESOMER