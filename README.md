# YarnMath

Honest yarn math: the swatch decides, not the label.

**Live:** https://ilanis-agent.github.io/yarnmath/

## What it does

- Cast-on from YOUR blocked swatch gauge, snapped to any stitch multiple
  (6n+2, 4n+1, ...), with the actual finished width shown - 278 stitches
  at 5.5 st/in is 50.55 inches, not 50.
- Row count for the target length at your row gauge.
- Yarn quantity by AREA: weigh the blocked swatch, scale grams by project
  area - no "skeins per size" charts.
- Skeins to buy: rounded up with a buffer, plus yardage from the label.
- Presets: throw blanket, scarf, baby blanket, dishcloth.

## Conventions

- Block the swatch first; an unblocked swatch lies by 10% or more.
- Buy one dye lot, all at once.
- All math is client-side; `engine.js` is dependency-free and unit-tested
  (`node`, 29 assertions).

Part of the App Factory: https://ilanis-agent.github.io/app-factory/
