(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2372], {
    72815: function(n, e, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/builds", function() {
            return t(2938)
        }
        ])
    },
    2938: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            __N_SSG: function() {
                return S
            },
            default: function() {
                return builds
            }
        });
        var i = t(82729)
          , l = t(85893)
          , r = t(19521)
          , s = t(67294)
          , o = t(9473)
          , a = t(71706)
          , c = t(39828)
          , d = t(92369);
        async function getBuilds(n) {
            let {uid: e} = n
              , {firestore: t} = (0,
            d.UM)()
              , i = (0,
            c.hJ)(t, "userBuilds")
              , l = await (0,
            c.PL)((0,
            c.IO)(i, (0,
            c.ar)("uid", "==", e), (0,
            c.Xo)("updated", "desc")))
              , r = l.docs.map(n => ({
                id: n.id,
                ...n.data()
            }));
            return r
        }
        var u = t(41664)
          , p = t.n(u)
          , h = t(73857)
          , x = t(94430)
          , f = t(26245);
        function _templateObject() {
            let n = (0,
            i._)(["\n    from {\n        transform: scale(0.8);\n        visibility: hidden;\n        opacity: 0;\n    } to {\n        transform: scale(1);\n        visibility: visible;\n        opacity: 1;\n    }\n"]);
            return _templateObject = function() {
                return n
            }
            ,
            n
        }
        function _templateObject1() {
            let n = (0,
            i._)(['\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  font-family: "Mulish", sans-serif;\n\n  .delete-form {\n    animation: ', " 0.2s ease-in;\n    min-height: 254px;\n    height: fit-content;\n    width: 400px;\n    max-width: 95%;\n    max-height: 95%;\n\n    .copy-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 16px;\n\n      h2,\n      p {\n        text-align: center;\n        margin: 0px;\n        font-style: normal;\n        line-height: 150%;\n      }\n\n      h2 {\n        color: ", ";\n        font-size: 24px;\n\n        font-weight: 700;\n      }\n\n      p {\n        color: ", ";\n        font-size: 16px;\n        font-weight: 500;\n\n        span {\n          font-weight: 700;\n        }\n      }\n    }\n\n    .btn-container {\n      margin-top: 24px;\n      display: flex;\n      gap: 8px;\n\n      button {\n        flex: 1;\n      }\n    }\n  }\n"]);
            return _templateObject1 = function() {
                return n
            }
            ,
            n
        }
        let m = (0,
        r.keyframes)(_templateObject())
          , g = r.default.div.withConfig({
            componentId: "sc-897d9e55-0"
        })(_templateObject1(), m, n => {
            let {theme: e} = n;
            return e.colors.text.primary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.primary
        }
        );
        var builds_ConfirmBuildDeletion = function(n) {
            let {setShowDeleteForm: e, title: t, type: i, imgLink: r, removeBuild: s} = n;
            return (0,
            o.v9)(f.o4),
            (0,
            l.jsx)(g, {
                children: (0,
                l.jsxs)(x.Z, {
                    iconAction: () => e(!1),
                    className: "delete-form",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "copy-container",
                        children: [(0,
                        l.jsx)("h2", {
                            children: "Delete Project"
                        }), (0,
                        l.jsxs)("p", {
                            children: ["Are you sure you want to delete ", (0,
                            l.jsx)("span", {
                                children: t
                            }), " project?"]
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "btn-container",
                        children: [(0,
                        l.jsx)(h.Z, {
                            onClick: () => e(!1),
                            variant: "subtle",
                            children: "Cancel"
                        }), (0,
                        l.jsx)(h.Z, {
                            variant: "red",
                            onClick: () => s(),
                            children: "Delete"
                        })]
                    })]
                })
            })
        };
        async function deleteBuild(n) {
            let {uid: e, buildId: t} = n
              , {firestore: i} = (0,
            d.UM)();
            try {
                let n = (0,
                c.JU)(i, "userBuilds", t)
                  , l = await (0,
                c.QT)(n)
                  , r = l.data();
                if (r.uid === e)
                    return await (0,
                    c.oe)(n),
                    {
                        status: 200,
                        message: "build deleted successfully."
                    };
                throw Error("Unauthorized: You don't have permission to delete this post.")
            } catch (n) {
                throw Error("Error deleting build: " + n.message)
            }
        }
        function SingleBuilds_templateObject() {
            let n = (0,
            i._)(["\n  padding: 16px;\n  border-radius: 8px;\n  display: grid;\n  grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr) minmax(0px, 1fr);\n\n  gap: 20;\n\n  &:last-child {\n    margin-bottom: 24px;\n  }\n\n  .build-name,\n  .build-env,\n  .build-edited {\n    display: flex;\n    align-items: center;\n  }\n\n  .build-name {\n    p {\n      color: ", ";\n\n      font-size: 18px;\n\n      font-weight: 700;\n      line-height: 150%;\n\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n\n  .build-env {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n\n    img {\n      width: 32px;\n      height: 32px;\n      flex-shrink: 0;\n    }\n\n    p {\n      color: ", ';\n      font-family: "Mulish", sans-serif;\n\n      font-size: 16px;\n      font-weight: 500;\n      line-height: 150%;\n    }\n  }\n\n  .build-edited {\n    gap: 20px;\n\n    p {\n      color: ', ";\n\n      min-width: 100px;\n      font-size: 16px;\n\n      font-weight: 500;\n      line-height: 150%;\n    }\n  }\n\n  :hover {\n    background: ", ";\n\n    p {\n      color: ", ";\n    }\n  }\n"]);
            return SingleBuilds_templateObject = function() {
                return n
            }
            ,
            n
        }
        let b = r.default.div.withConfig({
            componentId: "sc-94bf9fc7-0"
        })(SingleBuilds_templateObject(), n => {
            let {theme: e} = n;
            return e.colors.text.primary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.primary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.primary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.background.grey.secondary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.accent.blue
        }
        );
        var builds_SingleBuilds = function(n) {
            let {username: e, build: t, buildTheme: i, formate: r, uid: o, setUserBuilds: a, setShowTrashMessage: c} = n
              , [d,u] = (0,
            s.useState)(!1)
              , [h,x] = (0,
            s.useState)(!1);
            async function removeBuild() {
                let n = t.id
                  , e = await deleteBuild({
                    uid: o,
                    buildId: n
                });
                200 === e.status && (x(!1),
                a(e => e.filter(e => e.id !== n)),
                c(!0))
            }
            return (0,
            l.jsxs)(l.Fragment, {
                children: [h && (0,
                l.jsx)(builds_ConfirmBuildDeletion, {
                    setShowDeleteForm: x,
                    title: t.title === t.slugTitle ? i.title : t.title.title,
                    type: i.internalName,
                    imgLink: i.logo,
                    removeBuild: removeBuild
                }), (0,
                l.jsx)(p(), {
                    href: "/@".concat(e, "/build/").concat(t.slugTitle),
                    legacyBehavior: !0,
                    style: {
                        all: "unset"
                    },
                    children: (0,
                    l.jsxs)(b, {
                        className: "nes-pointer",
                        children: [(0,
                        l.jsx)("div", {
                            className: "build-name",
                            children: (0,
                            l.jsx)("p", {
                                children: t.title === t.slugTitle ? i.title : t.title.title
                            })
                        }), (0,
                        l.jsxs)("div", {
                            className: "build-env",
                            children: [(0,
                            l.jsx)("img", {
                                src: i.logo,
                                alt: "logo"
                            }), (0,
                            l.jsx)("p", {
                                children: i.title
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "build-edited",
                            children: [(0,
                            l.jsx)("p", {
                                children: r
                            }), (0,
                            l.jsxs)("svg", {
                                className: "nes-pointer",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "25",
                                height: "24",
                                viewBox: "0 0 25 24",
                                fill: "none",
                                onClick: n => {
                                    n.stopPropagation(),
                                    x(!0)
                                }
                                ,
                                children: [(0,
                                l.jsx)("path", {
                                    d: "M4.5 10H8.5V14H4.5V10Z",
                                    fill: "#94A3B8"
                                }), (0,
                                l.jsx)("path", {
                                    d: "M10.5 10H14.5V14H10.5V10Z",
                                    fill: "#94A3B8"
                                }), (0,
                                l.jsx)("path", {
                                    d: "M20.5 10H16.5V14H20.5V10Z",
                                    fill: "#94A3B8"
                                })]
                            })]
                        })]
                    })
                }, t)]
            })
        }
          , j = t(86961)
          , y = t(20759)
          , w = t(11163)
          , v = t(62286)
          , _ = t.n(v);
        function NoBuildsCta_templateObject() {
            let n = (0,
            i._)(["\n  padding: 64px;\n  background: ", ';\n  font-family: "Mulish", sans-serif;\n\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  .cta-inner-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .image-container {\n      img {\n        width: 178.5px;\n        height: auto;\n      }\n    }\n  }\n\n  .cta-copy {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 24px;\n\n    .inner-cta-text {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n\n      .cta-title {\n        color: ', ";\n        text-align: center;\n\n        font-size: 20px;\n        font-weight: 700;\n        line-height: 120%;\n      }\n\n      .description {\n        color: ", ";\n\n        text-align: center;\n\n        font-size: 16px;\n\n        font-weight: 500;\n        line-height: 150%;\n\n        a {\n          color: ", ";\n\n          font-size: 16px;\n          font-style: normal;\n          font-weight: 500;\n          line-height: 150%;\n          text-decoration-line: underline;\n          text-decoration-style: solid;\n          text-decoration-skip-ink: auto;\n          text-decoration-thickness: auto;\n          text-underline-offset: auto;\n          text-underline-position: from-font;\n        }\n      }\n    }\n  }\n"]);
            return NoBuildsCta_templateObject = function() {
                return n
            }
            ,
            n
        }
        let B = (0,
        r.default)(y.Z).withConfig({
            componentId: "sc-30874baf-0"
        })(NoBuildsCta_templateObject(), n => {
            let {theme: e} = n;
            return e.colors.background.grey.secondary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.primary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.secondary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.accent.blue
        }
        );
        var builds_NoBuildsCta = function(n) {
            let {isDark: e, setShowEditorSelector: t} = n
              , i = (0,
            w.useRouter)()
              , r = _().get().codedextoken || "";
            return (0,
            l.jsxs)(B, {
                borderColor: e ? "475569" : "CBD5E1",
                children: [(0,
                l.jsx)("div", {
                    className: "cta-inner-container",
                    children: (0,
                    l.jsx)("div", {
                        className: "image-container",
                        children: (0,
                        l.jsx)("img", {
                            src: "/images/character_gifs/ea3ChSv.gif",
                            alt: "image"
                        })
                    })
                }), (0,
                l.jsxs)("div", {
                    className: "cta-copy",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "inner-cta-text",
                        children: [(0,
                        l.jsx)("p", {
                            className: "cta-title",
                            children: "Build right here on Cod\xe9dex"
                        }), (0,
                        l.jsxs)("p", {
                            className: "description",
                            children: ["Practice what you learn, create code snippets, and ", (0,
                            l.jsx)("br", {}), " build new projects. Looking for inspiration? Explore ", (0,
                            l.jsx)("br", {}), "our ", (0,
                            l.jsx)("a", {
                                href: "/projects",
                                children: "project tutorials"
                            }), "!"]
                        })]
                    }), (0,
                    l.jsx)(h.Z, {
                        variant: "subtle",
                        onClick: () => r ? t(n => n += 1) : i.push("/signup"),
                        children: "Create a Build"
                    })]
                })]
            })
        }
          , N = t(85673)
          , k = t(24483);
        function builds_templateObject() {
            let n = (0,
            i._)(["\n  margin-top: 3.9rem;\n  display: flex;\n  justify-content: center;\n  background: ", ";\n  margin-bottom: -3rem;\n  min-height: calc(100vh - 3.9rem);\n  height: fit-content;\n\n  p,\n  h2 {\n    margin: 0px;\n  }\n\n  .inner-container {\n    margin-top: 48px;\n    width: 780px;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n\n    .top-bar {\n      display: flex;\n      justify-content: space-between;\n\n      h2 {\n        color: ", ';\n\n        font-family: "PixelGridM";\n\n        font-size: 24px;\n\n        font-weight: 700;\n        line-height: 140%;\n        letter-spacing: 0.72px;\n      }\n\n      button {\n        svg {\n          margin-top: -4.5px;\n          line-height: 1;\n\n          filter: ', ';\n        }\n\n        span {\n          margin-left: 8px;\n        }\n      }\n    }\n\n    .builds-list {\n      font-family: "Mulish", sans-serif;\n      display: flex;\n      flex-direction: column;\n      gap: 13px;\n\n      .labels {\n        padding: 16px;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 20;\n\n        border-bottom: 2px solid ', ";\n\n        P {\n          color: ", ";\n\n          font-size: 12px;\n          font-style: normal;\n          font-weight: 600;\n          line-height: 150%; /* 18px */\n          letter-spacing: 1.68px;\n          text-transform: uppercase;\n        }\n      }\n    }\n  }\n"]);
            return builds_templateObject = function() {
                return n
            }
            ,
            n
        }
        let C = r.default.div.withConfig({
            componentId: "sc-a4a8dab2-0"
        })(builds_templateObject(), n => {
            let {theme: e} = n;
            return e.colors.background.grey.primary
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.primary
        }
        , n => {
            let {theme: e} = n;
            return e.mode,
            "drop-shadow(0px 2px 0px #0080D4)"
        }
        , n => {
            let {theme: e} = n;
            return e.colors.border.grey.light
        }
        , n => {
            let {theme: e} = n;
            return e.colors.text.secondary
        }
        );
        var S = !0
          , builds = function() {
            let n = (0,
            w.useRouter)()
              , e = _().get().codedextoken || ""
              , t = (0,
            o.v9)(f.o4) || "dark"
              , i = (0,
            o.v9)(f.f8)
              , r = (0,
            o.v9)(f.zr)
              , [c,d] = (0,
            s.useState)(0)
              , [u,p] = (0,
            s.useState)([])
              , x = (0,
            o.v9)(N.uA)
              , [m,g] = (0,
            s.useState)(!1)
              , [b,y] = (0,
            s.useState)(!0);
            return ((0,
            s.useEffect)( () => {
                (async function() {
                    try {
                        let n = await getBuilds({
                            uid: i
                        });
                        n && (p(n),
                        y(!1))
                    } catch (n) {
                        console.error("Error while fetching user builds:", n)
                    }
                }
                )()
            }
            , [i]),
            (0,
            s.useEffect)( () => {
                if (m) {
                    let n = setTimeout( () => {
                        g(!1)
                    }
                    , 3e3);
                    return () => clearTimeout(n)
                }
            }
            , [m]),
            b) ? (0,
            l.jsx)("div", {
                style: {
                    height: "100vh",
                    width: "100%"
                },
                children: (0,
                l.jsx)(a.Z, {
                    showBuildPopup: 0
                })
            }) : (0,
            l.jsxs)("div", {
                style: {
                    height: "100vh",
                    width: "100%"
                },
                children: [(0,
                l.jsx)(a.Z, {
                    showBuildPopup: 0
                }), (0,
                l.jsx)(k.Z, {
                    showEditorSelector: c,
                    setShowEditorSelector: d
                }), (0,
                l.jsx)(C, {
                    children: (0,
                    l.jsxs)("div", {
                        className: "inner-container",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "top-bar",
                            children: [(0,
                            l.jsx)("h2", {
                                children: "My Builds"
                            }), (0,
                            l.jsxs)(h.Z, {
                                size: "small",
                                onClick: () => e ? d(n => n += 1) : n.push("/signup"),
                                children: [(0,
                                l.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "21",
                                    height: "20",
                                    viewBox: "0 0 21 20",
                                    fill: "none",
                                    children: (0,
                                    l.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M9.66634 3.33325H11.333V4.99992V9.16659H17.1663V10.8333H11.333V14.9999V16.6666H9.66634V14.9999V10.8333H3.83301V9.16659H9.66634V4.99992V3.33325Z",
                                        fill: "white"
                                    })
                                }), (0,
                                l.jsx)("span", {
                                    children: "New Builds"
                                })]
                            })]
                        }), 0 === u.length && (0,
                        l.jsx)(builds_NoBuildsCta, {
                            isDark: "dark" === t,
                            setShowEditorSelector: d
                        }), 0 != u.length && (0,
                        l.jsxs)("div", {
                            className: "builds-list",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "labels",
                                children: [(0,
                                l.jsx)("p", {
                                    children: "BUILD NAME"
                                }), (0,
                                l.jsx)("p", {
                                    children: "ENVIRONMENT"
                                }), (0,
                                l.jsx)("p", {
                                    children: "LAST EDITED"
                                })]
                            }), (0,
                            l.jsx)("div", {
                                className: "builds",
                                children: u.map(n => {
                                    let e = new Date(1e3 * n.updated.seconds)
                                      , t = e.toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                    });
                                    return x[n.type] ? (0,
                                    l.jsx)(builds_SingleBuilds, {
                                        username: r,
                                        build: n,
                                        buildTheme: x[n.type],
                                        formate: t,
                                        uid: i,
                                        setUserBuilds: p,
                                        setShowTrashMessage: g
                                    }, n) : null
                                }
                                )
                            })]
                        })]
                    })
                }), (0,
                l.jsx)(j.Z, {
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
        return n(n.s = 72815)
    }),
    _N_E = n.O()
}
]);
