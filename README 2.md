In emsdk folder run:
- source ./emsdk_env.sh
- emcc --version
emcc <path-to-.c-file> -s WASM=1 -o <path-to-.js-file>
- emcc /Users/matiascea/Documents/Universidad/2022-1/Software/webAssemblyC/functions.c -s WASM=1 -s EXPORTED_FUNCTIONS="['_main', '_splitter']" -o /Users/matiascea/Documents/Universidad/2022-1/Software/webAssemblyC/functions.js