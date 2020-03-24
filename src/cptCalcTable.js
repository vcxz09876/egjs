var cptCalcTable = {};

/*
Setup tableCalculator.rowCalculation
*/

cptCalcTable.calculatedFields = {};

cptCalcTable.calculatedFields.e = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('qs')) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ'].includes(vf('groundType'))) {
    return undefined;
  }
  return 0.815 - 0.104 * Math.log(vf('qs'));
});

cptCalcTable.calculatedFields.ps = tableCalculator.withRD(2)(function(vf) {
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

cptCalcTable.calculatedFields.pd = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('e')) || isNaN(vf('ps'))) {
    return undefined;
  }
  return vf('ps') / (1 + vf('e'));
});

cptCalcTable.calculatedFields.Il = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('qs')) || !['СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'].includes(vf('groundType'))) {
    return undefined;
  }
  return 0.352 - 0.184 * Math.log(vf('qs'));
});

cptCalcTable.calculatedFields.p = tableCalculator.withRD(2)(function(vf) {
  if (isNaN(vf('W')) || isNaN(vf('pd'))) {
    return undefined;
  }
  return vf('pd') + 0.01 * vf('W') * vf('pd');
});


cptCalcTable.calculatedFields.Y = tableCalculator.withRD(1)(function(vf) {
  if (isNaN(vf('p'))) {
    return undefined;
  }
  return vf('p') * 10;
});




