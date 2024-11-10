# Changelog

## unreleased

### Features
- Add support for default value on macros
- Add support for test expression `instance of`, feature of [Craft CMS](https://craftcms.com/docs/5.x/reference/twig/tests.html#instance-of)

---
## 0.9.1 (2024-10-10)

### Bugfixes
- Fix importing lodash function syntax
- Fix import template function from `@babel/template`

---
## 0.9.0 (2024-10-03)

### Features
- Add support for three-way-comparison operator (spaceship operator)

### Bugfixes
- Fix handling mapping that omit key part
- Fix documentation about `twigAlwaysBreakObjects` option to reflect actual default value
- Fix autoescape block which allow boolean value (`true` and `false`) as a valid escape type

### Internals
- Make `key` part of `ObjectProperty` type optional to support object declaration that omit key part

---
## 0.8.0 (2024-08-09)

### Features
- Add support for arrow function inside `filter, map, reduce` filter

### Internals
- Optimize test runner by defining where to look for test files
- NPM script alias to run `prettier` has been removed

---
## 0.7.0 (2024-08-01)

### BREAKING CHANGES
- Drop compatibility support for prettier 2
- Plugin system has been removed from this project
- Package has been renamed `@zackad/prettier-plugin-twig-melody` -> `@zackad/prettier-plugin-twig`
- The parser has been renamed from `melody` into `twig`

### Features
- Add support attribute names according to html5 specs

### Internals
- Remove npm script to publish
- Integrate devenv into nix flakes
- Incorporate `switch-plugin` into core functionality
- Replace `jest` with `vitest` as test runner

---
## v0.6.0 (2024-03-27)

### Features
- BREAKING: Change package name `prettier-plugin-twig-melody` -> `@zackad/prettier-plugin-twig-melody`

### Internals
- Publish package as `@zackad/prettier-plugin-twig-melody` into npm registry

---
## v0.5.0

### Features

- BREAKING: Drop compatibility with prettier lower than 2.3.0. Use version 0.4.6 if you need to use prettier older than 2.3.0
- Fix compatibility with prettier 3

### Internals

- Add CI configuration for github actions
- Add support for devenv.sh, nix based tools to manage development environment
- Explicitly declare prettier configuration as yaml file
- Fix eslint configuration to support ECMAScript 2017, allowing `async` function
- Fix license name to use valid SPDX
- Remove deprecated function usage of `concat` from `prettier.doc.builders`. Enforce this policy with eslint plugin `eslint-plugin-prettier-doc` using `prettier-doc/no-concat` rule.
- Upgrade devDependencies to latest compatible version

---
## v0.4.6

- Bug fix: Leave parentheses in place in `'classA' ~ (not needsB ? ' classB')`

---
## v0.4.5

- Bug fix (Melody): Whitespace trimming information was lost when using a conditional expression

---
## v0.4.4

- Bug fix: Expand the list of HTML tags treated as "inline"

---
## v0.4.3

- Bug fix: Filter expression was not correctly interpolated in a string

---
## v0.4.2

- Bug fix: Remove hard-coded space at the beginning of Twig comments

---
## v0.4.1

- Bug fix: Preserve leading (non-newline) whitespace in inline IF statement body

---
## v0.4.0

- Fix [issue #1](https://github.com/trivago/prettier-plugin-twig-melody/issues/1): Non-standard (custom) Twig tags don't make the parser crash any more, and receive at least some default printing. Complex tags can be configured using the `twigMultiTags` option.

---
## v0.3.9

- Fix [issue #32](https://github.com/trivago/prettier-plugin-twig-melody/issues/32): Curly braces around a binary expression were lost when they were in fact needed.

---
## v0.3.8

- Bug fix/optimization: ArrayExpression was causing too many newlines
- Bug fix: Filter target was losing parentheses, which was altering the meaning (e.g., conditional expression)

---
## v0.3.7

- Bug fix: Expressions like `not (a and b)` lost the parentheses, thus changing the meaning of the expression.

---
## v0.3.6

- Bug fix: Optimize group structure when using `SetStatement`, `VariableDeclarationStatement`, and logical binary expressions. Previously, the group created by `SetStatement` had only one breaking point (before the closing `%}`), which led to some undesirable results.

---
## v0.3.5

- Fix: `twigMelodyPlugins` option is finally an array, not a string separated by `|` any more.

---
## v0.3.4

- Fix: Stylistic improvements

---
## v0.3.3

- Bug fix: Mount statement of the form `mount ... from ...` were dropping the source. Fixed now.

---
## v0.3.2

- Bug fix: No breaking point before closing `%}` for `for`, `if`, `set`.

---
## v0.3.1

### Bugfixes
- [Issue #24](https://github.com/trivago/prettier-plugin-twig-melody/issues/24): Take the string contents into account when choosing the quote characters surrounding a string literal.

---
## v0.3.0

### Features
- [Issue #22](https://github.com/trivago/prettier-plugin-twig-melody/issues/22): Add `twigOutputEndblockName` option so that you can choose whether to print the name in the `{% endblock %}` tag or not.

---
## v0.2.3

### Bugfixes
- [Issue #21](https://github.com/trivago/prettier-plugin-twig-melody/issues/21): Always use double quotes around interpolated strings

---
## v0.2.2

### Bugfixes
- [Issue #20](https://github.com/trivago/prettier-plugin-twig-melody/issues/20): Double quotation marks in `include` statement
- [Issue #21](https://github.com/trivago/prettier-plugin-twig-melody/issues/21): Essentially same bug as Issue #20

---
## v0.2.1

### Bugfixes
- Improve printing of HTML and Twig comments

---
## v0.2.0

### Features
- Introduction of `prettier-ignore` functionality
- Better adherence to Twig coding standards

### Bugfixes
- Avoid dropping of backslash in string literal: [https://github.com/trivago/prettier-plugin-twig-melody/issues/11](https://github.com/trivago/prettier-plugin-twig-melody/issues/11)
- Not crashing when facing declarations (`<!DOCTYPE html>`) any more

---
## v0.1.1

### Bugfixes
- Avoid extraneous line breaks for zero-argument call expressions: [https://github.com/trivago/prettier-plugin-twig-melody/issues/10](https://github.com/trivago/prettier-plugin-twig-melody/issues/10)

---
## v0.1.0

### Features
- "If" statements can be in one line now, under certain circumstances
- New option `twigAlwaysBreakObjects`
- New option `twigPrintWidth`
- All util functions are public now (available to plugins)
- Optimizations: Fewer line breaks in a lot of cases, less indentation
- Long HTML comments are re-wrapped now

### Bugfixes
- Respect operator precedence in binary expressions (especially boolean)

---
## v0.0.34

Various small bug fixes and cosmetic optimizations

---
## v0.0.33

### Bugfixes
- Empty block was causing an error. Does not an more.

---
## v0.0.32

### Features
- Uses Melody 1.5.0
- Trim left and trim right marks are preserved for Twig tags `{%- ... -%}`

---
## v0.0.31

### Features
- Uses Melody 1.4.0
- Whitespace trimming is now suppressed
- Trim left and trim right marks are preserved for expressions `{{- ... -}}`

---
## v0.0.30

### Bugfixes
- MacroDeclarationStatement: There was an extraneous space after the opening parenthesis
- Plugin loading: project root path was not always correctly determined

---
## v0.0.29

- Make use of new `melody-parser` capabilities:
  - Add comment printing
  - Pass parser option to leave character entities undecoded
  - Preserve HTML comments

---
## v0.0.28

- Fix [issue #2](https://github.com/trivago/prettier-plugin-twig-melody/issues/2), where all final newlines in a file were skipped. Now, there will be one final newline.

---
## v0.0.27
- Fix attribute printing in objects. Computed attributes are now surrounded by `(...)`. Keys that don't need quotes will not be quoted.
