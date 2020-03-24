var cptFactTable = {};

/*
Setup tableCalculator.rowCalculation
*/

cptFactTable.calculatedFields = {};

cptFactTable.calculatedFields.Fr = tableCalculator.withRD(4)(function(vf) {
  if (isNaN(vf('qs')) || isNaN(vf('fs'))) {
    return undefined;
  }
  return (vf('fs') / 1000) / Math.pow(vf('qs'), 2);
});

cptFactTable.calculatedFields.e = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('Fr')) || isNaN(vf('qs')) || vf('Fr') >= 0.0025 || vf('Fr') == 0) {
    return undefined;
  }
  return 0.815 - 0.104 * Math.log(vf('qs'));
});

cptFactTable.calculatedFields.Il = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('Fr')) || isNaN(vf('qs')) || vf('Fr') < 0.0025 || vf('Fr') == 0) {
    return undefined;
  }
  return 0.352 - 0.184 * Math.log(vf('qs'));
});

cptFactTable.calculatedFields.stringifyRange = function(vf){
  if (isNaN(vf('qs'))) {
    return undefined;
  }
  return Array(Math.floor(vf('qs')/1)).join("⚫");
};

cptFactTable.rowCalculation = tableCalculator.makeRowCalculation(cptFactTable.calculatedFields)
