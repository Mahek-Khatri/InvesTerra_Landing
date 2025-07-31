(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2521], {
    39212: function(n, e, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
            return t(23579)
        }
        ])
    },
    27936: function(n, e, t) {
        "use strict";
        var a = t(82729)
          , r = t(85893)
          , i = t(19521);
        function _templateObject() {
            let n = (0,
            a._)(["\n  position: absolute;\n  width: 30vw;\n  height: 0px;\n  z-index: 10;\n  overflow: hidden;\n\n  h1,\n  p {\n    height: 10rem;\n  }\n"]);
            return _templateObject = function() {
                return n
            }
            ,
            n
        }
        let o = i.default.main.withConfig({
            componentId: "sc-fee572b4-0"
        })(_templateObject());
        e.Z = function(n) {
            let {h1: e, description: t=""} = n;
            return e ? (0,
            r.jsxs)(o, {
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
    23579: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            __N_SSG: function() {
                return A
            },
            default: function() {
                return about
            }
        });
        var a = t(82729)
          , r = t(85893)
          , i = t(19521)
          , o = t(62069)
          , s = t(71706)
          , l = t(67294)
          , c = t(47158)
          , m = t(2711)
          , d = t.n(m);
        t(20927);
        var p = t(41664)
          , u = t.n(p);
        function _templateObject() {
            let n = (0,
            a._)(["\n  ", ' {\n    margin-top: 8rem;\n    display: grid;\n    grid-template-columns: 1fr;\n\n    .large-image-container {\n      display: none;\n      justify-content: center;\n      filter: drop-shadow(0 -49px 57px #0e255e);\n\n      img {\n        width: 250px;\n        height: auto;\n      }\n\n      .inner-image-container {\n        position: relative;\n        transform: rotate(-5deg);\n\n        .moc-screen-container {\n          position: absolute;\n          top: 110px;\n          left: 40px;\n          width: 168px;\n          height: 165px;\n\n          .moc-screen {\n            position: relative;\n            overflow: hidden;\n            width: 100%;\n            height: 100%;\n            border: 2px solid black;\n            border-radius: 8px;\n            background-color: black;\n            background-image: url("https://cdn.sanity.io/images/ornj730p/production/2707a8676184bd8444ab9a94ac63b1eff0b8e66b-946x800.png?w=600&q=95&auto=format&dpr=2");\n            background-size: 500px;\n            display: flex;\n            justify-content: start;\n            align-items: center;\n            padding-left: 10px;\n\n            h1 {\n              font-size: 7px;\n              .python-typewriter-cursor {\n                display: none;\n              }\n            }\n\n            .fuzz {\n              position: absolute;\n              top: -50%;\n              left: -50%;\n              width: 200%;\n              height: 200%;\n              background: transparent\n                url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;\n              background-repeat: repeat;\n              animation: bg-animation 0.2s infinite;\n              opacity: 0.9;\n              visibility: visible;\n            }\n          }\n\n          @keyframes bg-animation {\n            0% {\n              transform: translate(0, 0);\n            }\n            10% {\n              transform: translate(-5%, -5%);\n            }\n            20% {\n              transform: translate(-10%, 5%);\n            }\n            30% {\n              transform: translate(5%, -10%);\n            }\n            40% {\n              transform: translate(-5%, 15%);\n            }\n            50% {\n              transform: translate(-10%, 5%);\n            }\n            60% {\n              transform: translate(15%, 0);\n            }\n            70% {\n              transform: translate(0, 10%);\n            }\n            80% {\n              transform: translate(-15%, 0);\n            }\n            90% {\n              transform: translate(10%, 5%);\n            }\n            100% {\n              transform: translate(5%, 0);\n            }\n          }\n        }\n      }\n    }\n\n    .header-text-container {\n      margin: auto 1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      gap: 3rem;\n      text-align: center;\n      position: relative;\n      transition: opacity 1s ease-in-out;\n\n      .version {\n        position: absolute;\n        top: -50px;\n        left: 5px;\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        font-family: "Work Sans", sans-serif;\n        color: #8aa2e0;\n        border: 3px solid #1c1f33;\n        padding: 5px 10px 5px 10px;\n        border-radius: 50px;\n        font-size: 20px;\n        transform: scale(0.9);\n\n        img {\n          width: 55px;\n          height: auto;\n          transform: scale(1);\n        }\n\n        span {\n          color: ', ";\n          font-size: 15px;\n          margin: 0px;\n        }\n      }\n\n      h1 {\n        margin: 0px;\n        font-size: 25px;\n        text-align: center;\n        text-transform: uppercase;\n        color: ", ";\n\n        span {\n          color: ", ";\n        }\n\n        .python-typewriter-cursor {\n          display: none;\n        }\n      }\n\n      h2 {\n        /* margin-top: 2rem; */\n        text-align: center;\n        color: ", ";\n        font-size: 22px;\n      }\n\n      p {\n        margin: 0px;\n        /* margin-top: 2rem; */\n        color: ", ';\n\n        font-family: "Work Sans", sans-serif;\n\n        span {\n          color: #2fa8ff;\n\n          a {\n            color: #2fa8ff;\n          }\n        }\n      }\n    }\n  }\n\n  ', " {\n    grid-template-columns: 3fr 4fr;\n\n    margin: 0rem 5rem 0rem 5rem;\n    padding-top: 8rem;\n\n    .header-text-container {\n      margin: 0rem;\n      text-align: start;\n      align-items: start;\n\n      .version {\n        top: 10px;\n        left: -19px;\n      }\n\n      h1 {\n        text-align: start;\n        font-size: 28px;\n      }\n    }\n\n    .large-image-container {\n      display: flex;\n      justify-content: start;\n    }\n  }\n"]);
            return _templateObject = function() {
                return n
            }
            ,
            n
        }
        let g = i.default.div.withConfig({
            componentId: "sc-28fef584-0"
        })(_templateObject(), n => {
            let {theme: e} = n;
            return e.breakpoints.xs
        }
        , n => "dark" === n.theme.mode ? "#8aa2e0" : "black", n => "dark" === n.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", n => "dark" === n.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", n => "dark" === n.theme.mode ? "#8aa2e0" : "black", n => "dark" === n.theme.mode ? "#8aa2e0" : "black", n => {
            let {theme: e} = n;
            return e.breakpoints.sm
        }
        );
        var about_TopHeader = function() {
            let[n,e] = (0,
            l.useState)(!1);
            return (0,
            l.useEffect)( () => {
                d().init({
                    mirror: !1,
                    disable: "mobile"
                });
                let n = setTimeout( () => {
                    e(!0)
                }
                , 1100);
                return () => clearTimeout(n)
            }
            , []),
            (0,
            r.jsxs)(g, {
                children: [(0,
                r.jsx)("div", {
                    className: "large-image-container",
                    "data-aos": "fade-left",
                    "data-aos-easing": "ease-out-cubic",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "500",
                    children: (0,
                    r.jsxs)("div", {
                        className: "inner-image-container",
                        children: [(0,
                        r.jsx)("img", {
                            src: "/images/about/Pok\xe9dex.svg",
                            alt: "pokedex image"
                        }), (0,
                        r.jsx)("div", {
                            className: "moc-screen-container",
                            children: (0,
                            r.jsxs)("div", {
                                className: "moc-screen",
                                children: [(0,
                                r.jsx)(c.Z, {
                                    text: 'print("hello world")'
                                }), (0,
                                r.jsx)("div", {
                                    className: "fuzz"
                                })]
                            })
                        })]
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "header-text-container",
                    style: {
                        opacity: n ? "1" : "0"
                    },
                    children: [(0,
                    r.jsxs)("p", {
                        className: "version",
                        children: [(0,
                        r.jsx)("img", {
                            src: "/images/about/v09.svg",
                            alt: "version number"
                        }), (0,
                        r.jsx)("span", {
                            children: "Let us know what you think!"
                        })]
                    }), (0,
                    r.jsx)("h1", {
                        children: "The most fun way to learn tech skills"
                    }), (0,
                    r.jsxs)("p", {
                        children: ["Cod\xe9dex is a brand new way to learn to code online. Journey through the fantasy land of", " ", (0,
                        r.jsx)("span", {
                            children: (0,
                            r.jsx)(u(), {
                                href: "/python",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Python"
                            })
                        }), ",", " ", (0,
                        r.jsx)("span", {
                            children: (0,
                            r.jsx)(u(), {
                                href: "/html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "HTML"
                            })
                        }), ",", " ", (0,
                        r.jsx)("span", {
                            children: (0,
                            r.jsx)(u(), {
                                href: "/css",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "CSS"
                            })
                        }), ",", " ", (0,
                        r.jsx)("span", {
                            children: (0,
                            r.jsx)(u(), {
                                href: "javascript",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "JavaScript"
                            })
                        }), ",", " ", (0,
                        r.jsx)("span", {
                            children: (0,
                            r.jsx)(u(), {
                                href: "/react",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "React"
                            })
                        }), ",", " ", (0,
                        r.jsx)("span", {
                            children: (0,
                            r.jsx)(u(), {
                                href: "/command-line",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Command Line"
                            })
                        }), ", or", " ", (0,
                        r.jsx)("span", {
                            children: (0,
                            r.jsx)(u(), {
                                href: "/git-github",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Git & GitHub"
                            })
                        }), ". Earn experience points (XP) to unlock new regions, & collect all the badges at your own pace."]
                    }), (0,
                    r.jsx)("h2", {
                        children: "(づ｡◕‿‿◕｡)づ:･ﾟ✧"
                    })]
                })]
            })
        };
        function ImageFlip_templateObject() {
            let n = (0,
            a._)(["\n  /* .rhf-container {\n    background-color: transparent;\n    width: auto;\n    height: auto;\n    perspective: 1000px;\n\n    ", " {\n      width: 100%;\n      position: static;\n    }\n    ", " {\n      width: 50%;\n      margin-top: -3rem;\n    }\n    ", " {\n      width: 7rem;\n      width: 100%;\n      margin-top: -3.5rem;\n    }\n  } */\n  .card {\n    width: 110px;\n    /* height: 300px; */\n    /* margin: -150px; */\n    perspective: 500px;\n    margin: 0 auto;\n    ", " {\n      width: 110px;\n      margin-top: -3rem;\n    }\n    ", " {\n      width: 110px;\n      margin-top: -3.3rem;\n    }\n\n    ", " {\n      margin-top: -3.3rem;\n    }\n  }\n\n  .content {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n\n    transition: transform 1s;\n    transform-style: preserve-3d;\n  }\n\n  /* .card:hover .content {\n    transform: rotateY(180deg);\n    transition: transform 0.5s;\n  } */\n\n  .card:hover {\n    cursor:\n      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)\n        14 0,\n      pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .flip .content {\n    transform: rotateY(180deg);\n    transition: transform 0.5s;\n  }\n\n  .front,\n  .back {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: white;\n    line-height: 300px;\n    color: #03446a;\n    text-align: center;\n    font-size: 60px;\n    border-radius: 5px;\n    backface-visibility: hidden;\n  }\n\n  .back {\n    background: #03446a;\n    color: white;\n    transform: rotateY(180deg);\n  }\n"]);
            return ImageFlip_templateObject = function() {
                return n
            }
            ,
            n
        }
        let f = i.default.div.withConfig({
            componentId: "sc-cda100d5-0"
        })(ImageFlip_templateObject(), n => {
            let {theme: e} = n;
            return e.breakpoints.xs
        }
        , n => {
            let {theme: e} = n;
            return e.breakpoints.sm
        }
        , n => {
            let {theme: e} = n;
            return e.breakpoints.lg
        }
        , n => {
            let {theme: e} = n;
            return e.breakpoints.xs
        }
        , n => {
            let {theme: e} = n;
            return e.breakpoints.sm
        }
        , n => {
            let {theme: e} = n;
            return e.breakpoints.lg
        }
        );
        var ImageFlip = function(n) {
            let {front: e, back: t} = n;
            return (0,
            r.jsx)(f, {
                children: (0,
                r.jsx)("div", {
                    className: "card",
                    onClick: function(n) {
                        let e = n.currentTarget;
                        e.classList.add("flip"),
                        setTimeout( () => e.classList.remove("flip"), 2e3)
                    },
                    children: (0,
                    r.jsxs)("div", {
                        className: "content",
                        children: [(0,
                        r.jsx)("div", {
                            className: "front",
                            children: e
                        }), (0,
                        r.jsx)("div", {
                            className: "back",
                            children: t
                        })]
                    })
                })
            })
        };
        function TeamMemberCard_templateObject() {
            let n = (0,
            a._)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  .card-holder {\n    position: relative;\n\n    .background-image {\n      width: 230px;\n      height: auto;\n    }\n\n    .red-dot {\n      position: absolute;\n      bottom: -5px;\n      left: 10px;\n    }\n\n    .smaller-red-dot {\n      position: absolute;\n      top: 35px;\n      left: 50%;\n      transform: translate(-50%, 0%);\n    }\n\n    .team-name {\n      width: fit-content;\n      position: absolute;\n      bottom: -2px;\n      right: 32px;\n      font-size: 15px;\n\n      a {\n        color: #373f25;\n      }\n    }\n\n    .team-memeber-image {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n\n      .card {\n        width: 165px;\n        height: 160.72px;\n        margin: 0px;\n      }\n\n      .front,\n      .back {\n        border-radius: 8px;\n      }\n\n      .content {\n        box-shadow: none;\n      }\n    }\n  }\n\n  .position {\n    margin: 0px;\n    font-family: "Work Sans", sans-serif;\n    color: ', ";\n    font-weight: 500;\n  }\n\n  .socials {\n    display: flex;\n    gap: 15px;\n\n    a {\n      transition: transform 0.2s ease-in-out;\n\n      &:hover {\n        transform: scale(2.3) translateX(-10%) translateY(-10%);\n      }\n    }\n  }\n"]);
            return TeamMemberCard_templateObject = function() {
                return n
            }
            ,
            n
        }
        function _templateObject1() {
            let n = (0,
            a._)(["\n  border-radius: 8px;\n  border: 2px solid black;\n  object-fit: cover;\n"]);
            return _templateObject1 = function() {
                return n
            }
            ,
            n
        }
        let h = i.default.div.withConfig({
            componentId: "sc-74f6dd5d-0"
        })(TeamMemberCard_templateObject(), n => "dark" === n.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black")
          , x = i.default.img.withConfig({
            componentId: "sc-74f6dd5d-1"
        })(_templateObject1());
        var about_TeamMemberCard = function(n) {
            let {person: e, animated: t} = n;
            return (0,
            r.jsxs)(h, {
                children: [(0,
                r.jsxs)("div", {
                    className: "card-holder",
                    children: [(0,
                    r.jsx)("img", {
                        src: "/images/about/team-card-image.svg",
                        alt: "background card",
                        className: "background-image"
                    }), (0,
                    r.jsx)("img", {
                        src: "/images/about/red-dot.svg",
                        alt: "red dot",
                        className: "red-dot"
                    }), (0,
                    r.jsx)("img", {
                        src: "/images/about/smaller-red-dots.svg",
                        alt: "red dot",
                        className: "smaller-red-dot"
                    }), (0,
                    r.jsx)("div", {
                        className: "team-memeber-image",
                        children: (0,
                        r.jsx)(ImageFlip, {
                            front: (0,
                            r.jsx)(x, {
                                src: t ? e.images.animated : e.images.real,
                                alt: e.name,
                                animated: t
                            }),
                            back: (0,
                            r.jsx)(x, {
                                src: t ? e.images.real : e.images.animated,
                                alt: e.name,
                                animated: t
                            })
                        })
                    }), (null == e ? void 0 : e.username) === "@mochi" ? (0,
                    r.jsx)("p", {
                        className: "team-name",
                        children: e.name
                    }) : (0,
                    r.jsx)("p", {
                        className: "team-name",
                        children: (0,
                        r.jsx)(u(), {
                            href: e.username,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e.name
                        })
                    })]
                }), (0,
                r.jsx)("p", {
                    className: "position",
                    children: e.title
                }), (0,
                r.jsx)("div", {
                    className: "socials",
                    children: e.socials.map(function(n) {
                        return (0,
                        r.jsx)(u(), {
                            href: n.link,
                            className: "nes-icon ".concat(n.name),
                            target: "_blank"
                        }, n.name)
                    })
                })]
            })
        }
          , b = t(9473)
          , k = t(61764);
        function TeamMembers_templateObject() {
            let n = (0,
            a._)(["\n  margin-top: 6rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: opacity 1s ease-in-out;\n\n  h2 {\n    text-align: center;\n    font-size: 22.5px;\n    text-transform: uppercase;\n    color: ", ";\n  }\n\n  .team-summary {\n    margin: 0px;\n    margin-top: 1.5rem;\n    color: ", ';\n\n    font-family: "Work Sans", sans-serif;\n    width: 500px;\n    max-width: 95%;\n    text-align: center;\n  }\n\n  .team-members-grid {\n    margin-top: 3rem;\n    width: 100%;\n    display: grid;\n    gap: 1.5rem;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-columns: repeat(auto-fill, 235px);\n    justify-content: center;\n  }\n\n  .manifesto {\n    margin: 0px;\n    margin: 4rem auto;\n    font-family: "Work Sans", sans-serif;\n    color: ', ";\n\n    border: 3px solid #1c1f33;\n    border-radius: 50px;\n    padding: 16px;\n    font-weight: 600;\n    font-size: 20px;\n    transform: scale(0.9);\n  }\n"]);
            return TeamMembers_templateObject = function() {
                return n
            }
            ,
            n
        }
        let j = i.default.div.withConfig({
            componentId: "sc-f424f4b8-0"
        })(TeamMembers_templateObject(), n => "dark" === n.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", n => "dark" === n.theme.mode ? "#8aa2e0" : "black", n => "dark" === n.theme.mode ? "#8aa2e0" : "black");
        var about_TeamMembers = function() {
            let n = (0,
            b.v9)(k.M)
              , [e,t] = (0,
            l.useState)(!1);
            return (0,
            l.useEffect)( () => {
                d().init({
                    mirror: !1,
                    disable: "mobile",
                    once: !0
                });
                let n = setTimeout( () => {
                    t(!0)
                }
                , 1100);
                return () => clearTimeout(n)
            }
            , []),
            (0,
            r.jsxs)(j, {
                style: {
                    opacity: e ? "1" : "0"
                },
                children: [(0,
                r.jsx)("h2", {
                    children: "Meet the team"
                }), (0,
                r.jsx)("p", {
                    className: "team-summary",
                    children: "The folks behind Cod\xe9dex have taught Computer Science at Columbia, NYU, CUNY, and popular EdTech platforms."
                }), (0,
                r.jsx)("div", {
                    className: "team-members-grid",
                    children: n.map( (n, e) => (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsx)(about_TeamMemberCard, {
                            person: n,
                            animated: !0
                        })
                    }, n.username))
                }), (0,
                r.jsx)("p", {
                    className: "manifesto",
                    children: "Hello World Manifesto (coming soon)"
                })]
            })
        };
        function InvestorsList_templateObject() {
            let n = (0,
            a._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h2 {\n    text-align: center;\n    font-size: 22.5px;\n    color: #f7d51d;\n    text-transform: uppercase;\n  }\n\n  .investor-copy {\n    margin: 0px;\n    color: ", ';\n\n    font-family: "Work Sans", sans-serif;\n    width: 500px;\n    max-width: 95%;\n    text-align: center;\n  }\n\n  .investor-logos {\n    margin-top: 3rem;\n    width: 700px;\n    max-width: 95%;\n    display: flex;\n    justify-content: center;\n    gap: 3rem;\n    flex-wrap: wrap;\n\n    img {\n      filter: ', " !important;\n    }\n  }\n"]);
            return InvestorsList_templateObject = function() {
                return n
            }
            ,
            n
        }
        let v = i.default.div.withConfig({
            componentId: "sc-bcb7500d-0"
        })(InvestorsList_templateObject(), n => "dark" === n.theme.mode ? "#8aa2e0" : "black", n => "light" === n.theme.mode && "grayscale(1) invert(1)")
          , w = [{
            name: "Worklife",
            logoLink: "/images/about/worklifevc.svg",
            websiteLink: "https://www.worklife.vc/",
            invert: !1
        }, {
            name: "Hustle Fund",
            logoLink: "/images/about/hustlefund.svg",
            websiteLink: "https://www.hustlefund.vc/",
            invert: !1
        }, {
            name: "NP-Hard Ventures",
            logoLink: "/images/about/NPHARD.png",
            websiteLink: "https://nphard.vc/",
            invert: !1
        }, {
            name: "NY ventures",
            logoLink: "/images/about/nyventures.png",
            websiteLink: "https://esd.ny.gov/venture-capital",
            invert: !1
        }, {
            name: "Transcend",
            logoLink: "/images/about/transcend.svg",
            websiteLink: "https://www.transcend-network.com/",
            invert: !0
        }, {
            name: "Good water capital",
            logoLink: "/images/about/goodwater.svg",
            websiteLink: "https://www.goodwatercap.com/",
            invert: !1
        }, {
            name: "Z-fellows",
            logoLink: "/images/about/zfellows.svg",
            websiteLink: "https://www.zfellows.com/",
            invert: !1
        }];
        var about_InvestorsList = function() {
            return (0,
            r.jsxs)(v, {
                children: [(0,
                r.jsx)("h2", {
                    children: "Backed by"
                }), (0,
                r.jsx)("p", {
                    className: "investor-copy",
                    children: "World-class investors who share our vision"
                }), (0,
                r.jsx)("div", {
                    className: "investor-logos",
                    children: w.map(n => (0,
                    r.jsx)("img", {
                        src: n.logoLink,
                        alt: n.name,
                        style: {
                            filter: n.invert && "brightness(0) invert(1)",
                            transform: "NY ventures" === n.name && "scale(1.35)",
                            height: ("NP-Hard Ventures" === n.name || "NY ventures" === n.name) && "35px"
                        }
                    }, n.name))
                })]
            })
        }
          , y = t(86961)
          , _ = t(27936);
        function about_templateObject() {
            let n = (0,
            a._)(['\n  margin-bottom: -5rem;\n  padding-bottom: 10rem;\n  /* background-image: url("/images/about/space-bg.svg"); */\n  background-image: ', ";\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-color: ", ";\n\n  .made-with-love {\n    margin-top: 6rem;\n    margin-bottom: -2rem;\n    text-align: center;\n    color: ", ";\n\n    i {\n      transform: scale(1.5);\n      margin-bottom: 3px;\n      margin-right: 1px;\n    }\n  }\n"]);
            return about_templateObject = function() {
                return n
            }
            ,
            n
        }
        let N = i.default.div.withConfig({
            componentId: "sc-4348c6b0-0"
        })(about_templateObject(), n => "dark" === n.theme.mode && 'url("/images/about/space-bg.svg")', n => n.theme.colors.body, n => "dark" === n.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black");
        var A = !0
          , about = function() {
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(s.Z, {}), (0,
                r.jsx)(_.Z, {
                    h1: "About"
                }), (0,
                r.jsx)(N, {
                    children: (0,
                    r.jsxs)(o.Z, {
                        children: [(0,
                        r.jsx)(about_TopHeader, {}), (0,
                        r.jsx)(about_TeamMembers, {}), (0,
                        r.jsx)(about_InvestorsList, {}), (0,
                        r.jsxs)("p", {
                            className: "made-with-love",
                            children: ["Made with ", (0,
                            r.jsx)("i", {
                                className: "nes-icon is-small heart"
                            }), " in Brooklyn"]
                        })]
                    })
                }), (0,
                r.jsx)(y.Z, {})]
            })
        }
    }
}, function(n) {
    n.O(0, [1706, 6961, 9774, 2888, 179], function() {
        return n(n.s = 39212)
    }),
    _N_E = n.O()
}
]);
