"use strict";

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    }(),
    TemperatureOverlay = function() {
        function a(b, c, d, e, f, g) {
            var h = this;
            _classCallCheck(this, a), this.map = b, this.temps = c, this.service = d, this.parent_ctr = e, this.interval = f || 24e4, this.zIndex = g || 101, this.layers = {
                t_cold: null,
                t_warm: null,
                t_hot: null
            }, this.hidden = !0;
            var i = {
                cold: "#283593",
                warm: "#33691E",
                hot: "#BB0000"
            };
            this._addLayer("t_cold", i.cold), this._addLayer("t_warm", i.warm), this._addLayer("t_hot", i.hot), this.map.events.register("zoomend", this.map, function() {
                h.hidden || (h.map.getZoom() > 5 ? h.display(!0) : h.hide(!0));
            });
        }
        return _createClass(a, [{
            key: "_addLayer",
            value: function(b, c) {
                this.layers[b] = new OpenLayers.Layer.Vector(b, {
                    styleMap: new OpenLayers.StyleMap({
                        fontSize: "12px",
                        fillColor: c || "#000000",
                        strokeWidth: "1px",
                        strokeColor: c || "#000000"
                    })
                }), this.map.addLayer(this.layers[b]), this.layers[b].setZIndex(this.zIndex), this.layers[b].setVisibility();
            }
        }, {
            key: "_createTextFeature",
            value: function(b) {
                var c = new OpenLayers.LonLat(b.y, b.x).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
                return new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Text(c.lon, c.lat, b.temp + " °C"))
            }
        }, {
            key: "_drawTemps",
            value: function() {
                var b = this,
                    c = [],
                    d = [],
                    e = [];
                this.temps.forEach(function(a) {
                    var f = parseFloat(a.temp);
                    f <= 0 ? c.push(b._createTextFeature(a)) : f >= 25 ? e.push(b._createTextFeature(a)) : d.push(b._createTextFeature(a));
                }), this.layers.t_cold.addFeatures(c), this.layers.t_warm.addFeatures(d), this.layers.t_hot.addFeatures(e);
            }
        }, {
            key: "redraw",
            value: function() {
                this.layers.t_cold.removeAllFeatures(), this.layers.t_warm.removeAllFeatures(), this.layers.t_hot.removeAllFeatures(), this._drawTemps();
            }
        }, {
            key: "hide",
            value: function(b) {
                b || (this.hidden = !0), this.layers.t_cold.setVisibility(), this.layers.t_warm.setVisibility(), this.layers.t_hot.setVisibility(), clearInterval(this.task);
            }
        }, {
            key: "display",
            value: function(b) {
                var c = this;
                b || (this.hidden = !1, this.sendRequest(), this.task = setInterval(function() {
                    c.sendRequest();
                }, this.interval)), this.map.getZoom() > 5 && (this.layers.t_cold.setVisibility(!0), this.layers.t_warm.setVisibility(!0), this.layers.t_hot.setVisibility(!0));
            }
        }, {
            key: "update",
            value: function(b) {
                this.temps = b, this.redraw();
            }
        }, {
            key: "sendRequest",
            value: function() {
                $.ajax({
                  url: this.service,
                  dataType: "jsonp",
                  jsonpCallback: "APIGO.tempOverlay.update"
                });
            }
        }, {
            key: "render",
            value: function() {
                var b = this;
                return !!this.parent_ctr && (jQuery(this.parent_ctr).append('<li class="ol-list-overlay temp_overlay_ctr"><input type="checkbox" class="temp_overlay_ctr"><span>Температура в Беларуси</span></li>'), void jQuery(".temp_overlay_ctr").click(function() {
                    var a = jQuery(".temp_overlay_ctr input");
                    a.prop("checked") ? (a.prop("checked", !1), b.hide()) : (a.prop("checked", !0), b.display());
                }));
            }
        }]), a;
    }(),
    APIGO = {
        tempOverlay: new TemperatureOverlay(MonitoringMapCMSModule.map, [], "https://api.wialon.by/temperature", "#sub_menu_maps ul", 3e4, 118)
    };
APIGO.tempOverlay.render();
