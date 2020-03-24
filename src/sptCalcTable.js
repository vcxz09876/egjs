var sptCalcTable = {};

/*
Setup tableCalculator.rowCalculation
*/

sptCalcTable.calculatedFields = {};

sptCalcTable.calculatedFields.e = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('Pd')) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ'].includes(vf('groundType'))) {
    return undefined;
  }
  return 0.855 - 0.130 * Math.log(vf('Pd'));
});

sptCalcTable.calculatedFields.ps = tableCalculator.withRD(2)(function(vf) {
  if (['Г', 'К', 'С', 'М'].includes(vf('groundType'))) {
    return 2.65;
  } else if (['П НВ', 'П ВЛ'].includes(vf('groundType'))) {
    return 2.66;
  } else if (['СП М', 'СП ОЛ', 'СП Л', 'СП'].includes(vf('groundType'))) {
    return 2.70;
  } else if (['СГ М', 'СГ ОЛ', 'СГ Л', 'СГ'].includes(vf('groundType'))) {
    return 2.70;
  } else {
    return undefined;
  }
});

sptCalcTable.calculatedFields.pd = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('e')) || isNaN(vf('ps'))) {
    return undefined;
  }
  return vf('ps') / (1 + vf('e'));
});

sptCalcTable.calculatedFields.Il = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('Pd')) || !['СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'].includes(vf('groundType'))) {
    return undefined;
  }

  if (vf('groundType') == 'СП М') {
    return 0.475 - 0.228 * Math.log(vf('Pd'));
  }

  if (vf('groundType') == 'СГ М') {
    return 0.556 - 0.202 * Math.log(vf('Pd'));
  }

  if (vf('groundType') == 'СП Л' || vf('groundType') == 'СГ Л') {
    return 0.514 - 0.220 * Math.log(vf('Pd'));
  }

  return undefined;
});



sptCalcTable.calculatedFields.p = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('W')) || isNaN(vf('pd'))) {
    return undefined;
  }
  return vf('pd') + 0.01 * vf('W') * vf('pd');
});


sptCalcTable.calculatedFields.Y = tableCalculator.withRD(1)(function(vf) {
  if (isNaN(vf('p'))) {
    return undefined;
  }
  return vf('p') * 10;
});




