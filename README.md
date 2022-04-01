<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reim

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the real and imaginary components of a double-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import reim from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-reim@esm/index.mjs';
```

#### reim( z )

Returns the **real** and **imaginary** components of a double-precision complex floating-point number.

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';

var z = new Complex128( 5.0, 3.0 );
var out = reim( z );
// returns <Float64Array>[ 5.0, 3.0 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import reim from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-reim@esm/index.mjs';

var out;
var re;
var im;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( (randu()*100.0) - 50.0 );
    im = round( (randu()*50.0) - 25.0 );
    z = new Complex128( re, im );
    out = reim( z );
    console.log( '%s => %d, %d', z.toString(), out[ 0 ], out[ 1 ] );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex/imag`][@stdlib/complex/imag]</span><span class="delimiter">: </span><span class="description">return the imaginary component of a complex number.</span>
-   <span class="package-name">[`@stdlib/complex/real`][@stdlib/complex/real]</span><span class="delimiter">: </span><span class="description">return the real component of a complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-reim.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-reim

[test-image]: https://github.com/stdlib-js/complex-reim/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex-reim/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-reim/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-reim?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-reim.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-reim/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-reim/tree/deno
[umd-url]: https://github.com/stdlib-js/complex-reim/tree/umd
[esm-url]: https://github.com/stdlib-js/complex-reim/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-reim/main/LICENSE

<!-- <related-links> -->

[@stdlib/complex/imag]: https://github.com/stdlib-js/complex-imag/tree/esm

[@stdlib/complex/real]: https://github.com/stdlib-js/complex-real/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
