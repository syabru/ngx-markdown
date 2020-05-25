function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"uG+s":function(n,e,t){"use strict";t.r(e);var i,o,a=t("8VHZ"),r=t("N2ZZ"),s=t("nQ6I"),l=t("dLyB"),c=t("PCNd"),p=t("Fk62"),b=t("Ub9n"),m=t("965z"),u=t("FfMK"),d=t("qQg5"),h=t("CsWY"),g=[{path:"",component:(i=function(){function n(e){_classCallCheck(this,n),this.elementRef=e,this.emojiMarkdown="# I :heart: ngx-markdown",this.katexMarkdown="#### `katex` directive example\n\n```latex\nf(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi\n```\n\n$f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi$"}return _createClass(n,[{key:"ngOnInit",value:function(){this.setHeadings()}},{key:"setHeadings",value:function(){var n=[];this.elementRef.nativeElement.querySelectorAll("h2").forEach((function(e){return n.push(e)})),this.headings=n}}]),n}(),i.\u0275fac=function(n){return new(n||i)(b.Lb(b.l))},i.\u0275cmp=b.Fb({type:i,selectors:[["app-plugins"]],decls:70,vars:13,consts:[[3,"headings"],["id","emoji"],[3,"src"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap","16px"],["appearance","fill","color","accent","fxFlex.gt-sm","calc(50% - 8px)"],["matInput","",3,"ngModel","ngModelChange"],["emoji","","fxFlex.gt-sm","calc(50% - 8px)",3,"data"],["emoji",""],["id","line-numbers"],["lineNumbers",""],["lineNumbers","",3,"start"],["id","line-highlight"],["lineHighlight","",3,"line","lineOffset"],["id","katex"],["katex","","fxFlex.gt-sm","calc(50% - 8px)",3,"data"]],template:function(n,e){1&n&&(b.Qb(0,"app-scrollspy-nav-layout",0),b.Qb(1,"h1"),b.wc(2,"Plugins"),b.Pb(),b.Qb(3,"section"),b.Qb(4,"h2",1),b.wc(5,"Emoji plugin"),b.Pb(),b.Qb(6,"markdown"),b.wc(7,"\n      #### Emoji-Toolkit file to include\n      ```javascript\n      node_modules/emoji-toolkit/lib/js/joypixels.min.js\n      ```\n      #### Directive\n      `emoji` - activate emoji plugin\n      ### Example\n    "),b.Pb(),b.Qb(8,"markdown"),b.wc(9," Using `emoji` input property on `markdown` component or directive (this is not available when using pipe or service) allows you to convert shortnames to native unicode emojis. "),b.Pb(),b.Mb(10,"markdown",2),b.Qb(11,"markdown"),b.wc(12," The example below illustrate `emoji` directive in action. "),b.Pb(),b.Qb(13,"div",3),b.Qb(14,"mat-form-field",4),b.Qb(15,"textarea",5),b.Yb("ngModelChange",(function(n){return e.emojiMarkdown=n})),b.Pb(),b.Pb(),b.Mb(16,"markdown",6),b.Pb(),b.Qb(17,"markdown",7),b.wc(18," > :blue_book: You can refer to this [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md) for a complete list of _shortnames_. "),b.Pb(),b.Pb(),b.Qb(19,"section"),b.Qb(20,"h2",8),b.wc(21,"Line Numbers plugin"),b.Pb(),b.Qb(22,"markdown"),b.wc(23,"\n      #### Prism files to include\n      ```javascript\n      node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css\n      node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js\n      ```\n      #### Directive\n      `lineNumbers` - activate line numbers plugin\n      #### Attributes\n      `start` - offset number for the first display line\n      ### Example\n    "),b.Pb(),b.Qb(24,"markdown"),b.wc(25," Using `lineNumbers` input property on `markdown` component or directive (this is not available when using pipe or service) allows you to add line number at the beginning of each lines of code block. "),b.Pb(),b.Mb(26,"markdown",2),b.Qb(27,"markdown"),b.wc(28," The example below uses `lineNumbers` directive which uses default line offset of 1. "),b.Pb(),b.Qb(29,"markdown",9),b.wc(30,"\n      ```javascript\n      var result = square(2);\n\n      function square(number) {\n        return number * number;\n      }\n      ```\n    "),b.Pb(),b.Qb(31,"markdown"),b.wc(32," Optionally you can use `start` to specify the offset number for the first display line. "),b.Pb(),b.Qb(33,"markdown"),b.wc(34," In the example below line offset is set to 5 using `start` input property. "),b.Pb(),b.Qb(35,"markdown",10),b.wc(36,"\n      ```javascript\n      var result = root(2);\n\n      function root(x, n) {\n        try {\n          var negate = n % 2 == 1 && x < 0;\n          if(negate)\n            x = -x;\n          var possible = Math.pow(x, 1 / n);\n          n = Math.pow(possible, n);\n          if(Math.abs(x - n) < 1 && (x > 0 == n > 0))\n            return negate ? -possible : possible;\n        } catch(e){ }\n      }\n      ```\n    "),b.Pb(),b.Pb(),b.Qb(37,"section"),b.Qb(38,"h2",11),b.wc(39,"Line Highlight plugin"),b.Pb(),b.Qb(40,"markdown"),b.wc(41,"\n      #### Prism files to include\n      ```javascript\n      node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css\n      node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js\n      ```\n      #### Directive\n      `lineHighlight` - activate line highlight plugin\n      #### Attributes\n      `line` - lines to highlight (i.e.: 6, 11-15)"),b.Mb(42,"br"),b.wc(43,"\n      `lineOffset` - starting offset for line numbers\n      ### Example\n    "),b.Pb(),b.Qb(44,"markdown"),b.wc(45,"\n      You can highlight different lines by adding `lineHighlight` directive on the `markdown` component/directive.\n\n      Use `line` input property to specify the line(s) to highlight and optionally there is a `lineOffset` property to specify the starting line of code your snippet represents.\n    "),b.Pb(),b.Mb(46,"markdown",2),b.Qb(47,"markdown"),b.wc(48," In the example below `line` 6 and 10 to 16 are highlight using a `lineOffset` of 5. "),b.Pb(),b.Qb(49,"markdown",12),b.wc(50,"\n      ```javascript\n      var result = root(2);\n\n      function root(x, n) {\n        try {\n          var negate = n % 2 == 1 && x < 0;\n          if(negate)\n            x = -x;\n          var possible = Math.pow(x, 1 / n);\n          n = Math.pow(possible, n);\n          if(Math.abs(x - n) < 1 && (x > 0 == n > 0))\n            return negate ? -possible : possible;\n        } catch(e){ }\n      }\n      ```\n    "),b.Pb(),b.Pb(),b.Qb(51,"section"),b.Qb(52,"h2",13),b.wc(53,"KaTeX plugin"),b.Pb(),b.Qb(54,"markdown"),b.wc(55,"\n      #### KaTeX files to include\n      ```javascript\n      node_modules/katex/dist/katex.min.css\n      node_modules/katex/dist/katex.min.js\n      ```\n      #### Directive\n      `katex` - activate KaTeX plugin\n      #### Attributes\n      `katexOptions` - math rendering [options](https://katex.org/docs/options.html)"),b.Mb(56,"br"),b.wc(57,"\n      ### Example\n    "),b.Pb(),b.Qb(58,"markdown"),b.wc(59," You can render KaTex expression by adding `katex` directive on the `markdown` component/directive. "),b.Pb(),b.Mb(60,"markdown",2),b.Qb(61,"markdown"),b.wc(62," The example below illustrate `katex` directive in action. "),b.Pb(),b.Qb(63,"div",3),b.Qb(64,"mat-form-field",4),b.Qb(65,"textarea",5),b.Yb("ngModelChange",(function(n){return e.katexMarkdown=n})),b.Pb(),b.Pb(),b.Mb(66,"markdown",14),b.Pb(),b.Qb(67,"markdown"),b.wc(68,"\n      Optionally, you can specify math rendering [options](https://katex.org/docs/options.html) using `katexOptions` property.\n\n      **example.component.ts**\n      ```typescript\n      import { KatexOptions } from 'ngx-markdown';\n\n      public options: KatexOptions = {\n        displayMode: true,\n        throwOnError: false,\n        errorColor: '#cc0000',\n        ...\n      };\n      ```\n\n      **example.component.html**\n    "),b.Pb(),b.Mb(69,"markdown",2),b.Pb(),b.Pb()),2&n&&(b.gc("headings",e.headings),b.Bb(10),b.gc("src","app/plugins/remote/emoji.html"),b.Bb(5),b.gc("ngModel",e.emojiMarkdown),b.Bb(1),b.gc("data",e.emojiMarkdown),b.Bb(10),b.gc("src","app/plugins/remote/line-numbers.html"),b.Bb(9),b.gc("start",5),b.Bb(11),b.gc("src","app/plugins/remote/line-highlight.html"),b.Bb(3),b.gc("line","6, 10-16")("lineOffset",5),b.Bb(11),b.gc("src","app/plugins/remote/katex.html"),b.Bb(5),b.gc("ngModel",e.katexMarkdown),b.Bb(1),b.gc("data",e.katexMarkdown),b.Bb(3),b.gc("src","app/plugins/remote/katex-options.html"))},directives:[m.a,u.a,d.d,d.e,h.a,d.b,r.a,a.a,a.e,a.g],styles:["[_nghost-%COMP%]{display:block}textarea[_ngcontent-%COMP%]{min-height:180px}"],changeDetection:0}),i)}],f=((o=function n(){_classCallCheck(this,n)}).\u0275mod=b.Jb({type:o}),o.\u0275inj=b.Ib({factory:function(n){return new(n||o)},imports:[[p.e.forChild(g)],p.e]}),o);t("SQXh"),t.d(e,"PluginsModule",(function(){return x}));var w,x=((w=function n(){_classCallCheck(this,n)}).\u0275mod=b.Jb({type:w}),w.\u0275inj=b.Ib({factory:function(n){return new(n||w)},imports:[[a.c,s.a.forChild(),r.b,f,l.a,c.a]]}),w)}}]);