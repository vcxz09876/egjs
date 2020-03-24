

var groundLaboratoryCalcTable = {};

/*
Setup tableCalculator.rowCalculation
*/

groundLaboratoryCalcTable.calculatedFields = {};

groundLaboratoryCalcTable.calculatedFields.pd = tableCalculator.withRD(2)
(function(vf) {
  var ps = vf('ps'),
    W = vf('W'),
    p = vf('p');

  if (isNaN(W) || isNaN(ps) || isNaN(p)) {
    return undefined;
  }
  return p / (1 + W * 0.01);
});

groundLaboratoryCalcTable.calculatedFields.n = tableCalculator.withRD(2)
(function(vf) {
  var ps = vf('ps'),
    pd = vf('pd');

  if (isNaN(pd) || isNaN(ps)) {
    return undefined;
  }
  return (1 - pd / ps) * 100;
});

groundLaboratoryCalcTable.calculatedFields.e = tableCalculator.withRD(2)
(function(vf) {
  var ps = vf('ps'),
    pd = vf('pd');

  if (isNaN(pd) || isNaN(ps)) {
    return undefined;
  }
  return (ps - pd) / pd;
});

groundLaboratoryCalcTable.calculatedFields.Sr = tableCalculator.withRD(2)
(function(vf) {
  var ps = vf('ps'),
    W = vf('W'),
    e = vf('e');

  if (isNaN(W) || isNaN(ps) || isNaN(e)) {
    return undefined;
  }
  return ((W / 100) * ps) / e;
});

groundLaboratoryCalcTable.calculatedFields.Ip = tableCalculator.withRD(2)
(function(vf) {
  var Wl = vf('Wl'),
    Wp = vf('Wp');

  if (isNaN(Wl) || isNaN(Wp)) {
    return undefined;
  }
  return Wl - Wp;
});

groundLaboratoryCalcTable.calculatedFields.Il = tableCalculator.withRD(2)
(function(vf) {
  var W = vf('W'),
    Wp = vf('Wp'),
    Ip = vf('Ip');

  if (isNaN(W) || isNaN(Wp) || isNaN(Ip)) {
    return undefined;
  }
  return (W - Wp) / Ip;
});

groundLaboratoryCalcTable.calculatedFields._P01 = tableCalculator.withRD(1)
(function(vf) {
  function zeroIfUdf(x) {
    if (x == undefined) {
      return 0;
    }
    return x;
  }

  var P10 = zeroIfUdf(vf('P10')),
    P5 = zeroIfUdf(vf('P5')),
    P2 = zeroIfUdf(vf('P2')),
    P1 = zeroIfUdf(vf('P1')),
    P05 = zeroIfUdf(vf('P05')),
    P025 = zeroIfUdf(vf('P025')),
    P01 = zeroIfUdf(vf('P01')),
    P005 = zeroIfUdf(vf('P005')),
    P_001 = 100 - P005 - P01 - P025 - P05 - P1 - P2 - P5 - P10;

  if (P_001 == 100) {
    return undefined;
  }
  return P_001;
});


