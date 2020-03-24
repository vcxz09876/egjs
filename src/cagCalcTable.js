var cagCalcTable = {};

/*
Setup tableCalculator.rowCalculation
*/

cagCalcTable.calculatedFields = {};

// 1
cagCalcTable.calculatedFields.W4_1 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 250) {
    return 'XA0';
  } else if (SO4 > 250 && SO4 <= 500) {
    return 'XA1';
  } else if (SO4 > 500 && SO4 <= 1000) {
    return 'XA2';
  } else if (SO4 > 1000) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W6_1 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 325) {
    return 'XA0';
  } else if (SO4 > 325 && SO4 <= 650) {
    return 'XA1';
  } else if (SO4 > 650 && SO4 <= 1300) {
    return 'XA2';
  } else if (SO4 > 1300) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W8_1 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 325) {
    return 'XA0';
  } else if (SO4 > 325 && SO4 <= 650) {
    return 'XA1';
  } else if (SO4 > 650 && SO4 <= 1300) {
    return 'XA2';
  } else if (SO4 > 1300) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W10_1 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 500) {
    return 'XA0';
  } else if (SO4 > 500 && SO4 <= 1000) {
    return 'XA1';
  } else if (SO4 > 1000 && SO4 <= 2000) {
    return 'XA2';
  } else if (SO4 > 2000) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W12_1 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 625) {
    return 'XA0';
  } else if (SO4 > 625 && SO4 <= 1250) {
    return 'XA1';
  } else if (SO4 > 1250 && SO4 <= 2500) {
    return 'XA2';
  } else if (SO4 > 2500) {
    return 'XA3';
  } else {
    return undefined;
  }
};

// 2
cagCalcTable.calculatedFields.W4_2 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 1500) {
    return 'XA0';
  } else if (SO4 > 1500 && SO4 <= 3000) {
    return 'XA1';
  } else if (SO4 > 3000 && SO4 <= 4000) {
    return 'XA2';
  } else if (SO4 > 4000) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W6_2 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 1950) {
    return 'XA0';
  } else if (SO4 > 1950 && SO4 <= 3900) {
    return 'XA1';
  } else if (SO4 > 3900 && SO4 <= 5200) {
    return 'XA2';
  } else if (SO4 > 5200) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W8_2 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 2250) {
    return 'XA0';
  } else if (SO4 > 2250 && SO4 <= 5100) {
    return 'XA1';
  } else if (SO4 > 5100 && SO4 <= 6800) {
    return 'XA2';
  } else if (SO4 > 6800) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W10_2 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 3000) {
    return 'XA0';
  } else if (SO4 > 3000 && SO4 <= 6000) {
    return 'XA1';
  } else if (SO4 > 6000 && SO4 <= 8000) {
    return 'XA2';
  } else if (SO4 > 8000) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W12_2 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 3750) {
    return 'XA0';
  } else if (SO4 > 3750 && SO4 <= 7500) {
    return 'XA1';
  } else if (SO4 > 7500 && SO4 <= 10000) {
    return 'XA2';
  } else if (SO4 > 10000) {
    return 'XA3';
  } else {
    return undefined;
  }
};

// 3
cagCalcTable.calculatedFields.W4_3 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 3000) {
    return 'XA0';
  } else if (SO4 > 3000 && SO4 <= 6000) {
    return 'XA1';
  } else if (SO4 > 6000 && SO4 <= 8000) {
    return 'XA2';
  } else if (SO4 > 8000) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W6_3 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 3900) {
    return 'XA0';
  } else if (SO4 > 3900 && SO4 <= 7800) {
    return 'XA1';
  } else if (SO4 > 7800 && SO4 <= 10400) {
    return 'XA2';
  } else if (SO4 > 10400) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W8_3 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 5100) {
    return 'XA0';
  } else if (SO4 > 5100 && SO4 <= 10200) {
    return 'XA1';
  } else if (SO4 > 10200 && SO4 <= 13600) {
    return 'XA2';
  } else if (SO4 > 13600) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W10_3 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 6000) {
    return 'XA0';
  } else if (SO4 > 6000 && SO4 <= 12000) {
    return 'XA1';
  } else if (SO4 > 12000 && SO4 <= 16000) {
    return 'XA2';
  } else if (SO4 > 16000) {
    return 'XA3';
  } else {
    return undefined;
  }
};

cagCalcTable.calculatedFields.W12_3 = function(vf) {
  var SO4 = vf('SO4');

  if (isNaN(SO4)) {
    return undefined;
  }

  if (SO4 <= 7500) {
    return 'XA0';
  } else if (SO4 > 7500 && SO4 <= 15000) {
    return 'XA1';
  } else if (SO4 > 15000 && SO4 <= 20000) {
    return 'XA2';
  } else if (SO4 > 20000) {
    return 'XA3';
  } else {
    return undefined;
  }
};

// WCl
cagCalcTable.calculatedFields.W_Cl = function(vf) {
  var SO4 = vf('SO4');
  var Cl = vf('Cl');

  if (isNaN(SO4)) {
    SO4 = 0.0;
  }

  if (isNaN(Cl)) {
    return undefined;
  }

  var WSum = (SO4*0.25) + Cl;

  if (WSum <= 250) {
    return 'XA0';
  } else if (WSum > 250 && WSum <= 500) {
    return 'XA1';
  } else if (WSum > 500 && WSum <= 5000) {
    return 'XA2';
  } else if (WSum > 5000) {
    return 'XA3';
  } else {
    return undefined;
  }
};


cagCalcTable.rowCalculation = tableCalculator.makeRowCalculation(cagCalcTable.calculatedFields)
