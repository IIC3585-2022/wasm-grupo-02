# Tarea {3} - Grupo{2}

## Warning

This guide expects you to have `make` installed, as well as the `emcc` binary in your `$PATH` variable. If not, please follow the instructions in [the documentation](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions-using-the-emsdk-recommended).

## Developing

To develop, just start the `watch` server for the `functions.c` file:

```sh
npm run watch:build:wasm
```

Then using another terminal start the `dev` server:

```sh
npm run dev
```

You can access the application at `http://localhost:3000`.

## Building

To build the application, just run:

```sh
npm run build
```
