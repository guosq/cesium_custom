/* This file is automatically rebuilt by the Cesium build process. */
define(['exports', './when-6655f883', './RuntimeError-5f205b85', './Matrix2-70d3547e'], (function (exports, when, RuntimeError, Matrix2) { 'use strict';

  /**
   * Geometry instancing allows one {@link Geometry} object to be positions in several
   * different locations and colored uniquely.  For example, one {@link BoxGeometry} can
   * be instanced several times, each with a different <code>modelMatrix</code> to change
   * its position, rotation, and scale.
   *
   * @alias GeometryInstance
   * @constructor
   *
   * @param {Object} options Object with the following properties:
   * @param {Geometry|GeometryFactory} options.geometry The geometry to instance.
   * @param {Matrix4} [options.modelMatrix=Matrix4.IDENTITY] The model matrix that transforms to transform the geometry from model to world coordinates.
   * @param {Object} [options.id] A user-defined object to return when the instance is picked with {@link Scene#pick} or get/set per-instance attributes with {@link Primitive#getGeometryInstanceAttributes}.
   * @param {Object} [options.attributes] Per-instance attributes like a show or color attribute shown in the example below.
   *
   *
   * @example
   * // Create geometry for a box, and two instances that refer to it.
   * // One instance positions the box on the bottom and colored aqua.
   * // The other instance positions the box on the top and color white.
   * var geometry = Cesium.BoxGeometry.fromDimensions({
   *   vertexFormat : Cesium.VertexFormat.POSITION_AND_NORMAL,
   *   dimensions : new Cesium.Cartesian3(1000000.0, 1000000.0, 500000.0)
   * });
   * var instanceBottom = new Cesium.GeometryInstance({
   *   geometry : geometry,
   *   modelMatrix : Cesium.Matrix4.multiplyByTranslation(Cesium.Transforms.eastNorthUpToFixedFrame(
   *     Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883)), new Cesium.Cartesian3(0.0, 0.0, 1000000.0), new Cesium.Matrix4()),
   *   attributes : {
   *     color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
   *   },
   *   id : 'bottom'
   * });
   * var instanceTop = new Cesium.GeometryInstance({
   *   geometry : geometry,
   *   modelMatrix : Cesium.Matrix4.multiplyByTranslation(Cesium.Transforms.eastNorthUpToFixedFrame(
   *     Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883)), new Cesium.Cartesian3(0.0, 0.0, 3000000.0), new Cesium.Matrix4()),
   *   attributes : {
   *     color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
   *   },
   *   id : 'top'
   * });
   *
   * @see Geometry
   */
  function GeometryInstance(options) {
    options = when.defaultValue(options, when.defaultValue.EMPTY_OBJECT);

    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(options.geometry)) {
      throw new RuntimeError.DeveloperError("options.geometry is required.");
    }
    //>>includeEnd('debug');

    /**
     * The geometry being instanced.
     *
     * @type Geometry
     *
     * @default undefined
     */
    this.geometry = options.geometry;

    /**
     * The 4x4 transformation matrix that transforms the geometry from model to world coordinates.
     * When this is the identity matrix, the geometry is drawn in world coordinates, i.e., Earth's WGS84 coordinates.
     * Local reference frames can be used by providing a different transformation matrix, like that returned
     * by {@link Transforms.eastNorthUpToFixedFrame}.
     *
     * @type Matrix4
     *
     * @default Matrix4.IDENTITY
     */
    this.modelMatrix = Matrix2.Matrix4.clone(
      when.defaultValue(options.modelMatrix, Matrix2.Matrix4.IDENTITY)
    );

    /**
     * User-defined object returned when the instance is picked or used to get/set per-instance attributes.
     *
     * @type Object
     *
     * @default undefined
     *
     * @see Scene#pick
     * @see Primitive#getGeometryInstanceAttributes
     */
    this.id = options.id;

    /**
     * Used for picking primitives that wrap geometry instances.
     *
     * @private
     */
    this.pickPrimitive = options.pickPrimitive;

    /**
     * Per-instance attributes like {@link ColorGeometryInstanceAttribute} or {@link ShowGeometryInstanceAttribute}.
     * {@link Geometry} attributes varying per vertex; these attributes are constant for the entire instance.
     *
     * @type Object
     *
     * @default undefined
     */
    this.attributes = when.defaultValue(options.attributes, {});

    /**
     * @private
     */
    this.westHemisphereGeometry = undefined;
    /**
     * @private
     */
    this.eastHemisphereGeometry = undefined;
  }

  exports.GeometryInstance = GeometryInstance;

}));
