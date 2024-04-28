/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.115
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as dt}from"./chunk-ESZR37FT.js";import{a as F}from"./chunk-EXHN5NWQ.js";import{a as at}from"./chunk-AJBZ3ZYP.js";import{a as st}from"./chunk-FD76FI2G.js";import{a as bt}from"./chunk-NNNHC2WA.js";import"./chunk-FZIR7YHL.js";import"./chunk-FHUOX7Q3.js";import{a as ht}from"./chunk-4VIV3K4J.js";import{a as Q}from"./chunk-GWMEMIDW.js";import{a as K}from"./chunk-JATOGJGF.js";import"./chunk-U54QHQ4X.js";import{a as gt,b as nt}from"./chunk-SUQSMXXT.js";import"./chunk-EKKRJHD7.js";import"./chunk-KZVVSHMS.js";import{a as wt,b as yt}from"./chunk-EQAHH27B.js";import"./chunk-LWO5EUNN.js";import{a as lt}from"./chunk-SPMRTIBU.js";import"./chunk-U6MIZ4IC.js";import{c as mt,d as tt}from"./chunk-3G4OCZJT.js";import{d as Tt,e as ct}from"./chunk-LYPPBP4Q.js";import"./chunk-PCFGFNNQ.js";import"./chunk-V2SDNSQR.js";import{c as _t}from"./chunk-S7TTFAYA.js";import{a as $}from"./chunk-TLYHKSDJ.js";import{a as c,b as ot,c as O,d as V,e as W}from"./chunk-PYVDHCDQ.js";import{a as l}from"./chunk-JMWWNZHX.js";import"./chunk-DNO4OWAM.js";import"./chunk-XDVDNOI4.js";import{a as L}from"./chunk-Z3SYNMQT.js";import{a as ut,b as q}from"./chunk-4KGDZUZQ.js";import{e as P}from"./chunk-F3TINEFX.js";function b(t,e){this.position=t,P(this.position)||(this.position=new O),this.tangentPlane=e,P(this.tangentPlane)||(this.tangentPlane=b.NORTH_POLE_TANGENT_PLANE)}Object.defineProperties(b.prototype,{ellipsoid:{get:function(){return this.tangentPlane.ellipsoid}},x:{get:function(){return this.position.x}},y:{get:function(){return this.position.y}},conformalLatitude:{get:function(){let t=O.magnitude(this.position),e=2*this.ellipsoid.maximumRadius;return this.tangentPlane.plane.normal.z*(l.PI_OVER_TWO-2*Math.atan2(t,e))}},longitude:{get:function(){let t=l.PI_OVER_TWO+Math.atan2(this.y,this.x);return t>Math.PI&&(t-=l.TWO_PI),t}}});var it=new ot,Rt=new c;b.prototype.getLatitude=function(t){P(t)||(t=V.WGS84),it.latitude=this.conformalLatitude,it.longitude=this.longitude,it.height=0;let e=this.ellipsoid.cartographicToCartesian(it,Rt);return t.cartesianToCartographic(e,it),it.latitude};var It=new wt,Lt=new c,Ft=new c;b.fromCartesian=function(t,e){q.defined("cartesian",t);let o=l.signNotZero(t.z),n=b.NORTH_POLE_TANGENT_PLANE,s=b.SOUTH_POLE;o<0&&(n=b.SOUTH_POLE_TANGENT_PLANE,s=b.NORTH_POLE);let i=It;i.origin=n.ellipsoid.scaleToGeocentricSurface(t,i.origin),i.direction=c.subtract(i.origin,s,Lt),c.normalize(i.direction,i.direction);let r=yt.rayPlane(i,n.plane,Ft),f=c.subtract(r,s,r),d=c.dot(n.xAxis,f),p=o*c.dot(n.yAxis,f);return P(e)?(e.position=new O(d,p),e.tangentPlane=n,e):new b(new O(d,p),n)};b.fromCartesianArray=function(t,e){q.defined("cartesians",t);let o=t.length;P(e)?e.length=o:e=new Array(o);for(let n=0;n<o;n++)e[n]=b.fromCartesian(t[n],e[n]);return e};b.clone=function(t,e){if(P(t))return P(e)?(e.position=t.position,e.tangentPlane=t.tangentPlane,e):new b(t.position,t.tangentPlane)};b.HALF_UNIT_SPHERE=Object.freeze(new V(.5,.5,.5));b.NORTH_POLE=Object.freeze(new c(0,0,.5));b.SOUTH_POLE=Object.freeze(new c(0,0,-.5));b.NORTH_POLE_TANGENT_PLANE=Object.freeze(new K(b.NORTH_POLE,b.HALF_UNIT_SPHERE));b.SOUTH_POLE_TANGENT_PLANE=Object.freeze(new K(b.SOUTH_POLE,b.HALF_UNIT_SPHERE));var D=b;var vt=new ot,Ot=new ot;function St(t,e,o,n){let i=n.cartesianToCartographic(t,vt).height,r=n.cartesianToCartographic(e,Ot);r.height=i,n.cartographicToCartesian(r,e);let f=n.cartesianToCartographic(o,Ot);f.height=i-100,n.cartographicToCartesian(f,o)}var Et=new dt,Vt=new c,Bt=new c,Mt=new c,jt=new c,kt=new c,zt=new c,ft=new c,Z=new c,rt=new c,Dt=new O,Wt=new O,Ut=new c,At=new ct,Gt=new W,Yt=new W;function pt(t){let e=t.vertexFormat,o=t.geometry,n=t.shadowVolume,s=o.attributes.position.values,i=P(o.attributes.st)?o.attributes.st.values:void 0,r=s.length,f=t.wall,d=t.top||f,p=t.bottom||f;if(e.st||e.normal||e.tangent||e.bitangent||n){let w=t.boundingRectangle,a=t.rotationAxis,H=t.projectTo2d,x=t.ellipsoid,j=t.stRotation,C=t.perPositionHeight,R=Dt;R.x=w.x,R.y=w.y;let B=e.st?new Float32Array(2*(r/3)):void 0,u;e.normal&&(C&&d&&!f?u=o.attributes.normal.values:u=new Float32Array(r));let E=e.tangent?new Float32Array(r):void 0,A=e.bitangent?new Float32Array(r):void 0,v=n?new Float32Array(r):void 0,T=0,y=0,_=Bt,h=Mt,g=jt,k=!0,Y=Gt,J=Yt;if(j!==0){let M=ct.fromAxisAngle(a,j,At);Y=W.fromQuaternion(M,Y),M=ct.fromAxisAngle(a,-j,At),J=W.fromQuaternion(M,J)}else Y=W.clone(W.IDENTITY,Y),J=W.clone(W.IDENTITY,J);let m=0,I=0;d&&p&&(m=r/2,I=r/3,r/=2);for(let M=0;M<r;M+=3){let z=c.fromArray(s,M,Ut);if(e.st&&!P(i)){let N=W.multiplyByVector(Y,z,Vt);N=x.scaleToGeodeticSurface(N,N);let S=H(N,Wt);O.subtract(S,R,S);let X=l.clamp(S.x/w.width,0,1),et=l.clamp(S.y/w.height,0,1);p&&(B[T+I]=X,B[T+1+I]=et),d&&(B[T]=X,B[T+1]=et),T+=2}if(e.normal||e.tangent||e.bitangent||n){let N=y+1,S=y+2;if(f){if(M+3<r){let X=c.fromArray(s,M+3,kt);if(k){let et=c.fromArray(s,M+r,zt);C&&St(z,X,et,x),c.subtract(X,z,X),c.subtract(et,z,et),_=c.normalize(c.cross(et,X,_),_),k=!1}c.equalsEpsilon(X,z,l.EPSILON10)&&(k=!0)}(e.tangent||e.bitangent)&&(g=x.geodeticSurfaceNormal(z,g),e.tangent&&(h=c.normalize(c.cross(g,_,h),h)))}else _=x.geodeticSurfaceNormal(z,_),(e.tangent||e.bitangent)&&(C&&(ft=c.fromArray(u,y,ft),Z=c.cross(c.UNIT_Z,ft,Z),Z=c.normalize(W.multiplyByVector(J,Z,Z),Z),e.bitangent&&(rt=c.normalize(c.cross(ft,Z,rt),rt))),h=c.cross(c.UNIT_Z,_,h),h=c.normalize(W.multiplyByVector(J,h,h),h),e.bitangent&&(g=c.normalize(c.cross(_,h,g),g)));e.normal&&(t.wall?(u[y+m]=_.x,u[N+m]=_.y,u[S+m]=_.z):p&&(u[y+m]=-_.x,u[N+m]=-_.y,u[S+m]=-_.z),(d&&!C||f)&&(u[y]=_.x,u[N]=_.y,u[S]=_.z)),n&&(f&&(_=x.geodeticSurfaceNormal(z,_)),v[y+m]=-_.x,v[N+m]=-_.y,v[S+m]=-_.z),e.tangent&&(t.wall?(E[y+m]=h.x,E[N+m]=h.y,E[S+m]=h.z):p&&(E[y+m]=-h.x,E[N+m]=-h.y,E[S+m]=-h.z),d&&(C?(E[y]=Z.x,E[N]=Z.y,E[S]=Z.z):(E[y]=h.x,E[N]=h.y,E[S]=h.z))),e.bitangent&&(p&&(A[y+m]=g.x,A[N+m]=g.y,A[S+m]=g.z),d&&(C?(A[y]=rt.x,A[N]=rt.y,A[S]=rt.z):(A[y]=g.x,A[N]=g.y,A[S]=g.z))),y+=3}}e.st&&!P(i)&&(o.attributes.st=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:2,values:B})),e.normal&&(o.attributes.normal=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:3,values:u})),e.tangent&&(o.attributes.tangent=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:3,values:E})),e.bitangent&&(o.attributes.bitangent=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:3,values:A})),n&&(o.attributes.extrudeDirection=new tt({componentDatatype:$.FLOAT,componentsPerAttribute:3,values:v}))}if(t.extrude&&P(t.offsetAttribute)){let w=s.length/3,a=new Uint8Array(w);if(t.offsetAttribute===ht.TOP)d&&p||f?a=a.fill(1,0,w/2):d&&(a=a.fill(1));else{let H=t.offsetAttribute===ht.NONE?0:1;a=a.fill(H)}o.attributes.applyOffset=new tt({componentDatatype:$.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})}return o}var Ht=[];function qt(t,e,o,n,s,i,r,f,d,p){let w={walls:[]},a;if(r||f){let u=F.createGeometryFromPositions(t,e,o,n,i,d,p),E=u.attributes.position.values,A=u.indices,v,T;if(r&&f){let y=E.concat(E);v=y.length/3,T=lt.createTypedArray(v,A.length*2),T.set(A);let _=A.length,h=v/2;for(a=0;a<_;a+=3){let g=T[a]+h,k=T[a+1]+h,Y=T[a+2]+h;T[a+_]=Y,T[a+1+_]=k,T[a+2+_]=g}if(u.attributes.position.values=y,i&&d.normal){let g=u.attributes.normal.values;u.attributes.normal.values=new Float32Array(y.length),u.attributes.normal.values.set(g)}if(d.st&&P(o)){let g=u.attributes.st.values;u.attributes.st.values=new Float32Array(v*2),u.attributes.st.values=g.concat(g)}u.indices=T}else if(f){for(v=E.length/3,T=lt.createTypedArray(v,A.length),a=0;a<A.length;a+=3)T[a]=A[a+2],T[a+1]=A[a+1],T[a+2]=A[a];u.indices=T}w.topAndBottom=new st({geometry:u})}let H=s.outerRing,x=K.fromPoints(H,t),j=x.projectPointsOntoPlane(H,Ht),C=nt.computeWindingOrder2D(j);C===gt.CLOCKWISE&&(H=H.slice().reverse());let R=F.computeWallGeometry(H,o,t,n,i,p);w.walls.push(new st({geometry:R}));let B=s.holes;for(a=0;a<B.length;a++){let u=B[a];j=x.projectPointsOntoPlane(u,Ht),C=nt.computeWindingOrder2D(j),C===gt.COUNTER_CLOCKWISE&&(u=u.slice().reverse()),R=F.computeWallGeometry(u,o,t,n,i,p),w.walls.push(new st({geometry:R}))}return w}function G(t){if(q.typeOf.object("options",t),q.typeOf.object("options.polygonHierarchy",t.polygonHierarchy),P(t.perPositionHeight)&&t.perPositionHeight&&P(t.height))throw new ut("Cannot use both options.perPositionHeight and options.height");if(P(t.arcType)&&t.arcType!==at.GEODESIC&&t.arcType!==at.RHUMB)throw new ut("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");let e=t.polygonHierarchy,o=L(t.vertexFormat,Q.DEFAULT),n=L(t.ellipsoid,V.WGS84),s=L(t.granularity,l.RADIANS_PER_DEGREE),i=L(t.stRotation,0),r=t.textureCoordinates,f=L(t.perPositionHeight,!1),d=f&&P(t.extrudedHeight),p=L(t.height,0),w=L(t.extrudedHeight,p);if(!d){let a=Math.max(p,w);w=Math.min(p,w),p=a}this._vertexFormat=Q.clone(o),this._ellipsoid=V.clone(n),this._granularity=s,this._stRotation=i,this._height=p,this._extrudedHeight=w,this._closeTop=L(t.closeTop,!0),this._closeBottom=L(t.closeBottom,!0),this._polygonHierarchy=e,this._perPositionHeight=f,this._perPositionHeightExtrude=d,this._shadowVolume=L(t.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=t.offsetAttribute,this._arcType=L(t.arcType,at.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=r,this.packedLength=F.computeHierarchyPackedLength(e,c)+V.packedLength+Q.packedLength+(r?F.computeHierarchyPackedLength(r,O):1)+12}G.fromPositions=function(t){t=L(t,L.EMPTY_OBJECT),q.defined("options.positions",t.positions);let e={polygonHierarchy:{positions:t.positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates};return new G(e)};G.pack=function(t,e,o){return q.typeOf.object("value",t),q.defined("array",e),o=L(o,0),o=F.packPolygonHierarchy(t._polygonHierarchy,e,o,c),V.pack(t._ellipsoid,e,o),o+=V.packedLength,Q.pack(t._vertexFormat,e,o),o+=Q.packedLength,e[o++]=t._height,e[o++]=t._extrudedHeight,e[o++]=t._granularity,e[o++]=t._stRotation,e[o++]=t._perPositionHeightExtrude?1:0,e[o++]=t._perPositionHeight?1:0,e[o++]=t._closeTop?1:0,e[o++]=t._closeBottom?1:0,e[o++]=t._shadowVolume?1:0,e[o++]=L(t._offsetAttribute,-1),e[o++]=t._arcType,P(t._textureCoordinates)?o=F.packPolygonHierarchy(t._textureCoordinates,e,o,O):e[o++]=-1,e[o++]=t.packedLength,e};var Qt=V.clone(V.UNIT_SPHERE),Zt=new Q,Kt={polygonHierarchy:{}};G.unpack=function(t,e,o){q.defined("array",t),e=L(e,0);let n=F.unpackPolygonHierarchy(t,e,c);e=n.startingIndex,delete n.startingIndex;let s=V.unpack(t,e,Qt);e+=V.packedLength;let i=Q.unpack(t,e,Zt);e+=Q.packedLength;let r=t[e++],f=t[e++],d=t[e++],p=t[e++],w=t[e++]===1,a=t[e++]===1,H=t[e++]===1,x=t[e++]===1,j=t[e++]===1,C=t[e++],R=t[e++],B=t[e]===-1?void 0:F.unpackPolygonHierarchy(t,e,O);P(B)?(e=B.startingIndex,delete B.startingIndex):e++;let u=t[e++];return P(o)||(o=new G(Kt)),o._polygonHierarchy=n,o._ellipsoid=V.clone(s,o._ellipsoid),o._vertexFormat=Q.clone(i,o._vertexFormat),o._height=r,o._extrudedHeight=f,o._granularity=d,o._stRotation=p,o._perPositionHeightExtrude=w,o._perPositionHeight=a,o._closeTop=H,o._closeBottom=x,o._shadowVolume=j,o._offsetAttribute=C===-1?void 0:C,o._arcType=R,o._textureCoordinates=B,o.packedLength=u,o};var Jt=new O,Xt=new O,$t=new D;function xt(t,e,o,n,s,i){let r=t.longitude,f=r>=0?r:r+l.TWO_PI;s.westOverIdl=Math.min(s.westOverIdl,f),s.eastOverIdl=Math.max(s.eastOverIdl,f),i.west=Math.min(i.west,r),i.east=Math.max(i.east,r);let d=t.getLatitude(o),p=d;if(i.south=Math.min(i.south,d),i.north=Math.max(i.north,d),n!==at.RHUMB){let H=O.subtract(e.position,t.position,Jt),x=O.dot(e.position,H)/O.dot(H,H);if(x>0&&x<1){let j=O.add(e.position,O.multiplyByScalar(H,-x,H),Xt),C=D.clone(e,$t);C.position=j;let R=C.getLatitude(o);i.south=Math.min(i.south,R),i.north=Math.max(i.north,R),Math.abs(d)>Math.abs(R)&&(p=R)}}let w=e.x*t.y-t.x*e.y,a=Math.sign(w);a!==0&&(a*=O.angleBetween(e.position,t.position)),p>=0&&(s.northAngle+=a),p<=0&&(s.southAngle+=a)}var Ct=new D,te=new D,U={northAngle:0,southAngle:0,westOverIdl:0,eastOverIdl:0};G.computeRectangleFromPositions=function(t,e,o,n){if(q.defined("positions",t),P(n)||(n=new _t),t.length<3)return n;n.west=Number.POSITIVE_INFINITY,n.east=Number.NEGATIVE_INFINITY,n.south=Number.POSITIVE_INFINITY,n.north=Number.NEGATIVE_INFINITY,U.northAngle=0,U.southAngle=0,U.westOverIdl=Number.POSITIVE_INFINITY,U.eastOverIdl=Number.NEGATIVE_INFINITY;let s=t.length,i=D.fromCartesian(t[0],te);for(let r=1;r<s;r++){let f=D.fromCartesian(t[r],Ct);xt(f,i,e,o,U,n),i=D.clone(f,i)}return xt(D.fromCartesian(t[0],Ct),i,e,o,U,n),n.east-n.west>U.eastOverIdl-U.westOverIdl&&(n.west=U.westOverIdl,n.east=U.eastOverIdl,n.east>l.PI&&(n.east=n.east-l.TWO_PI),n.west>l.PI&&(n.west=n.west-l.TWO_PI)),l.equalsEpsilon(Math.abs(U.northAngle),l.TWO_PI,l.EPSILON10)&&(n.north=l.PI_OVER_TWO,n.east=l.PI,n.west=-l.PI),l.equalsEpsilon(Math.abs(U.southAngle),l.TWO_PI,l.EPSILON10)&&(n.south=-l.PI_OVER_TWO,n.east=l.PI,n.west=-l.PI),n};var ee=new D;function oe(t,e,o){return t.height>=l.PI||t.width>=l.PI?D.fromCartesian(e[0],ee).tangentPlane:K.fromPoints(e,o)}var Nt=new ot;function ne(t,e,o){return(n,s)=>{if(t.height>=l.PI||t.width>=l.PI){if(t.south<0&&t.north>0){P(s)||(s=[]);for(let r=0;r<n.length;++r){let f=o.cartesianToCartographic(n[r],Nt);s[r]=new O(f.longitude/l.PI,f.latitude/l.PI_OVER_TWO)}return s.length=n.length,s}return D.fromCartesianArray(n,s)}return K.fromPoints(e,o).projectPointsOntoPlane(n,s)}}function ie(t,e,o){if(t.height>=l.PI||t.width>=l.PI)return(s,i)=>{if(t.south<0&&t.north>0){let r=o.cartesianToCartographic(s,Nt);return P(i)||(i=new O),i.x=r.longitude/l.PI,i.y=r.latitude/l.PI_OVER_TWO,i}return D.fromCartesian(s,i)};let n=K.fromPoints(e,o);return(s,i)=>n.projectPointsOntoPlane(s,i)}function re(t,e,o,n){return(s,i)=>!n&&(t.height>=l.PI_OVER_TWO||t.width>=2*l.PI_OVER_THREE)?F.splitPolygonsOnEquator(s,e,o,i):s}function se(t,e,o,n){if(e.height>=l.PI||e.width>=l.PI)return dt.fromRectangle(e,void 0,Et);let s=t,i=K.fromPoints(s,o);return F.computeBoundingRectangle(i.plane.normal,i.projectPointOntoPlane.bind(i),s,n,Et)}G.createGeometry=function(t){let e=t._vertexFormat,o=t._ellipsoid,n=t._granularity,s=t._stRotation,i=t._polygonHierarchy,r=t._perPositionHeight,f=t._closeTop,d=t._closeBottom,p=t._arcType,w=t._textureCoordinates,a=P(w),H=i.positions;if(H.length<3)return;let x=t.rectangle,j=F.polygonsFromHierarchy(i,a,ne(x,H,o),!r,o,re(x,o,p,r)),C=j.hierarchy,R=j.polygons,B=function(m){return m},u=a?F.polygonsFromHierarchy(w,!0,B,!1,o).polygons:void 0;if(C.length===0)return;let E=C[0].outerRing,A=se(E,x,o,s),v=[],T=t._height,y=t._extrudedHeight,_=t._perPositionHeightExtrude||!l.equalsEpsilon(T,y,0,l.EPSILON2),h={perPositionHeight:r,vertexFormat:e,geometry:void 0,rotationAxis:oe(x,E,o).plane.normal,projectTo2d:ie(x,E,o),boundingRectangle:A,ellipsoid:o,stRotation:s,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:p},g;if(_)for(h.extrude=!0,h.top=f,h.bottom=d,h.shadowVolume=t._shadowVolume,h.offsetAttribute=t._offsetAttribute,g=0;g<R.length;g++){let m=qt(o,R[g],a?u[g]:void 0,n,C[g],r,f,d,e,p),I;f&&d?(I=m.topAndBottom,h.geometry=F.scaleToGeodeticHeightExtruded(I.geometry,T,y,o,r)):f?(I=m.topAndBottom,I.geometry.attributes.position.values=nt.scaleToGeodeticHeight(I.geometry.attributes.position.values,T,o,!r),h.geometry=I.geometry):d&&(I=m.topAndBottom,I.geometry.attributes.position.values=nt.scaleToGeodeticHeight(I.geometry.attributes.position.values,y,o,!0),h.geometry=I.geometry),(f||d)&&(h.wall=!1,I.geometry=pt(h),v.push(I));let M=m.walls;h.wall=!0;for(let z=0;z<M.length;z++){let N=M[z];h.geometry=F.scaleToGeodeticHeightExtruded(N.geometry,T,y,o,r),N.geometry=pt(h),v.push(N)}}else for(g=0;g<R.length;g++){let m=new st({geometry:F.createGeometryFromPositions(o,R[g],a?u[g]:void 0,n,r,e,p)});if(m.geometry.attributes.position.values=nt.scaleToGeodeticHeight(m.geometry.attributes.position.values,T,o,!r),h.geometry=m.geometry,m.geometry=pt(h),P(t._offsetAttribute)){let I=m.geometry.attributes.position.values.length,M=t._offsetAttribute===ht.NONE?0:1,z=new Uint8Array(I/3).fill(M);m.geometry.attributes.applyOffset=new tt({componentDatatype:$.UNSIGNED_BYTE,componentsPerAttribute:1,values:z})}v.push(m)}let k=bt.combineInstances(v)[0];k.attributes.position.values=new Float64Array(k.attributes.position.values),k.indices=lt.createTypedArray(k.attributes.position.values.length/3,k.indices);let Y=k.attributes,J=Tt.fromVertices(Y.position.values);return e.position||delete Y.position,new mt({attributes:Y,indices:k.indices,primitiveType:k.primitiveType,boundingSphere:J,offsetAttribute:t._offsetAttribute})};G.createShadowVolume=function(t,e,o){let n=t._granularity,s=t._ellipsoid,i=e(n,s),r=o(n,s);return new G({polygonHierarchy:t._polygonHierarchy,ellipsoid:s,stRotation:t._stRotation,granularity:n,perPositionHeight:!1,extrudedHeight:i,height:r,vertexFormat:Q.POSITION_ONLY,shadowVolume:!0,arcType:t._arcType})};function ae(t){let e=-t._stRotation;if(e===0)return[0,0,0,1,1,0];let o=t._ellipsoid,n=t._polygonHierarchy.positions,s=t.rectangle;return mt._textureCoordinateRotationPoints(n,e,o,s)}Object.defineProperties(G.prototype,{rectangle:{get:function(){if(!P(this._rectangle)){let t=this._polygonHierarchy.positions;this._rectangle=G.computeRectangleFromPositions(t,this._ellipsoid,this._arcType)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return P(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=ae(this)),this._textureCoordinateRotationPoints}}});var Pt=G;function ce(t,e){return P(e)&&(t=Pt.unpack(t,e)),t._ellipsoid=V.clone(t._ellipsoid),Pt.createGeometry(t)}var Xe=ce;export{Xe as default};
