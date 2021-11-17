/* This file is automatically rebuilt by the Cesium build process. */
define(['./Matrix2-70d3547e', './when-6655f883', './EllipseGeometry-a53e0729', './RuntimeError-5f205b85', './ComponentDatatype-579b2047', './WebGLConstants-cf1206a6', './GeometryOffsetAttribute-834a3c02', './Transforms-f37c129d', './combine-1fd4d5cd', './EllipseGeometryLibrary-c1fe81f3', './GeometryAttribute-3cc1b9b3', './GeometryAttributes-2b1b6e3f', './GeometryInstance-c6ab9264', './GeometryPipeline-fc6958dc', './AttributeCompression-f5ecc6e8', './EncodedCartesian3-13464966', './IndexDatatype-e7458bc9', './IntersectionTests-af7b4fec', './Plane-b8f2179f', './VertexFormat-d4a9fb98'], (function (Matrix2, when, EllipseGeometry, RuntimeError, ComponentDatatype, WebGLConstants, GeometryOffsetAttribute, Transforms, combine, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

}));
