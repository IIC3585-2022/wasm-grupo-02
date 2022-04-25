.PHONY: build
build:
	emcc ./lib/functions.c \
		-s WASM=1 \
		-s EXPORT_ES6=1 \
		-s MODULARIZE=1 \
		-s EXPORTED_RUNTIME_METHODS="['ccall']" \
		-s EXPORTED_FUNCTIONS="['_checkEqualSum', '_malloc']" \
		-s ALLOW_MEMORY_GROWTH=1 \
		-o wasm/main.js

.PHONY: clean
clean:
	rm -f wasm/main.js wasm/main.wasm
