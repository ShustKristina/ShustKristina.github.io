/**
 * External script monitoring.gurtam.by
 */

loader.push(function() {
    WebCMS.after_init_call(function() {
        var menu_items = [
            {name: "Личный кабинет", index: 6, flags: 0x2, url: "https://my.wialon.by/"}
        ];

        var sess = wialon.core.Session.getInstance();
        var url_params = {
            sid: ( sess.getHiddenLogin && sess.getHiddenLogin() ) ? "1" : sess.getId(),
            user: sess.getCurrUser().getName(),
            baseUrl: sess.getBaseUrl(),
            hostUrl: sess.getBaseUrl(),
            lang:WebCMS.lang
        };
        jQuery('#sub_user_name_target_5 span').text('Часто задаваемые вопросы');

        update_menu(url_params, menu_items);
        addTemperatureOverlay();
        addJivosite();

        function update_menu(url_params, menu_items) {
            url_params = url_params || "";

            var menu = jQuery("#sub_user_name_target ul li");
            var count = menu.size();

            if (menu_items && menu_items.length)
                menu_items.forEach(function ( item, key ) {
                    var menuNode = getMenuNode(item, url_params, 'additional_'+key);
                    if (count)
                        menuNode.insertBefore(menu.eq(Math.min(count, Math.max(0, item.index - 1))));
                    else
                        menu.append(menuNode);
                });
        }

        function getMenuNode(item, urlParams, id)
        {
            var menu_node = jQuery("<li>", {id:  "additional_menu_" + i});

            switch (item.flags) {
                case 0x1:
                    menu_node.html("<span class='menuname'><a href='#'>" + (item.name || "") + "</a></span>").click( function() {
                        wialon.core.Session.getInstance().createAuthHash(function (code, result)
                        {
                            if (code) return;

                            urlParams.authHash = result.authHash;
                            window.location.replace(item.url+'?'+jQuery.param(urlParams)/*, '_blank'*/);
                        });
                    } );
                    break;
                case 0x2:
                    menu_node.html("<span class='menuname'><a href='#' id='" + id + "'>" + (item.name || "") + "</a></span>").click( function() {
                        var hc = WebCMS.get_module("help_control");
                        if (hc) {
                            wialon.core.Session.getInstance().createAuthHash(function (code, result)
                            {
                                if (code) return;

                                urlParams.authHash = result.authHash;

                                createWindowIframe(hc, item.url + '?' + jQuery.param(urlParams), item.name, id);
                            });
                        }
                    } );
                    break;
                default:
                    menu_node.html("<span class='menuname'><a href='" + item.url + urlParams + "' target='blank'>" + (item.name || "") + "</a></span>");
            }

            return menu_node;
        }

        function createWindowIframe(hc, url, title, id){
            var html = "<div style='overflow: hidden; width: 100%; height: 100%;'><iframe src='" + url + "' style='width: 100%; height: 100%;' frameborder='0'></iframe></div>";
            var options = {
                close: true,
                resizable: true,
                unique_id: true,
                resizeContent: true,
                allowStretch: true,
                minHeight: jQuery(window).height(),
                minWidth: jQuery(window).width(),
                top:1,
                left:1
            };

            var mod = hc.create(id, title, html, options);

            if (!mod) return;

            jQuery("#" + mod.target_child_id + "_close_id").click(function(){
                jQuery("#"+id+"_help_window_id").remove();
            });

            mod.show(true);
        }

        function addTemperatureOverlay() {
            jQuery.getScript( "https://github.com/ShustKristina/ShustKristina.github.io/tree/master/test_WIALON/script/temperature.js");
        }

        function addJivosite() {
            var sess = wialon.core.Session.getInstance();
            sess.getAccountData(1, function (code, result) {
                if (code) return;;

                if(result.plan !== 'ATK Main'  && result.plan !== 'ATK Plus'){
                    jQuery('<link/>', {
                        rel: 'stylesheet',
                        type: 'text/css',
                        href: 'https://scripts.wialon.by/hosting/jivosite/jivosite.css'
                    }).appendTo('head');
                    jQuery.getScript( "https://scripts.wialon.by/hosting/jivosite/jivosite.js");
                }
            })

        }


    });
});
