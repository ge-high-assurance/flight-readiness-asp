(function(jQuery){
        jQuery.fn.depth = function(options,depth) {
            options = options || {};
            options.delay = options.delay || 0;
            
            this.find("> li").each(function() {
                e = jQuery(this)
                var subtree = e.find('> ul');

                if (subtree.length > 0) {
                    if (depth > 0) {
                        e.addClass('tree-opened');
                        e.removeClass('tree-closed');

                        subtree.slideDown(options.delay);
                        subtree.show(options.delay);

                        subtree.depth(options,depth-1);
                    } else {
                        e.removeClass('tree-opened');
                        e.addClass('tree-closed');

                        subtree.slideUp(options.delay);
                        subtree.hide(options.delay);

                        subtree.collapse(options);
                    }
                }
            });
            return true;
        }
        
        jQuery.fn.expand = function(options,depth) {
            options = options || {};
            options.delay = options.delay || 0;
            
            this.find("> li").each(function() {
                e = jQuery(this)
                var subtree = e.find('> ul');

                if (subtree.length > 0) {
                    e.addClass('tree-opened');
                    e.removeClass('tree-closed');

                    subtree.slideDown(options.delay);
                    subtree.show(options.delay);

                    subtree.expand(options,depth+1);
                }
                g_depth=Math.max(g_depth,depth);
            });
            return true;
        }

        jQuery.fn.collapse = function(options) {
            options = options || {};
            options.delay = options.delay || 0;
            
            this.find("> li").each(function() {
                e = jQuery(this)
                var subtree = e.find('> ul');

                if (subtree.length > 0) {
                    e.removeClass('tree-opened');
                    e.addClass('tree-closed');

                    subtree.slideUp(options.delay);
                    subtree.hide(options.delay);

                    subtree.collapse(options);
                } 
            });
            return true;
        }
        
        jQuery.fn.treemenu = function(options) {
            options = options || {};
            options.delay = options.delay || 0;
            options.openActive = options.openActive || false;
            options.closeOther = options.closeOther || false;
            options.activeSelector = options.activeSelector || ".active";

            this.addClass("treemenu");

            if (!options.nonroot) {
                this.addClass("treemenu-root");
            }

            options.nonroot = true;

            this.find("> li").each(function() {
                e = jQuery(this);
                var subtree = e.find('> ul');
                var button = e.find('.toggler').eq(0);

                if(button.length == 0) {
                    // create toggler
                    var button = jQuery('<span>');
                    button.addClass('toggler');
                    e.prepend(button);
                }

                if(subtree.length > 0) {
                    subtree.hide();

                    e.addClass('tree-closed');

                    e.find(button).click(function() {
                        var li = jQuery(this).parent('li');

                        if (options.closeOther && li.hasClass('tree-closed')) {
                            var siblings = li.parent('ul').find("li:not(.tree-empty)");
                            siblings.removeClass("tree-opened");
                            siblings.addClass("tree-closed");
                            siblings.removeClass(options.activeSelector);
                            siblings.find('> ul').slideUp(options.delay);
                        }

                        li.find('> ul').slideToggle(options.delay);
                        li.toggleClass('tree-opened');
                        li.toggleClass('tree-closed');
                        li.toggleClass(options.activeSelector);
                    });

                    jQuery(this).find('> ul').treemenu(options);
                } else {
                    jQuery(this).addClass('tree-empty');
                }
            });

            if (options.openActive) {
                var cls = this.attr("class");

                this.find(options.activeSelector).each(function(){
                    var el = jQuery(this).parent();

                    while (el.attr("class") !== cls) {
                        el.find('> ul').show();
                        if(el.prop("tagName") === 'UL') {
                            el.show();
                        } else if (el.prop("tagName") === 'LI') {
                            el.removeClass('tree-closed');
                            el.addClass("tree-opened");
                            el.show();
                        }

                        el = el.parent();
                    }
                });
            }

            expand({delay:0},0);
            max_depth = g_depth;
            this.collapse({delay:0});
            g_depth = 0;

            return this;
        }
    })(jQuery);

var g_depth = 0;
var max_depth = 4

function depth(step){
    g_depth = g_depth + step;
    g_depth = g_depth < 0 ? 0 : g_depth;
    g_depth = g_depth > max_depth ? max_depth : g_depth;
    jQuery(".tree").depth({delay:500},g_depth);
}

function expand(){
    g_depth = 0     
    jQuery(".tree").expand({delay:0},0);
}

function collapse(){
    jQuery(".tree").collapse({delay:0});
    g_depth = 0;    
}
