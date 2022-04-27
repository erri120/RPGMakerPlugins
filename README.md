# RPG Maker Plugins

- [PlaytimeFix](#playtimefix) (for MV and MZ)

## PlaytimeFix

Source: [PlaytimeFix.js](src/PlaytimeFix.js)

[Don't count frames to calculate time](https://erri120.github.io/posts/2021-09-29/). RPG Maker MV/MZ use a frame counter for various operations such as determining how much time has passed. This is obviously completely stupid since frame times can differ wildly and you can just use normal date operations. This is exactly what this plugin does: use `Date.now()` and calculate the difference when needed.

I wrote a blog post about this [here](https://erri120.github.io/posts/2021-09-29/).