sptCalcTable.calculatedFields.c = tableCalculator.withRD(3)(function(vf) {
  var Pd = vf('Pd'),
    groundType = vf('groundType'), // Caching

    iop = tableCalculator.interpOnPline,
    Pt = tableCalculator.Point2D; // Shortcuts

  if (isNaN(Pd) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ',
      'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'
    ].includes(groundType)) {
    return undefined;
  }

  if (groundType == 'К') {
    var res = iop([
      new Pt(2, 0),
      new Pt(3, 0),
      new Pt(5, 0.005),
      new Pt(10, 0.008),
      new Pt(15, 0.015),
      new Pt(17.5, 0.020)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'С') {
    var res = iop([
      new Pt(1.5, 0),
      new Pt(2, 0),
      new Pt(3, 0),
      new Pt(5, 0.011),
      new Pt(10, 0.017),
      new Pt(15, 0.025),
      new Pt(17.5, 0.030)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'М') {
    var res = iop([
      new Pt(1.5, 0),
      new Pt(2, 0.01),
      new Pt(3, 0.015),
      new Pt(5, 0.021),
      new Pt(10, 0.035),
      new Pt(15, 0.040),
      new Pt(17.5, 0.045)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'П НВ' || groundType == 'П ВЛ') {
    var res = iop([
      new Pt(1.5, 0.015),
      new Pt(2, 0.020),
      new Pt(3, 0.030),
      new Pt(5, 0.041),
      new Pt(10, 0.055),
      new Pt(15, 0.060),
      new Pt(17.5, 0.065)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СП М') {
    var res = iop([
      new Pt(1.2, 0.023),
      new Pt(2.4, 0.026),
      new Pt(3.6, 0.030),
      new Pt(6, 0.036),
      new Pt(9, 0.040),
      new Pt(12, 0.042),
      new Pt(15, 0.048)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СГ М') {
    var res = iop([
      new Pt(1.2, 0.030),
      new Pt(2.4, 0.035),
      new Pt(3.6, 0.040),
      new Pt(6, 0.045),
      new Pt(9, 0.050),
      new Pt(12, 0.052),
      new Pt(15, 0.056)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СП ОЛ' || groundType == 'СГ ОЛ') {
    var res = iop([
      new Pt(1.2, 0.036),
      new Pt(2.4, 0.042),
      new Pt(3.6, 0.056),
      new Pt(6, 0.065),
      new Pt(9, 0.85),
      new Pt(12, 0.1),
      new Pt(15, 0.13)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП Л') {
    var res = iop([
      new Pt(1.2, 0.018),
      new Pt(2.4, 0.022),
      new Pt(3.6, 0.025),
      new Pt(6, 0.030),
      new Pt(9, 0.032),
      new Pt(12, 0.034),
      new Pt(15, 0.036)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СГ Л') {
    var res = iop([
      new Pt(1.2, 0.025),
      new Pt(2.4, 0.028),
      new Pt(3.6, 0.034),
      new Pt(6, 0.036),
      new Pt(9, 0.040),
      new Pt(12, 0.045),
      new Pt(15, 0.052)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП') {
    var res = iop([
      new Pt(1.2, 0.011),
      new Pt(2.4, 0.014),
      new Pt(3.6, 0.015),
      new Pt(6, 0.017),
      new Pt(9, 0.019),
      new Pt(12, 0.021),
      new Pt(15, 0.024)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СГ') {
    var res = iop([
      new Pt(1.2, 0.015),
      new Pt(2.4, 0.022),
      new Pt(3.6, 0.025),
      new Pt(6, 0.028),
      new Pt(9, 0.035),
      new Pt(12, 0.040),
      new Pt(15, 0.047)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }
  return undefined;
})


sptCalcTable.calculatedFields.f = tableCalculator.withRD(1)(function(vf) {
  var Pd = vf('Pd'),
    groundType = vf('groundType'), // Caching

    iop = tableCalculator.interpOnPline,
    Pt = tableCalculator.Point2D; // Shortcuts

  if (isNaN(Pd) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ',
      'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'
    ].includes(groundType)) {
    return undefined;
  }


  if (groundType == 'К') {
    var res = iop([
      new Pt(2, 34),
      new Pt(3, 36),
      new Pt(5, 38),
      new Pt(10, 39),
      new Pt(15, 40),
      new Pt(17.5, 41)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'С') {
    var res = iop([
      new Pt(1.5, 31),
      new Pt(2, 32),
      new Pt(3, 33),
      new Pt(5, 35),
      new Pt(10, 37),
      new Pt(15, 38),
      new Pt(17.5, 39)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'М') {
    var res = iop([
     new Pt(1.5, 28),
      new Pt(2, 29),
      new Pt(3, 30),
      new Pt(5, 32),
      new Pt(10, 35),
      new Pt(15, 36),
      new Pt(17.5, 37)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'П НВ' || groundType == 'П ВЛ') {
    var res = iop([
      new Pt(1.5, 24),
      new Pt(2, 26),
      new Pt(3, 28),
      new Pt(5, 30),
      new Pt(10, 33),
      new Pt(15, 34),
      new Pt(17.5, 35)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП М') {
    var res = iop([
      new Pt(1.2, 26),
      new Pt(2.4, 27),
      new Pt(3.6, 27),
      new Pt(6, 28),
      new Pt(9, 29),
      new Pt(12, 30),
      new Pt(15, 31)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СГ М') {
    var res = iop([
      new Pt(1.2, 25),
      new Pt(2.4, 26),
      new Pt(3.6, 26),
      new Pt(6, 27),
      new Pt(9, 28),
      new Pt(12, 29),
      new Pt(15, 29)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП ОЛ' || groundType == 'СГ ОЛ') {
    var res = iop([
      new Pt(1.2, 14),
      new Pt(2.4, 14),
      new Pt(3.6, 13),
      new Pt(6, 12),
      new Pt(9, 11),
      new Pt(12, 10),
      new Pt(15, 9)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СП Л') {
    var res = iop([
      new Pt(1.2, 22),
      new Pt(2.4, 26),
      new Pt(3.6, 27),
      new Pt(6, 27),
      new Pt(9, 28),
      new Pt(12, 28),
      new Pt(15, 29)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СГ Л') {
    var res = iop([
      new Pt(1.2, 21),
      new Pt(2.4, 23),
      new Pt(3.6, 24),
      new Pt(6, 25),
      new Pt(9, 26),
      new Pt(12, 27),
      new Pt(15, 28)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }



  if (groundType == 'СП') {
    var res = iop([
      new Pt(1.2, 18),
      new Pt(2.4, 21),
      new Pt(3.6, 24),
      new Pt(6, 27),
      new Pt(9, 29),
      new Pt(12, 29),
      new Pt(15, 30)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СГ') {
    var res = iop([
      new Pt(1.2, 16),
      new Pt(2.4, 18),
      new Pt(3.6, 20),
      new Pt(6, 22),
      new Pt(9, 24),
      new Pt(12, 25),
      new Pt(15, 26)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }
  return undefined;
});


sptCalcTable.calculatedFields.E = tableCalculator.withRD(1)(function(vf) {
  var Pd = vf('Pd'),
    groundType = vf('groundType'), // Caching

    iop = tableCalculator.interpOnPline,
    Pt = tableCalculator.Point2D; // Shortcuts

  if (isNaN(Pd) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ',
      'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ', 'БГ'
    ].includes(groundType)) {
    return undefined;
  }

  /*
        new Pt(1.2, ),
        new Pt(2, ),
        new Pt(3, ),
        new Pt(5, ),
        new Pt(10, ),
        new Pt(15, )*/

  if (['Г', 'К'].includes(groundType)) {
    var res = iop([
      new Pt(1.2, 11),
      new Pt(2, 14),
      new Pt(3, 16),
      new Pt(5, 23),
      new Pt(10, 40),
      new Pt(15, 55)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'С') {
    var res = iop([
      new Pt(1.2, 10),
      new Pt(2, 14),
      new Pt(3, 16),
      new Pt(5, 22),
      new Pt(10, 35),
      new Pt(15, 50)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'М') {
    var res = iop([
      new Pt(1.2, 9),
      new Pt(2, 12),
      new Pt(3, 15),
      new Pt(5, 21),
      new Pt(10, 33),
      new Pt(15, 45)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'П НВ' || groundType == 'П ВЛ') {
    var res = iop([
      new Pt(1.2, 8),
      new Pt(2, 11),
      new Pt(3, 14),
      new Pt(5, 20),
      new Pt(10, 32),
      new Pt(15, 46)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СП М' || groundType == 'СГ М') {
    var res = iop([
      new Pt(1.2, 10),
      new Pt(2, 13),
      new Pt(3, 16),
      new Pt(5, 22),
      new Pt(10, 38),
      new Pt(15, 54)
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if ('СГ ОЛ' == groundType) {
    var res = iop([
      new Pt(1.2, 9),
      new Pt(2, 12),
      new Pt(3, 18),
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП Л' || groundType == 'СГ Л') {
    var res = iop([
      new Pt(1.2, 8),
      new Pt(2, 12),
      new Pt(3, 15),
      new Pt(5, 19),
      new Pt(10, 30),
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }



  if (['СП ОЛ', 'СП', 'СГ'].includes(groundType)) {
    var res = iop([
      new Pt(1.2, 6),
      new Pt(2, 8.5),
      new Pt(3, 13),
      new Pt(5, 16),
    ])(Pd);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


});


sptCalcTable.calculatedFields.hardness = function(vf) {
  var Pd = vf('Pd'),
    groundType = vf('groundType');

  if (isNaN(Pd) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ', 'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'].includes(groundType)) {
    return undefined;
  }


  if (['Г', 'К', 'С'].includes(groundType)) {
    if (Pd < 3.0) {
      return 'малопр.';
    }

    if (Pd <= 14) {
      return 'ср пр.';
    }

    if (Pd > 14) {
      return 'прочн.';
    }
  }

  if (groundType == 'М') {
    if (Pd < 2.2) {
      return 'малопр.';
    }

    if (Pd <= 8.5) {
      return 'ср пр.';
    }

    if (Pd > 8.5) {
      return 'прочн.';
    }
  }

  if (['П НВ', 'П ВЛ'].includes(groundType)) {
    if (Pd < 1.5) {
      return 'малопр.';
    }

    if (Pd <= 8.5) {
      return 'ср пр.';
    }

    if (Pd > 8.5) {
      return 'прочн.';
    }
  }


  if (['СП М', 'СГ М'].includes(groundType)) {
    if (Pd < 1.2) {
      return 'слаб.';
    }

    if (Pd <= 2.8) {
      return 'ср пр.';
    }

    if (Pd <= 8.3) {
      return 'прочн.';
    }

    if (Pd > 8.3) {
      return 'прочн.';
    }
  }

};


sptCalcTable.calculatedFields.name = function(vf) {
  var groundType = vf('groundType'),
    hardness = vf('hardness');

  if (groundType == undefined) {
    return undefined;
  }

  if (hardness == undefined) {
    hardness = '';
  }

  return groundType + ' ' + hardness;

}


sptCalcTable.rowCalculation = tableCalculator.makeRowCalculation(sptCalcTable.calculatedFields);
