(()=>{"use strict";var e,n={297:()=>{const e=window.wp.blocks,n=window.wp.i18n,r=window.wp.components,t=window.wp.blockEditor,o=window.wp.element,s=window.ReactJSXRuntime,a=[{key:16,name:"Small (16px x 16px)"},{key:24,name:"Normal (24px x 24px)"},{key:32,name:"Large (32px x 32px)"},{key:40,name:"Larger (40px x 40px)"},{key:64,name:"Huge (64px x 64px)"}],i={16:1,24:1,32:1.5,40:2,64:3},l=JSON.parse('{"UU":"create-block/hamburger-menu-block"}'),c=(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("g",{clipPath:"url(#clip0_429_11066)",children:(0,s.jsx)("path",{d:"M3 6.00092H21M3 12.0009H21M3 18.0009H21",stroke:"#292929",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"clip0_429_11066",children:(0,s.jsx)("rect",{width:"24",height:"24",fill:"white",transform:"translate(0 0.000915527)"})})})]});(0,e.registerBlockType)(l.UU,{icon:c,edit:function({attributes:e,setAttributes:l}){const{executeOnClick:c,size:h,anchor:u}=e,[p,x]=(0,o.useState)(!1),b=(0,t.useBlockProps)();return(0,o.useEffect)((()=>{u||l({anchor:`hamburger-menu-block-${Date.now()}`})}),[u]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.InspectorControls,{children:(0,s.jsxs)(r.PanelBody,{title:(0,n.__)("Settings","hamburger-menu-block"),children:[(0,s.jsx)(r.TextareaControl,{__nextHasNoMarginBottom:!0,label:(0,n.__)("Javascript","hamburger-menu-block"),help:(0,n.__)("Enter javascript to be executed when users click on the button","hamburger-menu-block"),value:c||"",onChange:e=>l({executeOnClick:e})}),(0,s.jsx)(r.CustomSelectControl,{label:"Size (w x h)",options:a,value:a.find((e=>e.key===h)),onChange:e=>{l({size:e.selectedItem.key})}})]})}),(0,s.jsx)(t.InspectorAdvancedControls,{children:(0,s.jsx)(r.TextControl,{__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0,label:"HTML anchor",help:(0,n.__)("Specify a unique anchor ID for this block. This allows you to link directly to this block.","hamburger-menu-block"),placeholder:"hamburger-menu-block-id",value:u,onChange:e=>{l({anchor:e})}})}),(0,s.jsxs)("button",{...b,className:b.className+(p?" open":""),style:{height:h,width:h,"--block-hamburger-menu-height-ratio":h/4+"px","--block-hamburger-menu-line-height":`${i[h]}px`},children:[(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{})]})]})},save:function({attributes:e}){const{size:n,anchor:r}=e;return(0,s.jsxs)("button",{...t.useBlockProps.save(),style:{height:n,width:n,"--block-hamburger-menu-height-ratio":n/4+"px","--block-hamburger-menu-line-height":`${i[n]}px`},id:r||void 0,children:[(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{})]})}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return n[e](s,s.exports,t),s.exports}t.m=n,e=[],t.O=(n,r,o,s)=>{if(!r){var a=1/0;for(h=0;h<e.length;h++){for(var[r,o,s]=e[h],i=!0,l=0;l<r.length;l++)(!1&s||a>=s)&&Object.keys(t.O).every((e=>t.O[e](r[l])))?r.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(h--,1);var c=o();void 0!==c&&(n=c)}}return n}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[r,o,s]},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={305:0,661:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var o,s,[a,i,l]=r,c=0;if(a.some((n=>0!==e[n]))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var h=l(t)}for(n&&n(r);c<a.length;c++)s=a[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(h)},r=globalThis.webpackChunkhamburger_menu_block=globalThis.webpackChunkhamburger_menu_block||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var o=t.O(void 0,[661],(()=>t(297)));o=t.O(o)})();