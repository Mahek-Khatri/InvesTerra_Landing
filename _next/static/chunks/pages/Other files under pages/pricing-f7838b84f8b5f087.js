(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9939], {
    2691: function(n, e, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/pricing", function() {
            return t(26157)
        }
        ])
    },
    27936: function(n, e, t) {
        "use strict";
        var i = t(82729)
          , r = t(85893)
          , c = t(19521);
        function _templateObject() {
            let n = (0,
            i._)(["\n  position: absolute;\n  width: 30vw;\n  height: 0px;\n  z-index: 10;\n  overflow: hidden;\n\n  h1,\n  p {\n    height: 10rem;\n  }\n"]);
            return _templateObject = function() {
                return n
            }
            ,
            n
        }
        let l = c.default.main.withConfig({
            componentId: "sc-fee572b4-0"
        })(_templateObject());
        e.Z = function(n) {
            let {h1: e, description: t=""} = n;
            return e ? (0,
            r.jsxs)(l, {
                children: [(0,
                r.jsx)("h1", {
                    children: e
                }), t ? (0,
                r.jsx)("p", {
                    className: "description",
                    children: t
                }) : null]
            }) : null
        }
    },
    26157: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            __N_SSG: function() {
                return j
            },
            default: function() {
                return pricing
            }
        });
        var i = t(82729)
          , r = t(85893)
          , c = t(19521)
          , l = t(71706)
          , o = t(86961)
          , s = t(67019)
          , a = t(27936)
          , u = t(4525)
          , p = t(64342)
          , d = t(24207)
          , h = t(76649)
          , f = t(62626);
        function _templateObject() {
            let n = (0,
            i._)(["\n  padding: 64px 0px;\n  background-color: ", ';\n\n  .section-title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 24px;\n\n    h3 {\n      font-family: "PixelGridM";\n\n      color: ', ";\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 140%;\n      letter-spacing: 0.72px;\n    }\n\n    p {\n      color: ", ";\n      font-size: 18px;\n      font-weight: 500;\n      line-height: 150%;\n    }\n  }\n"]);
            return _templateObject = function() {
                return n
            }
            ,
            n
        }
        let x = c.default.div.withConfig({
            componentId: "sc-3084bf11-0"
        })(_templateObject(), n => {
            let {theme: e} = n;
            return e.colors.background.grey.primary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.primary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.secondary
        }
        );
        var pricing_PricingWallOfLove = function() {
            return (0,
            r.jsxs)(x, {
                children: [(0,
                r.jsxs)("div", {
                    className: "section-title",
                    children: [(0,
                    r.jsx)("h3", {
                        children: "Wall of Love"
                    }), (0,
                    r.jsx)("p", {
                        children: "See what our learners are saying:"
                    })]
                }), (0,
                r.jsx)(f.Z, {
                    children: (0,
                    r.jsx)("div", {
                        className: "testimonal-container",
                        children: (0,
                        r.jsx)(h.Z, {
                            src: "https://embed.testimonial.to/w/codedex?theme=light&card=base",
                            style: {
                                minWidth: "100%",
                                border: "none"
                            }
                        })
                    })
                })]
            })
        }
          , g = t(53116);
        function pricing_templateObject() {
            let n = (0,
            i._)(['\n  padding-top: 3.85rem;\n  font-family: "Mulish", sans-serif;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    margin: 0;\n  }\n']);
            return pricing_templateObject = function() {
                return n
            }
            ,
            n
        }
        let m = c.default.div.withConfig({
            componentId: "sc-5528778e-0"
        })(pricing_templateObject());
        var j = !0
          , pricing = function() {
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(l.Z, {}), (0,
                r.jsx)(a.Z, {
                    h1: "Pricing"
                }), (0,
                r.jsxs)(m, {
                    children: [(0,
                    r.jsx)(u.Z, {}), (0,
                    r.jsx)(s.Z, {}), (0,
                    r.jsx)(p.Z, {}), (0,
                    r.jsx)(d.Z, {}), (0,
                    r.jsx)(pricing_PricingWallOfLove, {}), (0,
                    r.jsx)(g.Z, {})]
                }), (0,
                r.jsx)(o.Z, {
                    disableMarginTop: !0
                })]
            })
        }
    }
}, function(n) {
    n.O(0, [6649, 1706, 6961, 9774, 2888, 179], function() {
        return n(n.s = 2691)
    }),
    _N_E = n.O()
}
]);
