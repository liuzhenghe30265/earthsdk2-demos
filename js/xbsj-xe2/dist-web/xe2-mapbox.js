/*! For license information please see xe2-mapbox.js.LICENSE.txt */
var XE2;(()=>{"use strict";var e={26599:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getCurrentScriptPath=void 0,r.getCurrentScriptPath=function(){return document.currentScript.src}},42905:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var o=t(26599);!function(){var e,r,t=(0,o.getCurrentScriptPath)(),i=(t.slice(0,t.lastIndexOf("/")),window.xbsjDirs),s=null!==(e=null==i?void 0:i.mapboxDir)&&void 0!==e?e:(null!==(r=null==i?void 0:i.xe2BaseDir)&&void 0!==r?r:"js/")+"xbsj-xe2-assets/dist-web/js/mapbox-gl/";if(!window.mapboxgl)do{if(!s){console.warn("mapboxDir不存在，无法加载mapbox！");break}document.write("            <script src='".concat(s,"mapbox-gl.js'><\/script>\n            <link href='").concat(s,"mapbox-gl.css' rel='stylesheet' />\n            "))}while(0)}()},72256:e=>{e.exports=XE2["xe2-utils"]}},r={};function t(o){var i=r[o];if(void 0!==i)return i.exports;var s=r[o]={exports:{}};return e[o](s,s.exports,t),s.exports}var o,i={};o=i,Object.defineProperty(o,"__esModule",{value:!0}),(0,t(72256).registerScript)(),t(42905),(XE2=void 0===XE2?{}:XE2)["xe2-mapbox"]=i})();