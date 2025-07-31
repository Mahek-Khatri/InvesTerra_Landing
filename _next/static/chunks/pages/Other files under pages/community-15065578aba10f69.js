(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[44], {
    34401: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/community", function() {
            return s(93748)
        }
        ])
    },
    93748: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            __N_SSG: function() {
                return d
            }
        });
        var n = s(85893)
          , i = s(11163)
          , o = s(67294)
          , l = s(71706)
          , a = s(82077)
          , u = s(80675)
          , r = s(44510)
          , c = s(26245)
          , p = s(9473)
          , f = s(74796)
          , m = s(52861)
          , g = s(30394)
          , w = s(61149)
          , d = !0;
        t.default = function(e) {
            let {news: t, events: s} = e
              , d = (0,
            p.v9)(c.f8);
            (0,
            i.useRouter)();
            let y = (0,
            w.o)()
              , h = "home"
              , [_,N] = (0,
            o.useState)([])
              , S = (0,
            o.useCallback)(async () => {
                let e = JSON.parse(sessionStorage.getItem("userFollowing"));
                if (e) {
                    N(e);
                    return
                }
                let t = await fetch("/api/community/getFollowing", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        uid: d
                    })
                })
                  , s = await t.json();
                sessionStorage.setItem("userFollowing", JSON.stringify(s.userFollowing)),
                N(s.userFollowing)
            }
            , [d]);
            (0,
            o.useEffect)( () => {
                d && S()
            }
            , [d, S]);
            let x = (0,
            o.useMemo)( () => ({
                "top-posts": {
                    api: "/api/community/getTrendingPosts?",
                    displayText: "Top Posts",
                    internalName: "top-posts"
                },
                newest: {
                    api: "/api/community/getLatestPosts?",
                    displayText: "Newest",
                    internalName: "newest"
                },
                following: {
                    api: "/api/community/getFollowingPosts?followingList=".concat(JSON.stringify(_)),
                    displayText: "Following",
                    internalName: "following",
                    disableOnLogout: !0
                }
            }), [_])
              , [F,T] = (0,
            o.useState)("top-posts")
              , {posts: j, noMorePosts: E, currentPage: P} = (0,
            r.Z)({
                community: h,
                filter: x[F]
            })
              , [O,C] = (0,
            o.useState)(j);
            return (0,
            o.useEffect)( () => {
                C(j)
            }
            , [j]),
            (0,
            o.useEffect)( () => {
                y.update({
                    hideDefaultLauncher: !0
                })
            }
            , []),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(l.Z, {
                    learningEnv: "community"
                }), (0,
                n.jsxs)(f.Z, {
                    children: [(0,
                    n.jsx)(a.Z, {}), (0,
                    n.jsxs)(m.Z, {
                        children: [(0,
                        n.jsx)(u.Z, {
                            posts: O,
                            setAllPosts: C,
                            filters: x,
                            currentFilter: F,
                            setCurrentFilter: T,
                            savedCurrentPage: P,
                            community: h,
                            disableComposer: !0,
                            headerType: "with-channel"
                        }), (0,
                        n.jsx)(g.Z, {
                            news: t,
                            events: s
                        })]
                    })]
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [5937, 9378, 1582, 1706, 3404, 3303, 6028, 8720, 9774, 2888, 179], function() {
        return e(e.s = 34401)
    }),
    _N_E = e.O()
}
]);
