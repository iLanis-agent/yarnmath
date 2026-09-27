/* YarnMath engine - honest yarn math: the swatch decides everything. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.YarnEngine = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  /* Gauge from a 4-inch swatch. */
  function stPerIn(stIn4) { return stIn4 / 4; }
  function rowsPerIn(rowsIn4) { return rowsIn4 / 4; }

  /* Cast-on for a target width, snapped to a stitch multiple (mult of m, plus a extra). */
  function castOn(widthIn, stIn4, mult, add) {
    var raw = widthIn * stIn4 / 4;
    if (!mult || mult <= 1) return Math.ceil(raw);
    var n = Math.ceil((raw - (add || 0)) / mult) * mult + (add || 0);
    return n;
  }

  function rowsFor(lengthIn, rowsIn4) {
    return Math.ceil(lengthIn * rowsIn4 / 4);
  }

  /* Grams scale by AREA: weigh the blocked swatch, measure it, scale to the project. */
  function gramsForArea(projectIn2, swatchGrams, swatchIn2) {
    return projectIn2 * swatchGrams / swatchIn2;
  }

  /* Skeins: always round up, then add the buffer - dye lots are forever. */
  function skeinsNeeded(grams, skeinGrams, bufferPct) {
    return Math.max(1, Math.ceil(grams * (1 + bufferPct / 100) / skeinGrams));
  }

  /* Yardage from the label: skein yds per skein grams. */
  function yardsForGrams(grams, skeinYds, skeinGrams) {
    return grams * skeinYds / skeinGrams;
  }

  /* How wide the piece will ACTUALLY come out at your gauge. */
  function actualWidth(castOnSts, stIn4) {
    return Math.round(castOnSts * 4 / stIn4 * 100) / 100;
  }
  function actualLength(rows, rowsIn4) {
    return Math.round(rows * 4 / rowsIn4 * 100) / 100;
  }

  function r2(x) { return Math.round(x * 100) / 100; }

  return {
    stPerIn: stPerIn,
    rowsPerIn: rowsPerIn,
    castOn: castOn,
    rowsFor: rowsFor,
    gramsForArea: gramsForArea,
    skeinsNeeded: skeinsNeeded,
    yardsForGrams: yardsForGrams,
    actualWidth: actualWidth,
    actualLength: actualLength,
    r2: r2
  };
});
