Selector-Query
==============

**Selector Query is a jQuery plugin that adds selector classes to elements depending on its width.**

**Think of media queries but for element widths instead of browser widths.**

**Features**
* Very lightweight jQuery plugin < 1kb
* Uses a debouncer for window resize events
* Configurable width stops
* Configurable class prefix
* Can be attached and configured differently for multiple elements

What it does
------------

While using a debounced resize event, the script checks the widths of the elements (includes paddings) and attaches the necessary width classes to the element.

Demo
----

[Demo link](http://bfintal.github.io/Selector-Query/demo/demo.html)

Width stops & classes
---------------------

By default, width stops are defined as:

    320, 480, 640, 960, 1024, 1280

If your element's width goes below one of these stops, that certain stop (including the larger ones) gets assigned as a class to your element. For example, if your element's width goes below `960` pixels, the following classes would be assigned to it:

    max-960 max-1024 max-1280

What is it for
--------------

Similar to CSS media queries, you can use Selector Queries to style your elements depending on their width. **Helpful for styling elements within columns, or for styling elements which you have no control where they're getting placed (e.g. themes)**

Usage
=====

Include the plugin just before the closing of your body

    <script src="jquery.selectorquery.min.js"></script>

Call it at the ready

    jQuery(document).ready(function( $ ) {
        $('.selector').selectorQuery();
    });

**No need to call anything on resize**

Configurable Options
--------------------

`Width stops` and the `class prefix` can be configured when initializing the plugin:

    $('.selector').selectorQuery({
        'widthStops': [320, 480, 640, 960, 1024, 1280],
        'classPrefix': 'max-'
    });

License
=======

GPL v2 licensed

Copyright (c) 2013 [Benjamin Intal](http://twitter.com/bfintal).
