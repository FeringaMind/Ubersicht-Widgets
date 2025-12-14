# Ubersicht-Widgets

These are a few simple widgets I made for [felixhagelo](https://github.com/felixhageloh)'s [Übersicht](https://github.com/felixhageloh/uebersicht). 

Description and documentation of each widget can be found in the README.md down below.


## style.jsx

Contains global (style) options to ensure a uniform look and easy setup/adjustment of some of the widgets. Make sure to download this file together with the widget you want to use, as all widgets in this repository depend on it. 

All possible settings and options are commented in the file on what it does and how to change it, so I won't provide any further documentation here. 

***(Maybe I'll write some more documentation here when I've got time)***


## Clock

A widget showing a clock (AM/PM 12-hour-system) togteher with a second counter, and today's date, day and calender week.

This widget uses [tonsky's](https://github.com/tonsky) [Fira Mono/Code](https://github.com/tonsky/FiraCode) font, so it has to be installed for the second counter to work as intended. If it is not installed, Übersicht will default to another font, which will likely break the widgets appearence.


## Quotes

A widget displaying a random quote from a given file which changing after a set amount of time.

The quotes should be in a file names "quotes.txt" located in the same directory as this widget. The quotes in the file need to be structures as follows:

```
QUOTE : AUTHOR
QUOTE : AUTHOR
QUOTE : AUTHOR
```

Each quote needs to be in a separate line and structured as shown above. To place a linebreak at a specific point in the quote one can use a ```<br />```. For example: ```Comparison is the<br />thief of joy. : Theodore Rooseveld```, which will produce the following quote on-screen:

```
Comparison is the
thief of joy.

    - Theodore Rooseveld
```

The code uses *" : "* as a marker for the quote's author (colon with a space on each side). This means you can use the colon symbol as long as there are not two spaces around it.


## File Placement

A widget that simply displays a gray transparent square on the desktop to highlight an area where files should be put, purely for a clean visual.


## Gifs

A widget that displays a gif on screen, depending on the system appearance (dark/light).

The gifs need to be placed in the same folder as the widget and need to be named *gif-day.gif* and *gif-night.gif*.


## ALL WIDGETS 

The placement, font, size, color, transparency, ... of all widgets can be changed in either the global *style.jsx* or each *index.jsx*. 