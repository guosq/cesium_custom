//This file is automatically rebuilt by the Cesium build process.
export default "float czm_unpackFloat(vec4 packedFloat)\n\
{\n\
packedFloat = floor(packedFloat * 255.0 + 0.5);\n\
float sign = 1.0 - step(128.0, packedFloat[3]) * 2.0;\n\
float exponent = 2.0 * mod(packedFloat[3], 128.0) + step(128.0, packedFloat[2]) - 127.0;\n\
if (exponent == -127.0)\n\
{\n\
return 0.0;\n\
}\n\
float mantissa = mod(packedFloat[2], 128.0) * 65536.0 + packedFloat[1] * 256.0 + packedFloat[0] + float(0x800000);\n\
float result = sign * exp2(exponent - 23.0) * mantissa;\n\
return result;\n\
}\n\
";