groundLaboratoryCalcTable.calculatedFields.groundType = function(vf) {
  function zeroIfUdf(x) {
    if (x == undefined) {
      return 0;
    }
    return x;
  }

  var P10 = zeroIfUdf(vf('P10')),
    P5 = zeroIfUdf(vf('P5')),
    P2 = zeroIfUdf(vf('P2')),
    P1 = zeroIfUdf(vf('P1')),
    P05 = zeroIfUdf(vf('P05')),
    P025 = zeroIfUdf(vf('P025')),
    P01 = zeroIfUdf(vf('P01')),
    P005 = zeroIfUdf(vf('P005')),
    P_001 = zeroIfUdf(vf('_001')),

    CaCO3 = zeroIfUdf(vf('CaCO3')),
    Iom = zeroIfUdf(vf('Iom')),

    Ip = vf('Ip'),
    Il = vf('Il');

  if (CaCO3 > 10) {
    return 'МЕРГЕЛЬ';
  }

  if (Iom >= 50) {
    return 'ТОРФ';
  }

  if (Iom > 40) {
    return 'CИЗТФ';
  }

  if (Iom > 25) {
    return 'СРЗТФ';
  }

  if (Iom > 10) {
    return 'СРЗТФ';
  }

  if (isNaN(Ip) !== true && Ip > 1) {
    if (Ip > 17) {

      if (isNaN(Il) !== true) {

        if (Il > 1) {
          if (Iom > 5) {
            return 'ГЛ ТК С ОРГ';
          }
          return 'ГЛ ТК';
        }

        if (Il > 0.75) {
          if (Iom > 5) {
            return 'ГЛ ТКПЛ С ОРГ';
          }
          return 'ГЛ ТКПЛ';
        }

        if (Il > 0.5) {
          if (Iom > 5) {
            return 'ГЛ МГПЛ С ОРГ';
          }
          return 'ГЛ МГПЛ';
        }

        if (Il > 0.25) {
          if (Iom > 5) {
            return 'ГЛ ТГПЛ С ОРГ';
          }
          return 'ГЛ ТГПЛ';
        }

        if (Il > 0.0) {
          if (Iom > 5) {
            return 'ГЛ ПТВ С ОРГ';
          }
          return 'ГЛ ПТВ';
        }

        if (Il < 0.0) {
          if (Iom > 5) {
            return 'ГЛ ТВ С ОРГ';
          }
          return 'ГЛ ТВ';
        }

      }
      if (Iom > 5) {
        return 'ГЛ С ОРГ';
      }
      return 'ГЛ';
    }

    if (Ip > 7) {

      if (isNaN(Il) !== true) {

        if (Il > 1) {
          if (Iom > 5) {
            return 'СЛ ТК С ОРГ';
          }
          return 'СГ ТК';
        }

        if (Il > 0.75) {
          if (Iom > 5) {
            return 'СГ ТКПЛ С ОРГ';
          }
          return 'СГ ТКПЛ';
        }

        if (Il > 0.5) {
          if (Iom > 5) {
            return 'СГ МГПЛ С ОРГ';
          }
          return 'СГ МГПЛ';
        }

        if (Il > 0.25) {
          if (Iom > 5) {
            return 'СГ ТГПЛ С ОРГ';
          }
          return 'СГ ТГПЛ';
        }

        if (Il > 0.0) {
          if (Iom > 5) {
            return 'СГ ПТВ С ОРГ';
          }
          return 'СГ ПТВ';
        }

        if (Il < 0.0) {
          if (Iom > 5) {
            return 'СГ ТВ С ОРГ';
          }
          return 'СГ ТВ';
        }

      }
      if (Iom > 5) {
        return 'СГ С ОРГ';
      }
      return 'СГ';
    }

    if (Ip > 1) {

      if (isNaN(Il) !== true) {

        if (Il > 1) {
          if (Iom > 5) {
            return 'СП ТК С ОРГ';
          }
          return 'СП ТК';
        }

        if (Il >= 0) {
          if (Iom > 5) {
            return 'СП ПЛ С ОРГ';
          }
          return 'СП ПЛ';
        }

        if (Il < 0) {
          if (Iom > 5) {
            return 'СП ТВ С ОРГ';
          }
          return 'СП ТВ';
        }

      }
      if (Iom > 5) {
        return 'СП С ОРГ';
      }
      return 'СП';
    }


  }

  if (P10 > 50) {
    return 'ГАЛ Г-Т';
  }

  if (P10 + P5 + P2 > 50) {
    return 'ГР Г-Т';
  }

  if (P10 + P5 + P2 > 25) {
    if (Iom > 3) {
      return 'ГР С ОРГ';
    }
    return 'ГР';
  }

  if (P10 + P5 + P2 + P1 + P05 > 50) {
    if (Iom > 3) {
      return 'К С ОРГ';
    }
    return 'К';
  }

  if (P10 + P5 + P2 + P1 + P05 + P025 > 50) {
    if (Iom > 3) {
      return 'С С ОРГ';
    }
    return 'С';
  }

  if (P10 + P5 + P2 + P1 + P05 + P025 + P01 >= 75) {
    if (Iom > 3) {
      return 'М С ОРГ';
    }
    return 'М';
  }

  if (P10 + P5 + P2 + P1 + P05 + P025 + P01 < 75 && P10 + P5 + P2 + P1 + P05 + P025 + P01 > 0) {
    if (Iom > 3) {
      return 'П С ОРГ';
    }
    return 'П';
  }

};

groundLaboratoryCalcTable.rowCalculation = tableCalculator.makeRowCalculation(groundLaboratoryCalcTable.calculatedFields);
