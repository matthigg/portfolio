(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=(a(15),a(16),a(1)),s=a(2),i=a(4),u=a(3),d=a(6),m=a(5),p=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"scraps"},c.a.createElement("div",{className:"scrap free brand"},"Mustachio the Pistachio",c.a.createElement("span",{className:"brand-sub"},"Web Developer")),c.a.createElement("div",{className:"scrap free links"},c.a.createElement("button",{className:"scrap free link-projects"},"Projects"),c.a.createElement("button",{className:"scrap free link-contact"},"Contact")))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"nav-fixed scraps-collected nav-fixed-vanish"},c.a.createElement("div",{className:"scrap-collected fixed brand"},"Mustachio the Pistachio",c.a.createElement("span",{className:"brand-sub"},"Webx Developer")),c.a.createElement("div",{className:"scrap-collected fixed links"},c.a.createElement("button",{className:"scrap-collected fixed link-projects"},"Projects"),c.a.createElement("button",{className:"scrap-collected fixed link-contact"},"Contact")))}}]),t}(n.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("span",{id:"anchor-contact"}),c.a.createElement("div",{className:"page"},c.a.createElement("h1",{className:"page-header"},"Contact")))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"page-landing"})}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"nav-net scraps-collected"},c.a.createElement("div",{className:"scrap-collected net brand display-none"},"Mustachio the Pistachio",c.a.createElement("span",{className:"brand-sub"},"Web Developer")),c.a.createElement("div",{className:"scrap-collected net links display-none"},c.a.createElement("button",{className:"scrap-collected net link-projects"},"Projects"),c.a.createElement("button",{className:"scrap-collected net link-contact"},"Contact")))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav-tripwire"})}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"page-spacer"})}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("span",{id:"anchor-projects"}),c.a.createElement("div",{className:"page"},c.a.createElement("h1",{className:"page-header"},"Projects")))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{className:"main"},c.a.createElement(b,null),c.a.createElement(v,null),c.a.createElement(j,null),c.a.createElement(y,null),c.a.createElement(E,null),c.a.createElement(y,null),c.a.createElement(h,null))}}]),t}(n.Component);function _(){var e=document.querySelector(".nav-net"),t=document.querySelector(".nav-tripwire"),a=document.querySelector(".scrap.free.brand"),n=document.querySelector(".scrap.free.links");return{nav_net_loc:e.offsetTop+e.offsetHeight/2,nav_tripwire_loc:t.offsetTop-e.offsetHeight,scrap_brand_loc:a.offsetTop+a.offsetHeight/2,scrap_links_loc:n.offsetTop+n.offsetHeight/2}}function k(){var e=["#0A2425","#FCFAED","#043546","#ECD4B0","#1B969E"];return e.forEach(function(){var t=Math.floor(Math.random()*e.length),a=Math.floor(Math.random()*e.length),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}),e}var S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={colors_shuffled:[],nav_net_loc:0,nav_tripwire_loc:0,scrap_brand_loc:0,scrap_links_loc:0},a.handleScroll=function(e){e.scrollTop>this.state.nav_net_loc-this.state.scrap_brand_loc?(document.querySelector(".scrap.free.brand").classList.add("display-none"),document.querySelector(".scrap-collected.net.brand").classList.remove("display-none"),document.querySelector(".scrap-collected.net.brand").classList.add("animation-chromatophore")):(document.querySelector(".scrap.free.brand").classList.remove("display-none"),document.querySelector(".scrap-collected.net.brand").classList.add("display-none"),document.querySelector(".scrap-collected.net.brand").classList.remove("animation-chromatophore")),e.scrollTop>this.state.nav_net_loc-this.state.scrap_links_loc?(document.querySelector(".scrap.free.links").classList.add("display-none"),document.querySelector(".scrap-collected.net.links").classList.remove("display-none"),document.querySelector(".scrap-collected.net.link-projects").classList.add("animation-chromatophore"),document.querySelector(".scrap-collected.net.link-contact").classList.add("animation-chromatophore")):(document.querySelector(".scrap.free.links").classList.remove("display-none"),document.querySelector(".scrap-collected.net.links").classList.add("display-none"),document.querySelector(".scrap-collected.net.link-projects").classList.remove("animation-chromatophore"),document.querySelector(".scrap-collected.net.link-contact").classList.remove("animation-chromatophore")),e.scrollTop>this.state.nav_tripwire_loc?(document.querySelector(".nav-net").classList.add("nav-net-vanish"),document.querySelector(".nav-fixed").classList.remove("nav-fixed-vanish")):(document.querySelector(".nav-net").classList.remove("nav-net-vanish"),document.querySelector(".nav-fixed").classList.add("nav-fixed-vanish"))}.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.querySelectorAll(".link-contact").forEach(function(e){e.addEventListener("click",function(){window.location.href="#anchor-contact"})}),document.querySelectorAll(".link-projects").forEach(function(e){e.addEventListener("click",function(){window.location.href="#anchor-projects"})}),this.setState({nav_net_loc:_().nav_net_loc,nav_tripwire_loc:_().nav_tripwire_loc,scrap_brand_loc:_().scrap_brand_loc,scrap_links_loc:_().scrap_links_loc},function(){var t=document.querySelector(".main");document.querySelector(".main").addEventListener("scroll",function(){e.handleScroll(t)})}),this.setState({colors_shuffled:k()},function(){console.log(e.state.colors_shuffled)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(f,null),c.a.createElement(O,null))}}]),t}(n.Component);o.a.render(c.a.createElement(S,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1a16f831.chunk.js.map