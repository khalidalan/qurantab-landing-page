(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=o=>{o.addEventListener("keydown",r=>{r.key==="Enter"&&o.click()})};function l(o){const r={threshold:.5},n=e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("in-view"):t.target.classList.remove("in-view")})},s=new IntersectionObserver(n,r);o.forEach(e=>{s.observe(e)})}const f=document.querySelectorAll("label"),u=document.querySelectorAll("section");f.forEach(i);l(u);
