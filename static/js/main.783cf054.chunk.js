(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(n,e,t){n.exports=t(41)},29:function(n,e,t){},30:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var a,r,i,o,l,c,s,p,x,d,m,u=t(0),g=t.n(u),b=t(9),h=t.n(b),f=(t(29),t(30),t(1)),v=t(2),E=v.a.div(a||(a=Object(f.a)(["\n    overflow: hidden;\n    background: #f7e3e3;\n    position: relative;\n    display: flex;\n\n    &.desktop {\n        flex-direction: column;\n        border-radius: 32px;\n        width: 360px;\n        height: 780px;\n        box-shadow:  50px 60px 40px rgba(0,0,0, 0.1);\n\n    }\n\n    &.mobile {\n\n    }\n"]))),w=v.a.div(r||(r=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 24px;\n"]))),y=v.a.button(i||(i=Object(f.a)(["\n    border: none;\n    width: 3rem;\n    background-color: var(--main);\n    height: 3rem;\n    border-radius: 50%;\n    box-shadow:  5px 5px 12px rgba(0,0,0, 0.1),\n             -5px -5px 12px rgba(255,255,255, 0.8);\n    cursor: pointer;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),j=t(18),k=t.n(j),N=function(){return g.a.createElement(w,null,g.a.createElement("h1",null,"Clock"),g.a.createElement(y,null,g.a.createElement(k.a,{style:{color:"var(--grey)"}})))},O=(t(12),t(19),t(10)),C=v.a.div(o||(o=Object(f.a)(["\n    margin: 30px 40px;\n    width: 280px;\n    height: 280px;\n    border-radius: 50%;\n    box-shadow:  15px 15px 18px rgba(0,0,0, 0.1),\n             -5px -5px 18px rgba(255,255,255, 0.4);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n\n"]))),F=v.a.div(l||(l=Object(f.a)(["\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    box-shadow:  4px 4px 12px rgba(0,0,0, 0.1),\n             -4px -4px 12px rgba(255,255,255, 0.6);\n"]))),S=v.a.div(c||(c=Object(f.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n    width: 3px;\n    border-radius: 1px;\n    z-index: 4;\n\n    & .spacer1 {\n        height: 5px;\n    }\n\n    & .hand {\n        height: 70px;\n        background-color: #8a8b8c;\n    }\n\n    & .spacer2 {\n        height: 40px;\n    }\n\n    animation: rotate 720s linear infinite;\n\n    @keyframes rotate {\n        0% {\n            transform: translate(-50%, -50%) rotate(0deg);\n        }\n        100% {\n            transform: translate(-50%, -50%) rotate(360deg);\n        }\n    }\n\n"]))),z=v.a.div(s||(s=Object(f.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n    width: 3px;\n    border-radius: 1px;\n    z-index: 2;\n    \n\n    & .spacer1 {\n        height: 0px;\n    }\n\n    & .hand {\n        height: 95px;\n        background-color: #eb677d;\n    }\n\n    & .spacer2 {\n        height: 60px;\n    }\n\n    animation: rotate 60s linear infinite;\n    @keyframes rotate {\n        0% {\n            transform: translate(-50%, -50%) rotate(0deg);\n        }\n        100% {\n            transform: translate(-50%, -50%) rotate(360deg);\n        }\n    }\n"]))),T=v.a.div(p||(p=Object(f.a)(["\n    position: absolute;\n    border-radius: 1px;\n    background-color: #cec8c8;\n\n    &.one {\n        width: 3px;\n        height: 15px;\n        top: -2px;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    &.two {\n        width: 15px;\n        height: 3px;\n        transform: translateY(-50%);\n        top: 50%;\n        right: -2px;\n        \n    }\n\n    &.three {\n        width: 3px;\n        height: 15px;\n        bottom: -2px;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    &.four {\n        width: 15px;\n        height: 3px;\n        transform: translateY(-50%);\n        top: 50%;\n        left: -2px;\n        \n    }\n"]))),B=v.a.div(x||(x=Object(f.a)(["\n    width: 280px;\n    margin: 10px 40px;\n    border-radius: 0.5rem;\n    box-shadow:  2px 2px 12px rgba(0,0,0, 0.2),\n             -2px -2px 12px rgba(255,255,255, 0.6);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    font-weight: 800;\n    font-size: 5rem;\n    color: #cec8c8;\n\n    span {\n        color: var(--main);\n        margin: 0;\n        padding: 0;\n        text-shadow:  2px 2px 8px rgba(0,0,0, 0.2),\n             -2px -2px 8px rgba(255,255,255, 0.6);\n\n        @keyframes change {\n            0%, 100% {\n                text-shadow:  2px 2px 8px rgba(0,0,0, 0.2),\n             -2px -2px 8px rgba(255,255,255, 0.6);\n            } 25%, 75% {\n                text-shadow:  0px 0px 0px rgba(0,0,0, 0.2),\n             -0px -0px 0px rgba(255,255,255, 0.6);\n            } \n        }\n    }\n"]))),D=function(){var n=function(n){return n<10?"0"+n:n},e=Object(u.useState)(function(){return function(){console.log("Time on load.");var e=new Date,t=e.getHours(),a=e.getMinutes();return{hour:t=n(t),minute:a=n(a)}}()}),t=Object(O.a)(e,2),a=t[0],r=(t[1],a.hour),i=a.minute;return g.a.createElement(g.a.Fragment,null,g.a.createElement(C,null,g.a.createElement(F,null,g.a.createElement(S,null,g.a.createElement("div",{className:"spacer1"}),g.a.createElement("div",{className:"hand"}),g.a.createElement("div",{className:"spacer2"})),g.a.createElement(z,null,g.a.createElement("div",{className:"spacer1"}),g.a.createElement("div",{className:"hand"}),g.a.createElement("div",{className:"spacer2"}))),g.a.createElement(T,{className:"one"}),g.a.createElement(T,{className:"two"}),g.a.createElement(T,{className:"three"}),g.a.createElement(T,{className:"four"})),g.a.createElement(B,null,g.a.createElement("span",{id:"hour"},r),":",g.a.createElement("span",{id:"minute"},i)))},I=v.a.div(d||(d=Object(f.a)(["\n    position: relative;\n    bottom: 0;\n    margin-top: auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.5rem 3rem;\n"]))),J=v.a.button(m||(m=Object(f.a)(["\n    width: 4rem;\n    height: 4rem;\n    border-radius: 25%;\n    border: none;\n    box-shadow:  5px 5px 12px rgba(0,0,0, 0.1),\n             -5px -5px 12px rgba(255,255,255, 0.6);\n    cursor: pointer;\n    background-color: var(--main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    transition: all 0.2s ease-in-out;\n\n    div {\n        box-shadow: inset 4px 4px 10px rgba(0,0,0, 0),\n            inset -4px -4px 5px rgba(255,255,255, 0);\n        transition: all 0.3s ease-in-out;\n        border-radius: 25%;\n        margin:0;\n        padding: 0;\n        width: 3.4rem;\n        height: 3.4rem;\n        border: none;\n    }\n\n    div & .active {\n        box-shadow: inset 4px 4px 5px rgba(0,0,0, 0.1),\n            inset -4px -4px 5px rgba(255,255,255, 0.6);\n    }\n\n    &.active {\n        box-shadow:  2px 2px 4px rgba(0,0,0, 0.1),\n             -2px -2px 4px rgba(255,255,255, 0.5);\n    }\n"]))),L=t(20),M=t.n(L),P=t(21),X=t.n(P),Y=t(22),H=t.n(Y),q=function(){var n=Object(u.useState)({clock:"active",alarm:"",timer:""}),e=Object(O.a)(n,2),t=e[0],a=e[1],r=t.clock,i=t.alarm,o=t.timer;function l(n){a(function(){return function(n){return 1===n?{clock:"active"}:2===n?{alarm:"active"}:{timer:"active"}}(n)})}return g.a.createElement(g.a.Fragment,null,g.a.createElement(I,null,g.a.createElement(J,{className:r,onClick:function(){return l(1)}},g.a.createElement("div",{className:r}),g.a.createElement(M.a,{style:{color:"var(--grey)",position:"absolute",fontSize:"2.5rem"}})),g.a.createElement(J,{className:i,onClick:function(){return l(2)}},g.a.createElement("div",{className:i}),g.a.createElement(X.a,{style:{color:"var(--grey)",position:"absolute",fontSize:"2.5rem"}})),g.a.createElement(J,{className:o,onClick:function(){return l(3)}},g.a.createElement("div",{className:o}),g.a.createElement(H.a,{style:{color:"var(--grey)",position:"absolute",fontSize:"2.5rem"}}))))};var A=function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(E,{className:"desktop"},g.a.createElement(N,null),g.a.createElement(D,null),g.a.createElement(q,null)))},G=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then(function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),a(n),r(n),i(n),o(n)})};h.a.render(g.a.createElement(g.a.StrictMode,null,g.a.createElement(A,null)),document.getElementById("root")),G()}},[[24,1,2]]]);
//# sourceMappingURL=main.783cf054.chunk.js.map