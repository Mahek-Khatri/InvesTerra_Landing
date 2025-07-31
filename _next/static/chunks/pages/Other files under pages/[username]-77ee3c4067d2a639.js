(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6280], {
    31932: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[username]", function() {
            return i(85195)
        }
        ])
    },
    39741: function(e, t, i) {
        "use strict";
        var c = i(82729)
          , d = i(85893)
          , p = i(19521)
          , m = i(9473)
          , h = i(67294)
          , u = i(5434)
          , g = i(58533)
          , f = i(25670)
          , x = i(41664)
          , b = i.n(x)
          , v = i(43493)
          , j = i(26245);
        function _templateObject() {
            let e = (0,
            c._)(["\n    from {\n        transform: scale(0.8);\n        visibility: hidden;\n        opacity: 0;\n    } to {\n        transform: scale(1);\n        visibility: visible;\n        opacity: 1;\n    }\n"]);
            return _templateObject = function() {
                return e
            }
            ,
            e
        }
        function _templateObject1() {
            let e = (0,
            c._)(['\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  /* align-items: center; */\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  color: whitesmoke;\n  font-family: "Work Sans", sans-serif;\n\n  .spinning-loader {\n    margin-top: -5rem;\n  }\n\n  .container {\n    position: relative;\n    border: 2px solid\n      ', ";\n    background: ", ";\n    color: ", ";\n    animation: ", " 0.2s ease-in;\n    width: 450px;\n    max-width: 95vw;\n    /* height: fit-content; */\n    max-height: 550px;\n    border-radius: 10px;\n    margin-top: 10rem;\n    transition-duration: 1s;\n    padding-bottom: 0.5rem;\n\n    .close-btn {\n      all: unset;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      font-size: 25px;\n      line-height: 0.8;\n      transition-duration: 0.2s;\n      padding: 0.2rem;\n      color: ", ";\n\n      :hover {\n        background-color: hsla(61, 6%, 90%, 0.3);\n        border-radius: 50%;\n        cursor:\n          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)\n            14 0,\n          pointer;\n      }\n    }\n\n    h2 {\n      padding: 1rem;\n      padding-top: 0.75rem;\n      margin-bottom: -0.25rem;\n      //margin-bottom: 0rem;\n      font-size: 18px;\n    }\n\n    .users {\n      display: flex;\n      flex-direction: column;\n      overflow-y: auto;\n      max-height: 400px;\n\n      ::-webkit-scrollbar,\n      ::-webkit-scrollbar-thumb {\n        width: 8px;\n      }\n\n      .single-user {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        padding: 0.5rem 1rem 0.5rem 1rem;\n\n        img {\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n        }\n\n        .single-user-info {\n          line-height: 1.2;\n          p {\n            margin: 0px;\n          }\n\n          .name {\n            font-weight: 600;\n          }\n\n          .username {\n            font-size: 14px;\n            color: #808080;\n          }\n        }\n\n        :hover {\n          transition-duration: 0.2s;\n          background: ", ";\n        }\n      }\n\n      .follow-user-btn {\n        display: flex;\n        align-items: center;\n\n        button {\n          background: none;\n          border: none;\n          outline: none;\n          display: flex;\n          width: fit-content;\n          font-weight: 500;\n          border-radius: 20px;\n          font-size: 13px;\n        }\n\n        .follow {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background-color: rgba(30, 156, 237, 0.6);\n          color: rgba(255, 255, 255, 0.87);\n          border: 1px solid rgba(30, 156, 237, 0.7);\n          transition-duration: 0.2s;\n\n          :hover {\n            transition-duration: 0.2s;\n            background-color: rgba(30, 156, 237, 0.8);\n            border: 1px solid rgba(30, 156, 237, 1);\n          }\n        }\n\n        .followed {\n          background-color: none;\n          color: rgba(255, 255, 255, 0.87);\n          border: 1px solid rgba(30, 156, 237, 0.3);\n          color: rgba(128, 128, 128, 1);\n          font-weight: 400;\n          transition-duration: 0.2s;\n        }\n      }\n    }\n  }\n"]);
            return _templateObject1 = function() {
                return e
            }
            ,
            e
        }
        let w = (0,
        p.keyframes)(_templateObject())
          , k = p.default.div.withConfig({
            componentId: "sc-34515384-0"
        })(_templateObject1(), e => "dark" === e.theme.mode ? "rgba(36, 76, 115, 1)" : "#DADADA", e => "dark" === e.theme.mode ? "#1d2332" : "#FFFFFF", e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", w, e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", e => "dark" === e.theme.mode ? "#22293a" : "#f7f7f7");
        t.Z = function(e) {
            let {authorUid: t, setShowViewFollow: i, whichFollow: c, title: p, following: x, setFollowing: w} = e
              , y = (0,
            m.v9)(j.f8)
              , A = (0,
            h.useRef)(null)
              , [C,F] = (0,
            h.useState)([])
              , [S,E] = (0,
            h.useState)(0)
              , [N,P] = (0,
            h.useState)(!0);
            (0,
            h.useEffect)( () => {
                async function getFollow() {
                    try {
                        let e = await fetch("/api/community/viewFollow", {
                            method: "POST",
                            body: JSON.stringify({
                                whichFollow: c,
                                uid: t,
                                page: 0
                            })
                        })
                          , i = await e.json()
                          , d = i.users;
                        F(d),
                        (null == d ? void 0 : d.length) < 9 && P(!1)
                    } catch (e) {
                        console.log(e)
                    }
                }
                t && getFollow()
            }
            , [t, c]);
            let _ = (0,
            h.useCallback)(async () => {
                try {
                    let e = S + 1
                      , i = await fetch("/api/community/viewFollow", {
                        method: "POST",
                        body: JSON.stringify({
                            whichFollow: c,
                            uid: t,
                            page: e
                        })
                    })
                      , d = await i.json()
                      , p = d.users;
                    0 != p.length && (E(e),
                    F(e => [...e, ...p])),
                    p.length < 2 && P(!1)
                } catch (e) {
                    P(!1),
                    console.error("Error fetching more posts:", e)
                }
            }
            , [S, c, t]);
            return (0,
            d.jsx)(k, {
                onClick: e => {
                    e.stopPropagation(),
                    i(!1)
                }
                ,
                children: (0,
                d.jsxs)("div", {
                    className: "container",
                    ref: A,
                    id: "like-by-scroll",
                    style: {
                        height: 0 != C.length ? "fit-content" : "300px"
                    },
                    children: [(0,
                    d.jsx)("button", {
                        className: "close-btn nes-pointer",
                        onClick: e => {
                            e.stopPropagation(),
                            i(!1)
                        }
                        ,
                        children: (0,
                        d.jsx)(u.lTq, {})
                    }), (0,
                    d.jsx)("h2", {
                        children: p
                    }), (0,
                    d.jsx)("div", {
                        className: "users",
                        id: "users",
                        style: {
                            height: 0 != C.length ? "fit-content" : "280px"
                        },
                        children: (0,
                        d.jsx)(g.Z, {
                            dataLength: C ? C.length : 0,
                            next: _,
                            hasMore: N,
                            loader: (0,
                            d.jsx)(f.Z, {}),
                            scrollableTarget: "users",
                            children: C && C.map(e => (0,
                            d.jsx)(b(), {
                                href: "/@".concat(null == e ? void 0 : e.username),
                                legacyBehavior: !0,
                                children: (0,
                                d.jsxs)("div", {
                                    className: "single-user nes-pointer",
                                    children: [(0,
                                    d.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem"
                                        },
                                        children: [(0,
                                        d.jsx)("img", {
                                            src: null == e ? void 0 : e.photoURL,
                                            alt: "liked user image"
                                        }), (0,
                                        d.jsxs)("div", {
                                            className: "single-user-info",
                                            children: [(0,
                                            d.jsx)("p", {
                                                className: "name",
                                                children: null == e ? void 0 : e.name
                                            }), (0,
                                            d.jsxs)("p", {
                                                className: "username",
                                                children: ["@", null == e ? void 0 : e.username]
                                            })]
                                        })]
                                    }), y != e.uid && (0,
                                    d.jsx)("div", {
                                        onClick: e => e.stopPropagation(),
                                        children: (0,
                                        d.jsx)(v.Z, {
                                            following: x,
                                            userToFollowUid: e.uid,
                                            setFollowing: w
                                        })
                                    })]
                                })
                            }, null == e ? void 0 : e.id))
                        })
                    })]
                })
            })
        }
    },
    3816: function(e, t, i) {
        "use strict";
        var c = i(82729)
          , d = i(85893)
          , p = i(19521);
        function _templateObject() {
            let e = (0,
            c._)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: #0f1524;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    width: 250px;\n    height: auto;\n  }\n\n  .logo-container {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 40px;\n      height: auto;\n      margin-right: 1rem;\n      animation-name: spin;\n      animation-duration: 0.9s;\n      animation-iteration-count: 1;\n      animation-timing-function: ease-in-out;\n    }\n\n    h1 {\n      color: ", ";\n      padding: 0px;\n      margin: 0px;\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotateY(0);\n    }\n    50% {\n      transform: rotateY(1turn) translateY(-20px);\n    }\n    100% {\n      transform: rotateY(1turn) translateY(0px);\n    }\n  }\n"]);
            return _templateObject = function() {
                return e
            }
            ,
            e
        }
        let m = p.default.div.withConfig({
            componentId: "sc-96e6fc8e-0"
        })(_templateObject(), e => e.theme.colors.text1);
        t.Z = function() {
            return (0,
            d.jsx)(m, {
                children: (0,
                d.jsx)("div", {
                    className: "logo-container",
                    children: (0,
                    d.jsx)("img", {
                        src: "/images/coin-cropped.png",
                        alt: "codedex logo"
                    })
                })
            })
        }
    },
    90658: function(e, t, i) {
        "use strict";
        function getSocials(e) {
            let t = [];
            return Object.entries(e).map(e => {
                e[1] && ("youtube" === e[0] && t.push({
                    socialImage: e[0],
                    socialHandle: "https://www.youtube.com/@".concat(e[1]),
                    type: "youtube"
                }),
                "instagram" === e[0] && t.push({
                    socialImage: e[0],
                    socialHandle: "https://www.instagram.com/".concat(e[1], "/"),
                    type: "instagram"
                }),
                "twitch" === e[0] && t.push({
                    socialImage: e[0],
                    socialHandle: "https://www.twitch.tv/".concat(e[1]),
                    type: "twitch"
                }),
                "tiktok" === e[0] && t.push({
                    socialImage: e[0],
                    socialHandle: "https://www.tiktok.com/@".concat(e[1]),
                    type: "tiktok"
                }),
                "twitter" === e[0] && t.push({
                    socialImage: e[0],
                    socialHandle: "https://twitter.com/".concat(e[1]),
                    type: "twitter"
                }),
                "github" === e[0] && t.push({
                    socialImage: e[0],
                    socialHandle: "https://github.com/".concat(e[1]),
                    type: "github"
                }),
                "linkedin" === e[0] && t.push({
                    socialImage: e[0],
                    socialHandle: "https://linkedin.com/in/".concat(e[1]),
                    type: "linkedin"
                }))
            }
            ),
            t
        }
        function sortSocials(e) {
            let t = [];
            for (let i of ["twitter", "instagram", "github", "youtube", "tiktok", "twitch", "linkedin"]) {
                let c = e.find(e => i === e.type);
                c && t.push(c)
            }
            return t
        }
        i.d(t, {
            X: function() {
                return sortSocials
            },
            n: function() {
                return getSocials
            }
        })
    },
    85195: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            __N_SSG: function() {
                return eF
            },
            default: function() {
                return _username_
            }
        });
        var c = i(82729)
          , d = i(85893)
          , p = i(19521)
          , m = i(9008)
          , h = i.n(m)
          , u = i(9473)
          , g = i(62069)
          , f = i(71706)
          , x = i(67294)
          , b = i(89583)
          , v = i(47010)
          , j = i(34150)
          , w = i(53971)
          , k = i(83584)
          , y = i(26245)
          , A = i(11163)
          , profile_ProfileFollowBtn = function(e) {
            let {uid: t, accountUid: i, setFollowersCount: c} = e
              , [p,m] = (0,
            x.useState)([])
              , [h,g] = (0,
            x.useState)(!1)
              , f = (0,
            u.v9)(y.ot)
              , b = (0,
            A.useRouter)();
            (0,
            x.useEffect)( () => {
                let e = sessionStorage.getItem("userFollowing");
                async function getUserFollowers() {
                    try {
                        let e = await fetch("/api/community/getFollowing", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                uid: t
                            })
                        });
                        if (!e.ok)
                            return;
                        let i = await e.json();
                        m(i.userFollowing),
                        sessionStorage.setItem("userFollowing", JSON.stringify(i.userFollowing))
                    } catch (e) {
                        console.error("Error fetching user followers", e)
                    }
                }
                t && (e && void 0 !== e ? m(JSON.parse(e) || []) : getUserFollowers())
            }
            , [t]);
            let C = (0,
            x.useCallback)(async function() {
                try {
                    if (!f)
                        return b.push("/login");
                    g(!0);
                    let e = await (0,
                    j.P)({
                        userId: t,
                        accountToFollowUid: i
                    });
                    if (200 === e.status) {
                        let e = [...p, i];
                        m(e),
                        sessionStorage.setItem("userFollowing", JSON.stringify(e)),
                        g(!1),
                        c(e => e + 1);
                        try {
                            (0,
                            k.l)("follow", i, t)
                        } catch (e) {
                            console.error("Error creating follow notification: ", e)
                        }
                    }
                } catch (e) {}
            }, [f, b, t, i, p, c])
              , F = (0,
            x.useCallback)(async function() {
                if (!h) {
                    g(!0);
                    try {
                        let e = await (0,
                        w.F)({
                            userId: t,
                            accountToFollowUid: i
                        });
                        if (200 === e.status) {
                            let e = p.filter(e => e != i);
                            m(e),
                            c(e => e - 1),
                            sessionStorage.setItem("userFollowing", JSON.stringify(e))
                        }
                    } catch (e) {} finally {
                        g(!1)
                    }
                }
            }, [i, h, p, c, t]);
            return (0,
            d.jsx)("div", {
                className: "follow-btn-container",
                children: p.includes(i) ? (0,
                d.jsx)("button", {
                    className: "nes-pointer",
                    onClick: () => F(),
                    children: "Following"
                }) : (0,
                d.jsxs)("button", {
                    className: "nes-pointer",
                    onClick: () => C(),
                    children: [(0,
                    d.jsx)("span", {
                        children: (0,
                        d.jsx)("img", {
                            src: "/images/profile/follow-icon.svg",
                            alt: "follow icon"
                        })
                    }), h ? (0,
                    d.jsx)(v.Z, {
                        size: 5
                    }) : "Follow"]
                })
            })
        }
          , C = i(39828)
          , F = i(92369)
          , S = i(86650);
        async function updateBanner(e) {
            let {uid: t, imageFile: i} = e
              , {firestore: c} = (0,
            F.UM)();
            if ((0,
            C.qs)(c),
            !t || !i)
                throw Error("uid or image missing.");
            try {
                let e = (0,
                S.cF)()
                  , d = (0,
                S.iH)(e, "profile-banner/".concat(t, "/").concat(i.name));
                await (0,
                S.KV)(d, i);
                let p = await (0,
                S.Jt)(d)
                  , m = (0,
                C.hJ)(c, "users", t, "profile-data")
                  , h = (0,
                C.JU)(m, "profile-data")
                  , u = await (0,
                C.QT)(h)
                  , g = u.exists() ? u.data().bannerImage : null;
                if (g) {
                    let t = (0,
                    S.iH)(e, g);
                    try {
                        await (0,
                        S.oq)(t)
                    } catch (e) {
                        if ("storage/object-not-found" === e.code)
                            console.log("Object not found, continuing...");
                        else
                            throw e
                    }
                }
                return await (0,
                C.pl)(h, {
                    bannerImage: p
                }, {
                    merge: !0
                }),
                {
                    status: 200
                }
            } catch (e) {
                return {
                    status: 500,
                    error: e
                }
            }
        }
        var E = i(21582)
          , N = i(5434)
          , P = i(33846)
          , _ = i(76e3);
        function _templateObject() {
            let e = (0,
            c._)(["\n    from {\n        transform: scale(0.8);\n        visibility: hidden;\n        opacity: 0;\n    } to {\n        transform: scale(1);\n        visibility: visible;\n        opacity: 1;\n    }\n"]);
            return _templateObject = function() {
                return e
            }
            ,
            e
        }
        function _templateObject1() {
            let e = (0,
            c._)(['\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* align-items: center; */\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  color: whitesmoke;\n  font-family: "Work Sans", sans-serif;\n\n  .container {\n    position: relative;\n    border: 3px solid ', ";\n    background-color: ", ";\n    animation: ", " 0.2s ease-in;\n    width: 700px;\n    max-width: 95%;\n    height: fit-content;\n    max-height: 95%;\n    color: ", ";\n    padding: 1rem;\n    margin-bottom: 15rem;\n    border-radius: 25px;\n    padding-top: 3rem;\n\n    .close-btn {\n      all: unset;\n      position: absolute;\n      right: 10px;\n      top: 5px;\n      font-size: 30px;\n      line-height: 0.8;\n      transition-duration: 0.2s;\n      padding: 0.2rem;\n      padding-top: 0px;\n\n      :hover {\n        background-color: hsla(61, 6%, 90%, 0.3);\n        border-radius: 50%;\n        cursor:\n          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)\n            14 0,\n          pointer;\n      }\n    }\n\n    .image-preview {\n      margin-bottom: 2rem;\n      margin-top: 0.5rem;\n      height: 86px;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        border-radius: 10px;\n      }\n    }\n\n    .button-container {\n      margin-top: 1rem;\n      display: flex;\n      justify-content: end;\n      gap: 1rem;\n\n      button {\n        padding: 5px 10px;\n        border: 2px solid ", ";\n        background-color: ", ";\n        border-radius: 25px;\n        font-weight: 500;\n        color: ", ";\n\n        outline: none;\n      }\n\n      .pre-dropzone {\n        background: rgba(255, 255, 255, 0.87);\n        color: black;\n      }\n    }\n  }\n"]);
            return _templateObject1 = function() {
                return e
            }
            ,
            e
        }
        let O = (0,
        p.keyframes)(_templateObject())
          , B = p.default.div.withConfig({
            componentId: "sc-c27c7f88-0"
        })(_templateObject1(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, O, e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", e => e.theme.colors.profileBorder, e => e.theme.colors.profileBorder, e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "#333333");
        var profile_UpdateBanner = function(e) {
            let {uid: t, setShowUpdateBanner: i, image: c, setImage: p, defaultImage: m, username: h} = e
              , [u,g] = (0,
            x.useState)([])
              , f = (0,
            x.useRef)(null)
              , [b,j] = (0,
            x.useState)(!1);
            (0,
            x.useEffect)( () => {
                0 != u.length && p(URL.createObjectURL(u[0]))
            }
            , [u, p]);
            let w = (0,
            x.useCallback)(e => {
                g(e)
            }
            , [])
              , {getRootProps: k, getInputProps: y, isDragActive: A, acceptedFiles: C} = (0,
            E.uI)({
                onDrop: w,
                multiple: !1,
                accept: {
                    "image/jpeg": [],
                    "image/png": [],
                    ".gif": []
                }
            });
            async function updateBannerImage() {
                try {
                    if (0 == u.length)
                        return;
                    j(!0);
                    let e = await updateBanner({
                        uid: t,
                        imageFile: u[0]
                    });
                    200 === e.status ? (i(!1),
                    j(!1),
                    (0,
                    _.yD)({
                        username: h
                    })) : (console.log("unable to update image"),
                    j(!1))
                } catch (e) {
                    console.log(e)
                }
            }
            return (0,
            P.Z)(f, () => i(!1)),
            (0,
            d.jsx)(B, {
                children: (0,
                d.jsxs)("div", {
                    className: "container",
                    ref: f,
                    children: [(0,
                    d.jsx)("button", {
                        className: "close-btn nes-pointer",
                        children: (0,
                        d.jsx)(N.lTq, {
                            size: 20,
                            onClick: () => {
                                p(m),
                                i(!1)
                            }
                        })
                    }), (0,
                    d.jsx)("div", {
                        className: "image-preview",
                        children: 0 != u.length ? (0,
                        d.jsx)("img", {
                            src: URL.createObjectURL(u[0]),
                            alt: "user updated background",
                            className: "background"
                        }) : (0,
                        d.jsx)("img", {
                            src: c,
                            alt: "user profile background",
                            className: "background"
                        })
                    }), (0,
                    d.jsxs)("div", {
                        className: "button-container",
                        children: [(0,
                        d.jsxs)("div", {
                            className: "dropzone nes-pointer",
                            ...k(),
                            children: [(0,
                            d.jsx)("input", {
                                ...y()
                            }), (0,
                            d.jsx)("button", {
                                className: "pre-dropzone",
                                children: "Change"
                            })]
                        }), (0,
                        d.jsx)("button", {
                            className: "".concat(0 != u.length && "nes-pointer"),
                            style: {
                                background: 0 != u.length ? "#1E9CED" : "",
                                color: 0 != u.length ? "rgba(255, 255, 255, 0.87)" : "",
                                opacity: 0 != u.length ? "1" : ".5"
                            },
                            onClick: () => updateBannerImage(),
                            children: b ? (0,
                            d.jsx)(v.Z, {
                                color: "#4AB1FF",
                                size: 9
                            }) : "Save"
                        })]
                    })]
                })
            })
        }
          , I = i(39741)
          , T = i(73857)
          , M = i(41664)
          , z = i.n(M)
          , U = i(84849);
        function ProfileBanner_templateObject() {
            let e = (0,
            c._)(["\n  ", " {\n    border: 3px solid ", ";\n    background-color: ", ";\n    border-radius: 25px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-top: none;\n    width: 100%;\n    min-height: 200px;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n\n    .profile-background {\n      height: 100px;\n      position: relative;\n\n      .background {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        z-index: 1;\n      }\n\n      .skeleton {\n        position: absolute;\n        height: 100%;\n      }\n\n      .profile-image-container {\n        z-index: 2;\n        position: absolute;\n        height: 90px;\n        width: 90px;\n        border-radius: 50%;\n        bottom: -23px;\n        left: 30px;\n        border: 3px solid ", ";\n        overflow: hidden;\n        /* background-color: #e4e5e7; */\n        .profile-picture {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          object-fit: cover;\n        }\n      }\n\n      .update-banner-btn {\n        background: whitesmoke;\n        padding: 5px;\n        border-radius: 50%;\n        width: 35px;\n        height: 35px;\n        position: absolute;\n        right: 15px;\n        top: 15px;\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        opacity: 0.3;\n        transition-duration: 0.2s;\n\n        :hover {\n          opacity: 1;\n          transition-duration: 0.2s;\n        }\n      }\n    }\n\n    .banner-stats {\n      flex: 1;\n      margin: auto 30px;\n      margin-top: 35px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: start;\n\n      color: ", ';\n\n      p {\n        margin: 0px;\n        line-height: 1;\n      }\n\n      .name-num {\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 20px;\n\n        .full-name {\n          font-size: 14px;\n          margin: 0px;\n        }\n\n        .username {\n          margin-top: 5px;\n          font-family: "Work Sans", sans-serif;\n          font-weight: 500;\n          font-size: 14px;\n          color: ', ';\n        }\n\n        .follow-num {\n          margin-top: 15px;\n          font-size: 14px;\n          font-family: "Work Sans", sans-serif;\n          display: flex;\n          gap: 1rem;\n\n          p {\n            font-weight: 700;\n\n            span {\n              font-weight: 500;\n              color: ', ';\n\n              //:hover {\n              //border-bottom: 1px solid\n              //{(props) => (props.theme.mode === "dark" ? "#4a5b80" : "#333333")};\n              //}\n            }\n          }\n        }\n      }\n\n      .follow-btn-container {\n        border: 2px solid ', ';\n        background-color: #e59400;\n        border-radius: 13px;\n        font-family: "Work Sans", sans-serif;\n        height: 40px;\n        width: 100%;\n        overflow: hidden;\n        margin-bottom: 1rem;\n\n        cursor:\n          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)\n            14 0,\n          pointer;\n\n        button {\n          all: unset;\n          background-color: #f7d51d;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          gap: 4px;\n          height: 95%;\n          width: 99.3%;\n          font-size: 12px;\n          border-radius: 10px;\n          color: black;\n          font-weight: 600;\n          line-height: 1;\n\n          img {\n            width: 16px;\n          }\n        }\n      }\n\n      .edit-profile-btn {\n        transform: scale(0.9);\n        margin-right: 0;\n        margin-bottom: 13px;\n        opacity: 0.8;\n        transform: 0.2s;\n        width: 100%;\n\n        button {\n          width: 100%;\n        }\n\n        :hover {\n          opacity: 1;\n        }\n      }\n    }\n  }\n\n  ', " {\n    min-height: 250px;\n\n    .profile-background {\n      height: 150px;\n\n      .profile-image-container {\n        height: 120px;\n        width: 120px;\n      }\n    }\n\n    .banner-stats {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      position: relative;\n\n      .follow-btn-container {\n        width: 95px;\n        margin-bottom: 0rem;\n\n        button {\n          height: 95%;\n          width: 98%;\n        }\n      }\n\n      .edit-profile-btn {\n        width: fit-content;\n        margin-right: -7px;\n        margin-bottom: -4px;\n\n        button {\n          width: 100%;\n        }\n      }\n    }\n  }\n\n  ", " {\n  }\n"]);
            return ProfileBanner_templateObject = function() {
                return e
            }
            ,
            e
        }
        let L = p.default.div.withConfig({
            componentId: "sc-893951e6-0"
        })(ProfileBanner_templateObject(), e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => e.theme.colors.profileBackground, e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", e => "dark" === e.theme.mode ? "#4a5b80" : "#333333", e => "dark" === e.theme.mode ? "#4a5b80" : "#333333", e => e.theme.colors.profileBorder, e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        , e => {
            let {theme: t} = e;
            return t.breakpoints.md
        }
        );
        var profile_ProfileBanner = function(e) {
            let {name: t, username: i, photoURL: c, followData: p, accountUid: m, bannerImage: h="/images/css/banner-v2.png", loading: g} = e
              , f = (0,
            u.v9)(y.o4) || "dark"
              , v = (0,
            u.v9)(y.f8)
              , [j,w] = (0,
            x.useState)(null == p ? void 0 : p.followersCount)
              , [k,A] = (0,
            x.useState)(!1)
              , [C,F] = (0,
            x.useState)([])
              , [S,E] = (0,
            x.useState)(!1)
              , [N,P] = (0,
            x.useState)("following")
              , [_,O] = (0,
            x.useState)(h);
            return (0,
            x.useEffect)( () => {
                O(h)
            }
            , [h]),
            (0,
            x.useEffect)( () => {
                let e = sessionStorage.getItem("userFollowing");
                async function getUserFollowers() {
                    let e = await fetch("/api/community/getFollowing", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            uid: v
                        })
                    })
                      , t = await e.json();
                    F(t.userFollowing),
                    sessionStorage.setItem("userFollowing", JSON.stringify(null == t ? void 0 : t.userFollowing))
                }
                v && (e && void 0 !== e ? F(JSON.parse(e) || []) : getUserFollowers())
            }
            , [m, v]),
            (0,
            d.jsxs)(d.Fragment, {
                children: [S && (0,
                d.jsx)(I.Z, {
                    authorUid: m,
                    setShowViewFollow: E,
                    whichFollow: N,
                    title: "following" == N ? "Following" : "Followers",
                    following: C,
                    setFollowing: F
                }), k && (0,
                d.jsx)(profile_UpdateBanner, {
                    uid: v,
                    setShowUpdateBanner: A,
                    image: _,
                    defaultImage: h,
                    setImage: O,
                    username: i
                }), (0,
                d.jsxs)(L, {
                    children: [(0,
                    d.jsxs)("div", {
                        className: "profile-background",
                        children: [g ? (0,
                        d.jsx)(U.Z, {
                            baseColor: "dark" === f ? "#0F172A" : "#F1F5F9",
                            highlightColor: "dark" === f ? "#10192e" : "#F8FAFC",
                            className: "skeleton"
                        }) : (0,
                        d.jsx)("img", {
                            src: _ || "/images/css/banner-v2.png",
                            alt: "user profile background",
                            className: "background"
                        }), (0,
                        d.jsx)("div", {
                            className: "profile-image-container",
                            children: g ? (0,
                            d.jsx)(U.Z, {
                                baseColor: "dark" === f ? "#0F172A" : "#F1F5F9",
                                highlightColor: "dark" === f ? "#10192e" : "#F8FAFC",
                                className: "skeleton"
                            }) : (0,
                            d.jsx)("img", {
                                src: c,
                                alt: "User profile picture",
                                className: "profile-picture"
                            })
                        }), v === m && (0,
                        d.jsx)("div", {
                            className: "update-banner-btn nes-pointer",
                            onClick: () => A(!k),
                            children: (0,
                            d.jsx)(b.tU3, {})
                        })]
                    }), (0,
                    d.jsxs)("div", {
                        className: "banner-stats",
                        children: [(0,
                        d.jsxs)("div", {
                            className: "name-num",
                            children: [(0,
                            d.jsx)("p", {
                                className: "full-name",
                                children: g ? (0,
                                d.jsx)(U.Z, {
                                    baseColor: "dark" === f ? "#0F172A" : "#F1F5F9",
                                    highlightColor: "dark" === f ? "#10192e" : "#F8FAFC",
                                    width: 150
                                }) : t
                            }), (0,
                            d.jsx)("p", {
                                className: "username",
                                children: g ? (0,
                                d.jsx)(U.Z, {
                                    baseColor: "dark" === f ? "#0F172A" : "#F1F5F9",
                                    highlightColor: "dark" === f ? "#10192e" : "#F8FAFC",
                                    width: 100
                                }) : "@".concat(i)
                            }), (0,
                            d.jsx)("div", {
                                className: "follow-num",
                                children: g ? (0,
                                d.jsx)(U.Z, {
                                    baseColor: "dark" === f ? "#0F172A" : "#F1F5F9",
                                    highlightColor: "dark" === f ? "#10192e" : "#F8FAFC",
                                    width: 200
                                }) : (0,
                                d.jsxs)(d.Fragment, {
                                    children: [(0,
                                    d.jsxs)("p", {
                                        onClick: () => {
                                            (null == p ? void 0 : p.followingCount) !== 0 && (E(!0),
                                            P("following"))
                                        }
                                        ,
                                        className: "nes-pointer",
                                        children: [null == p ? void 0 : p.followingCount, " ", (0,
                                        d.jsx)("span", {
                                            className: "nes-pointer",
                                            style: {
                                                cursor: (null == p ? void 0 : p.followingCount) === 0 && "default"
                                            },
                                            onClick: () => {}
                                            ,
                                            children: "following"
                                        })]
                                    }), (0,
                                    d.jsxs)("p", {
                                        onClick: () => {
                                            0 !== j && (E(!0),
                                            P("followers"))
                                        }
                                        ,
                                        className: "nes-pointer",
                                        children: [j, " ", (0,
                                        d.jsx)("span", {
                                            className: "nes-pointer",
                                            onClick: () => {}
                                            ,
                                            style: {
                                                cursor: 0 === j && "default"
                                            },
                                            children: "followers"
                                        })]
                                    })]
                                })
                            })]
                        }), v != m && (0,
                        d.jsx)(profile_ProfileFollowBtn, {
                            uid: v,
                            accountUid: m,
                            setFollowersCount: w
                        }), v === m && (0,
                        d.jsx)("div", {
                            className: "edit-profile-btn",
                            children: (0,
                            d.jsx)(z(), {
                                href: "/account",
                                style: {
                                    all: "unset"
                                },
                                children: (0,
                                d.jsx)(T.Z, {
                                    variant: "subtle",
                                    size: "small",
                                    children: "Edit Profile"
                                })
                            })
                        })]
                    })]
                })]
            })
        };
        function NoUser_templateObject() {
            let e = (0,
            c._)(["\n  margin-top: 3rem;\n  text-align: center;\n  color: ", ";\n\n  ", " {\n    h2 {\n      font-size: 20px;\n    }\n    h3 {\n      margin-top: 1rem;\n      font-size: 11px;\n    }\n\n    .nes-field {\n      display: flex;\n      justify-content: center;\n    }\n    input {\n      width: 300px;\n      margin-top: 3rem;\n    }\n\n    .nes-btn {\n      margin-top: 2rem;\n    }\n  }\n\n  ", " {\n    h2 {\n      font-size: 25px;\n    }\n\n    h3 {\n      font-size: 19px;\n    }\n\n    input {\n      width: 600px;\n    }\n  }\n"]);
            return NoUser_templateObject = function() {
                return e
            }
            ,
            e
        }
        let H = p.default.div.withConfig({
            componentId: "sc-440d4a14-0"
        })(NoUser_templateObject(), e => e.theme.colors.text1, e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        );
        var atoms_NoUser = function() {
            let[e,t] = (0,
            x.useState)("")
              , i = (0,
            A.useRouter)();
            return (0,
            d.jsxs)(H, {
                children: [(0,
                d.jsx)("h2", {
                    children: "Hmm… This user doesn't exist."
                }), (0,
                d.jsx)("h3", {
                    children: "Try searching for another user."
                }), (0,
                d.jsx)("div", {
                    className: "nes-field",
                    children: (0,
                    d.jsx)("input", {
                        type: "text",
                        id: "name_field",
                        className: "nes-input",
                        placeholder: "Search user",
                        onChange: e => t(e.target.value)
                    })
                }), e && (0,
                d.jsx)("a", {
                    className: "nes-btn",
                    href: "#",
                    onClick: () => (function(e) {
                        let t = "@".concat(e);
                        i.push(t),
                        i.reload()
                    }
                    )(e),
                    children: "Search"
                })]
            })
        }
          , D = i(85307)
          , W = i(90658);
        function Bio_templateObject() {
            let e = (0,
            c._)(["\n  .bio-container {\n    border: 2px solid ", ";\n    background-color: ", ";\n    min-height: 170px;\n    height: fit-content;\n    border-radius: 25px;\n    color: ", ';\n    padding: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n\n    p {\n      margin: 0px;\n    }\n\n    .rank {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      width: 100%;\n\n      img {\n        width: 35px;\n      }\n\n      p {\n        font-size: 13px;\n      }\n    }\n\n    .bio-text {\n      font-family: "Work Sans", sans-serif;\n      font-size: 14px;\n\n      p {\n        display: -webkit-box;\n        -webkit-line-clamp: 5;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n        color: #e8edff;\n        color: ', ';\n      }\n    }\n\n    .occupations {\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n\n      p {\n        font-family: "Work Sans", sans-serif;\n        display: flex;\n        gap: 7px;\n        font-size: 13px;\n        font-weight: 500;\n\n        img {\n          width: 12px;\n        }\n      }\n    }\n  }\n']);
            return Bio_templateObject = function() {
                return e
            }
            ,
            e
        }
        function Bio_templateObject1() {
            let e = (0,
            c._)(["\n  margin-left: -5px;\n  margin-bottom: -10px;\n  margin-top: 5px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));\n\n  li {\n    list-style: none;\n    transform: scale(0.7);\n    opacity: 0.7;\n    transition-duration: 0.2s;\n    flex-shrink: 0;\n\n    :hover {\n      transition-duration: 0.2s;\n      opacity: 1;\n      transform: scale(0.8);\n    }\n  }\n"]);
            return Bio_templateObject1 = function() {
                return e
            }
            ,
            e
        }
        let Y = p.default.div.withConfig({
            componentId: "sc-8bd70972-0"
        })(Bio_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => "dark" === e.theme.mode ? "#d6e3ff" : "#333333", e => "dark" === e.theme.mode ? "#e8edff" : "#333333")
          , X = p.default.div.withConfig({
            componentId: "sc-8bd70972-1"
        })(Bio_templateObject1())
          , R = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var profile_Bio = function(e) {
            let {TopBarStyles: t, totalXp: i, bioText: c, location: p, education: m, work: h, joined: g, isLoggedInUsersAccount: f, social: b, loading: v} = e
              , j = (0,
            u.v9)(y.o4) || "dark"
              , w = (0,
            D.Z)(i)
              , k = new Date(g)
              , A = function(e) {
                let t = e.getMonth()
                  , i = R[t]
                  , c = e.getDate()
                  , d = e.getFullYear();
                return "".concat(i, " ").concat(c, ", ").concat(d)
            }(k)
              , [C,F] = (0,
            x.useState)([]);
            return (0,
            x.useEffect)( () => {
                if (b) {
                    let e = (0,
                    W.n)(b)
                      , t = (0,
                    W.X)(e);
                    F(t)
                }
            }
            , [b]),
            (0,
            d.jsxs)(Y, {
                children: [(0,
                d.jsx)(t, {
                    className: "top-bar",
                    children: (0,
                    d.jsx)("p", {
                        children: "Bio"
                    })
                }), (0,
                d.jsxs)("div", {
                    className: "bio-container",
                    children: [(0,
                    d.jsx)("div", {
                        className: "rank",
                        children: v ? (0,
                        d.jsx)(U.Z, {
                            baseColor: "dark" === j ? "#0F172A" : "#F1F5F9",
                            highlightColor: "dark" === j ? "#10192e" : "#F8FAFC",
                            width: 100
                        }) : (0,
                        d.jsxs)(d.Fragment, {
                            children: [(0,
                            d.jsx)("img", {
                                src: w.badge,
                                alt: w.rankName
                            }), (0,
                            d.jsxs)("p", {
                                children: ["Lvl ", w.level]
                            })]
                        })
                    }), (0,
                    d.jsx)("div", {
                        className: "bio-text",
                        children: c ? (0,
                        d.jsx)("p", {
                            children: c
                        }) : (0,
                        d.jsx)(d.Fragment, {
                            children: f ? (0,
                            d.jsxs)("span", {
                                children: ["You don't have anything in your bio.", " ", (0,
                                d.jsx)("a", {
                                    href: "/account",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Go to account"
                                }), " ", "and edit profile to add something cool about yourself."]
                            }) : (0,
                            d.jsx)("span", {
                                children: v ? (0,
                                d.jsx)(U.Z, {
                                    baseColor: "dark" === j ? "#0F172A" : "#F1F5F9",
                                    highlightColor: "dark" === j ? "#10192e" : "#F8FAFC",
                                    count: 2
                                }) : "This user's bio appears to be blank at the moment."
                            })
                        })
                    }), (0,
                    d.jsxs)("div", {
                        className: "occupations",
                        children: [p && (0,
                        d.jsxs)("p", {
                            children: [(0,
                            d.jsx)("img", {
                                src: "/images/profile/location-marker.svg",
                                alt: "location marker"
                            }), (0,
                            d.jsx)("span", {
                                children: p
                            })]
                        }), m && (0,
                        d.jsxs)("p", {
                            children: [(0,
                            d.jsx)("img", {
                                src: "/images/profile/cap.svg",
                                alt: "education marker"
                            }), (0,
                            d.jsx)("span", {
                                children: m
                            })]
                        }), h && (0,
                        d.jsxs)("p", {
                            children: [(0,
                            d.jsx)("img", {
                                src: "/images/profile/briefcase.svg",
                                alt: "work marker"
                            }), (0,
                            d.jsx)("span", {
                                children: h
                            })]
                        }), (0,
                        d.jsx)("p", {
                            children: v ? (0,
                            d.jsx)(U.Z, {
                                baseColor: "dark" === j ? "#0F172A" : "#F1F5F9",
                                highlightColor: "dark" === j ? "#10192e" : "#F8FAFC",
                                width: 100
                            }) : (0,
                            d.jsxs)(d.Fragment, {
                                children: [(0,
                                d.jsx)("img", {
                                    src: "/images/profile/joined.svg",
                                    alt: "joined marker"
                                }), (0,
                                d.jsxs)("span", {
                                    children: ["Joined ", A]
                                })]
                            })
                        })]
                    }), b && 0 != C.length && (0,
                    d.jsx)(X, {
                        children: C.map( (e, t) => "tiktok" == e.socialImage ? (0,
                        d.jsx)("a", {
                            href: e.socialHandle,
                            children: (0,
                            d.jsx)("li", {
                                children: (0,
                                d.jsx)("img", {
                                    src: "/images/tiktok_logo.png",
                                    alt: "tiktok logo",
                                    width: "35px",
                                    height: "35px"
                                })
                            })
                        }, e.socialHandle) : (0,
                        d.jsx)("a", {
                            href: e.socialHandle,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0,
                            d.jsx)("li", {
                                children: (0,
                                d.jsx)("i", {
                                    className: "nes-icon ".concat(e.socialImage)
                                })
                            }, t)
                        }, e.socialHandle))
                    })]
                })]
            })
        };
        function Skills_templateObject() {
            let e = (0,
            c._)(["\n  .skills-container {\n    border: 2px solid ", ";\n    background-color: ", ";\n    border-radius: 25px;\n    color: ", ';\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7px;\n    padding: 1.5rem;\n\n    p {\n      margin: 0px;\n    }\n\n    p {\n      font-family: "Work Sans", sans-serif;\n      background-color: ', ";\n      width: fit-content;\n      height: fit-content;\n      padding: 1px 8px;\n      border-radius: 30px;\n      font-size: 13px;\n      color: ", ';\n    }\n\n    span {\n      font-family: "Work Sans", sans-serif;\n      font-size: 14px;\n    }\n  }\n']);
            return Skills_templateObject = function() {
                return e
            }
            ,
            e
        }
        let Z = p.default.div.withConfig({
            componentId: "sc-1ce2d3ff-0"
        })(Skills_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => "dark" === e.theme.mode ? "#d6e3ff" : "#333333", e => e.theme.colors.profileBorder, e => "dark" === e.theme.mode ? "#758bb9" : "#808080");
        var profile_Skills = function(e) {
            let {TopBarStyles: t, skills: i, isLoggedInUsersAccount: c, loading: p} = e
              , m = (0,
            u.v9)(y.o4) || "dark";
            return (0,
            d.jsxs)(Z, {
                children: [(0,
                d.jsx)(t, {
                    className: "top-bar",
                    children: (0,
                    d.jsx)("p", {
                        children: "Skills"
                    })
                }), (0,
                d.jsxs)("div", {
                    className: "skills-container",
                    children: [p && (0,
                    d.jsxs)(d.Fragment, {
                        children: [(0,
                        d.jsx)(U.Z, {
                            baseColor: "dark" === m ? "#0F172A" : "#F1F5F9",
                            highlightColor: "dark" === m ? "#10192e" : "#F8FAFC",
                            className: "skeleton",
                            width: 150
                        }), (0,
                        d.jsx)(U.Z, {
                            baseColor: "dark" === m ? "#0F172A" : "#F1F5F9",
                            highlightColor: "dark" === m ? "#10192e" : "#F8FAFC",
                            className: "skeleton",
                            width: 100
                        })]
                    }), (null == i ? void 0 : i.length) != 0 ? (0,
                    d.jsxs)(d.Fragment, {
                        children: [" ", null == i ? void 0 : i.map(e => (0,
                        d.jsx)("p", {
                            children: e
                        }, e))]
                    }) : (0,
                    d.jsx)(d.Fragment, {
                        children: c ? (0,
                        d.jsxs)("span", {
                            children: ["Add skills from", " ", (0,
                            d.jsx)("a", {
                                href: "/account",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "account"
                            }), "", " settings."]
                        }) : (0,
                        d.jsx)("span", {
                            children: "User has not set any skills"
                        })
                    })]
                })]
            })
        };
        function StatBlock_templateObject() {
            let e = (0,
            c._)(["\n  border: 2px solid ", ";\n  background-color: ", ";\n  border-radius: 25px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 10px;\n\n  p {\n    margin: 0px;\n    color: whitesmoke;\n  }\n\n  .title {\n    color: ", ";\n    font-size: 12px;\n  }\n\n  .num {\n    font-size: 32px;\n    -webkit-text-stroke: 1px ", ";\n  }\n"]);
            return StatBlock_templateObject = function() {
                return e
            }
            ,
            e
        }
        let q = p.default.div.withConfig({
            componentId: "sc-3e0361e4-0"
        })(StatBlock_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => "dark" === e.theme.mode ? "#ffffff" : "#333333", e => e.theme.colors.profileBorder);
        var profile_StatBlock = function(e) {
            let {title: t, num: i, color: c} = e;
            return (0,
            d.jsxs)(q, {
                children: [(0,
                d.jsx)("p", {
                    className: "title",
                    children: t
                }), (0,
                d.jsx)("p", {
                    className: "num",
                    style: {
                        color: c
                    },
                    children: (0,
                    d.jsx)("span", {
                        children: i
                    })
                })]
            })
        };
        function Stats_templateObject() {
            let e = (0,
            c._)(["\n  ", " {\n    .stats-container {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 10px;\n    }\n  }\n\n  ", " {\n    .stats-container {\n      grid-template-columns: repeat(4, 1fr);\n    }\n  }\n"]);
            return Stats_templateObject = function() {
                return e
            }
            ,
            e
        }
        let Q = p.default.div.withConfig({
            componentId: "sc-1d4bb701-0"
        })(Stats_templateObject(), e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        );
        var profile_Stats = function(e) {
            let {TopBarStyles: t, stats: i, courses: c, loading: p} = e
              , m = (0,
            u.v9)(y.o4) || "dark"
              , [h,g] = (0,
            x.useState)(0)
              , [f,b] = (0,
            x.useState)(0)
              , [v,j] = (0,
            x.useState)(0);
            return (0,
            x.useEffect)( () => {
                let e = function(e) {
                    let t = 0;
                    for (let d in e) {
                        let p = e[d]
                          , m = p.chapters;
                        for (let e in m) {
                            var i, c;
                            let d = null === (i = m[e]) || void 0 === i ? void 0 : i.challenges;
                            for (let e in d)
                                (null === (c = d[e]) || void 0 === c ? void 0 : c.status) === "complete" && (t += 1)
                        }
                    }
                    return t
                }(c)
                  , t = function(e) {
                    let t = 0;
                    for (let i in e) {
                        let c = e[i]
                          , d = (null == c ? void 0 : c.badgesEarned) || [];
                        t += null == d ? void 0 : d.length
                    }
                    return t
                }(c);
                g(e),
                b(t)
            }
            , [c]),
            (0,
            x.useEffect)( () => {
                try {
                    var e, t, c, d;
                    let p = function() {
                        let e = new Date
                          , t = String(e.getDate()).padStart(2, "0")
                          , i = String(e.getMonth() + 1).padStart(2, "0")
                          , c = e.getFullYear();
                        return "".concat(i, "/").concat(t, "/").concat(c)
                    }()
                      , m = (null == i ? void 0 : null === (e = i.streaks) || void 0 === e ? void 0 : e.currentStreak) || 0
                      , h = null == i ? void 0 : null === (c = i.streaks) || void 0 === c ? void 0 : null === (t = c.datesVisited) || void 0 === t ? void 0 : t.slice(-1)[0];
                    1 === m && h !== p ? j(0) : j((null == i ? void 0 : null === (d = i.streaks) || void 0 === d ? void 0 : d.currentStreak) || 0)
                } catch (e) {
                    console.log("error getting todays date", e),
                    j(0)
                }
            }
            , [null == i ? void 0 : i.streaks]),
            (0,
            d.jsxs)(Q, {
                children: [(0,
                d.jsx)(t, {
                    className: "top-bar",
                    children: (0,
                    d.jsx)("p", {
                        children: "Stats"
                    })
                }), (0,
                d.jsx)("div", {
                    className: "stats-container",
                    children: p ? (0,
                    d.jsx)(d.Fragment, {
                        children: Array.from({
                            length: 4
                        }).map( (e, t) => (0,
                        d.jsx)(U.Z, {
                            baseColor: "dark" === m ? "#0F172A" : "#F1F5F9",
                            highlightColor: "dark" === m ? "#10192e" : "#F8FAFC",
                            className: "skeleton",
                            height: 100,
                            width: "100%"
                        }, t))
                    }) : (0,
                    d.jsxs)(d.Fragment, {
                        children: [(0,
                        d.jsx)(profile_StatBlock, {
                            title: "EXERCISES",
                            num: h,
                            color: "#4BB1FF"
                        }), (0,
                        d.jsx)(profile_StatBlock, {
                            title: "TOTAL XP",
                            num: i.totalXp,
                            color: "#E76F54"
                        }), (0,
                        d.jsx)(profile_StatBlock, {
                            title: "COURSE BADGES",
                            num: f,
                            color: "#92CC41"
                        }), (0,
                        d.jsx)(profile_StatBlock, {
                            title: "DAILY STREAK",
                            num: v,
                            color: "#EE82EE"
                        })]
                    })
                })]
            })
        }
          , J = i(25935);
        function PinnedProject_templateObject() {
            let e = (0,
            c._)(["\n  border: 2px solid ", ";\n  background-color: ", ";\n  height: 165px;\n  border-radius: 25px;\n  overflow: hidden;\n\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);\n  gap: 1rem;\n  transition-duration: 0.2s;\n\n  :hover {\n    transition-duration: 0.2s;\n    border-color: ", ';\n  }\n\n  .image-container {\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .project-info {\n    font-family: "Work Sans", sans-serif;\n    padding: 1rem;\n    padding-left: 0rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n    p {\n      margin: 0px;\n    }\n\n    .project-title {\n      color: ', ";\n      font-weight: 700;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n\n    .project-description {\n      all: unset;\n      color: ", ';\n      font-size: 16px;\n      font-weight: 400;\n      background-color: none !important;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n\n    .project-tags {\n      display: flex;\n      gap: 7px;\n\n      p {\n        margin: 0px;\n      }\n\n      p {\n        font-family: "Work Sans", sans-serif;\n        background-color: ', ";\n        width: fit-content;\n        height: fit-content;\n        padding: 1px 8px;\n        border-radius: 30px;\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n  }\n"]);
            return PinnedProject_templateObject = function() {
                return e
            }
            ,
            e
        }
        let G = p.default.div.withConfig({
            componentId: "sc-4a59c64c-0"
        })(PinnedProject_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => e.forPinned && "#1e9ced", e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", e => "dark" === e.theme.mode ? "#e8edff" : "#333333", e => e.theme.colors.profileBorder, e => "dark" === e.theme.mode ? "#758bb9" : "#808080")
          , V = {
            python: {
                color: "#1E9CED",
                displayName: "Python"
            },
            javascript: {
                color: "#EEB702",
                displayName: "JavaScript"
            },
            "html/css": {
                color: "#E76E54",
                displayName: "HTML/CSS"
            },
            portfolio: {
                color: "#007A7A",
                displayName: "Portfolio"
            },
            mongo: {
                color: "#00684A",
                displayName: "Mongo"
            },
            firebase: {
                color: "#FFCB2F",
                displayName: "Firebase"
            },
            react: {
                color: "#149ECA",
                displayName: "React"
            },
            sql: {
                color: "#FF4D00",
                displayName: "SQL"
            },
            "command-line": {
                color: "#000000",
                displayName: "Command Line"
            },
            "c++": {
                color: "#00599C",
                displayName: "C++"
            }
        };
        var profile_PinnedProject = function(e) {
            let {project: t, highlight: i=!1, forPinned: c=!1} = e
              , p = (0,
            d.jsxs)(G, {
                style: {
                    borderColor: i && "#1E9CED"
                },
                className: "nes-pointer",
                forPinned: c,
                children: [(0,
                d.jsx)("div", {
                    className: "image-container",
                    children: (0,
                    d.jsx)("img", {
                        src: t.cardImage || (null == t ? void 0 : t.images[0].url),
                        alt: "project image"
                    })
                }), (0,
                d.jsxs)("div", {
                    className: "project-info",
                    children: [(0,
                    d.jsx)("p", {
                        className: "project-title",
                        children: null == t ? void 0 : t.title
                    }), (null == t ? void 0 : t.content) && (0,
                    d.jsx)("p", {
                        className: "project-description",
                        children: (0,
                        J.ZP)(null == t ? void 0 : t.content)
                    }), (0,
                    d.jsx)("div", {
                        className: "project-tags",
                        children: t.projectTags.map( (e, t) => {
                            if (!(t >= 3))
                                return (0,
                                d.jsx)("p", {
                                    children: V[e].displayName
                                }, e)
                        }
                        )
                    })]
                })]
            });
            return c ? (0,
            d.jsx)(z(), {
                href: "/community/project-showcase/".concat(t.postId),
                legacyBehavior: !0,
                children: p
            }) : p
        };
        async function updatePinnedProjects(e) {
            let {uid: t, pinnedProjects: i} = e
              , {firestore: c} = (0,
            F.UM)();
            if (!t || !i)
                throw Error("uid or pinnedprojects missing.");
            try {
                let e = (0,
                C.hJ)(c, "users", t, "profile-data")
                  , d = (0,
                C.JU)(e, "profile-data");
                return await (0,
                C.pl)(d, {
                    pinnedProjects: i
                }, {
                    merge: !0
                }),
                {
                    status: 200
                }
            } catch (e) {
                return {
                    status: 500,
                    error: e
                }
            }
        }
        function CustomizeProjectsPins_templateObject() {
            let e = (0,
            c._)(["\n    from {\n        transform: scale(0.8);\n        visibility: hidden;\n        opacity: 0;\n    } to {\n        transform: scale(1);\n        visibility: visible;\n        opacity: 1;\n    }\n"]);
            return CustomizeProjectsPins_templateObject = function() {
                return e
            }
            ,
            e
        }
        function CustomizeProjectsPins_templateObject1() {
            let e = (0,
            c._)(['\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* align-items: center; */\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  color: whitesmoke;\n  font-family: "Work Sans", sans-serif;\n\n  .all-projects {\n    position: relative;\n    border: 3px solid ', ";\n    background-color: ", ";\n    animation: ", " 0.2s ease-in;\n    width: 900px;\n    max-width: 95%;\n    min-height: 275px;\n    height: fit-content;\n    max-height: calc(100vh - 1rem);\n    overflow: scroll;\n    color: ", ";\n    padding: 1.5rem;\n    margin-bottom: 15rem;\n    border-radius: 25px;\n\n    .close-btn {\n      all: unset;\n      position: absolute;\n      right: 10px;\n      top: 5px;\n      font-size: 30px;\n      line-height: 0.8;\n      transition-duration: 0.2s;\n      padding: 0.2rem;\n      padding-top: 0px;\n\n      :hover {\n        background-color: hsla(61, 6%, 90%, 0.3);\n        border-radius: 50%;\n        cursor:\n          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)\n            14 0,\n          pointer;\n      }\n    }\n\n    .title {\n      margin-bottom: 1.5rem;\n      display: flex;\n      justify-content: space-between;\n      span {\n        font-weight: 600;\n        color: ", ";\n\n        font-size: 17px;\n      }\n\n      button {\n        border: none;\n        padding: 5px 10px;\n        border-radius: 20px;\n        outline: none;\n        transition-duration: 0.2s;\n\n        :hover {\n          transition-duration: 0.2s;\n          opacity: 1 !important;\n        }\n      }\n    }\n\n    .projects {\n      display: grid;\n      gap: 2rem;\n\n      ", " {\n        grid-template-columns: 1fr;\n      }\n\n      ", ' {\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    .empty-projects {\n      margin-top: 3rem;\n      width: 100%;\n      font-family: "Work Sans", sans-serif;\n      text-align: center;\n      color: ', ";\n      font-size: 18px;\n      font-weight: 600;\n\n      p {\n        span {\n          color: ", ";\n\n          a {\n            opacity: 0.8;\n            color: #209cee;\n          }\n        }\n      }\n    }\n  }\n"]);
            return CustomizeProjectsPins_templateObject1 = function() {
                return e
            }
            ,
            e
        }
        let K = (0,
        p.keyframes)(CustomizeProjectsPins_templateObject())
          , $ = p.default.div.withConfig({
            componentId: "sc-ad1a8644-0"
        })(CustomizeProjectsPins_templateObject1(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, K, e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", e => "dark" === e.theme.mode ? "#758bb9" : "#333333", e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        , e => "dark" === e.theme.mode ? "#758bb9" : "#808080", e => "dark" === e.theme.mode ? "rgba(117, 139, 185, 0.6)" : "rgba(128, 128, 128, .6)");
        var profile_CustomizeProjectsPins = function(e) {
            let {uid: t, pinnnedProjectIds: i=[], setShowPopup: c, username: p} = e
              , m = (0,
            A.useRouter)()
              , h = (0,
            x.useRef)(null)
              , [u,g] = (0,
            x.useState)(i)
              , [f,b] = (0,
            x.useState)(i)
              , [j,w] = (0,
            x.useState)(!1)
              , [k,y] = (0,
            x.useState)([])
              , [C,F] = (0,
            x.useState)(!1)
              , [S,E] = (0,
            x.useState)(!0)
              , N = (0,
            x.useCallback)(async () => {
                try {
                    let e = await fetch("/api/community/getUserProjects?uid=".concat(t))
                      , i = await e.json();
                    y(i.posts),
                    E(!1)
                } catch (e) {
                    console.log(e)
                }
            }
            , [t]);
            async function updatedSelectedPins() {
                try {
                    F(!0);
                    let e = await updatePinnedProjects({
                        uid: t,
                        pinnedProjects: u
                    });
                    200 === e.status && ((0,
                    _.yD)({
                        username: p
                    }),
                    m.reload())
                } catch (e) {
                    console.log(e)
                }
            }
            return (0,
            x.useEffect)( () => {
                N()
            }
            , [N]),
            (0,
            x.useEffect)( () => {
                let e = function(e, t) {
                    if (e.length !== t.length)
                        return !1;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t[i])
                            return !1;
                    return !0
                }(u, f);
                w(!e)
            }
            , [u, f]),
            (0,
            P.Z)(h, () => c(!1)),
            (0,
            d.jsx)($, {
                children: (0,
                d.jsxs)("div", {
                    className: "all-projects",
                    ref: h,
                    children: [(0,
                    d.jsxs)("div", {
                        className: "title",
                        children: [(0,
                        d.jsx)("span", {
                            children: "Edit pinned projects"
                        }), (0,
                        d.jsx)("button", {
                            style: {
                                opacity: j ? "1" : ".5",
                                backgroundColor: j ? "#1E9CED" : "#E5E6E8",
                                color: j ? "whitesmoke" : "black",
                                fontWeight: 600,
                                width: "95px"
                            },
                            onClick: () => {
                                j ? updatedSelectedPins() : c(!1)
                            }
                            ,
                            children: j ? (0,
                            d.jsx)(d.Fragment, {
                                children: C ? (0,
                                d.jsx)(v.Z, {
                                    size: 9,
                                    color: "#e8edff"
                                }) : "Save pins"
                            }) : "Cancel"
                        })]
                    }), (0,
                    d.jsx)("div", {
                        className: "projects",
                        children: 0 != k.length && (0,
                        d.jsx)(d.Fragment, {
                            children: k.map(e => (0,
                            d.jsx)("div", {
                                className: "nes-pointer",
                                onClick: () => (function(e) {
                                    if (u.includes(e)) {
                                        let t = u.filter(t => t != e);
                                        g(t)
                                    } else
                                        u.length >= 5 || g([...u, e])
                                }
                                )(e.postId),
                                children: (0,
                                d.jsx)(profile_PinnedProject, {
                                    project: e,
                                    highlight: u.includes(e.postId)
                                })
                            }, e.postId))
                        })
                    }), 0 === k.length && !S && (0,
                    d.jsx)("div", {
                        className: "empty-projects",
                        children: (0,
                        d.jsxs)("p", {
                            children: ["You have not submitted any projects. ", (0,
                            d.jsx)("br", {}), (0,
                            d.jsxs)("span", {
                                children: ["Submit a project in the", " ", (0,
                                d.jsx)(z(), {
                                    href: "/community/project-showcase",
                                    children: "community"
                                })]
                            })]
                        })
                    })]
                })
            })
        };
        function PinnedProjects_templateObject() {
            let e = (0,
            c._)(["\n  ", " {\n    margin-bottom: 0.75rem;\n\n    .pinned-grid {\n      display: grid;\n      grid-template-columns: 1fr;\n      gap: 1rem;\n\n      .pin-a-project {\n        height: 160px;\n        border-radius: 25px;\n        border: 2.5px dashed ", ";\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: ", ';\n        font-size: 16px;\n        letter-spacing: 0.72px;\n        font-family: "PixelGridM", sans-serif;\n        transition-duration: 0.2s;\n\n        :hover {\n          border: 2.5px dashed #e8edff;\n          transition-duration: 0.2s;\n        }\n      }\n    }\n\n    .top-bar {\n      .edit-btn {\n        transition: 0.2s;\n        left: calc(100% - 78px);\n\n        :hover {\n          background-color: ', ";\n        }\n      }\n    }\n  }\n\n  ", " {\n    .pinned-grid {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n"]);
            return PinnedProjects_templateObject = function() {
                return e
            }
            ,
            e
        }
        let ee = p.default.div.withConfig({
            componentId: "sc-3f413803-0"
        })(PinnedProjects_templateObject(), e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => e.theme.colors.profileBorder, e => "dark" === e.theme.mode ? "#e8edff" : "#333333", e => e.theme.colors.profileBorder, e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        );
        var profile_PinnedProjects = function(e) {
            let {TopBarStyles: t, pinnedProjects: i=[], accountUid: c, pinnnedProjectIds: p, username: m, loading: h} = e
              , g = (0,
            u.v9)(y.f8)
              , [f,b] = (0,
            x.useState)(!1);
            return h ? null : (0,
            d.jsxs)(d.Fragment, {
                children: [f && (0,
                d.jsx)(profile_CustomizeProjectsPins, {
                    uid: g,
                    pinnnedProjectIds: p,
                    setShowPopup: b,
                    username: m
                }), (0,
                d.jsxs)(ee, {
                    children: [(0,
                    d.jsxs)(t, {
                        className: "top-bar",
                        children: [(0,
                        d.jsx)("p", {
                            children: "Pinned"
                        }), i.length >= 4 && g === c && (0,
                        d.jsx)("p", {
                            className: "edit-btn nes-pointer",
                            onClick: () => b(!0),
                            children: "Edit"
                        })]
                    }), (0,
                    d.jsxs)("div", {
                        className: "pinned-grid",
                        children: [i.map( (e, t) => t >= 4 ? null : (0,
                        d.jsx)("div", {
                            children: (0,
                            d.jsx)(profile_PinnedProject, {
                                project: e,
                                forPinned: !0
                            })
                        }, e.postId)), i.length < 4 && g === c && (0,
                        d.jsx)("div", {
                            className: "pin-a-project nes-pointer",
                            onClick: () => b(!0),
                            children: "Pin a project"
                        })]
                    })]
                })]
            })
        }
          , en = i(74774)
          , et = i(58533)
          , ei = i(25670);
        function OpcPostFeed_templateObject() {
            let e = (0,
            c._)(["\n  margin-bottom: 5rem;\n\n  .infinite-div {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n\n  .opc-post-container {\n    border: 2px solid ", ";\n    background-color: ", ';\n\n    padding: 1.25rem;\n    border-radius: 25px;\n  }\n\n  .empty-opc-posts {\n    margin-top: 3rem;\n    font-family: "Work Sans", sans-serif;\n    text-align: center;\n    color: ', ";\n    font-size: 18px;\n    font-weight: 600;\n\n    p {\n      span {\n        color: ", ";\n\n        a {\n          opacity: 0.8;\n          color: #209cee;\n        }\n      }\n    }\n  }\n"]);
            return OpcPostFeed_templateObject = function() {
                return e
            }
            ,
            e
        }
        let eo = p.default.div.withConfig({
            componentId: "sc-f03e500c-0"
        })(OpcPostFeed_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => "dark" === e.theme.mode ? "#758bb9" : "#808080", e => "dark" === e.theme.mode ? "rgba(117, 139, 185, 0.6)" : "rgba(128, 128, 128, .6)");
        var profile_OpcPostFeed = function(e) {
            let {accountUid: t, initialPosts: i, isLoggedInUsersAccount: c, authorDataForOpcPost: p} = e
              , [m,h] = (0,
            x.useState)(i)
              , [u,g] = (0,
            x.useState)(!1)
              , [f,b] = (0,
            x.useState)(1)
              , [v,j] = (0,
            x.useState)(!0)
              , w = (0,
            x.useCallback)(async () => {
                try {
                    if ((null == i ? void 0 : i.length) === 0)
                        return;
                    console.log("more ran");
                    let e = f + 1
                      , c = await fetch("/api/community/getUserPost", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            page: e,
                            uid: t
                        })
                    })
                      , d = await c.json()
                      , p = d.posts;
                    0 != p.length && (b(e),
                    h(e => [...e, ...p])),
                    j(!0 != d.noPosts)
                } catch (e) {
                    console.error("Error fetching more posts:", e)
                }
            }
            , [u, f, t, h, i]);
            return (0,
            d.jsx)(eo, {
                children: (null == i ? void 0 : i.length) != 0 ? (0,
                d.jsx)(d.Fragment, {
                    children: i && (0,
                    d.jsx)(d.Fragment, {
                        children: (0,
                        d.jsx)(et.Z, {
                            dataLength: m.length,
                            next: w,
                            hasMore: v,
                            loader: (0,
                            d.jsx)(ei.Z, {}),
                            className: "infinite-div",
                            children: m.map( (e, t) => {
                                let i = {
                                    ...e,
                                    authorData: p
                                };
                                return (0,
                                d.jsx)("div", {
                                    children: (0,
                                    d.jsx)(en.Z, {
                                        postData: i,
                                        communityName: null == e ? void 0 : e.communityName,
                                        link: (null == e ? void 0 : e.communityName) === "main" ? "/community/main/".concat(e.id) : "monthly-challenge" === e.communityName ? "/community/monthly-challenge/submission/".concat(e.id) : "/community/".concat(e.communityName, "/").concat(e.id),
                                        index: t
                                    })
                                }, e.postId)
                            }
                            )
                        })
                    })
                }) : (0,
                d.jsx)("div", {
                    className: "empty-opc-posts",
                    children: c ? (0,
                    d.jsxs)("p", {
                        children: ["You have not made a post yet. ", (0,
                        d.jsx)("br", {}), (0,
                        d.jsxs)("span", {
                            children: ["Say hi in the ", (0,
                            d.jsx)(z(), {
                                href: "/community",
                                children: "community"
                            })]
                        })]
                    }) : (0,
                    d.jsx)("p", {
                        children: "User has not made any posts."
                    })
                })
            })
        };
        function ProjectFeedCard_templateObject() {
            let e = (0,
            c._)(["\n  border: 2px solid ", ";\n  background-color: ", ';\n  border-radius: 25px;\n  height: 270px;\n  overflow: hidden;\n\n  transition-duration: 0.2s;\n\n  :hover {\n    transition-duration: 0.2s;\n    border-color: #1e9ced;\n  }\n\n  .image-container {\n    height: 120px;\n\n    img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .project-info {\n    font-family: "Work Sans", sans-serif;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n    p {\n      margin: 0px;\n    }\n\n    .project-title {\n      color: ', ";\n      font-weight: 700;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-size: 16px;\n    }\n\n    .project-description {\n      all: unset;\n      color: ", ';\n      font-size: 16px;\n      font-weight: 400;\n      background-color: none !important;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n\n    .project-tags {\n      display: flex;\n      gap: 7px;\n\n      p {\n        margin: 0px;\n      }\n\n      p {\n        font-family: "Work Sans", sans-serif;\n        background-color: ', ";\n        width: fit-content;\n        height: fit-content;\n        padding: 1px 8px;\n        border-radius: 30px;\n        font-size: 14px;\n        color: ", ";\n      }\n    }\n  }\n"]);
            return ProjectFeedCard_templateObject = function() {
                return e
            }
            ,
            e
        }
        let er = p.default.div.withConfig({
            componentId: "sc-aa53cacb-0"
        })(ProjectFeedCard_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", e => "dark" === e.theme.mode ? "#e8edff" : "#333333", e => e.theme.colors.profileBorder, e => "dark" === e.theme.mode ? "#758bb9" : "#808080")
          , ea = {
            python: {
                color: "#1E9CED",
                displayName: "Python"
            },
            javascript: {
                color: "#EEB702",
                displayName: "JavaScript"
            },
            "html/css": {
                color: "#E76E54",
                displayName: "HTML/CSS"
            },
            portfolio: {
                color: "#007A7A",
                displayName: "Portfolio"
            },
            mongo: {
                color: "#00684A",
                displayName: "Mongo"
            },
            firebase: {
                color: "#FFCB2F",
                displayName: "Firebase"
            },
            react: {
                color: "#149ECA",
                displayName: "React"
            },
            sql: {
                color: "#FF4D00",
                displayName: "SQL"
            },
            "command-line": {
                color: "#000000",
                displayName: "Command Line"
            },
            "c++": {
                color: "#00599C",
                displayName: "C++"
            }
        };
        var profile_ProjectFeedCard = function(e) {
            let {project: t} = e;
            return (0,
            d.jsx)(z(), {
                href: "/community/project-showcase/".concat(t.postId),
                legacyBehavior: !0,
                children: (0,
                d.jsxs)(er, {
                    className: "nes-pointer",
                    children: [(0,
                    d.jsx)("div", {
                        className: "image-container",
                        children: (0,
                        d.jsx)("img", {
                            src: t.images[0].url,
                            alt: "project image"
                        })
                    }), (0,
                    d.jsxs)("div", {
                        className: "project-info",
                        children: [(0,
                        d.jsx)("p", {
                            className: "project-title",
                            children: null == t ? void 0 : t.title
                        }), (null == t ? void 0 : t.content) && (0,
                        d.jsx)("p", {
                            className: "project-description",
                            children: (0,
                            J.ZP)(null == t ? void 0 : t.content)
                        }), (0,
                        d.jsx)("div", {
                            className: "project-tags",
                            children: t.projectTags.map(e => (0,
                            d.jsx)("p", {
                                children: ea[e].displayName
                            }, e))
                        })]
                    }), " "]
                })
            })
        };
        function ProjectFeed_templateObject() {
            let e = (0,
            c._)(["\n  ", ' {\n    .projects-grid {\n      display: grid;\n      grid-template-columns: 1fr;\n      gap: 1rem;\n    }\n\n    .empty-opc-posts {\n      width: 100%;\n      margin-top: 5rem;\n      font-family: "Work Sans", sans-serif;\n      text-align: center;\n      color: ', ";\n      font-size: 18px;\n      font-weight: 600;\n\n      p {\n        span {\n          color: ", ";\n\n          a {\n            opacity: 0.8;\n            color: #209cee;\n          }\n        }\n      }\n    }\n  }\n\n  ", " {\n    .projects-grid {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n"]);
            return ProjectFeed_templateObject = function() {
                return e
            }
            ,
            e
        }
        let el = p.default.div.withConfig({
            componentId: "sc-82968e23-0"
        })(ProjectFeed_templateObject(), e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => "dark" === e.theme.mode ? "#758bb9" : "#808080", e => "dark" === e.theme.mode ? "rgba(117, 139, 185, 0.6)" : "rgba(128, 128, 128, .6)", e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        );
        var profile_ProjectFeed = function(e) {
            let {accountUid: t, isLoggedInUsersAccount: i} = e
              , [c,p] = (0,
            x.useState)([])
              , [m,h] = (0,
            x.useState)(!0)
              , u = (0,
            x.useCallback)(async () => {
                try {
                    let e = await fetch("/api/community/getUserProjects?uid=".concat(t))
                      , i = await e.json();
                    p(i.posts),
                    h(!1)
                } catch (e) {
                    console.log(e),
                    h(!1)
                }
            }
            , [t]);
            return ((0,
            x.useEffect)( () => {
                u()
            }
            , [u]),
            m) ? (0,
            d.jsx)("div", {
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5rem"
                },
                children: (0,
                d.jsx)(v.Z, {
                    color: "#758bb9"
                })
            }) : (0,
            d.jsx)(el, {
                children: 0 != c.length ? (0,
                d.jsx)("div", {
                    className: "projects-grid",
                    children: c.map(e => (0,
                    d.jsx)("div", {
                        children: (0,
                        d.jsx)(profile_ProjectFeedCard, {
                            project: e
                        })
                    }, e.postId))
                }) : (0,
                d.jsx)("div", {
                    className: "empty-opc-posts",
                    children: i ? (0,
                    d.jsxs)("p", {
                        children: ["You have not submitted any projects. ", (0,
                        d.jsx)("br", {}), (0,
                        d.jsxs)("span", {
                            children: ["Submit a project in the", " ", (0,
                            d.jsx)(z(), {
                                href: "/community/project-showcase",
                                children: "community"
                            })]
                        })]
                    }) : (0,
                    d.jsx)("p", {
                        children: "User has not submitted any projects."
                    })
                })
            })
        };
        function CertFeedCard_templateObject() {
            let e = (0,
            c._)(["\n  border: 2px solid ", ";\n  background-color: ", ';\n  border-radius: 25px;\n  height: 310px;\n  overflow: hidden;\n\n  a {\n    text-decoration: none;\n    color: inherit;\n\n    :hover {\n      text-decoration: none;\n    }\n  }\n\n  transition-duration: 0.2s;\n\n  :hover {\n    transition-duration: 0.2s;\n    border-color: #1e9ced;\n  }\n\n  .image-container {\n    height: 270px;\n\n    img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .project-info {\n    font-family: "Work Sans", sans-serif;\n    display: flex;\n    padding-top: 0.35rem;\n    padding-left: 1rem;\n    flex-direction: column;\n\n    p {\n      margin: 0px;\n    }\n\n    .project-title {\n      color: ', ";\n      font-weight: 700;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-size: 16px;\n    }\n\n    .project-description {\n      all: unset;\n      color: ", ';\n      font-size: 16px;\n      font-weight: 400;\n      background-color: none !important;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n\n    .project-tags {\n      display: flex;\n      gap: 7px;\n\n      p {\n        margin: 0px;\n      }\n\n      p {\n        font-family: "Work Sans", sans-serif;\n        background-color: ', ";\n        width: fit-content;\n        height: fit-content;\n        padding: 1px 8px;\n        border-radius: 30px;\n        font-size: 14px;\n        color: ", ";\n      }\n    }\n  }\n"]);
            return CertFeedCard_templateObject = function() {
                return e
            }
            ,
            e
        }
        let es = p.default.div.withConfig({
            componentId: "sc-ac7a5651-0"
        })(CertFeedCard_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => "dark" === e.theme.mode ? "rgba(255, 255, 255, 0.87)" : "black", e => "dark" === e.theme.mode ? "#e8edff" : "#333333", e => e.theme.colors.profileBorder, e => "dark" === e.theme.mode ? "#758bb9" : "#808080");
        var profile_CertFeedCard = function(e) {
            let {certificate: t} = e;
            return (0,
            d.jsx)(es, {
                className: "nes-pointer",
                children: (0,
                d.jsxs)(z(), {
                    href: t.link,
                    children: [(0,
                    d.jsx)("div", {
                        className: "image-container",
                        children: (0,
                        d.jsx)("img", {
                            src: t.image,
                            alt: "project image"
                        })
                    }), (0,
                    d.jsx)("div", {
                        className: "project-info",
                        children: (0,
                        d.jsx)("p", {
                            className: "project-title",
                            children: null == t ? void 0 : t.courseName
                        })
                    }), " "]
                })
            })
        };
        function CertificateFeed_templateObject() {
            let e = (0,
            c._)(["\n  ", ' {\n    .projects-grid {\n      display: grid;\n      grid-template-columns: 1fr;\n      gap: 1rem;\n    }\n\n    .empty-opc-posts {\n      width: 100%;\n      margin-top: 5rem;\n      font-family: "Work Sans", sans-serif;\n      text-align: center;\n      color: ', ";\n      font-size: 18px;\n      font-weight: 600;\n\n      p {\n        span {\n          color: ", ";\n\n          a {\n            opacity: 0.8;\n            color: #209cee;\n          }\n        }\n      }\n    }\n  }\n\n  ", " {\n    .projects-grid {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n"]);
            return CertificateFeed_templateObject = function() {
                return e
            }
            ,
            e
        }
        let ec = p.default.div.withConfig({
            componentId: "sc-afd55aa5-0"
        })(CertificateFeed_templateObject(), e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => "dark" === e.theme.mode ? "#758bb9" : "#808080", e => "dark" === e.theme.mode ? "rgba(117, 139, 185, 0.6)" : "rgba(128, 128, 128, .6)", e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        );
        var CertificateFeed = function(e) {
            let {accountUid: t, isLoggedInUsersAccount: i} = e
              , [c,p] = (0,
            x.useState)([])
              , [m,h] = (0,
            x.useState)(!0)
              , u = (0,
            x.useCallback)(async () => {
                try {
                    let e = await fetch("/api/cert/getUserCertificates", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            uid: t
                        })
                    })
                      , i = await e.json();
                    p(i.data),
                    h(!1)
                } catch (e) {
                    console.log(e),
                    h(!1)
                }
            }
            , [t]);
            return ((0,
            x.useEffect)( () => {
                u()
            }
            , [u]),
            m) ? (0,
            d.jsx)("div", {
                style: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5rem"
                },
                children: (0,
                d.jsx)(v.Z, {
                    color: "#758bb9"
                })
            }) : (0,
            d.jsx)(ec, {
                children: (null == c ? void 0 : c.length) != 0 ? (0,
                d.jsx)("div", {
                    className: "projects-grid",
                    children: c.map(e => (0,
                    d.jsx)("div", {
                        children: (0,
                        d.jsx)(profile_CertFeedCard, {
                            certificate: e
                        })
                    }, e.link))
                }) : (0,
                d.jsx)("div", {
                    className: "empty-opc-posts",
                    children: i ? (0,
                    d.jsxs)("p", {
                        children: ["You haven't received any certificates yet. ", (0,
                        d.jsx)("br", {}), (0,
                        d.jsxs)("span", {
                            children: ["Start by taking ", (0,
                            d.jsx)(z(), {
                                href: "/python",
                                children: "The Legend of Python"
                            })]
                        })]
                    }) : (0,
                    d.jsx)("p", {
                        children: "User has not earned any certificates ."
                    })
                })
            })
        };
        function ContentHub_templateObject() {
            let e = (0,
            c._)([""]);
            return ContentHub_templateObject = function() {
                return e
            }
            ,
            e
        }
        function ContentHub_templateObject1() {
            let e = (0,
            c._)(["\n  border-top: 2px solid ", ";\n  position: relative;\n  margin-bottom: -2rem;\n  margin-top: 0.75rem;\n\n  .tabs {\n    display: flex;\n    position: absolute;\n    top: -19.5px;\n    left: 12px;\n    gap: 10px;\n    max-width: calc(100% - 24px);\n    overflow: auto;\n\n    p {\n      margin: 0px;\n      line-height: 1;\n      color: ", ";\n      width: fit-content;\n      border: 2px solid ", ";\n      font-size: 11px;\n      padding: 9px;\n      border-radius: 12px;\n      background-color: ", ";\n      display: flex;\n      gap: 6px;\n    }\n\n    .active {\n      background-color: ", ";\n    }\n\n    ::-webkit-scrollbar {\n      width: 0; /* Remove scrollbar width */\n      height: 0; /* Remove scrollbar height */\n      background: transparent;\n    }\n\n    ::-webkit-scrollbar-thumb {\n      background: transparent; /* Transparent thumb */\n    }\n\n    ::-webkit-scrollbar-track {\n      background: transparent; /* Transparent track */\n    }\n  }\n"]);
            return ContentHub_templateObject1 = function() {
                return e
            }
            ,
            e
        }
        let ed = p.default.div.withConfig({
            componentId: "sc-2613c902-0"
        })(ContentHub_templateObject())
          , ep = p.default.div.withConfig({
            componentId: "sc-2613c902-1"
        })(ContentHub_templateObject1(), e => e.theme.colors.profileBorder, e => "dark" === e.theme.mode ? "#d6e3ff" : "#333333", e => e.theme.colors.profileBorder, e => e.theme.colors.body, e => e.theme.colors.profileBorder);
        var profile_ContentHub = function(e) {
            let {numberOfPosts: t, numberOfProjects: i, opcPosts: c, accountUid: p, isLoggedInUsersAccount: m, loading: h, authorDataForOpcPost: g} = e
              , f = (0,
            u.v9)(y.o4) || "dark"
              , [b,v] = (0,
            x.useState)(0)
              , j = (0,
            A.useRouter)()
              , w = {
                0: c && (0,
                d.jsx)(profile_OpcPostFeed, {
                    initialPosts: c.filter(e => "project-showcase" != e.communityName),
                    isLoggedInUsersAccount: m,
                    accountUid: p,
                    authorDataForOpcPost: g
                }),
                1: p && (0,
                d.jsx)(profile_ProjectFeed, {
                    accountUid: p,
                    isLoggedInUsersAccount: m
                }),
                2: p && (0,
                d.jsx)(CertificateFeed, {
                    accountUid: p,
                    isLoggedInUsersAccount: m
                })
            };
            return (0,
            x.useEffect)( () => {
                let e = j.asPath;
                e.includes("certificates") && v(2)
            }
            , [j.asPath]),
            (0,
            d.jsx)(ed, {
                children: (0,
                d.jsxs)(ep, {
                    className: "top-bar",
                    children: [(0,
                    d.jsxs)("div", {
                        className: "tabs",
                        children: [(0,
                        d.jsxs)("p", {
                            className: "nes-pointer ".concat(0 === b && "active"),
                            onClick: () => v(0),
                            children: ["Posts ", !h && (0,
                            d.jsx)("span", {
                                children: "{".concat(t, "}")
                            })]
                        }), (0,
                        d.jsxs)("p", {
                            className: "nes-pointer ".concat(1 === b && "active"),
                            onClick: () => v(1),
                            children: ["Projects ", !h && (0,
                            d.jsx)("span", {
                                children: "{".concat(i, "}")
                            })]
                        }), (0,
                        d.jsx)("p", {
                            className: "nes-pointer ".concat(2 === b && "active"),
                            onClick: () => {
                                j.asPath.includes("certificates") ? v(2) : j.push("".concat(j.asPath, "/certificates"))
                            }
                            ,
                            children: "Certificates"
                        })]
                    }), (0,
                    d.jsx)("div", {
                        style: {
                            marginTop: "2rem"
                        },
                        children: h ? (0,
                        d.jsx)(U.Z, {
                            baseColor: "dark" === f ? "#0F172A" : "#F1F5F9",
                            highlightColor: "dark" === f ? "#10192e" : "#F8FAFC",
                            height: 350,
                            borderRadius: 8
                        }) : w[b]
                    })]
                })
            })
        }
          , em = i(88494)
          , eh = i(71911);
        function PetCafe_templateObject() {
            let e = (0,
            c._)(["\n  .pet-cafe {\n    border: 2px solid ", ";\n    background-color: ", ';\n\n    border-radius: 25px;\n    height: 220px;\n    color: whitesmoke;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7px;\n    background-image: url("/images/profile/nite-sky 1.svg");\n    background-size: cover;\n    position: relative;\n\n    .mySwiper {\n      width: 100%;\n      padding-top: 1rem;\n      .swiper-pet {\n        display: flex;\n        /* justify-content: center; */\n        align-items: center;\n        flex-direction: column;\n\n        p {\n          font-size: 14px;\n        }\n\n        img {\n          width: auto;\n          height: 120px;\n        }\n      }\n\n      .swiper-pagination-bullet {\n        background-color: #ffffff;\n      }\n\n      .swiper-pagination-bullet-active {\n        background-color: #1f9ef0;\n      }\n\n      .left,\n      .right {\n        top: 40%;\n        transform: translateY(40%);\n      }\n\n      .left {\n        position: absolute;\n        z-index: 1;\n        left: 13%;\n      }\n\n      .right {\n        position: absolute;\n        right: 0px;\n        z-index: 1;\n        right: 13%;\n      }\n\n      /* .active {\n        transition-duration: 0.2s;\n        :hover {\n          transform: scale(1.1) !important;\n          transition-duration: 0.2s;\n        }\n      } */\n    }\n\n    .adopt-a-pet {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: 0.5rem;\n      flex-direction: column;\n\n      img {\n        width: auto;\n        height: 120px;\n      }\n\n      :hover {\n        color: #1f9ef0;\n      }\n    }\n\n    .loader-container {\n      height: 100%;\n      position: absolute;\n      display: flex;\n      align-items: center;\n      top: 0px;\n      left: 40%;\n    }\n  }\n']);
            return PetCafe_templateObject = function() {
                return e
            }
            ,
            e
        }
        let eu = p.default.div.withConfig({
            componentId: "sc-8365f317-0"
        })(PetCafe_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground)
          , eg = ["duck", "dinosaur", "dragon"];
        var profile_PetCafe = function(e) {
            let {TopBarStyles: t, accountUid: i, username: c, isLoggedInUsersAccount: p} = e
              , m = (0,
            A.useRouter)()
              , [h,u] = (0,
            x.useState)([])
              , [g,f] = (0,
            x.useState)(null)
              , [b,j] = (0,
            x.useState)(0)
              , [w,k] = (0,
            x.useState)(!1);
            function switchSlides(e) {
                g && g.slideTo(e)
            }
            if ((0,
            x.useEffect)( () => {
                async function getAllPets() {
                    try {
                        let e = await fetch("/api/nights-of-code/getAllUserPets", {
                            method: "POST",
                            body: JSON.stringify({
                                uid: i
                            })
                        })
                          , t = await e.json();
                        u(t.pets.filter(e => "dead" != e.aliveStatus))
                    } catch (e) {
                        console.log(e)
                    }
                }
                i && getAllPets()
            }
            , [i]),
            0 != h.length || p)
                return (0,
                d.jsxs)(eu, {
                    children: [(0,
                    d.jsx)(t, {
                        className: "top-bar",
                        children: (0,
                        d.jsx)("p", {
                            children: "Pet Caf\xe9"
                        })
                    }), (0,
                    d.jsx)("div", {
                        className: "pet-cafe",
                        onClick: () => {
                            h.length > 1 || (m.push("/@".concat(c, "/30-nites-of-code?pet=").concat(h[0].id)),
                            k(!0))
                        }
                        ,
                        children: (null == h ? void 0 : h.length) != 0 ? (0,
                        d.jsxs)(em.tq, {
                            onSwiper: f,
                            onActiveIndexChange: () => j(null == g ? void 0 : g.activeIndex),
                            pagination: {
                                clickable: !0
                            },
                            modules: [eh.tl, eh.W_, eh.pt],
                            className: "mySwiper",
                            children: [h.length > 1 && (0,
                            d.jsxs)(d.Fragment, {
                                children: [(0,
                                d.jsx)("div", {
                                    className: "left nes-pointer",
                                    onClick: () => switchSlides(b - 1),
                                    children: (null == g ? void 0 : g.isBeginning) ? (0,
                                    d.jsx)("img", {
                                        src: "/images/profile/disabled-indicator.svg",
                                        alt: "switch btn"
                                    }) : (0,
                                    d.jsx)("img", {
                                        src: "/images/profile/active-indicator.svg",
                                        alt: "switch btn",
                                        style: {
                                            transform: "scaleX(-1)"
                                        },
                                        className: "active"
                                    })
                                }), (0,
                                d.jsx)("div", {
                                    className: "right nes-pointer",
                                    onClick: () => switchSlides(b + 1),
                                    children: (null == g ? void 0 : g.isEnd) ? (0,
                                    d.jsx)("img", {
                                        src: "/images/profile/disabled-indicator.svg",
                                        alt: "switch btn",
                                        style: {
                                            transform: "scaleX(-1)"
                                        }
                                    }) : (0,
                                    d.jsx)("img", {
                                        src: "/images/profile/active-indicator.svg",
                                        alt: "switch btn",
                                        className: "active"
                                    })
                                })]
                            }), null == h ? void 0 : h.map(e => (0,
                            d.jsxs)(em.o5, {
                                className: "swiper-pet",
                                children: [e.petName ? (0,
                                d.jsx)("p", {
                                    children: e.petName
                                }) : (0,
                                d.jsx)("p", {
                                    children: p ? "Name me!" : "Buddy"
                                }), (null == e ? void 0 : e.evolutionPhase) ? (0,
                                d.jsx)(z(), {
                                    href: "/@".concat(c, "/30-nites-of-code?pet=").concat(e.id),
                                    style: {
                                        all: "unset"
                                    },
                                    onClick: () => k(!0),
                                    children: w ? (0,
                                    d.jsx)("div", {
                                        className: "loader-container",
                                        children: (0,
                                        d.jsx)(v.Z, {
                                            color: "#14ADFF"
                                        })
                                    }) : (0,
                                    d.jsx)("img", {
                                        src: "/images/code-nights/".concat(null == e ? void 0 : e.evolutionPhase, "-neutral-").concat(e.pet, ".gif"),
                                        alt: "pet image",
                                        className: "nes-pointer"
                                    })
                                }) : (0,
                                d.jsx)(z(), {
                                    href: "/@".concat(c, "/30-nites-of-code?pet=").concat(e.id),
                                    style: {
                                        all: "unset"
                                    },
                                    onClick: () => k(!0),
                                    children: w ? (0,
                                    d.jsx)("div", {
                                        className: "loader-container",
                                        children: (0,
                                        d.jsx)(v.Z, {
                                            color: "#14ADFF"
                                        })
                                    }) : (0,
                                    d.jsx)("img", {
                                        src: "/images/code-nights/".concat(null == e ? void 0 : e.pet, ".gif"),
                                        alt: "egg",
                                        className: "nes-pointer"
                                    })
                                })]
                            }, e))]
                        }) : (0,
                        d.jsx)(z(), {
                            href: "/30-nites-of-code",
                            legacyBehavior: !0,
                            children: (0,
                            d.jsxs)("div", {
                                className: "adopt-a-pet nes-pointer",
                                children: [(0,
                                d.jsx)("img", {
                                    src: "/images/code-nights/".concat(eg[Math.floor(3 * Math.random())], ".gif"),
                                    alt: "egg",
                                    className: "nes-pointer"
                                }), (0,
                                d.jsx)("p", {
                                    children: "Adopt a buddy"
                                })]
                            })
                        })
                    })]
                })
        }
          , ef = i(3816)
          , ex = i(86961)
          , eb = i(77521);
        function AchBadgeDialog_templateObject() {
            let e = (0,
            c._)([""]);
            return AchBadgeDialog_templateObject = function() {
                return e
            }
            ,
            e
        }
        function AchBadgeDialog_templateObject1() {
            let e = (0,
            c._)(["\n    from {\n        transform: scale(0.8);\n        visibility: hidden;\n        opacity: 0;\n    } to {\n        transform: scale(1);\n        visibility: visible;\n        opacity: 1;\n    }\n"]);
            return AchBadgeDialog_templateObject1 = function() {
                return e
            }
            ,
            e
        }
        function _templateObject2() {
            let e = (0,
            c._)(["\n  animation: ", ' 0.2s ease-in;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  overflow: auto;\n  &::backdrop {\n    /* background: repeating-linear-gradient(\n      45deg,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.2) 1px,\n      rgba(0, 0, 0, 0.3) 1px,\n      rgba(0, 0, 0, 0.3) 20px\n    ); */\n    /* backdrop-filter: blur(3px); */\n    background: rgba(0, 0, 0, 0.5);\n  }\n  border: none;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n\n  text-align: center;\n  font-family: "Work Sans", sans-serif;\n\n  ', " {\n    width: 90%;\n    max-width: 550px;\n  }\n\n  ", " {\n    width: 60%;\n  }\n\n  ", ' {\n    width: 35%;\n  }\n\n  h1 {\n    margin: 1rem 0;\n    font-size: 1.4rem;\n  }\n\n  img {\n    margin: 0 auto;\n  }\n\n  p {\n    margin-top: 1.7rem;\n    margin-left: 5px;\n    margin-right: 5px;\n    font-size: 16px;\n  }\n\n  .close-btn {\n    all: unset;\n    position: absolute;\n    right: 20px;\n    top: 10px;\n    font-size: 30px;\n    line-height: 0.6;\n    transition-duration: 0.2s;\n    padding: 0.2rem;\n    z-index: 100;\n\n    :hover {\n      background-color: rgba(0, 0, 0, 0.15);\n      border-radius: 50%;\n      cursor:\n        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)\n          14 0,\n        pointer;\n    }\n  }\n\n  .badge-image-container {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    background: rgb(0, 0, 0);\n    background: rgb(0, 0, 0);\n    background: -moz-radial-gradient(\n      circle,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(147, 109, 242, 1) 8%,\n      rgba(2, 0, 107, 1) 100%\n    );\n    background: -webkit-radial-gradient(\n      circle,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(147, 109, 242, 1) 8%,\n      rgba(2, 0, 107, 1) 100%\n    );\n    background: radial-gradient(\n      circle,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(147, 109, 242, 1) 8%,\n      rgba(2, 0, 107, 1) 100%\n    );\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#02006b",GradientType=1);\n    overflow: hidden;\n\n    .badge-image.badge-image {\n      width: 100px;\n      height: 100px;\n      object-fit: contain;\n    }\n  }\n\n  .add-to-linkedin {\n    a {\n      font-weight: bold;\n      font-size: 1.2rem;\n    }\n  }\n\n  .message {\n    margin: 0px 20px 40px 20px;\n  }\n']);
            return _templateObject2 = function() {
                return e
            }
            ,
            e
        }
        let ev = p.default.img.withConfig({
            componentId: "sc-df579441-0"
        })(AchBadgeDialog_templateObject())
          , ej = (0,
        p.keyframes)(AchBadgeDialog_templateObject1())
          , ew = p.default.dialog.withConfig({
            componentId: "sc-df579441-1"
        })(_templateObject2(), ej, e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        , e => {
            let {theme: t} = e;
            return t.breakpoints.md
        }
        );
        var profile_AchBadgeDialog = function(e) {
            var t;
            let {badgeImg: i, badgeName: c, badgeMessage: p, badge: m, showLinkedinBtn: h=!0} = e
              , [u,g] = (0,
            x.useState)(!1)
              , [f,b] = (0,
            x.useState)(!1)
              , [v,j] = null === (t = m.ui) || void 0 === t ? void 0 : t.date.split("-");
            return ((0,
            x.useEffect)( () => {
                if (f) {
                    let e = document.querySelector("dialog.is-signup");
                    (null == e ? void 0 : e.open) && e.removeAttribute("open")
                }
            }
            , [f]),
            (0,
            x.useEffect)( () => {
                function dialogClickHandler(e) {
                    if ("DIALOG" !== e.target.tagName)
                        return;
                    let t = e.target.getBoundingClientRect()
                      , i = t.top <= e.clientY && e.clientY <= t.top + t.height && t.left <= e.clientX && e.clientX <= t.left + t.width;
                    !1 === i && (e.target.close(),
                    document.querySelector("body").style.overflow = "scroll")
                }
                return document.addEventListener("click", dialogClickHandler),
                () => {
                    document.removeEventListener("click", dialogClickHandler),
                    document.querySelector("body").style.overflow = "scroll"
                }
            }
            , []),
            (0,
            x.useEffect)( () => {
                b(!0)
            }
            , []),
            f) ? (0,
            d.jsx)(d.Fragment, {
                children: (0,
                d.jsx)(ew, {
                    role: "dialog",
                    className: "badge-dialog is-rounded ".concat(m.ui.badgeInternalName),
                    children: (0,
                    d.jsxs)("form", {
                        method: "dialog",
                        children: [(0,
                        d.jsx)("button", {
                            onClick: () => {
                                let e = document.querySelector("dialog.badge-dialog");
                                null == e || e.close(),
                                document.querySelector("body").style.overflow = "scroll"
                            }
                            ,
                            className: "close-btn nes-pointer",
                            children: (0,
                            d.jsx)(N.lTq, {
                                color: "white"
                            })
                        }), i && (0,
                        d.jsx)("div", {
                            className: "badge-image-container",
                            children: (0,
                            d.jsx)(eb.Z, {
                                tiltMaxAngleX: 20,
                                tiltMaxAngleY: 20,
                                children: (0,
                                d.jsx)(ev, {
                                    className: "badge-image",
                                    src: i,
                                    alt: "badge"
                                })
                            })
                        }), i && (0,
                        d.jsx)(d.Fragment, {
                            children: (0,
                            d.jsx)("h1", {
                                children: c
                            })
                        }), (0,
                        d.jsx)("p", {
                            className: "message",
                            children: p
                        }), h && (0,
                        d.jsx)("div", {
                            className: "add-to-linkedin",
                            children: (0,
                            d.jsx)(z(), {
                                href: "https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=".concat(c, "&organizationId=86062521&issueYear=").concat(v, "&issueMonth=").concat(j, "&certUrl=").concat(m.ui.certUrl, "&certId=").concat(m.credential.id),
                                className: "nes-pointer nes-btn is-primary ",
                                children: "Add to LinkedIn"
                            })
                        })]
                    })
                })
            }) : null
        };
        let ek = {
            "Cod\xe9dex Summer Hackathon 2024 Hacker": {
                name: "Summer Hackathon '24 Hacker",
                img: "/images/badges/summer-hackathon-2024/summer-2024-hackathon-hacker.png",
                msg: "This badge is awarded to the 259 teams that completed the Cod\xe9dex Summer Hackathon 2024 on July 11-12th, celebrating their innovation, creativity, and dedication."
            },
            "Summer Hackathon 2024 Hacker": {
                name: "Summer Hackathon '24 Hacker",
                img: "/images/badges/summer-hackathon-2024/summer-2024-hackathon-hacker.png",
                msg: "This badge is awarded to the 259 teams that completed the Cod\xe9dex Summer Hackathon 2024 on July 11-12th, celebrating their innovation, creativity, and dedication."
            },
            "Summer Hackathon '24 Hacker": {
                name: "Summer Hackathon '24 Hacker",
                img: "/images/badges/summer-hackathon-2024/summer-2024-hackathon-hacker.png",
                msg: "This badge is awarded to the 259 teams that completed the Cod\xe9dex Summer Hackathon 2024 on July 11-12th, celebrating their innovation, creativity, and dedication."
            },
            "Cod\xe9dex Summer Hackathon 2024 Winner": {
                name: "Summer Hackathon '24 Winner",
                img: "/images/badges/summer-hackathon-2024/summer-2024-hackathon-winner.png",
                msg: "This badge is awarded to winners of the Cod\xe9dex Summer Hackathon 2024, where 2,014 hackers competed on July 11th-12th."
            },
            "Summer Hackathon 2024 Winner": {
                name: "Summer Hackathon '24 Winner",
                img: "/images/badges/summer-hackathon-2024/summer-2024-hackathon-winner.png",
                msg: "This badge is awarded to winners of the Cod\xe9dex Summer Hackathon 2024, where 2,014 hackers competed on July 11th-12th."
            },
            "Summer Hackathon '24 Winner": {
                name: "Summer Hackathon '24 Winner",
                img: "/images/badges/summer-hackathon-2024/summer-2024-hackathon-winner.png",
                msg: "This badge is awarded to winners of the Cod\xe9dex Summer Hackathon 2024, where 2,014 hackers competed on July 11th-12th."
            },
            "club-for-life": {
                name: "Club For Life",
                img: "/images/badges/club-for-life/club-for-life.png",
                msg: "This badge is awarded to lifelong learners of Cod\xe9dex, celebrating their dedication and commitment to continuous learning and growth in the field of coding."
            },
            "Club for Life": {
                name: "Club For Life",
                img: "/images/badges/club-for-life/club-for-life.png",
                msg: "This badge is awarded to lifelong learners of Cod\xe9dex, celebrating their dedication and commitment to continuous learning and growth in the field of coding."
            },
            "Monthly Challenge 2024": {
                name: "Monthly Challenge Winner",
                img: "/images/badges/monthly-challenge-winner-badge.png",
                msg: e => "This badge is awarded to participants of the Cod\xe9dex Monthly Challenge! ".concat(e > 1 ? "Won ".concat(e, " monthly challenges!") : "")
            },
            "campus-tour-2024": {
                name: "Campus Tour 2024",
                img: "/images/badges/campus-tour.png",
                msg: "This badge is awarded to attendees of the 2024 Cod\xe9dex Campus Tour who participated in one of our events."
            },
            "Mini Holiday Hackathon 2024 Hacker": {
                name: "Holiday Hackathon '24 Hacker",
                img: "/images/badges/mini-holiday-hackathon-2024/mini-holiday-hackathon-hacker.png",
                msg: "This badge is awarded to the participants that completed the Cod\xe9dex Mini Holiday Hackathon 2024 hosted during December 13-15th, celebrating their innovation, creativity, and dedication."
            },
            "Mini Holiday Hackathon 2024 Winner": {
                name: "Holiday Hackathon '24 Winner",
                img: "/images/badges/mini-holiday-hackathon-2024/mini-holiday-hackathon-winner.png",
                msg: "This badge is awarded to winners of the Cod\xe9dex Mini Holiday Hackathon 2024, where 1,234 hackers competed on December 13-15th."
            },
            "Holiday Hackathon 2024 Hacker": {
                name: "Holiday Hackathon '24 Hacker",
                img: "/images/badges/mini-holiday-hackathon-2024/mini-holiday-hackathon-hacker.png",
                msg: "This badge is awarded to the participants that completed the Cod\xe9dex Mini Holiday Hackathon 2024 hosted during December 13-15th, celebrating their innovation, creativity, and dedication."
            },
            "Holiday Hackathon 2024 Winner": {
                name: "Holiday Hackathon '24 Winner",
                img: "/images/badges/mini-holiday-hackathon-2024/mini-holiday-hackathon-winner.png",
                msg: "This badge is awarded to winners of the Cod\xe9dex Mini Holiday Hackathon 2024, where 1,234 hackers competed on December 13-15th."
            }
        };
        function AchievementBadges_templateObject() {
            let e = (0,
            c._)(["\n  .achievements-container {\n    border: 2px solid ", ";\n    background-color: ", ";\n    border-radius: 25px;\n    color: ", ';\n    padding: 1.5rem;\n\n    p.achievement-heading {\n      font-size: 14px;\n      font-weight: 600;\n      font-family: "Work Sans", sans-serif;\n      line-height: 16.42px;\n      margin-bottom: 0.75rem;\n    }\n\n    .badges-container {\n      display: flex;\n      gap: 10px;\n      background-color: ', ";\n      border-radius: 12px;\n      border: ", ';\n      min-height: 44px;\n      padding: 0.5rem 0.75rem;\n      flex-wrap: wrap;\n\n      position: relative;\n\n      img {\n        width: 32px;\n        height: 32px;\n      }\n\n      //.number {\n      //position: absolute;\n      //top: -5px;\n      //right: -5px;\n      //color: #fff;\n      //font-size: 10px;\n      //font-style: normal;\n      //font-weight: 700;\n      //line-height: normal;\n      //border-radius: 1000px;\n      //background-color: #0080d4;\n      //padding: 2px 4px;\n      //}\n\n      .badge-hover {\n        position: relative;\n        .badge-image {\n          filter: drop-shadow(2px 0px 2px black);\n        }\n        .hover {\n          display: none;\n        }\n      }\n\n      .badge-hover:hover {\n        .hover {\n          display: block;\n          font-family: "Work Sans", sans-serif;\n          font-weight: 500;\n          position: absolute;\n          top: -40px;\n          color: rgba(255, 255, 255, 0.87);\n          font-size: 13px;\n          white-space: nowrap;\n          padding: 7px 10px;\n          border-radius: 7px;\n          background-color: #0f1524;\n          animation: slidein 0.2s ease-out;\n          pointer-events: none;\n          z-index: 1;\n          // center over badge\n          right: 50%;\n          transform: translateX(50%);\n\n          @keyframes slidein {\n            from {\n              top: -35px;\n            }\n            to {\n              top: -40px;\n            }\n          }\n        }\n      }\n    }\n  }\n']);
            return AchievementBadges_templateObject = function() {
                return e
            }
            ,
            e
        }
        let ey = p.default.div.withConfig({
            componentId: "sc-657e5c59-0"
        })(AchievementBadges_templateObject(), e => e.theme.colors.profileBorder, e => e.theme.colors.profileBackground, e => "dark" === e.theme.mode ? "#d6e3ff" : "#333333", e => "dark" === e.theme.mode ? "#25314B" : "rgb(218, 218, 218)", e => "");
        var profile_AchievementBadges = function(e) {
            let {TopBarStyles: t, accountUid: i, username: c} = e
              , p = (0,
            A.useRouter)()
              , [m,h] = (0,
            x.useState)([])
              , g = (0,
            u.v9)(y.f8)
              , [f,b] = (0,
            x.useState)({});
            return (0,
            x.useEffect)( () => {
                (async function() {
                    try {
                        let e = await fetch("/api/cert/badges/userBadges", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                username: c
                            })
                        })
                          , t = await e.json();
                        if ("success" === t.status) {
                            let e = {};
                            t.data.forEach(t => {
                                e[t.ui.badgeInternalName] ? e[t.ui.badgeInternalName] += 1 : e[t.ui.badgeInternalName] = 1
                            }
                            );
                            let i = t.data.filter( (e, t, i) => t === i.findIndex(t => t.ui.badgeInternalName === e.ui.badgeInternalName));
                            h(i),
                            b(e)
                        } else
                            console.error("Failed to fetch badges")
                    } catch (e) {}
                }
                )()
            }
            , [c]),
            (0,
            x.useEffect)( () => {
                let e = p.query.badgeType
                  , t = document.getElementById("profile-badge-target-scroll");
                e && t && t.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest"
                })
            }
            , [p, m]),
            0 !== m.length ? (0,
            d.jsxs)(ey, {
                children: [(0,
                d.jsxs)(d.Fragment, {
                    children: [(0,
                    d.jsx)(t, {
                        className: "top-bar",
                        children: (0,
                        d.jsx)("p", {
                            id: "achievements-display",
                            children: "Achievements"
                        })
                    }), (0,
                    d.jsx)("div", {
                        className: "achievements-container",
                        children: (0,
                        d.jsx)("div", {
                            className: "badges-container",
                            children: m.map(e => {
                                var t, c, p, m, h, u, x, b, v, j, w, k, y, A, C, F, S, E, N, P, _, O, B, I, T, M, z, U, L, H, D, W, Y, X, R, Z, q, Q, J, G, V, K;
                                if (!e.ui.canAddToLinkedIn || i !== g)
                                    return (0,
                                    d.jsxs)("span", {
                                        className: "badge-hover nes-pointer",
                                        onClick: () => {
                                            var t;
                                            null === (t = document.querySelector("dialog.".concat(e.ui.badgeInternalName))) || void 0 === t || t.showModal()
                                        }
                                        ,
                                        children: [(0,
                                        d.jsx)("img", {
                                            src: (null === (P = ek[null == e ? void 0 : null === (_ = e.ui) || void 0 === _ ? void 0 : _.name]) || void 0 === P ? void 0 : P.img) || (null == e ? void 0 : null === (O = e.ui) || void 0 === O ? void 0 : O.img) || "",
                                            alt: (null == e ? void 0 : null === (B = e.ui) || void 0 === B ? void 0 : B.name) || ""
                                        }, (null == e ? void 0 : null === (I = e.ui) || void 0 === I ? void 0 : I.name) || ""), (0,
                                        d.jsx)("span", {
                                            className: "hover",
                                            children: (null === (T = ek[null == e ? void 0 : null === (M = e.ui) || void 0 === M ? void 0 : M.name]) || void 0 === T ? void 0 : T.name) || (null == e ? void 0 : null === (z = e.ui) || void 0 === z ? void 0 : z.name) || ""
                                        }), (0,
                                        d.jsx)(profile_AchBadgeDialog, {
                                            badge: e,
                                            badgeImg: (null === (U = ek[null == e ? void 0 : null === (L = e.ui) || void 0 === L ? void 0 : L.name]) || void 0 === U ? void 0 : U.img) || (null == e ? void 0 : null === (H = e.ui) || void 0 === H ? void 0 : H.img) || "",
                                            badgeName: (null === (D = ek[null == e ? void 0 : null === (W = e.ui) || void 0 === W ? void 0 : W.name]) || void 0 === D ? void 0 : D.name) || (null == e ? void 0 : null === (Y = e.ui) || void 0 === Y ? void 0 : Y.name) || "",
                                            badgeMessage: "function" == typeof (null === (X = ek[null == e ? void 0 : null === (R = e.ui) || void 0 === R ? void 0 : R.name]) || void 0 === X ? void 0 : X.msg) ? null === (q = ek[null == e ? void 0 : null === (Q = e.ui) || void 0 === Q ? void 0 : Q.name]) || void 0 === q ? void 0 : q.msg(f[null == e ? void 0 : null === (Z = e.ui) || void 0 === Z ? void 0 : Z.badgeInternalName]) : (null === (J = ek[null == e ? void 0 : null === (G = e.ui) || void 0 === G ? void 0 : G.name]) || void 0 === J ? void 0 : J.msg) || (null == e ? void 0 : null === (V = e.ui) || void 0 === V ? void 0 : V.name) || "",
                                            showLinkedinBtn: !1
                                        })]
                                    }, null == e ? void 0 : null === (K = e.ui) || void 0 === K ? void 0 : K.name);
                                {
                                    let[i,g] = null === (t = e.ui) || void 0 === t ? void 0 : t.date.split("-");
                                    return (0,
                                    d.jsx)(d.Fragment, {
                                        children: (0,
                                        d.jsxs)("span", {
                                            className: "badge-hover nes-pointer",
                                            onClick: () => {
                                                var t;
                                                null === (t = document.querySelector("dialog.".concat(e.ui.badgeInternalName))) || void 0 === t || t.showModal()
                                            }
                                            ,
                                            children: [(0,
                                            d.jsx)("img", {
                                                src: (null === (c = ek[null == e ? void 0 : null === (p = e.ui) || void 0 === p ? void 0 : p.name]) || void 0 === c ? void 0 : c.img) || (null == e ? void 0 : null === (m = e.ui) || void 0 === m ? void 0 : m.img),
                                                alt: null == e ? void 0 : null === (h = e.ui) || void 0 === h ? void 0 : h.name
                                            }, null == e ? void 0 : null === (u = e.ui) || void 0 === u ? void 0 : u.name), (0,
                                            d.jsx)("span", {
                                                className: "hover",
                                                children: (null === (x = ek[null == e ? void 0 : null === (b = e.ui) || void 0 === b ? void 0 : b.name]) || void 0 === x ? void 0 : x.name) || (null == e ? void 0 : null === (v = e.ui) || void 0 === v ? void 0 : v.name)
                                            }), (0,
                                            d.jsx)(profile_AchBadgeDialog, {
                                                badge: e,
                                                badgeImg: (null === (j = ek[null == e ? void 0 : null === (w = e.ui) || void 0 === w ? void 0 : w.name]) || void 0 === j ? void 0 : j.img) || (null == e ? void 0 : null === (k = e.ui) || void 0 === k ? void 0 : k.img),
                                                badgeName: (null === (y = ek[null == e ? void 0 : null === (A = e.ui) || void 0 === A ? void 0 : A.name]) || void 0 === y ? void 0 : y.name) || (null == e ? void 0 : null === (C = e.ui) || void 0 === C ? void 0 : C.name),
                                                badgeMessage: (null === (F = ek[null == e ? void 0 : null === (S = e.ui) || void 0 === S ? void 0 : S.name]) || void 0 === F ? void 0 : F.msg) || (null == e ? void 0 : null === (E = e.ui) || void 0 === E ? void 0 : E.name)
                                            })]
                                        }, null == e ? void 0 : null === (N = e.ui) || void 0 === N ? void 0 : N.name)
                                    })
                                }
                            }
                            )
                        })
                    })]
                }), (0,
                d.jsx)("div", {
                    id: "profile-badge-target-scroll"
                })]
            }) : null
        };
        function _username_templateObject() {
            let e = (0,
            c._)(["\n  ", " {\n    padding-top: 3.75rem;\n    display: flex;\n    justify-content: center;\n    min-height: 100vh;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-bottom: 0rem;\n\n    .profile-container {\n      width: 100%;\n\n      .profile-grid {\n        margin-top: 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 2rem;\n\n        .grid-item {\n          display: flex;\n          flex-direction: column;\n          gap: 2rem;\n        }\n      }\n    }\n  }\n\n  ", " {\n    padding-left: 1rem;\n    padding-right: 1rem;\n\n    .profile-container {\n      .profile-grid {\n        display: grid;\n        grid-template-columns: minmax(0, 1.35fr) 4fr;\n        gap: 1rem;\n      }\n    }\n  }\n  ", " {\n    padding-left: 0rem;\n    padding-right: 0rem;\n  }\n"]);
            return _username_templateObject = function() {
                return e
            }
            ,
            e
        }
        function _username_templateObject1() {
            let e = (0,
            c._)(["\n  border-top: 2px solid ", ";\n  position: relative;\n  margin-bottom: 1.5rem;\n\n  p {\n    margin: 0px;\n    line-height: 1;\n    color: ", ";\n    width: fit-content;\n    border: 2px solid ", ";\n    font-size: 11px;\n    padding: 9px;\n    border-radius: 12px;\n    position: absolute;\n    top: -19.5px;\n    left: 12px;\n    background-color: ", ";\n  }\n"]);
            return _username_templateObject1 = function() {
                return e
            }
            ,
            e
        }
        let eA = p.default.div.withConfig({
            componentId: "sc-34a680c4-0"
        })(_username_templateObject(), e => {
            let {theme: t} = e;
            return t.breakpoints.xs
        }
        , e => {
            let {theme: t} = e;
            return t.breakpoints.sm
        }
        , e => {
            let {theme: t} = e;
            return t.breakpoints.md
        }
        )
          , eC = p.default.div.withConfig({
            componentId: "sc-34a680c4-1"
        })(_username_templateObject1(), e => e.theme.colors.profileBorder, e => "dark" === e.theme.mode ? "#d6e3ff" : "#333333", e => e.theme.colors.profileBorder, e => e.theme.colors.body);
        var eF = !0
          , _username_ = function() {
            var e, t, i;
            let[c,p] = (0,
            x.useState)(!0)
              , [m,b] = (0,
            x.useState)(null)
              , [v,j] = (0,
            x.useState)(null)
              , [w,k] = (0,
            x.useState)(!1)
              , [C,F] = (0,
            x.useState)({})
              , S = (0,
            u.v9)(y.f8)
              , E = (0,
            A.useRouter)();
            return ((0,
            x.useEffect)(function() {
                let {username: e} = E.query;
                if ("string" == typeof e && "@" !== e.at(0)) {
                    E.push("/404");
                    return
                }
                async function fetchUserData() {
                    if (!e)
                        return setTimeout(fetchUserData, 1e3);
                    let t = (0,
                    _.rg)({
                        username: e
                    })
                      , i = t;
                    if (null === t) {
                        let t = await fetch("/api/fullUserProfile", {
                            method: "POST",
                            body: JSON.stringify({
                                username: e
                            })
                        });
                        i = await t.json()
                    }
                    if ("fail" === i.status)
                        k(!0);
                    else {
                        let {data: e} = i
                          , t = e.user;
                        b(t),
                        j(e.userProgressState),
                        F({
                            clud: !1,
                            name: t.name,
                            photoURL: t.photoURL,
                            totalXp: t.stats.totalXp,
                            username: t.username
                        })
                    }
                }
                fetchUserData()
            }, [E]),
            (0,
            x.useEffect)( () => {
                let e = setTimeout( () => {
                    p(!1)
                }
                , 890);
                return () => clearTimeout(e)
            }
            , []),
            c) ? (0,
            d.jsx)(ef.Z, {}) : (0,
            d.jsxs)("div", {
                style: {
                    height: "100vh",
                    marginBottom: "5rem"
                },
                children: [(0,
                d.jsx)(h(), {
                    children: w ? (0,
                    d.jsx)("title", {
                        children: "User not found | Cod\xe9dex"
                    }) : (0,
                    d.jsxs)("title", {
                        children: [(null == m ? void 0 : m.firstName) || "", " ", (null == m ? void 0 : m.lastName) || "", " (@", null == m ? void 0 : m.username, ") | Cod\xe9dex"]
                    })
                }), (0,
                d.jsx)(f.Z, {}), (0,
                d.jsx)(g.Z, {
                    children: (0,
                    d.jsx)(eA, {
                        children: w ? (0,
                        d.jsx)(atoms_NoUser, {}) : (0,
                        d.jsxs)("div", {
                            className: "profile-container",
                            children: [(0,
                            d.jsx)(profile_ProfileBanner, {
                                name: (null == m ? void 0 : m.firstName) + " " + (null == m ? void 0 : m.lastName),
                                username: null == m ? void 0 : m.username,
                                photoURL: null == m ? void 0 : m.photoURL,
                                followData: null == m ? void 0 : m.followerData,
                                accountUid: null == m ? void 0 : m.uid,
                                bannerImage: null == m ? void 0 : m.profileData.bannerImage,
                                loading: null == m
                            }), (0,
                            d.jsxs)("div", {
                                className: "profile-grid",
                                children: [(0,
                                d.jsxs)("div", {
                                    className: "grid-item",
                                    children: [(0,
                                    d.jsx)(profile_Bio, {
                                        TopBarStyles: eC,
                                        totalXp: null == m ? void 0 : null === (e = m.stats) || void 0 === e ? void 0 : e.totalXp,
                                        bioText: null == m ? void 0 : m.bio,
                                        location: null == m ? void 0 : m.location,
                                        education: null == m ? void 0 : m.school,
                                        work: null == m ? void 0 : m.work,
                                        joined: null == m ? void 0 : null === (t = m.metadata) || void 0 === t ? void 0 : t.creationTime,
                                        social: null == m ? void 0 : m.socials,
                                        isLoggedInUsersAccount: S === (null == m ? void 0 : m.uid),
                                        loading: null == m
                                    }), (0,
                                    d.jsx)(profile_Skills, {
                                        TopBarStyles: eC,
                                        skills: null == m ? void 0 : m.skillset,
                                        isLoggedInUsersAccount: S === (null == m ? void 0 : m.uid),
                                        loading: null == m
                                    }), m && (0,
                                    d.jsxs)(d.Fragment, {
                                        children: [(0,
                                        d.jsx)(profile_PetCafe, {
                                            TopBarStyles: eC,
                                            accountUid: m.uid,
                                            username: m.username,
                                            isLoggedInUsersAccount: S === (null == m ? void 0 : m.uid)
                                        }), (0,
                                        d.jsx)(profile_AchievementBadges, {
                                            TopBarStyles: eC,
                                            accountUid: m.uid,
                                            username: m.username
                                        })]
                                    })]
                                }), (0,
                                d.jsxs)("div", {
                                    className: "grid-item",
                                    children: [((null == m ? void 0 : null === (i = m.pinnedProjects) || void 0 === i ? void 0 : i.length) != 0 || S === (null == m ? void 0 : m.uid)) && (0,
                                    d.jsx)(d.Fragment, {
                                        children: !c && (0,
                                        d.jsx)(profile_PinnedProjects, {
                                            TopBarStyles: eC,
                                            pinnedProjects: null == m ? void 0 : m.pinnedProjects,
                                            pinnnedProjectIds: null == m ? void 0 : m.profileData.pinnedProjects,
                                            accountUid: null == m ? void 0 : m.uid,
                                            username: null == m ? void 0 : m.username,
                                            loading: null == m
                                        })
                                    }), (0,
                                    d.jsx)(profile_Stats, {
                                        TopBarStyles: eC,
                                        stats: null == m ? void 0 : m.stats,
                                        courses: v,
                                        loading: null == m
                                    }), (0,
                                    d.jsx)(profile_ContentHub, {
                                        numberOfPosts: null == m ? void 0 : m.numberOfOpcPosts,
                                        numberOfProjects: null == m ? void 0 : m.numberOfProjects,
                                        opcPosts: null == m ? void 0 : m.opcPosts,
                                        accountUid: null == m ? void 0 : m.uid,
                                        isLoggedInUsersAccount: S === (null == m ? void 0 : m.uid),
                                        loading: null == m,
                                        authorDataForOpcPost: C
                                    })]
                                })]
                            })]
                        }, null == m ? void 0 : m.uid)
                    })
                }), (0,
                d.jsx)(ex.Z, {
                    style: {
                        position: "sticky",
                        top: "100%"
                    }
                })]
            })
        }
    },
    77521: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var c = i(67294);
        "function" == typeof SuppressedError && SuppressedError;
        let n = (e, t, i, c) => {
            e.style.transition = `${t} ${i}ms ${c}`
        }
          , s = (e, t, i) => Math.min(Math.max(e, t), i);
        let r = class r {
            constructor(e, t) {
                this.glareAngle = 0,
                this.glareOpacity = 0,
                this.calculateGlareSize = e => {
                    let {width: t, height: i} = e
                      , c = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2));
                    return {
                        width: c,
                        height: c
                    }
                }
                ,
                this.setSize = e => {
                    let t = this.calculateGlareSize(e);
                    this.glareEl.style.width = `${t.width}px`,
                    this.glareEl.style.height = `${t.height}px`
                }
                ,
                this.update = (e, t, i, c) => {
                    this.updateAngle(e, t.glareReverse),
                    this.updateOpacity(e, t, i, c)
                }
                ,
                this.updateAngle = (e, t) => {
                    let {xPercentage: i, yPercentage: c} = e;
                    this.glareAngle = (i ? Math.atan2(c, -i) * (180 / Math.PI) : 0) - (t ? 180 : 0)
                }
                ,
                this.updateOpacity = (e, t, i, c) => {
                    let {xPercentage: d, yPercentage: p} = e
                      , {glarePosition: m, glareReverse: h, glareMaxOpacity: u} = t
                      , g = i ? -1 : 1
                      , f = c ? -1 : 1
                      , x = h ? -1 : 1
                      , b = 0;
                    switch (m) {
                    case "top":
                        b = -d * g * x;
                        break;
                    case "right":
                        b = p * f * x;
                        break;
                    case "bottom":
                    case void 0:
                        b = d * g * x;
                        break;
                    case "left":
                        b = -p * f * x;
                        break;
                    case "all":
                        b = Math.hypot(d, p)
                    }
                    let v = s(b, 0, 100);
                    this.glareOpacity = v * u / 100
                }
                ,
                this.render = e => {
                    let {glareColor: t} = e;
                    this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`,
                    this.glareEl.style.opacity = this.glareOpacity.toString(),
                    this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`
                }
                ,
                this.glareWrapperEl = document.createElement("div"),
                this.glareEl = document.createElement("div"),
                this.glareWrapperEl.appendChild(this.glareEl),
                this.glareWrapperEl.className = "glare-wrapper",
                this.glareEl.className = "glare";
                let i = this.calculateGlareSize(e)
                  , c = {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0% 0%",
                    pointerEvents: "none",
                    width: `${i.width}px`,
                    height: `${i.height}px`
                };
                Object.assign(this.glareWrapperEl.style, {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: t,
                    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                    pointerEvents: "none"
                }),
                Object.assign(this.glareEl.style, c)
            }
        }
        ;
        let l = class l {
            constructor() {
                this.glareAngle = 0,
                this.glareOpacity = 0,
                this.tiltAngleX = 0,
                this.tiltAngleY = 0,
                this.tiltAngleXPercentage = 0,
                this.tiltAngleYPercentage = 0,
                this.update = (e, t) => {
                    this.updateTilt(e, t),
                    this.updateTiltManualInput(e, t),
                    this.updateTiltReverse(t),
                    this.updateTiltLimits(t)
                }
                ,
                this.updateTilt = (e, t) => {
                    let {xPercentage: i, yPercentage: c} = e
                      , {tiltMaxAngleX: d, tiltMaxAngleY: p} = t;
                    this.tiltAngleX = i * d / 100,
                    this.tiltAngleY = -(c * p / 100 * 1)
                }
                ,
                this.updateTiltManualInput = (e, t) => {
                    let {tiltAngleXManual: i, tiltAngleYManual: c, tiltMaxAngleX: d, tiltMaxAngleY: p} = t;
                    (null !== i || null !== c) && (this.tiltAngleX = null !== i ? i : 0,
                    this.tiltAngleY = null !== c ? c : 0,
                    e.xPercentage = 100 * this.tiltAngleX / d,
                    e.yPercentage = 100 * this.tiltAngleY / p)
                }
                ,
                this.updateTiltReverse = e => {
                    let t = e.tiltReverse ? -1 : 1;
                    this.tiltAngleX = t * this.tiltAngleX,
                    this.tiltAngleY = t * this.tiltAngleY
                }
                ,
                this.updateTiltLimits = e => {
                    let {tiltAxis: t} = e;
                    this.tiltAngleX = s(this.tiltAngleX, -90, 90),
                    this.tiltAngleY = s(this.tiltAngleY, -90, 90),
                    t && (this.tiltAngleX = "x" === t ? this.tiltAngleX : 0,
                    this.tiltAngleY = "y" === t ? this.tiltAngleY : 0)
                }
                ,
                this.updateTiltAnglesPercentage = e => {
                    let {tiltMaxAngleX: t, tiltMaxAngleY: i} = e;
                    this.tiltAngleXPercentage = this.tiltAngleX / t * 100,
                    this.tiltAngleYPercentage = this.tiltAngleY / i * 100
                }
                ,
                this.render = e => {
                    e.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `
                }
            }
        }
        ;
        let d = Object.assign(Object.assign({
            scale: 1,
            perspective: 1e3,
            flipVertically: !1,
            flipHorizontally: !1,
            reset: !0,
            transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
            transitionSpeed: 400,
            trackOnWindow: !1,
            gyroscope: !1
        }, {
            tiltEnable: !0,
            tiltReverse: !1,
            tiltAngleXInitial: 0,
            tiltAngleYInitial: 0,
            tiltMaxAngleX: 20,
            tiltMaxAngleY: 20,
            tiltAxis: void 0,
            tiltAngleXManual: null,
            tiltAngleYManual: null
        }), {
            glareEnable: !1,
            glareMaxOpacity: .7,
            glareColor: "#ffffff",
            glarePosition: "bottom",
            glareReverse: !1,
            glareBorderRadius: "0"
        });
        let o = class o extends c.PureComponent {
            constructor() {
                super(...arguments),
                this.wrapperEl = {
                    node: null,
                    size: {
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    },
                    clientPosition: {
                        x: null,
                        y: null,
                        xPercentage: 0,
                        yPercentage: 0
                    },
                    updateAnimationId: null,
                    scale: 1
                },
                this.tilt = null,
                this.glare = null,
                this.addDeviceOrientationEventListener = () => {
                    var e, t, i, c;
                    return e = this,
                    t = void 0,
                    i = void 0,
                    c = function*() {
                        if (!window.DeviceOrientationEvent)
                            return;
                        let e = DeviceOrientationEvent.requestPermission;
                        "function" == typeof e ? "granted" === (yield e()) && window.addEventListener("deviceorientation", this.onMove) : window.addEventListener("deviceorientation", this.onMove)
                    }
                    ,
                    new (i || (i = Promise))(function(d, p) {
                        function l(e) {
                            try {
                                o(c.next(e))
                            } catch (e) {
                                p(e)
                            }
                        }
                        function a(e) {
                            try {
                                o(c.throw(e))
                            } catch (e) {
                                p(e)
                            }
                        }
                        function o(e) {
                            var t;
                            e.done ? d(e.value) : ((t = e.value)instanceof i ? t : new i(function(e) {
                                e(t)
                            }
                            )).then(l, a)
                        }
                        o((c = c.apply(e, t || [])).next())
                    }
                    )
                }
                ,
                this.setSize = () => {
                    this.setWrapperElSize(),
                    this.glare && this.glare.setSize(this.wrapperEl.size)
                }
                ,
                this.mainLoop = e => {
                    null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId),
                    this.processInput(e),
                    this.update(e.type),
                    this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame)
                }
                ,
                this.onEnter = e => {
                    let {onEnter: t} = this.props;
                    this.setSize(),
                    this.wrapperEl.node.style.willChange = "transform",
                    this.setTransitions(),
                    t && t(e.type)
                }
                ,
                this.onMove = e => {
                    this.mainLoop(e),
                    this.emitOnMove(e)
                }
                ,
                this.onLeave = e => {
                    let {onLeave: t} = this.props;
                    if (this.setTransitions(),
                    t && t(e.type),
                    this.props.reset) {
                        let e = new CustomEvent("autoreset");
                        this.onMove(e)
                    }
                }
                ,
                this.processInput = e => {
                    let {scale: t} = this.props;
                    switch (e.type) {
                    case "mousemove":
                        this.wrapperEl.clientPosition.x = e.pageX,
                        this.wrapperEl.clientPosition.y = e.pageY,
                        this.wrapperEl.scale = t;
                        break;
                    case "touchmove":
                        this.wrapperEl.clientPosition.x = e.touches[0].pageX,
                        this.wrapperEl.clientPosition.y = e.touches[0].pageY,
                        this.wrapperEl.scale = t;
                        break;
                    case "deviceorientation":
                        this.processInputDeviceOrientation(e),
                        this.wrapperEl.scale = t;
                        break;
                    case "autoreset":
                        let {tiltAngleXInitial: i, tiltAngleYInitial: c, tiltMaxAngleX: d, tiltMaxAngleY: p} = this.props;
                        this.wrapperEl.clientPosition.xPercentage = s(i / d * 100, -100, 100),
                        this.wrapperEl.clientPosition.yPercentage = s(c / p * 100, -100, 100),
                        this.wrapperEl.scale = 1
                    }
                }
                ,
                this.processInputDeviceOrientation = e => {
                    if (!e.gamma || !e.beta || !this.props.gyroscope)
                        return;
                    let {tiltMaxAngleX: t, tiltMaxAngleY: i} = this.props
                      , c = e.gamma;
                    this.wrapperEl.clientPosition.xPercentage = e.beta / t * 100,
                    this.wrapperEl.clientPosition.yPercentage = c / i * 100,
                    this.wrapperEl.clientPosition.xPercentage = s(this.wrapperEl.clientPosition.xPercentage, -100, 100),
                    this.wrapperEl.clientPosition.yPercentage = s(this.wrapperEl.clientPosition.yPercentage, -100, 100)
                }
                ,
                this.update = e => {
                    let {tiltEnable: t, flipVertically: i, flipHorizontally: c} = this.props;
                    "autoreset" !== e && "deviceorientation" !== e && "propChange" !== e && this.updateClientInput(),
                    t && this.tilt.update(this.wrapperEl.clientPosition, this.props),
                    this.updateFlip(),
                    this.tilt.updateTiltAnglesPercentage(this.props),
                    this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, i, c)
                }
                ,
                this.updateClientInput = () => {
                    let e, t;
                    let {trackOnWindow: i} = this.props;
                    if (i) {
                        let {x: i, y: c} = this.wrapperEl.clientPosition;
                        e = c / window.innerHeight * 200 - 100,
                        t = i / window.innerWidth * 200 - 100
                    } else {
                        let {size: {width: i, height: c, left: d, top: p}, clientPosition: {x: m, y: h}} = this.wrapperEl;
                        e = (h - p) / c * 200 - 100,
                        t = (m - d) / i * 200 - 100
                    }
                    this.wrapperEl.clientPosition.xPercentage = s(e, -100, 100),
                    this.wrapperEl.clientPosition.yPercentage = s(t, -100, 100)
                }
                ,
                this.updateFlip = () => {
                    let {flipVertically: e, flipHorizontally: t} = this.props;
                    e && (this.tilt.tiltAngleX += 180,
                    this.tilt.tiltAngleY *= -1),
                    t && (this.tilt.tiltAngleY += 180)
                }
                ,
                this.renderFrame = () => {
                    this.resetWrapperElTransform(),
                    this.renderPerspective(),
                    this.tilt.render(this.wrapperEl.node),
                    this.renderScale(),
                    this.glare && this.glare.render(this.props)
                }
            }
            componentDidMount() {
                if (this.tilt = new l,
                this.initGlare(),
                this.addEventListeners(),
                "undefined" == typeof CustomEvent)
                    return;
                let e = new CustomEvent("autoreset");
                this.mainLoop(e);
                let t = new CustomEvent("initial");
                this.emitOnMove(t)
            }
            componentWillUnmount() {
                null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId),
                this.removeEventListeners()
            }
            componentDidUpdate() {
                let e = new CustomEvent("propChange");
                this.mainLoop(e),
                this.emitOnMove(e)
            }
            addEventListeners() {
                let {trackOnWindow: e, gyroscope: t} = this.props;
                window.addEventListener("resize", this.setSize),
                e && (window.addEventListener("mouseenter", this.onEnter),
                window.addEventListener("mousemove", this.onMove),
                window.addEventListener("mouseout", this.onLeave),
                window.addEventListener("touchstart", this.onEnter),
                window.addEventListener("touchmove", this.onMove),
                window.addEventListener("touchend", this.onLeave)),
                t && this.addDeviceOrientationEventListener()
            }
            removeEventListeners() {
                let {trackOnWindow: e, gyroscope: t} = this.props;
                window.removeEventListener("resize", this.setSize),
                e && (window.removeEventListener("mouseenter", this.onEnter),
                window.removeEventListener("mousemove", this.onMove),
                window.removeEventListener("mouseout", this.onLeave),
                window.removeEventListener("touchstart", this.onEnter),
                window.removeEventListener("touchmove", this.onMove),
                window.removeEventListener("touchend", this.onLeave)),
                t && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove)
            }
            setWrapperElSize() {
                let e = this.wrapperEl.node.getBoundingClientRect();
                this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth,
                this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight,
                this.wrapperEl.size.left = e.left + window.scrollX,
                this.wrapperEl.size.top = e.top + window.scrollY
            }
            initGlare() {
                let {glareEnable: e, glareBorderRadius: t} = this.props;
                e && (this.glare = new r(this.wrapperEl.size,t),
                this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))
            }
            emitOnMove(e) {
                let {onMove: t} = this.props;
                if (!t)
                    return;
                let i = 0
                  , c = 0;
                this.glare && (i = this.glare.glareAngle,
                c = this.glare.glareOpacity),
                t({
                    tiltAngleX: this.tilt.tiltAngleX,
                    tiltAngleY: this.tilt.tiltAngleY,
                    tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
                    tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
                    glareAngle: i,
                    glareOpacity: c,
                    eventType: e.type
                })
            }
            resetWrapperElTransform() {
                this.wrapperEl.node.style.transform = ""
            }
            renderPerspective() {
                let {perspective: e} = this.props;
                this.wrapperEl.node.style.transform += `perspective(${e}px) `
            }
            renderScale() {
                let {scale: e} = this.wrapperEl;
                this.wrapperEl.node.style.transform += `scale3d(${e},${e},${e})`
            }
            setTransitions() {
                let {transitionSpeed: e, transitionEasing: t} = this.props;
                n(this.wrapperEl.node, "all", e, t),
                this.glare && n(this.glare.glareEl, "opacity", e, t)
            }
            render() {
                let {children: e, className: t, style: i} = this.props;
                return c.createElement("div", {
                    ref: e => this.wrapperEl.node = e,
                    onMouseEnter: this.onEnter,
                    onMouseMove: this.onMove,
                    onMouseLeave: this.onLeave,
                    onTouchStart: this.onEnter,
                    onTouchMove: this.onMove,
                    onTouchEnd: this.onLeave,
                    className: t,
                    style: i
                }, e)
            }
        }
        ;
        o.defaultProps = d
    }
}, function(e) {
    e.O(0, [4617, 2013, 5937, 5445, 9378, 1582, 8494, 1706, 6961, 9513, 463, 9774, 2888, 179], function() {
        return e(e.s = 31932)
    }),
    _N_E = e.O()
}
]);
