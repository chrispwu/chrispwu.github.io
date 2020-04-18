---
layout: default
title: HTML/CSS
parent: Web
grand_parent: Fun
nav_order: 1
---

# HTML/CSS
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

* TOC
{:toc}

---

## CSS Class Reuse

Reuse one style with slight modifications, depending amount of mods:
- Define a combined class and add rules for individual differences, only use one in HTML.
<div class="code-example" markdown="1">
```css
.class1, .class2 {
  common-rule: common;
}
.class1 {
  diff-rule: diff1;
}
.class2 {
  diff-rule: diff2;
}
```
</div>
- Define separate classes and use both in HTML. Note the **class lower down in CSS stylesheet (.class-mod in this case) overwrites** the upper one.
<div class="code-example" markdown="1">
```css
// CSS
.class-main {
  main-rule: main;
  ...
}
.class-mod {
  mod-rule: mod;
}
```
</div>

<div class="code-example" markdown="1">
```html
<!–– HTML ––>
<div class="class-main class-mod"></div>
```
</div>
