(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[45],{292:function(t,e,i){"use strict";i.r(e);var a=i(51),s=i(10),c=i(25),d=i(102),l=i.n(d),n=i(100),o=i.n(n),r=i(2),b=i(106),j=i(20),u=function(t){var e=t.statistic,i=t.data,a=(t.lastUpdatedDate,t.getTableStatistic),d=t.setMapStatistic,n=t.mapStatistic,o=a(i,e,"total"),u=a(i,e,"delta"),m=Object(b.useSpring)({total:o,delta:u,config:s.s}),g=Object(r.useCallback)((function(t,e){e.stopPropagation(),d(t)}),[d]),v=s.w[e];return Object(j.jsxs)("div",{className:"cell statistic",onClick:n?g.bind(undefined,e):null,children:[(null===v||void 0===v?void 0:v.showDelta)&&Object(j.jsx)(b.animated.div,{className:l()("delta","is-".concat(e)),title:u,children:m.delta.to((function(t){return t>0?"\u2191"+Object(c.e)(t,v.format):t<0?"\u2193"+Object(c.e)(Math.abs(t),v.format):""}))}),Object(j.jsx)(b.animated.div,{className:"total",title:o,children:m.total.to((function(t){return Object(c.e)(t,v.format,e)}))}),n&&Object(j.jsx)("div",{className:l()("map-indicator","is-".concat(e),{highlighted:e===n}),style:{background:e===n&&(null===v||void 0===v?void 0:v.color)?v.color:null}})]})},m=function(t,e){var i,a,s,c;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(t.mapStatistic,e.mapStatistic)&&!!o()(t.getTableStatistic,e.getTableStatistic)))},g=Object(r.memo)(u,m),v=i(107),h=i(104),O=i(108),x=i(294);function N(t){var e,i=t.stateCode,a=t.districtName,s=t.data,c=t.tableStatistics,d=t.regionHighlighted,n=t.setRegionHighlighted,o=(t.expandTable,t.getTableStatistic),b=Object(x.a)().t,u=Object(r.useCallback)((function(){d.districtName!==a&&n(Object(O.a)(d,(function(t){t.stateCode=i,t.districtName=a})))}),[d,a,n,i]);return Object(j.jsxs)("div",{className:l()("row","district",{"is-highlighted":(null===d||void 0===d?void 0:d.districtName)===a}),onMouseEnter:u,children:[Object(j.jsxs)("div",{className:"cell",children:[Object(j.jsx)("div",{className:"state-name",children:b(a)}),(null===s||void 0===s||null===(e=s.meta)||void 0===e?void 0:e.notes)&&Object(j.jsx)(v.a,{message:s.meta.notes,children:Object(j.jsx)(h.o,{size:16})})]}),c.map((function(t){return Object(j.jsx)(g,{statistic:t,data:s,getTableStatistic:o},t)}))]})}var p=function(t,e){var i,a,s,c,d,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(null===(d=t.data)||void 0===d?void 0:d.last_updated,null===(l=e.data)||void 0===l?void 0:l.last_updated)&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName)))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics))))))},C=Object(r.memo)(N,p),f=i(185),S=i(5),T=i(205);function k(t){var e,i,d=this,n=t.data,o=t.tableStatistics,b=t.stateCode,u=t.districtName,m=t.regionHighlighted,N=t.setRegionHighlighted,p=t.expandTable,k=t.getTableStatistic,H=t.mapStatistic,w=t.setMapStatistic,A=Object(r.useState)(!1),D=Object(a.a)(A,2),E=D[0],M=D[1],z=Object(T.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),R=Object(a.a)(z,2),_=R[0],y=R[1],F=Object(S.g)(),I=Object(x.a)().t,J=Object(r.useRef)(),U=Object(r.useCallback)((function(t){_.sortColumn!==t?y(Object(O.a)(_,(function(e){"districtName"!==_.sortColumn&&"districtName"!==t||(e.isAscending=!_.isAscending),e.sortColumn=t}))):y(Object(O.a)(_,(function(t){t.isAscending=!_.isAscending})))}),[_,y]),P=Object(r.useCallback)((function(t,e){if("districtName"!==_.sortColumn){var i=s.w[_.sortColumn],a=_.delta&&(null===i||void 0===i?void 0:i.showDelta)?"delta":"total",c=k(n.districts[t],_.sortColumn,a),d=k(n.districts[e],_.sortColumn,a);return _.isAscending?c-d:d-c}return _.isAscending?t.localeCompare(e):e.localeCompare(t)}),[_,n,k]),V=Object(r.useCallback)((function(){b?m.stateCode!==b&&N(Object(O.a)(m,(function(t){t.stateCode=b,t.districtName=null}))):u&&(m.districtName===u&&m.stateCode===n.stateCode||N(Object(O.a)(m,(function(t){t.stateCode=n.stateCode,t.districtName=u}))))}),[n.stateCode,u,m,N,b]),q=Object(r.useCallback)((function(){n.districts&&M(!E)}),[E,n]),B=I(u);u===s.E&&(B="".concat(I(s.E)," [").concat(I(s.v[n.stateCode]),"]"));var G=Object(r.useCallback)((function(t){F.push("state/".concat(t))}),[F]),K=Object(r.useCallback)((function(){M(!1),J.current.scrollIntoView({block:"start"})}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:l()("row",{"is-total":"TT"===b},{"is-highlighted":b&&(null===m||void 0===m?void 0:m.stateCode)===b||u&&(null===m||void 0===m?void 0:m.districtName)===u&&(null===m||void 0===m?void 0:m.stateCode)===n.stateCode}),onMouseEnter:V,onClick:q,ref:J,children:[Object(j.jsxs)("div",{className:"cell",children:[Object(j.jsx)("div",{className:"state-name fadeInUp",children:I(s.v[b])||B}),(null===n||void 0===n||null===(e=n.meta)||void 0===e?void 0:e.notes)&&Object(j.jsx)(v.a,{message:n.meta.notes,children:Object(j.jsx)(h.o,{size:16})})]}),o.map((function(t){return Object(j.jsx)(g,{data:n,statistic:t,getTableStatistic:k,mapStatistic:H,setMapStatistic:w},t)}))]}),E&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"state-meta",children:[Object(j.jsxs)("div",{className:"state-meta-top",children:[(null===n||void 0===n||null===(i=n.meta)||void 0===i?void 0:i.last_updated)&&Object(j.jsxs)("p",{className:"last-updated",children:[Object(j.jsx)(h.g,{}),Object(c.a)("".concat(Object(c.d)(n.meta.last_updated)," ").concat(I("ago")))]}),Object(j.jsxs)("div",{className:"state-page",onClick:G.bind(this,b),children:[Object(j.jsx)(h.l,{}),Object(j.jsx)("span",{children:I("See more details on {{state}}",{state:b})})]})]}),n.districts&&s.E in n.districts&&Object(j.jsx)("div",{className:"state-meta-bottom",children:Object(j.jsxs)("div",{className:l()("disclaimer"),children:[Object(j.jsx)(h.a,{}),Object(j.jsx)("span",{children:I("District-wise data not available in state bulletin")})]})})]}),Object(j.jsxs)("div",{className:l()("row","heading"),children:[Object(j.jsxs)("div",{className:"cell heading",onClick:U.bind(this,"districtName"),children:[Object(j.jsx)("div",{className:"district-name",children:I("District")}),"districtName"===_.sortColumn&&Object(j.jsx)("div",{className:"sort-icon",children:_.isAscending?Object(j.jsx)(h.x,{size:12}):Object(j.jsx)(h.y,{size:12})})]}),o.map((function(t){return Object(j.jsx)(f.a,{statistic:t,sortData:_,setSortData:y,handleSort:U.bind(d,t)},t)}))]})]}),E&&Object.keys(n.districts||{}).sort((function(t,e){return P(t,e)})).map((function(t){return Object(j.jsx)(C,{data:n.districts[t],tableStatistics:o,districtName:t,regionHighlighted:m,setRegionHighlighted:N,stateCode:b,expandTable:p,getTableStatistic:k},t)})),E&&Object(j.jsx)("div",{className:"spacer-row",children:Object(j.jsxs)("div",{className:"spacer",children:[Object(j.jsx)("p",{children:"End of ".concat(I(s.v[b]),"'s districts")}),Object(j.jsx)("div",{className:"fold",onClick:K,children:Object(j.jsx)(h.k,{})})]})})]})}var H=function(t,e){var i,a,s,c;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!(!o()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&o()(t.regionHighlighted.stateCode,t.stateCode)||o()(e.regionHighlighted.stateCode,e.stateCode))&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.mapStatistic,e.mapStatistic)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics)))))))};e.default=Object(r.memo)(k,H)}}]);
//# sourceMappingURL=45.8e80f6cb.chunk.js.map