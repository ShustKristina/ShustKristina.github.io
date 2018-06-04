 $(function() {

            var $grid = $('#tp-grid'),
                $grid2 = $('#tp-grid2'),
                $close2 = $('#close2'),
                $name = $('#name'),
                $name2 = $('#name2'),
                $close = $('#close'),
                $loader = $('<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>').insertBefore($grid),
                $loader2 = $('<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>').insertBefore($grid2),
                stapel = $grid.stapel({
                    onLoad: function() {
                        $loader.remove();
                    },
                    onBeforeOpen: function(pileName) {
                        $name.html(pileName);
                    },
                    onAfterOpen: function(pileName) {
                        $close.show();
                    }
                });
            stapel2 = $grid2.stapel({
                onLoad: function() {
                    $loader2.remove();
                },
                onBeforeOpen: function(pileName) {
                    $name2.html(pileName);
                },
                onAfterOpen: function(pileName) {
                    $close2.show();
                }
            });

            $close.on('click', function() {
                $close.hide();
                $name.empty();
                stapel.closePile();
            });
            $close2.on('click', function() {
                $close2.hide();
                $name2.empty();
                stapel2.closePile();
            });
        });