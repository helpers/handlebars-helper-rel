# {{rel}} [![NPM version](https://badge.fury.io/js/handlebars-helper-rel.png)](http://badge.fury.io/js/handlebars-helper-rel)

> Handlebars helper for generating a relative link from the current page to the specified page.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-rel`.

## Register the helper

The easiest way to register the helper with [Assemble](https://github.com/assemble/assemble) is to add the module to `devDependencies` and `keywords` in your project's package.json:

```json
{
  "devDependencies": {
    "handlebars-helper-rel": "*"
  },
  "keywords": [
    "handlebars-helper-rel"
  ]
}
```

Alternatively, to register the helper explicitly in the Gruntfile:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-rel' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-rel', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```

## Usage

With the helper registered, you may now begin using it in your templates:

```html
<nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
  <ul class="nav navbar-nav">
    <li> <a href="{{rel "foo/bar/one.html"}}">Masthead</a> </li>
    <li> <a href="{{rel "foo/bar/two.html"}}">Markdown</a> </li>
    <li> <a href="{{rel "foo/bar/three.html"}}">Readme</a> </li>
  </ul>
  <ul class="nav navbar-nav navbar-right">
    <li> <a href="{{rel "foo/bar/baz/four.html"}}">Blog</a> </li>
    <li> <a href="{{rel "foo/bar/baz/five.html"}}">About</a> </li>
  </ul>
</nav>
```

### site.root

If a `site.root` variable is defined in the context, then you can omit that part from the paths.

For example, let's say you are using a `_config.yml` file:

```js
grunt.initConfig({
  site: grunt.file.readYAML('_config.yml'),

  // Build HTML from templates and data
  assemble: {
    options: {
      // Metadata
      site: '<%= site %>',
      ...
    },
    example: {
      files: {'<%= site.dest %>/': ['<%= site.templates %>/*.hbs']}
    }
  }
});
```
And it contains a `root` variable:

```yaml
root: foo/bar
```

Then you can omit `foo/bar` from the paths defined in your templates:

```html
<nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
  <ul class="nav navbar-nav">
    <li> <a href="{{rel "one.html"}}">Masthead</a> </li>
    <li> <a href="{{rel "two.html"}}">Markdown</a> </li>
    <li> <a href="{{rel "three.html"}}">Readme</a> </li>
  </ul>
  <ul class="nav navbar-nav navbar-right">
    <li> <a href="{{rel "baz/four.html"}}">Blog</a> </li>
    <li> <a href="{{rel "baz/five.html"}}">About</a> </li>
  </ul>
</nav>
```

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](http://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License and Copyright

Copyright (c) 2014 [Jon Schlinkert](http://github.com/jonschlinkert), contributors.
Licensed under the [MIT License](./LICENSE-MIT)