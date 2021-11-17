/* This file is automatically rebuilt by the Cesium build process. */
define(['./PrimitivePipeline-6f0d65f3', './createTaskProcessorWorker', './Transforms-f37c129d', './Matrix2-70d3547e', './RuntimeError-5f205b85', './when-6655f883', './ComponentDatatype-579b2047', './WebGLConstants-cf1206a6', './combine-1fd4d5cd', './GeometryAttribute-3cc1b9b3', './GeometryAttributes-2b1b6e3f', './GeometryPipeline-fc6958dc', './AttributeCompression-f5ecc6e8', './EncodedCartesian3-13464966', './IndexDatatype-e7458bc9', './IntersectionTests-af7b4fec', './Plane-b8f2179f', './WebMercatorProjection-b5f86a40'], (function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Matrix2, RuntimeError, when, ComponentDatatype, WebGLConstants, combine, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    var parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    var results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

}));
