//This file is automatically rebuilt by the Cesium build process.
export default "void customShaderStage(inout ProcessedAttributes attributes)\n\
{\n\
VertexInput vsInput;\n\
initializeInputStruct(vsInput, attributes);\n\
vertexMain(vsInput, attributes.positionMC);\n\
}\n\
";
