//This file is automatically rebuilt by the Cesium build process.
export default "precision highp float;\n\
void main()\n\
{\n\
ProcessedAttributes attributes;\n\
initializeAttributes(attributes);\n\
#ifdef USE_DEQUANTIZATION\n\
dequantizationStage(attributes);\n\
#endif\n\
#ifdef HAS_INSTANCING\n\
instancingStage(attributes.positionMC);\n\
#ifdef USE_PICKING\n\
v_pickColor = a_pickColor;\n\
#endif\n\
#endif\n\
#if defined(HAS_FEATURES) && defined(FEATURE_ID_ATTRIBUTE)\n\
Feature feature;\n\
featureStage(feature);\n\
cpuStylingStage(attributes.positionMC, feature);\n\
updateFeatureStruct(feature);\n\
#endif\n\
#ifdef HAS_CUSTOM_VERTEX_SHADER\n\
customShaderStage(attributes);\n\
#endif\n\
geometryStage(attributes);\n\
#ifdef PRIMITIVE_TYPE_POINTS\n\
pointStage();\n\
#endif\n\
}\n\
";
