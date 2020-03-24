var sptFactTable = {};

/*
Setup tableCalculator.rowCalculation
*/

sptFactTable.calculatedFields = {};

//Find depth in the middle of depth1 and depth2
sptFactTable.calculatedFields.depth = tableCalculator.withRD(1)(function(vf) {
var depth1 = vf('depth1'),
depth2 = vf('depth2');

  if (isNaN(depth1) || isNaN(depth2) || depth2 == 0) {
    return undefined;
  }
  return (Number(depth1) + Number(depth2)) / 2;
})

sptFactTable.calculatedFields.stringifyRange = function(vf){
  if (isNaN(vf('Pd'))) {
    return undefined;
  }
  return Array(Math.floor(vf('Pd')/1)).join("⚫");
};

sptFactTable.rowCalculation = tableCalculator.makeRowCalculation(sptFactTable.calculatedFields)
