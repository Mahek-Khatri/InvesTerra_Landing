(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7033], {
    83306: function(n, e, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/challenges", function() {
            return a(23829)
        }
        ])
    },
    29233: function(n, e, a) {
        "use strict";
        var t = a(82729)
          , r = a(85893)
          , i = a(9473)
          , l = a(19521)
          , o = a(26245);
        function _templateObject() {
            let n = (0,
            t._)(["\n  /*change border for dark mode only*/\n  .nes-container.with-title {\n    border: ", ";\n    /*if dark mode and background is transparant*/\n    background-color: ", ";\n  }\n\n  /*changes border color*/\n  .nes-container.is-dark.with-title {\n    background-color: ", ";\n  }\n\n  /*changes title color*/\n  .nes-container.is-dark.with-title > .title {\n    color: ", ";\n    background-color: ", ";\n    /*if dark mode and background is transparant*/\n    background-color: ", ";\n  }\n\n  /*to remove spacing inside container*/\n  .nes-container.is-dark.with-title::after {\n    position: ", ";\n  }\n"]);
            return _templateObject = function() {
                return n
            }
            ,
            n
        }
        function _templateObject1() {
            let n = (0,
            t._)(['\n  font-family: "PixelGridM";\n  font-size: 20px !important;\n  line-height: 1;\n  letter-spacing: 1.5px;\n']);
            return _templateObject1 = function() {
                return n
            }
            ,
            n
        }
        let s = l.default.span.withConfig({
            componentId: "sc-2f0fcb63-0"
        })(_templateObject(), n => {
            let {dark: e} = n;
            return e ? "3px solid #244C73" : ""
        }
        , n => {
            let {dark: e, transparant: a} = n;
            return a && e ? "#0F1524 !important" : ""
        }
        , n => {
            let {dark: e} = n;
            return e ? "#1D2332" : ""
        }
        , n => n.theme.colors.borderTextColor, n => {
            let {dark: e} = n;
            return e ? "#1D2332" : ""
        }
        , n => {
            let {dark: e, transparant: a} = n;
            return e && a ? "#0F1524" : ""
        }
        , n => {
            let {dark: e} = n;
            return e ? "relative" : ""
        }
        )
          , c = l.default.span.withConfig({
            componentId: "sc-2f0fcb63-1"
        })(_templateObject1());
        e.Z = function(n) {
            let {className: e="", children: a, title: t, isDark: l, titleType: d, style: p={}, transparant: g} = n
              , m = (0,
            i.v9)(o.o4) || "dark";
            return (0,
            r.jsx)(s, {
                dark: "dark" === m,
                transparant: g,
                children: (0,
                r.jsxs)("div", {
                    className: "nes-container with-title ".concat("dark" === m ? "is-dark" : "", " ").concat(l ? "is-dark" : "", " ").concat(e),
                    style: p,
                    children: [(0,
                    r.jsx)(c, {
                        className: "title",
                        as: d,
                        children: t
                    }), a]
                })
            })
        }
    },
    23829: function(n, e, a) {
        "use strict";
        a.r(e),
        a.d(e, {
            __N_SSG: function() {
                return N
            },
            default: function() {
                return challenges
            }
        });
        var t = a(85893)
          , r = a(71706)
          , i = a(86961)
          , l = a(82729)
          , o = a(19521)
          , s = a(9473)
          , c = a(67294)
          , d = a(2711)
          , p = a.n(d);
        a(20927);
        var g = a(95986)
          , m = a(92614)
          , h = a(29233);
        function _templateObject() {
            let n = (0,
            l._)(['\n  .description {\n    font-family: "Mulish", sans-serif !important;\n\n    font-size: 16px;\n\n    ul {\n      li {\n        font-weight: 700;\n\n        &:not(:first-child) {\n          margin-top: 10px;\n        }\n\n        span {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          background-color: purple;\n          height: 25px;\n          border-radius: 20px;\n          width: 80px;\n          font-family: "PixelGridS";\n          margin-right: 1rem;\n          font-size: 13px;\n          color: black;\n        }\n      }\n    }\n  }\n']);
            return _templateObject = function() {
                return n
            }
            ,
            n
        }
        let u = o.default.div.withConfig({
            componentId: "sc-8bb8fc54-0"
        })(_templateObject());
        var codeChallenge_Description = function() {
            return (0,
            t.jsx)(h.Z, {
                title: "Rules",
                children: (0,
                t.jsx)(u, {
                    children: (0,
                    t.jsxs)("div", {
                        className: "description",
                        children: [(0,
                        t.jsx)("p", {
                            children: "Each Challenge Pack contains a handful of code challenges that revolve around a programming topic."
                        }), (0,
                        t.jsx)("p", {
                            children: "Earn XP after solving a code challenge:"
                        }), (0,
                        t.jsxs)("ul", {
                            children: [(0,
                            t.jsxs)("li", {
                                children: [(0,
                                t.jsx)("span", {
                                    style: {
                                        backgroundColor: "#92CC41"
                                    },
                                    children: "Easy"
                                }), " 5 XP"]
                            }), (0,
                            t.jsxs)("li", {
                                children: [(0,
                                t.jsx)("span", {
                                    style: {
                                        backgroundColor: "#F9C330"
                                    },
                                    children: "Medium"
                                }), " 10 XP"]
                            }), (0,
                            t.jsxs)("li", {
                                children: [(0,
                                t.jsx)("span", {
                                    style: {
                                        backgroundColor: "#F66463"
                                    },
                                    children: "Hard"
                                }), " 15 XP"]
                            })]
                        })]
                    })
                })
            })
        }
          , x = a(26245);
        function Filter_templateObject() {
            let n = (0,
            l._)(['\n  font-family: "Work Sans", sans-serif;\n\n  img {\n    margin-top: 0.15rem;\n  }\n\n  span.text {\n    margin-left: 1.2rem;\n    font-weight: 700;\n    margin-top: -0.2rem;\n    font-size: 18px;\n    font-family: "Mulish", sans-serif;\n  }\n\n  .nes-checkbox + span::before {\n    top: -2px;\n  }\n']);
            return Filter_templateObject = function() {
                return n
            }
            ,
            n
        }
        let f = o.default.label.withConfig({
            componentId: "sc-5c703478-0"
        })(Filter_templateObject());
        var codeChallenge_Filter = function() {
            let n = (0,
            s.v9)(x.o4)
              , e = (0,
            s.I0)()
              , a = (0,
            s.v9)(g.qe)
              , r = (0,
            c.useCallback)(n => {
                e((0,
                g.jl)({
                    checkboxName: n
                }))
            }
            , [e]);
            return (0,
            t.jsx)(h.Z, {
                title: "Filter",
                titleType: "h3",
                className: "filter",
                children: [{
                    language: "Python",
                    imgUrl: "/images/editor/python-logo.png"
                }, {
                    language: "HTML",
                    imgUrl: "/images/editor/html-logo.png"
                }, {
                    language: "JavaScript",
                    imgUrl: "/images/editor/javascript-logo.png"
                }].map(e => (0,
                t.jsxs)(f, {
                    htmlFor: e.language,
                    style: {
                        userSelect: "none",
                        display: "block"
                    },
                    className: "nes-pointer",
                    children: [(0,
                    t.jsx)("input", {
                        className: "nes-checkbox ".concat("light" === n ? "" : "is-dark"),
                        type: "checkbox",
                        name: e.language,
                        id: e.language,
                        value: a[e.language.toLowerCase()],
                        onChange: () => r(e.language.toLowerCase())
                    }), (0,
                    t.jsxs)("span", {
                        style: {
                            fontFamily: "Work Sans, sans-serif"
                        },
                        children: [(0,
                        t.jsx)("img", {
                            src: e.imgUrl,
                            alt: "".concat(e.language, " image"),
                            height: 20,
                            width: 20
                        }), "\xa0\xa0", (0,
                        t.jsx)("span", {
                            className: "text",
                            children: e.language
                        })]
                    })]
                }, e.language))
            })
        }
          , k = a(41664)
          , b = a.n(k)
          , j = a(47010);
        function UnlockedCard_templateObject() {
            let n = (0,
            l._)(["\n  .card {\n    background-color: ", ";\n  }\n  .card2 {\n    background-color: ", ";\n  }\n"]);
            return UnlockedCard_templateObject = function() {
                return n
            }
            ,
            n
        }
        let v = o.default.div.withConfig({
            componentId: "sc-2b80266-0"
        })(UnlockedCard_templateObject(), n => {
            let {cardColor: e} = n;
            return e
        }
        , n => {
            let {cardColor2: e} = n;
            return e
        }
        );
        var CardComponents_UnlockedCard = function(n) {
            let {packName: e, lastIncompleteChallenge: a, packMetadata: r, packChallengeArray: i, index: l} = n
              , [o,s] = (0,
            c.useState)(!1);
            return (0,
            t.jsx)(c.Fragment, {
                children: (0,
                t.jsx)(b(), {
                    href: "/challenges/".concat(null == r ? void 0 : r.name, "/").concat(a.challengeName),
                    onClick: () => s(!0),
                    children: (0,
                    t.jsxs)("div", {
                        className: "pack-container",
                        children: [i.map( (n, e) => {
                            var a, i, l;
                            return (0,
                            t.jsx)(v, {
                                cardColor: r.color[1],
                                cardColor2: r.color[2],
                                children: (0,
                                t.jsx)("div", {
                                    className: "card ".concat(0 != e ? "card".concat(e + 1) : ""),
                                    children: (0,
                                    t.jsx)("h3", {
                                        children: null == n ? void 0 : null === (l = n.title) || void 0 === l ? void 0 : null === (i = l.split(" ")) || void 0 === i ? void 0 : null === (a = i.slice(1)) || void 0 === a ? void 0 : a.join(" ")
                                    })
                                })
                            }, n.name)
                        }
                        ), (0,
                        t.jsx)("div", {
                            className: "pack",
                            "data-aos": "zoom-out-up",
                            "data-aos-duration": 100 + 150 * (l + 1),
                            style: {
                                background: r.color[0]
                            },
                            children: (0,
                            t.jsxs)("div", {
                                className: "inner-container",
                                children: [(0,
                                t.jsx)("h3", {
                                    children: o ? (0,
                                    t.jsx)(j.Z, {
                                        color: "rgba(255, 255, 255)",
                                        size: "0.8rem",
                                        style: {
                                            marginTop: "1.4rem"
                                        },
                                        className: "loader"
                                    }) : (0,
                                    t.jsx)(t.Fragment, {
                                        children: r.title
                                    })
                                }), (0,
                                t.jsx)("p", {
                                    className: "description",
                                    children: r.description
                                }), (null == r ? void 0 : r.club) && (0,
                                t.jsx)("span", {
                                    className: "club",
                                    children: "Club"
                                }), (0,
                                t.jsx)("span", {
                                    className: "language",
                                    children: "python" === r.tags[0] ? "Python" : "JavaScript"
                                }), (0,
                                t.jsxs)("div", {
                                    className: "pack-meta-data",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "challenge-numbers",
                                        children: [(0,
                                        t.jsx)("img", {
                                            src: "/images/challenge_packs/bow-icon.png",
                                            alt: "bow icon"
                                        }), (0,
                                        t.jsxs)("p", {
                                            children: [i.length, " x Challenges"]
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "challenge-numbers",
                                        children: [(0,
                                        t.jsx)("img", {
                                            src: "/images/challenge_packs/time.png",
                                            alt: "bow icon"
                                        }), (0,
                                        t.jsxs)("p", {
                                            children: [r.timeInMinutes, " min"]
                                        })]
                                    })]
                                })]
                            })
                        }, l)]
                    })
                })
            }, "packName-".concat(null == r ? void 0 : r.name, "-").concat(r.color[0]))
        }
          , C = a(96967)
          , CardComponents_LockedCard = function(n) {
            var e;
            let {packMetadata: a, index: r} = n
              , {title: i, gradient: l, tags: o, placeholder: d} = a
              , p = (0,
            s.v9)(g.jy);
            return 0 === p.length || (null == p ? void 0 : p.includes(null === (e = o[0]) || void 0 === e ? void 0 : e.toLowerCase())) ? (0,
            t.jsx)(c.Fragment, {
                children: (0,
                t.jsx)("div", {
                    className: "pack soon",
                    "data-aos": "zoom-out-up",
                    "data-aos-duration": 100 + 150 * (r + 1),
                    style: {
                        background: l
                    },
                    children: (0,
                    t.jsxs)("div", {
                        className: "inner-container",
                        children: [(0,
                        t.jsx)("img", {
                            src: "/images/challenge_packs/lock-icon.png",
                            alt: "lock icon"
                        }), d ? (0,
                        t.jsxs)("h3", {
                            children: [(0,
                            t.jsx)("br", {}), "Coming soon.", (0,
                            t.jsx)("br", {}), " Stay tuned!"]
                        }) : (0,
                        t.jsxs)("h3", {
                            children: ["Unlocks after ", i]
                        }), (0,
                        t.jsx)("span", {
                            children: o[0]
                        })]
                    })
                }, r)
            }, i) : (0,
            t.jsx)(t.Fragment, {})
        }
          , CardComponents_Card = function(n) {
            let {packName: e, packData: a, index: r, userChallengesState: i} = n
              , l = a.packMetadata
              , {lockBadge: o, lockCourse: c} = l
              , d = (0,
            s.v9)((0,
            C.k7)({
                courseName: "python"
            }));
            if ((0,
            s.v9)((0,
            C.k7)({
                courseName: "javascript"
            })),
            o) {
                let n = a.challenges
                  , s = function(n) {
                    let {packChallengeArray: e, userChallengesState: a, packName: t} = n
                      , r = e.find(n => {
                        let e = a[t];
                        if (!e)
                            return !1;
                        for (let a of e)
                            if (a.challenge === n.name)
                                return "completed" !== a.status;
                        return !0
                    }
                    );
                    return void 0 == r ? {
                        pack: t,
                        challengeName: e[0].name
                    } : {
                        pack: t,
                        challengeName: r.name
                    }
                }({
                    userChallengesState: i,
                    packChallengeArray: n,
                    packName: e
                });
                return null == d || d.includes(o),
                (0,
                t.jsx)(CardComponents_UnlockedCard, {
                    packName: e,
                    lastIncompleteChallenge: s,
                    packMetadata: l,
                    packChallengeArray: n,
                    index: r
                })
            }
        };
        function ChallengeHomePage_templateObject() {
            let n = (0,
            l._)(["\n  ", " {\n    .header-title {\n      text-align: center;\n      color: ", ';\n      font-family: "PixelGridM";\n      font-size: 25px;\n      line-height: 1;\n    }\n\n    .hashtag {\n      color: ', ';\n    }\n\n    .main {\n      display: grid;\n      grid-template-columns: 1fr;\n      margin-top: 4.3rem;\n      margin: auto 1rem;\n      /* overflow: hidden; */\n    }\n\n    .filter {\n      margin-top: 1.5rem;\n      margin-bottom: -1.5rem;\n\n      span {\n        position: relative;\n\n        img {\n          position: absolute;\n          top: -3px;\n          left: 2px;\n        }\n      }\n    }\n\n    .challenge-packs {\n      display: grid;\n      grid-template-columns: repeat(1, minmax(0, 1fr));\n      gap: 0rem;\n    }\n\n    a {\n      all: unset;\n    }\n\n    .pack-container {\n      position: relative;\n      .pack {\n        width: 100%;\n        position: relative;\n        height: 300px;\n        color: whitesmoke;\n        border: 4px solid black;\n        border-radius: 10px;\n        padding: 5px;\n        margin-top: 1.5rem;\n\n        cursor:\n          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)\n            14 0,\n          pointer;\n\n        .inner-container {\n          margin: 0rem;\n          border: 2px solid black;\n          border-radius: 5px;\n          height: 100%;\n          padding-top: 4rem;\n          padding-left: 1rem;\n          color: black;\n          overflow: hidden;\n\n          h3 {\n            font-family: "PixelGridM";\n          }\n\n          p {\n            font-family: "Mulish", sans-serif;\n            font-weight: 600;\n          }\n\n          .description {\n            padding-right: 1rem;\n            font-family: "Mulish", sans-serif;\n            font-weight: 700;\n          }\n\n          .pack-meta-data {\n            margin-top: 2rem;\n            width: fit-content;\n            position: absolute;\n            bottom: 13px;\n          }\n\n          .challenge-numbers {\n            display: flex;\n            align-items: center;\n            margin-bottom: 10px;\n            p {\n              margin: 0px;\n              margin-left: 0.5rem;\n            }\n          }\n        }\n        span {\n          &.language {\n            position: absolute;\n            top: 15px;\n            right: 15px;\n            padding: 5px 10px;\n            color: #91c8c9;\n            border-radius: 20px;\n            background-color: #212529;\n            font-family: "PixelGridS";\n            font-size: 12px;\n            line-height: 1;\n          }\n\n          &.club {\n            position: absolute;\n            font-size: 12px;\n            top: 15px;\n            right: 15px;\n            padding: 5px 10px;\n            color: #91c8c9;\n            border-radius: 20px;\n            background-color: #212529;\n            top: 15px;\n            right: 95px;\n            font-family: "PixelGridS";\n            line-height: 1;\n          }\n        }\n      }\n\n      .card {\n        display: none;\n        position: absolute;\n        min-height: 300px;\n        width: 100%;\n        transition-duration: 0.3s;\n        right: -10px;\n        top: -10px;\n        border: 3px solid black;\n        border-radius: 10px;\n        /* background-color: #006c84; */\n\n        h3 {\n          margin: 0.2rem;\n          margin-left: 0.7rem;\n          font-size: 13px;\n          font-weight: 700;\n          color: white;\n          font-family: "Mulish", sans-serif;\n        }\n      }\n\n      .card2 {\n        right: -20px;\n        top: -20px;\n        transition-duration: 0.4s;\n        /* background-color: #268c3c; */\n      }\n    }\n\n    .pack-container:hover {\n      .card {\n        top: -27px;\n        transition-duration: 0.3s;\n      }\n\n      .card2 {\n        top: -55px;\n        transition-duration: 0.4s;\n      }\n    }\n\n    .soon {\n      background-color: whitesmoke !important;\n      color: black;\n      min-height: 300px;\n      border: 4px solid black;\n      border-radius: 10px;\n      padding: 5px;\n      margin-top: 1.5rem;\n\n      h3 {\n        color: #212529;\n        font-size: 16px;\n        margin-right: 0.5rem;\n      }\n\n      .inner-container {\n        margin: 0rem;\n        border: 2px solid black;\n        border-radius: 5px;\n        height: 100%;\n        padding-top: 4rem;\n        padding-left: 1rem;\n        color: black;\n        font-family: "PixelGridM";\n\n        img {\n          margin-bottom: 1rem;\n        }\n      }\n\n      span {\n        position: absolute;\n        font-size: 12px;\n        top: 15px;\n        right: 15px;\n        padding: 5px 10px;\n        color: #f3f3f3;\n        border-radius: 20px;\n        background-color: #212529;\n        line-height: 1;\n        font-family: "PixelGridS";\n\n        &.club {\n          position: absolute;\n          top: 15px;\n          right: 90px;\n        }\n      }\n    }\n  }\n\n  ', " {\n    .main {\n      display: grid;\n      grid-template-columns: 2.45fr 5fr;\n      margin: 0px;\n      margin-top: 4.3rem;\n      gap: 2rem;\n    }\n\n    .filter {\n      margin-top: -1.2rem;\n      margin-bottom: 0rem;\n    }\n\n    .challenge-packs {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      gap: 3rem;\n    }\n\n    .pack-container {\n      .pack {\n        margin-top: 0rem;\n      }\n      .card {\n        display: block;\n      }\n    }\n\n    .soon {\n      margin-top: 0rem;\n    }\n  }\n\n  ", " {\n    .challenge-packs {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n\n  @media screen and (max-width: 767px) {\n    [data-aos] {\n      pointer-events: auto !important;\n      opacity: 1 !important;\n      transform: none !important;\n    }\n  }\n"]);
            return ChallengeHomePage_templateObject = function() {
                return n
            }
            ,
            n
        }
        let y = o.default.div.withConfig({
            componentId: "sc-4f26040d-0"
        })(ChallengeHomePage_templateObject(), n => {
            let {theme: e} = n;
            return e.breakpoints.xs
        }
        , n => n.theme.colors.text4, n => n.theme.colors.hyperLink, n => {
            let {theme: e} = n;
            return e.breakpoints.sm
        }
        , n => {
            let {theme: e} = n;
            return e.breakpoints.md
        }
        )
          , _ = [{
            title: "Coming soon",
            link: "/challenges/alpha",
            tags: ["Python", "#4AB2FF"],
            gradient: "#e66465",
            placeholder: !0
        }, {
            title: "Coming soon",
            link: "/challenges/alpha",
            tags: ["Python", "#4AB2FF"],
            gradient: "#e66465",
            placeholder: !0
        }, {
            title: "Coming soon",
            link: "/challenges/alpha",
            tags: ["JavaScript", "#EFD81D"],
            gradient: "#e66465",
            placeholder: !0
        }, {
            title: "Coming soon",
            link: "/challenges/alpha",
            tags: ["JavaScript", "#EFD81D"],
            gradient: "#e66465",
            placeholder: !0
        }, {
            title: "Coming soon",
            link: "/challenges/alpha",
            tags: ["JavaScript", "#EFD81D"],
            gradient: "#e66465",
            placeholder: !0
        }, {
            title: "Coming soon",
            link: "/challenges/alpha",
            tags: ["JavaScript", "#EFD81D"],
            gradient: "#e66465",
            placeholder: !0
        }];
        var codeChallenge_ChallengeHomePage = function(n) {
            let {packs: e} = n
              , a = (0,
            s.v9)(g.jy)
              , r = (0,
            s.v9)(m.bt)
              , [i,l] = (0,
            c.useState)(e);
            return (0,
            c.useEffect)( () => {
                if (0 === a.length)
                    l(e);
                else {
                    let n = Object.entries(e).reduce( (n, e) => {
                        var t;
                        let[r,i] = e
                          , l = (null === (t = i.packMetadata) || void 0 === t ? void 0 : t.tags) || []
                          , o = l.some(n => a.includes(n.toLowerCase()));
                        return o && (n[r] = i),
                        n
                    }
                    , {});
                    l(n)
                }
            }
            , [a, e]),
            (0,
            c.useEffect)( () => {
                p().init({
                    mirror: !1,
                    disable: "mobile"
                })
            }
            , []),
            (0,
            t.jsx)(y, {
                children: (0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsxs)("h3", {
                        className: "header-title",
                        children: [(0,
                        t.jsx)("span", {
                            className: "hashtag",
                            children: "#"
                        }), " Challenge Packs"]
                    }), (0,
                    t.jsxs)("div", {
                        className: "main",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "sidebar",
                            children: [(0,
                            t.jsx)(codeChallenge_Filter, {}), (0,
                            t.jsx)("br", {}), (0,
                            t.jsx)("br", {}), (0,
                            t.jsx)(codeChallenge_Description, {})]
                        }), (0,
                        t.jsxs)("div", {
                            className: "challenge-packs",
                            children: [i && Object.entries(i).sort( (n, e) => n[1].packMetadata.order - e[1].packMetadata.order).map( (n, e) => {
                                var a;
                                let[i,l] = n;
                                return (0,
                                t.jsx)(CardComponents_Card, {
                                    index: e,
                                    packName: i,
                                    packData: l,
                                    userChallengesState: r
                                }, "".concat(i, "-").concat(null === (a = l.packMetadata) || void 0 === a ? void 0 : a.color[0]))
                            }
                            ), _.map( (n, e) => (0,
                            t.jsx)(CardComponents_LockedCard, {
                                packMetadata: n,
                                index: e
                            }, n.title))]
                        })]
                    })]
                })
            })
        }
          , w = a(62069)
          , N = !0
          , challenges = function(n) {
            let {packs: e} = n;
            return (0,
            t.jsxs)("div", {
                style: {
                    paddingTop: "7.5rem",
                    height: "100vh"
                },
                children: [(0,
                t.jsx)(r.Z, {}), (0,
                t.jsx)(w.Z, {
                    children: (0,
                    t.jsx)(codeChallenge_ChallengeHomePage, {
                        packs: e
                    })
                }), (0,
                t.jsx)(i.Z, {
                    style: {
                        position: "sticky",
                        top: "100%"
                    }
                })]
            })
        }
    }
}, function(n) {
    n.O(0, [1706, 6961, 9774, 2888, 179], function() {
        return n(n.s = 83306)
    }),
    _N_E = n.O()
}
]);
