/* This file is automatically rebuilt by the Cesium build process. */
define(['./when-6655f883', './EllipsoidGeometry-55816906', './GeometryOffsetAttribute-834a3c02', './RuntimeError-5f205b85', './Transforms-f37c129d', './Matrix2-70d3547e', './ComponentDatatype-579b2047', './WebGLConstants-cf1206a6', './combine-1fd4d5cd', './GeometryAttribute-3cc1b9b3', './GeometryAttributes-2b1b6e3f', './IndexDatatype-e7458bc9', './VertexFormat-d4a9fb98'], (function (when, EllipsoidGeometry, GeometryOffsetAttribute, RuntimeError, Transforms, Matrix2, ComponentDatatype, WebGLConstants, combine, GeometryAttribute, GeometryAttributes, IndexDatatype, VertexFormat) { 'use strict';

  function createEllipsoidGeometry(ellipsoidGeometry, offset) {
    if (when.defined(offset)) {
      ellipsoidGeometry = EllipsoidGeometry.EllipsoidGeometry.unpack(ellipsoidGeometry, offset);
    }
    return EllipsoidGeometry.EllipsoidGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidGeometry;

}));
