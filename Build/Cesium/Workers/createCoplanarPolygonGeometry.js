define(["./arrayRemoveDuplicates-bb548aa3","./BoundingRectangle-a40e8143","./Transforms-a442a7ee","./Matrix2-f2da41d4","./RuntimeError-ffe03243","./ComponentDatatype-17b06483","./CoplanarPolygonGeometryLibrary-22f07d0c","./when-229515d6","./GeometryAttribute-d6fce3e7","./GeometryAttributes-b253752a","./GeometryInstance-16601d2a","./GeometryPipeline-1a57fe12","./IndexDatatype-b10faa0b","./PolygonGeometryLibrary-5535d2fe","./PolygonPipeline-4d73bb5d","./VertexFormat-565d6a6c","./combine-8ce3f24b","./WebGLConstants-4e26b85a","./OrientedBoundingBox-46a20400","./EllipsoidTangentPlane-4e3e24f8","./AxisAlignedBoundingBox-75fdf1b4","./IntersectionTests-69825a7e","./Plane-0421a8be","./AttributeCompression-0af3c035","./EncodedCartesian3-d4f305ce","./ArcType-1da7fdca","./EllipsoidRhumbLine-afd6cd20"],(function(e,t,a,n,r,o,i,l,s,p,y,c,m,u,d,g,b,f,v,h,x,C,P,A,w,F,G){"use strict";var L=new n.Cartesian3,E=new t.BoundingRectangle,T=new n.Cartesian2,D=new n.Cartesian2,_=new n.Cartesian3,V=new n.Cartesian3,k=new n.Cartesian3,R=new n.Cartesian3,I=new n.Cartesian3,M=new n.Cartesian3,B=new a.Quaternion,H=new n.Matrix3,O=new n.Matrix3,z=new n.Cartesian3;function S(e,t,r,i,l,y,c,u){var g=e.positions,b=d.PolygonPipeline.triangulate(e.positions2D,e.holes);b.length<3&&(b=[0,1,2]);var f=m.IndexDatatype.createTypedArray(g.length,b.length);f.set(b);var v=H;if(0!==i){var h=a.Quaternion.fromAxisAngle(y,i,B);if(v=n.Matrix3.fromQuaternion(h,v),t.tangent||t.bitangent){h=a.Quaternion.fromAxisAngle(y,-i,B);var x=n.Matrix3.fromQuaternion(h,O);c=n.Cartesian3.normalize(n.Matrix3.multiplyByVector(x,c,c),c),t.bitangent&&(u=n.Cartesian3.normalize(n.Cartesian3.cross(y,c,u),u))}}else v=n.Matrix3.clone(n.Matrix3.IDENTITY,v);var C=D;t.st&&(C.x=r.x,C.y=r.y);for(var P=g.length,A=3*P,w=new Float64Array(A),F=t.normal?new Float32Array(A):void 0,G=t.tangent?new Float32Array(A):void 0,E=t.bitangent?new Float32Array(A):void 0,_=t.st?new Float32Array(2*P):void 0,V=0,k=0,R=0,I=0,M=0,z=0;z<P;z++){var S=g[z];if(w[V++]=S.x,w[V++]=S.y,w[V++]=S.z,t.st){var N=l(n.Matrix3.multiplyByVector(v,S,L),T);n.Cartesian2.subtract(N,C,N);var Q=o.CesiumMath.clamp(N.x/r.width,0,1),j=o.CesiumMath.clamp(N.y/r.height,0,1);_[M++]=Q,_[M++]=j}t.normal&&(F[k++]=y.x,F[k++]=y.y,F[k++]=y.z),t.tangent&&(G[I++]=c.x,G[I++]=c.y,G[I++]=c.z),t.bitangent&&(E[R++]=u.x,E[R++]=u.y,E[R++]=u.z)}var U=new p.GeometryAttributes;return t.position&&(U.position=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:w})),t.normal&&(U.normal=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:F})),t.tangent&&(U.tangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),t.bitangent&&(U.bitangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E})),t.st&&(U.st=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:_})),new s.Geometry({attributes:U,indices:f,primitiveType:s.PrimitiveType.TRIANGLES})}function N(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).polygonHierarchy,a=l.defaultValue(e.vertexFormat,g.VertexFormat.DEFAULT);this._vertexFormat=g.VertexFormat.clone(a),this._polygonHierarchy=t,this._stRotation=l.defaultValue(e.stRotation,0),this._ellipsoid=n.Ellipsoid.clone(l.defaultValue(e.ellipsoid,n.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+g.VertexFormat.packedLength+n.Ellipsoid.packedLength+2}N.fromPositions=function(e){return new N({polygonHierarchy:{positions:(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},N.pack=function(e,t,a){return a=l.defaultValue(a,0),a=u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,a),n.Ellipsoid.pack(e._ellipsoid,t,a),a+=n.Ellipsoid.packedLength,g.VertexFormat.pack(e._vertexFormat,t,a),a+=g.VertexFormat.packedLength,t[a++]=e._stRotation,t[a]=e.packedLength,t};var Q=n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),j=new g.VertexFormat,U={polygonHierarchy:{}};return N.unpack=function(e,t,a){t=l.defaultValue(t,0);var r=u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;var o=n.Ellipsoid.unpack(e,t,Q);t+=n.Ellipsoid.packedLength;var i=g.VertexFormat.unpack(e,t,j);t+=g.VertexFormat.packedLength;var s=e[t++],p=e[t];return l.defined(a)||(a=new N(U)),a._polygonHierarchy=r,a._ellipsoid=n.Ellipsoid.clone(o,a._ellipsoid),a._vertexFormat=g.VertexFormat.clone(i,a._vertexFormat),a._stRotation=s,a.packedLength=p,a},N.createGeometry=function(t){var r=t._vertexFormat,l=t._polygonHierarchy,p=t._stRotation,d=l.positions;if(!((d=e.arrayRemoveDuplicates(d,n.Cartesian3.equalsEpsilon,!0)).length<3)){var g=_,b=V,f=k,v=I,h=M;if(i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(d,R,v,h)){if(g=n.Cartesian3.cross(v,h,g),g=n.Cartesian3.normalize(g,g),!n.Cartesian3.equalsEpsilon(R,n.Cartesian3.ZERO,o.CesiumMath.EPSILON6)){var x=t._ellipsoid.geodeticSurfaceNormal(R,z);n.Cartesian3.dot(g,x)<0&&(g=n.Cartesian3.negate(g,g),v=n.Cartesian3.negate(v,v))}var C=i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(R,v,h),P=i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(R,v,h);r.tangent&&(b=n.Cartesian3.clone(v,b)),r.bitangent&&(f=n.Cartesian3.clone(h,f));var A=u.PolygonGeometryLibrary.polygonsFromHierarchy(l,C,!1),w=A.hierarchy,F=A.polygons;if(0!==w.length){d=w[0].outerRing;for(var G=a.BoundingSphere.fromPoints(d),L=u.PolygonGeometryLibrary.computeBoundingRectangle(g,P,d,p,E),T=[],D=0;D<F.length;D++){var B=new y.GeometryInstance({geometry:S(F[D],r,L,p,P,g,b,f)});T.push(B)}var H=c.GeometryPipeline.combineInstances(T)[0];H.attributes.position.values=new Float64Array(H.attributes.position.values),H.indices=m.IndexDatatype.createTypedArray(H.attributes.position.values.length/3,H.indices);var O=H.attributes;return r.position||delete O.position,new s.Geometry({attributes:O,indices:H.indices,primitiveType:H.primitiveType,boundingSphere:G})}}}},function(e,t){return l.defined(t)&&(e=N.unpack(e,t)),N.createGeometry(e)}}));