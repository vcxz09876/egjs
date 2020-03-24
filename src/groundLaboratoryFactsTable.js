var groundLaboratoryFactsTable = {};

/*
Setup tableCalculator.rowCalculation
*/

groundLaboratoryFactsTable.calculatedFields = {};

groundLaboratoryFactsTable.calculatedFields.pd = tableCalculator.withRD(2)
(function(vf) {
  var ps = vf('ps'),
    W = vf('W'),
    p = vf('p');

  if (isNaN(W) || isNaN(ps) || isNaN(p)) {
    return undefined;
  }
  return p / (1 + W * 0.01);
});

groundLaboratoryFactsTable.calculatedFields.n = tableCalculator.withRD(2)
(function(vf) {
  var ps = vf('ps'),
    pd = vf('pd');

  if (isNaN(pd) || isNaN(ps)) {
    return undefined;
  }
  return (1 - pd / ps) * 100;
});

groundLaboratoryFactsTable.calculatedFields.e = tableCalculator.withRD(2)
(function(vf) {
  var ps = vf('ps'),
    pd = vf('pd');

  if (isNaN(pd) || isNaN(ps)) {
    return undefined;
  }
  return (ps - pd) / pd;
});

groundLaboratoryFactsTable.calculatedFields.Sr = tableCalculator.withRD(2)
(function(vf) {
  var ps = vf('ps'),
    W = vf('W'),
    e = vf('e');

  if (isNaN(W) || isNaN(ps) || isNaN(e)) {
    return undefined;
  }
  return ((W / 100) * ps) / e;
});

groundLaboratoryFactsTable.calculatedFields.Ip = tableCalculator.withRD(2)
(function(vf) {
  var Wl = vf('Wl'),
    Wp = vf('Wp');

  if (isNaN(Wl) || isNaN(Wp)) {
    return undefined;
  }
  return Wl - Wp;
});

groundLaboratoryFactsTable.calculatedFields.Il = tableCalculator.withRD(2)
(function(vf) {
  var W = vf('W'),
    Wp = vf('Wp'),
    Ip = vf('Ip');

  if (isNaN(W) || isNaN(Wp) || isNaN(Ip)) {
    return undefined;
  }
  return (W - Wp) / Ip;
});

