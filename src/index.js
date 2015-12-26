var $ = require('jquery');
var computeLayout = require('css-layout');

// Color Palette: http://www.color-hex.com/color-palette/13431

$(function() {
    var nodeTree = {
        style: {
            height: 400
        },
        children: [{
            text: 'A',
            style: {
                height: 100,
                backgroundColor: "#f1f2a0"
            }
        }, {
            text: 'B',
            style: {
                flex: 1,
                backgroundColor: "#b6ddea"
            }
        }, {
            text: 'C',
            style: {
                height: 100,
                backgroundColor: "#12725c"
            }
        }]
    };

    var $player = $(".simple-case .player");
    var $start = $(".simple-case .start");
    $start.on('click', function() {
        $start.parent().hide();
        computeLayout(nodeTree);
        nodeTree.children.forEach(node => {
            console.log(JSON.stringify(node, null, 4));
            var style = Object.assign({}, {
                position: 'absolute',
            }, node.style, node.layout, {
                width: 'auto'
            });
            var $el = $('<div class="view"><span class="label">' + node.text + '</span></div>');
            $el.css(style);
            $player.append($el);
        });
    });
});