cptCalcTable.calculatedFields.c = tableCalculator.withRD(3)(function(vf) {
  var qs = vf('qs'),
    groundType = vf('groundType'), // Caching

    iop = tableCalculator.interpOnPline,
    Pt = tableCalculator.Point2D; // Shortcuts

  if (isNaN(qs) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ',
      'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'
    ].includes(groundType)) {
    return undefined;
  }

  if (groundType == 'К') {
    var res = iop([
      new Pt(10, 0.001),
      new Pt(20, 0.001),
      new Pt(30, 0.002)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'С') {
    var res = iop([
      new Pt(5, 0.001),
      new Pt(8, 0.001),
      new Pt(10, 0.002),
      new Pt(15, 0.002),
      new Pt(20, 0.002),
      new Pt(30, 0.003)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'М') {
    var res = iop([
      new Pt(3, 0.001),
      new Pt(5, 0.002),
      new Pt(8, 0.002),
      new Pt(10, 0.003),
      new Pt(15, 0.004),
      new Pt(20, 0.004),
      new Pt(30, 0.005)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'П НВ' || groundType == 'П ВЛ') {
    var res = iop([
      new Pt(2, 0.002),
      new Pt(3, 0.003),
      new Pt(5, 0.004),
      new Pt(8, 0.004),
      new Pt(10, 0.005),
      new Pt(15, 0.006),
      new Pt(20, 0.006),
      new Pt(30, 0.007)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП М') {
    var res = iop([
      new Pt(1, 0.023),
      new Pt(2, 0.027),
      new Pt(3, 0.031),
      new Pt(5, 0.036),
      new Pt(8, 0.040),
      new Pt(10, 0.042),
      new Pt(12, 0.048)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СГ М') {
    var res = iop([
      new Pt(1, 0.030),
      new Pt(2, 0.036),
      new Pt(3, 0.040),
      new Pt(5, 0.045),
      new Pt(8, 0.049),
      new Pt(10, 0.052),
      new Pt(12, 0.056)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СП ОЛ' || groundType == 'СГ ОЛ') {
    var res = iop([
      new Pt(1, 0.036),
      new Pt(2, 0.043),
      new Pt(3, 0.056),
      new Pt(5, 0.066),
      new Pt(8, 0.087),
      new Pt(10, 0.102),
      new Pt(12, 0.130)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП Л') {
    var res = iop([
      new Pt(1, 0.018),
      new Pt(2, 0.022),
      new Pt(3, 0.026),
      new Pt(5, 0.030),
      new Pt(8, 0.032),
      new Pt(10, 0.034),
      new Pt(12, 0.036)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СГ Л') {
    var res = iop([
      new Pt(1, 0.025),
      new Pt(2, 0.030),
      new Pt(3, 0.034),
      new Pt(5, 0.036),
      new Pt(8, 0.041),
      new Pt(10, 0.046),
      new Pt(12, 0.052)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП') {
    var res = iop([
      new Pt(1, 0.011),
      new Pt(2, 0.013),
      new Pt(3, 0.015),
      new Pt(5, 0.017),
      new Pt(8, 0.019),
      new Pt(10, 0.021),
      new Pt(12, 0.024)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СГ') {
    var res = iop([
      new Pt(1, 0.016),
      new Pt(2, 0.023),
      new Pt(3, 0.025),
      new Pt(5, 0.028),
      new Pt(8, 0.035),
      new Pt(10, 0.039),
      new Pt(12, 0.047)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }
  return undefined;
})


cptCalcTable.calculatedFields.f = tableCalculator.withRD(1)(function(vf) {
  var qs = vf('qs'),
    groundType = vf('groundType'), // Caching

    iop = tableCalculator.interpOnPline,
    Pt = tableCalculator.Point2D; // Shortcuts

  if (isNaN(qs) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ',
      'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'
    ].includes(groundType)) {
    return undefined;
  }


  if (groundType == 'К') {
    var res = iop([
      new Pt(1, 30),
      new Pt(2, 32),
      new Pt(3, 34),
      new Pt(5, 36),
      new Pt(8, 38),
      new Pt(10, 39),
      new Pt(15, 40),
      new Pt(20, 41),
      new Pt(30, 42)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'С') {
    var res = iop([
      new Pt(1, 38),
      new Pt(2, 330),
      new Pt(3, 32),
      new Pt(5, 35),
      new Pt(8, 36),
      new Pt(10, 37),
      new Pt(15, 38),
      new Pt(20, 38),
      new Pt(30, 39)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'М') {
    var res = iop([
      new Pt(1, 26),
      new Pt(2, 29),
      new Pt(3, 30),
      new Pt(5, 32),
      new Pt(8, 34),
      new Pt(10, 35),
      new Pt(15, 36),
      new Pt(20, 37),
      new Pt(30, 38)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'П НВ' || groundType == 'П ВЛ') {
    var res = iop([
      new Pt(1, 24),
      new Pt(2, 26),
      new Pt(3, 28),
      new Pt(5, 30),
      new Pt(8, 32),
      new Pt(10, 33),
      new Pt(15, 34),
      new Pt(20, 35),
      new Pt(30, 36)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП М') {
    var res = iop([
      new Pt(1, 26),
      new Pt(2, 27),
      new Pt(3, 27),
      new Pt(5, 28),
      new Pt(8, 29),
      new Pt(10, 30),
      new Pt(12, 31)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СГ М') {
    var res = iop([
      new Pt(1, 25),
      new Pt(2, 26),
      new Pt(3, 26),
      new Pt(5, 27),
      new Pt(8, 28),
      new Pt(10, 29),
      new Pt(12, 29)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'СП ОЛ' || groundType == 'СГ ОЛ') {
    var res = iop([
      new Pt(1, 14),
      new Pt(2, 14),
      new Pt(3, 13),
      new Pt(5, 12),
      new Pt(8, 11),
      new Pt(10, 10),
      new Pt(12, 9)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СП Л') {
    var res = iop([
      new Pt(1, 22),
      new Pt(2, 26),
      new Pt(3, 27),
      new Pt(5, 27),
      new Pt(8, 28),
      new Pt(10, 28),
      new Pt(12, 29)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СГ Л') {
    var res = iop([
      new Pt(1, 21),
      new Pt(2, 23),
      new Pt(3, 24),
      new Pt(5, 25),
      new Pt(8, 26),
      new Pt(10, 27),
      new Pt(12, 28)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }



  if (groundType == 'СП') {
    var res = iop([
      new Pt(1, 18),
      new Pt(2, 21),
      new Pt(3, 24),
      new Pt(5, 27),
      new Pt(8, 29),
      new Pt(10, 29),
      new Pt(12, 30)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }


  if (groundType == 'СГ') {
    var res = iop([
      new Pt(1, 16),
      new Pt(2, 18),
      new Pt(3, 20),
      new Pt(5, 22),
      new Pt(8, 24),
      new Pt(10, 25),
      new Pt(12, 26)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }
  return undefined;
});


cptCalcTable.calculatedFields.E = tableCalculator.withRD(1)(function(vf) {
  var qs = vf('qs'),
    groundType = vf('groundType'), // Caching

    iop = tableCalculator.interpOnPline,
    Pt = tableCalculator.Point2D; // Shortcuts

  if (isNaN(qs) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ',
      'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ', 'БГ'
    ].includes(groundType)) {
    return undefined;
  }

  if (['Г', 'К', 'С'].includes(groundType)) {
    var res = iop([
      new Pt(1, 10),
      new Pt(2, 15),
      new Pt(4, 21),
      new Pt(6, 25),
      new Pt(8, 32),
      new Pt(10, 38),
      new Pt(12, 45),
      new Pt(15, 50),
      new Pt(20, 60)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'М') {
    var res = iop([
      new Pt(1, 8),
      new Pt(2, 12),
      new Pt(4, 18),
      new Pt(6, 22),
      new Pt(8, 26),
      new Pt(10, 30),
      new Pt(12, 36),
      new Pt(15, 42),
      new Pt(20, 50)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'П НВ') {
    var res = iop([
      new Pt(1, 7),
      new Pt(2, 10),
      new Pt(4, 14),
      new Pt(6, 18),
      new Pt(8, 21),
      new Pt(10, 25),
      new Pt(12, 30),
      new Pt(15, 35),
      new Pt(20, 40)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  if (groundType == 'П ВЛ') {
    var res = iop([
      new Pt(1, 6),
      new Pt(2, 8),
      new Pt(4, 10),
      new Pt(6, 14),
      new Pt(8, 18),
      new Pt(10, 21),
      new Pt(12, 25),
      new Pt(15, 30),
      new Pt(20, 35)
    ])(qs);
    if (res !== undefined) {
      return res.y;
    }
    return res;
  }

  function fqs(a, m, qs) {
    return (3.14 * a * (1 + m) * (3 - 4 * m) * qs) / (16 * (1 - m));
  }

  if (groundType == 'СП М') {
    return fqs(8, 0.35, qs);
  }

  if (groundType == 'СГ М') {
    return fqs(8.5, 0.4, qs);
  }

  if (['СП ОЛ', 'СП Л', 'СП'].includes(groundType)) {
    return fqs(8.8, 0.35, qs);
  }

  if (['СГ ОЛ', 'СГ Л', 'СГ'].includes(groundType)) {
    return fqs(9.5, 0.4, qs);
  }

  if (groundType == 'БГ') {
    return 3.6 / vf('e') + 0.25;
  }


});


cptCalcTable.calculatedFields.hardness = function(vf) {
  var qs = vf('qs'),
    groundType = vf('groundType');

  if (isNaN(qs) || !['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ', 'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'].includes(groundType)) {
    return undefined;
  }


  if (['Г', 'К', 'С'].includes(groundType)) {
    if (qs < 2.8) {
      return 'малопр.';
    }

    if (qs <= 15) {
      return 'ср пр.';
    }

    if (qs > 15) {
      return 'прочн.';
    }
  }

  if (groundType == 'М') {
    if (qs < 1.7) {
      return 'малопр.';
    }

    if (qs <= 8.3) {
      return 'ср пр.';
    }

    if (qs > 8.3) {
      return 'прочн.';
    }
  }

  if (['П НВ', 'П ВЛ'].includes(groundType)) {
    if (qs < 1.2) {
      return 'малопр.';
    }

    if (qs <= 8.3) {
      return 'ср пр.';
    }

    if (qs > 8.3) {
      return 'прочн.';
    }
  }


  if (['СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ'].includes(groundType)) {
    if (qs < 1.0) {
      return 'слаб.';
    }

    if (qs <= 4.6) {
      return 'ср пр.';
    }

    if (qs <= 10.0) {
      return 'прочн.';
    }

    if (qs > 10.0) {
      return 'прочн.';
    }
  }

  if (['СП М', 'СГ М'].includes(groundType)) {
    if (qs < 1.0) {
      return 'слаб.';
    }

    if (qs <= 2.5) {
      return 'ср пр.';
    }

    if (qs <= 6.5) {
      return 'прочн.';
    }

    if (qs > 6.5) {
      return 'прочн.';
    }
  }

};


cptCalcTable.calculatedFields.name = function(vf) {
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

cptCalcTable.rowCalculation = tableCalculator.makeRowCalculation(cptCalcTable.calculatedFields);