groundLaboratoryFactsTable.calculatedFields._P01 = tableCalculator.withRD(1)
(function(vf) {
  function zeroIfUdf(x) {
    if (isNaN(x)) {
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


groundLaboratoryFactsTable.calculatedFields.p = tableCalculator.withRD(2)
(function(vf) {
  var hb = vf('hb'),
    ht = vf('ht'),
    h0 = vf('h0'),
    s0 = vf('s0'),
    m = vf('m');

  if (isNaN(hb) || isNaN(ht) || isNaN(h0) || isNaN(s0) || isNaN(m)) {
    return undefined;
  }
  return m / (s0 * (h0 - ht - hb));
});


groundLaboratoryFactsTable.calculatedFields.Iom = tableCalculator.withRD(1)
(function(vf) {
  function zeroIfUdf(x) {
    if (isNaN(x)) {
      return 0;
    }
    return x;
  }

  var LoI = zeroIfUdf(vf('LoI')),
    CaCO3 = zeroIfUdf(vf('CaCO3'));
  r = LoI - CaCO3;

  if (r == 0) {
    return undefined;
  }
  return r;
});


groundLaboratoryFactsTable.calculatedFields.W = tableCalculator.withRD(1)
(function(vf) {

  function loi1(q0, q1, q2) {
    if (isNaN(q0) || isNaN(q1) || isNaN(q2)) {
      return undefined;
    }
    return (q1 - q2) / (q2 - q0);
  }
  var
    W_1q0 = vf('W_1q0'),
    W_1q1 = vf('W_1q1'),
    W_1q2 = vf('W_1q2'),

    W_2q0 = vf('W_2q0'),
    W_2q1 = vf('W_2q1'),
    W_2q2 = vf('W_2q2'),

    r1 = loi1(W_1q0, W_1q1, W_1q2),
    r2 = loi1(W_2q0, W_2q1, W_2q2);

  if (!isNaN(r1) && !isNaN(r2)) {
    return ((r1 + r2) / 2) * 100;
  }
  if (!isNaN(r1)) {
    return r1 * 100;
  }
  return undefined;
});

groundLaboratoryFactsTable.calculatedFields.Wl = tableCalculator.withRD(1)
(function(vf) {

  function loi1(q0, q1, q2) {
    if (isNaN(q0) || isNaN(q1) || isNaN(q2)) {
      return undefined;
    }
    return (q1 - q2) / (q2 - q0);
  }
  var
    Wl_1q0 = vf('Wl_1q0'),
    Wl_1q1 = vf('Wl_1q1'),
    Wl_1q2 = vf('Wl_1q2'),

    Wl_2q0 = vf('Wl_2q0'),
    Wl_2q1 = vf('Wl_2q1'),
    Wl_2q2 = vf('Wl_2q2'),

    r1 = loi1(Wl_1q0, Wl_1q1, Wl_1q2),
    r2 = loi1(Wl_2q0, Wl_2q1, Wl_2q2);

  if (!isNaN(r1) && !isNaN(r2)) {
    return ((r1 + r2) / 2) * 100;
  }
  if (!isNaN(r1)) {
    return r1 * 100;
  }
  return undefined;
});

groundLaboratoryFactsTable.calculatedFields.Wp = tableCalculator.withRD(1)
(function(vf) {

  function loi1(q0, q1, q2) {
    if (isNaN(q0) || isNaN(q1) || isNaN(q2)) {
      return undefined;
    }
    return (q1 - q2) / (q2 - q0);
  }
  var
    Wp_1q0 = vf('Wp_1q0'),
    Wp_1q1 = vf('Wp_1q1'),
    Wp_1q2 = vf('Wp_1q2'),

    Wp_2q0 = vf('Wp_2q0'),
    Wp_2q1 = vf('Wp_2q1'),
    Wp_2q2 = vf('Wp_2q2'),

    r1 = loi1(Wp_1q0, Wp_1q1, Wp_1q2),
    r2 = loi1(Wp_2q0, Wp_2q1, Wp_2q2);

  if (!isNaN(r1) && !isNaN(r2)) {
    return ((r1 + r2) / 2) * 100;
  }
  if (!isNaN(r1)) {
    return r1 * 100;
  }
  return undefined;
});

groundLaboratoryFactsTable.calculatedFields.LoI = tableCalculator.withRD(1)
(function(vf) {

  function loi2(q0, q1, q2) {
    if (isNaN(q0) || isNaN(q1) || isNaN(q2)) {
      return undefined;
    }
    return (q1 - q2) / (q1 - q0);
  }
  var
    LoI_1q0 = vf('LoI_1q0'),
    LoI_1q1 = vf('LoI_1q1'),
    LoI_1q2 = vf('LoI_1q2'),

    LoI_2q0 = vf('LoI_2q0'),
    LoI_2q1 = vf('LoI_2q1'),
    LoI_2q2 = vf('LoI_2q2'),

    r1 = loi2(LoI_1q0, LoI_1q1, LoI_1q2),
    r2 = loi2(LoI_2q0, LoI_2q1, LoI_2q2);

  if (!isNaN(r1) && !isNaN(r2)) {
    return ((r1 + r2) / 2) * 100;
  }
  if (!isNaN(r1)) {
    return r1 * 100;
  }
  return undefined;
});



groundLaboratoryFactsTable.calculatedFields.k = tableCalculator.withRD(1)
(function(vf) {
  var dh = vf('dh'),
    dt = vf('dt'),
    kt = vf('kt');

  if (isNaN(dh) || isNaN(dt) || isNaN(kt)) {
    return undefined;
  }
  return (dh * 864) / (dt * 25 * kt);
});

groundLaboratoryFactsTable.calculatedFields.P10 = tableCalculator.withRD(1)
(function(vf) {
  var SP10 = vf('SP10'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP10)) {
    return undefined;
  }

  return (SP10 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields.P5 = tableCalculator.withRD(1)
(function(vf) {
  var SP5 = vf('SP5'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP5)) {
    return undefined;
  }

  return (SP5 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields.P2 = tableCalculator.withRD(1)
(function(vf) {
  var SP2 = vf('SP2'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP2)) {
    return undefined;
  }

  return (SP2 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields.P1 = tableCalculator.withRD(1)
(function(vf) {
  var SP1 = vf('SP1'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP1)) {
    return undefined;
  }

  return (SP1 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields.P1 = tableCalculator.withRD(1)
(function(vf) {
  var SP1 = vf('SP1'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP1)) {
    return undefined;
  }

  return (SP1 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields.P05 = tableCalculator.withRD(1)
(function(vf) {
  var SP05 = vf('SP05'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP05)) {
    return undefined;
  }

  return (SP05 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields.P025 = tableCalculator.withRD(1)
(function(vf) {
  var SP025 = vf('SP025'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP025)) {
    return undefined;
  }

  return (SP025 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields.P01 = tableCalculator.withRD(1)
(function(vf) {
  var SP01 = vf('SP01'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP01)) {
    return undefined;
  }

  return (SP01 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields.P005 = tableCalculator.withRD(1)
(function(vf) {
  var SP005 = vf('SP005'),
    SP0 = vf('SP0');

  if (isNaN(SP0) || isNaN(SP005)) {
    return undefined;
  }

  return (SP005 / SP0) * 100;
});

groundLaboratoryFactsTable.calculatedFields._SP01 = tableCalculator.withRD(1)
(function(vf) {
  function zeroIfUdf(x) {
    if (isNaN(x)) {
      return 0;
    }
    return x;
  }

  var SP0 = zeroIfUdf(vf('SP0')),
    SP10 = zeroIfUdf(vf('SP10')),
    SP5 = zeroIfUdf(vf('SP5')),
    SP2 = zeroIfUdf(vf('SP2')),
    SP1 = zeroIfUdf(vf('SP1')),
    SP05 = zeroIfUdf(vf('SP05')),
    SP025 = zeroIfUdf(vf('SP025')),
    SP01 = zeroIfUdf(vf('SP01')),
    SP005 = zeroIfUdf(vf('SP005')),
    SP_001 = SP0 - SP005 - SP01 - SP025 - SP05 - SP1 - SP2 - SP5 - SP10;

  if (SP_001 == SP0 || SP0 == 0) {
    return undefined;
  }
  return SP_001;
});


groundLaboratoryFactsTable.calculatedFields.groundType =
function(vf) {
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

  if (P10 + P5 + P2 + P1 + P05 + P025 + P01 < 75 &&
     P10 + P5 + P2 + P1 + P05 + P025 + P01 > 0) {
    if (Iom > 3) {
      return 'П С ОРГ';
    }
    return 'П';
  }

};

groundLaboratoryFactsTable.rowCalculation = tableCalculator.makeRowCalculation(groundLaboratoryFactsTable.calculatedFields);
