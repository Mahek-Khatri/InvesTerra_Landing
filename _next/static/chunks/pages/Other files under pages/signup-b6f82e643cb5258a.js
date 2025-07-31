(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7616], {
    28575: function(n, e, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/signup", function() {
            return t(84939)
        }
        ])
    },
    84939: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            __N_SSG: function() {
                return U
            },
            default: function() {
                return signup
            }
        });
        var i = t(85893)
          , s = t(67294)
          , r = t(11163)
          , a = t(9473)
          , l = t(62286)
          , o = t.n(l)
          , c = t(71706)
          , u = t(82729)
          , d = t(19521)
          , p = t(41664)
          , x = t.n(p)
          , g = t(79450)
          , f = t(87536)
          , m = t(47010)
          , h = t(92369)
          , b = t(35258)
          , w = t(66207)
          , j = t(94322)
          , y = t(5479)
          , v = t(20759)
          , E = t(86417)
          , N = t(77172)
          , _ = t(73857)
          , S = t(42933)
          , k = t(85673)
          , I = t(73845);
        function _templateObject() {
            let n = (0,
            u._)(['\n  width: 100%;\n\n  .pixel-border {\n    background-color: #fff;\n    padding: 32px;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n\n    p {\n      margin: 0px;\n      font-family: "Mulish", sans-serif;\n    }\n\n    .button-container {\n      display: flex;\n      gap: 12px;\n\n      button {\n        flex: 1;\n\n        .btn-content {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n        }\n      }\n    }\n\n    .or-container {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n\n      p {\n        margin: 0px;\n        color: #64748b;\n        text-align: center;\n\n        font-size: 12px;\n        font-weight: 700;\n        line-height: normal;\n        letter-spacing: 1.68px;\n      }\n\n      div {\n        flex: 1;\n        height: 2px;\n        background-color: #e2e8f0;\n      }\n    }\n\n    form {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n\n      .input-fields {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n      }\n\n      .submit-btn-container {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n\n        button {\n          .loader {\n            margin-top: 5px;\n            line-height: 1;\n          }\n        }\n\n        p {\n          text-align: center;\n          margin: 0px;\n          color: #475569;\n          font-size: 14px;\n          font-style: normal;\n          font-weight: 500;\n\n          span {\n            text-decoration-line: underline;\n            text-underline-position: from-font;\n\n            a {\n              all: unset;\n            }\n          }\n        }\n      }\n    }\n\n    .need-account {\n      color: #020617;\n      text-align: center;\n\n      font-size: 16px;\n      font-weight: 500;\n\n      a {\n        color: #0065ab;\n        text-decoration-line: underline;\n        text-underline-position: from-font;\n      }\n    }\n\n    .reset-password {\n      text-align: center;\n      a {\n        color: #0065ab;\n\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 500;\n        line-height: 150%; /* 24px */\n        text-decoration-line: underline;\n\n        text-underline-position: from-font;\n      }\n    }\n  }\n']);
            return _templateObject = function() {
                return n
            }
            ,
            n
        }
        let T = d.default.main.withConfig({
            componentId: "sc-e8eb0bdf-0"
        })(_templateObject());
        var molecules_SignUp = function() {
            var n, e;
            let[t,a] = (0,
            s.useState)({})
              , [l,c] = (0,
            s.useState)(!1)
              , [u,d] = (0,
            s.useState)({
                accountExists: !1
            });
            (0,
            r.useRouter)();
            let[p,Z] = (0,
            s.useState)((0,
            j.I)())
              , [C,A] = (0,
            s.useState)(!1)
              , O = (0,
            I.T)()
              , U = (0,
            s.useRef)(null)
              , {register: z, handleSubmit: F, formState: {errors: L}} = (0,
            f.cI)()
              , M = (0,
            s.useCallback)(async function(n) {
                let {email: e, password: t} = n;
                c(!0);
                let {auth: i} = (0,
                h.UM)();
                try {
                    let n = await (0,
                    g.Xb)(i, e, t);
                    (0,
                    y.ur)({
                        uid: n.user.uid,
                        email: n.user.email,
                        name: n.user.displayName
                    }),
                    await new Promise(n => setTimeout(n, 100)),
                    (0,
                    y.Bd)(),
                    await (0,
                    g.w$)(n.user, {
                        url: "https://www.codedex.io/"
                    }),
                    o().set(null, "newSignup", "true", {
                        maxAge: 2592e3
                    });
                    let s = o().get(null)["ga-student"];
                    if ("true" === s) {
                        let e = await fetch("/api/account/set-ga-claims", {
                            method: "POST",
                            body: JSON.stringify({
                                uid: n.user.uid
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                          , t = await e.json();
                        t.success && o().destroy(null, "ga-student")
                    }
                    let r = await n.user.getIdToken();
                    o().set(null, "codedextoken", r, {
                        maxAge: 2592e3,
                        path: "/",
                        sameSite: "lax",
                        secure: !0
                    })
                } catch (n) {
                    if (U.current && (clearTimeout(U.current),
                    U.current = null),
                    n.code === g.kq.EMAIL_EXISTS) {
                        let n = await (0,
                        g.Nr)(i, e);
                        "google.com" === n[0] ? O((0,
                        k.fz)({
                            message: "Account exists. Use Login with Google."
                        })) : "password" === n[0] ? O((0,
                        k.fz)({
                            message: "Account exists. Use Email and Password to Login."
                        })) : O((0,
                        k.fz)({
                            message: "Account exists. Use Login with GitHub."
                        })),
                        a({
                            email: e,
                            provider: n[0]
                        }),
                        d({
                            accountExists: !0
                        }),
                        U.current = setTimeout( () => {
                            d({
                                accountExists: !1
                            }),
                            U.current = null
                        }
                        , 4e3)
                    }
                    if (n.code === g.kq.NEED_CONFIRMATION) {
                        let {email: e} = n.customData
                          , t = await (0,
                        g.Nr)(i, e);
                        a({
                            email: e,
                            provider: t[0]
                        }),
                        d({
                            accountExists: !0
                        }),
                        U.current = setTimeout( () => {
                            d({
                                accountExists: !1
                            }),
                            U.current = null
                        }
                        , 4e3)
                    }
                } finally {
                    c(!1)
                }
            }, [O])
              , P = (0,
            s.useCallback)(n => {
                let {email: e, password: t} = n;
                M({
                    email: e,
                    password: t
                })
            }
            , [M]);
            return (0,
            i.jsx)(T, {
                children: (0,
                i.jsxs)(v.Z, {
                    borderColor: "CBD5E1",
                    className: "pixel-border",
                    children: [p ? null : (0,
                    i.jsxs)(i.Fragment, {
                        children: [(0,
                        i.jsxs)("div", {
                            className: "button-container",
                            children: [(0,
                            i.jsx)(b.Z, {
                                setAccountExistsLocal: a,
                                children: "Google"
                            }), (0,
                            i.jsx)(w.Z, {
                                setAccountExistsLocal: a,
                                children: "GitHub"
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "or-container",
                            children: [(0,
                            i.jsx)("div", {}), (0,
                            i.jsx)("p", {
                                className: "or",
                                children: "OR"
                            }), (0,
                            i.jsx)("div", {})]
                        })]
                    }), (0,
                    i.jsxs)("form", {
                        onSubmit: F(P),
                        children: [(0,
                        i.jsxs)("div", {
                            className: "input-fields",
                            children: [(0,
                            i.jsx)(E.Z, {
                                placeholder: "Email",
                                register: {
                                    ...z("email", {
                                        required: !0,
                                        pattern: /^\S+@\S+$/i
                                    })
                                },
                                error: (null == L ? void 0 : null === (n = L.email) || void 0 === n ? void 0 : n.type) == "pattern" ? {
                                    type: "critical",
                                    message: "Invalid email"
                                } : (null == u ? void 0 : u.accountExists) == !0 ? {
                                    type: "critical",
                                    message: "Email already used by an account"
                                } : null
                            }), (0,
                            i.jsx)(E.Z, {
                                placeholder: "Password",
                                register: {
                                    ...z("password", {
                                        required: !0,
                                        pattern: /^.{6,}$/
                                    })
                                },
                                error: (null == L ? void 0 : null === (e = L.password) || void 0 === e ? void 0 : e.type) == "pattern" ? {
                                    type: "critical",
                                    message: "Password needs to contain at least 6 characters"
                                } : null,
                                type: C ? "text" : "password",
                                icon: C ? (0,
                                i.jsx)(S.Z, {}) : (0,
                                i.jsx)(N.Z, {}),
                                iconAction: () => A(!C)
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "submit-btn-container",
                            children: [(0,
                            i.jsx)(_.Z, {
                                variant: "blue",
                                type: "submit",
                                children: l ? (0,
                                i.jsx)(m.Z, {
                                    color: "#ffff",
                                    className: "loader",
                                    size: 13
                                }) : "Sign up for free"
                            }), (0,
                            i.jsxs)("p", {
                                children: ["By signing up, I agree to ", "Cod\xe9dex's", " ", (0,
                                i.jsx)("span", {
                                    className: "nes-pointer",
                                    children: (0,
                                    i.jsx)(x(), {
                                        href: "/terms",
                                        target: "_blank",
                                        children: "Terms"
                                    })
                                }), "."]
                            })]
                        })]
                    }), (0,
                    i.jsxs)("p", {
                        className: "need-account",
                        children: ["Already have an account? ", (0,
                        i.jsx)(x(), {
                            href: "/login",
                            children: "Log in"
                        })]
                    })]
                })
            })
        }
          , Z = t(78128)
          , C = t(26245)
          , A = t(17596)
          , O = t(70198)
          , U = !0
          , signup = function() {
            let n = (0,
            r.useRouter)()
              , e = (0,
            a.v9)(C.ot)
              , t = void 0 !== o().get().codedextoken
              , l = (0,
            a.v9)(k.Cq)
              , [u,d] = (0,
            s.useState)((0,
            j.I)())
              , p = (0,
            a.v9)(C.o4) || "dark"
              , x = "dark" === p;
            return ((0,
            s.useEffect)(function() {
                async function redirectUser() {
                    let {auth: e} = (0,
                    h.UM)();
                    try {
                        if (null !== e.currentUser) {
                            let e = 1;
                            for (; Math.abs(e) <= l.length; ) {
                                let t = l.at(-e);
                                if (["/signup", "/login", "/forgot"].includes(t))
                                    e++;
                                else
                                    try {
                                        if ("/" === t)
                                            return n.push("/home");
                                        if (t.includes("/general-assembly"))
                                            return n.push("/html");
                                        break
                                    } catch (n) {
                                        break
                                    }
                            }
                            return n.push("/home")
                        }
                    } catch (e) {
                        n.reload()
                    }
                }
                let e = setInterval( () => {
                    redirectUser()
                }
                , 2500);
                return () => {
                    e && clearInterval(e)
                }
            }, [n, t, l, e]),
            t) ? null : (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(c.Z, {}), (0,
                i.jsxs)(Z.Z, {
                    isDark: x,
                    style: {
                        backgroundImage: x ? "url(/images/login-signup/dark-cloud.webp), linear-gradient(180deg, #030721, #050b4b)" : "url(/images/login-signup/light-clouds.webp), linear-gradient(180deg, #B6E4FF 0%, #DEF1FF 100%)"
                    },
                    children: [(0,
                    i.jsxs)("div", {
                        className: "container",
                        children: [(0,
                        i.jsx)("h2", {
                            className: "page-title",
                            children: "Sign up"
                        }), (0,
                        i.jsx)(A.Z, {
                            text: "Create an account to save your progress :)",
                            lightModeOnly: !0,
                            height: "87px"
                        }), (0,
                        i.jsx)(molecules_SignUp, {})]
                    }), (0,
                    i.jsx)(O.Z, {})]
                })]
            })
        }
    }
}, function(n) {
    n.O(0, [5445, 994, 7536, 1706, 2667, 9774, 2888, 179], function() {
        return n(n.s = 28575)
    }),
    _N_E = n.O()
}
]);
