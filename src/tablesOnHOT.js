var tablesOnHOT = {};


/*Setup groundLaboratoryFactsTable render*/

tablesOnHOT.groundLaboratoryFactsTable = function(target) {
  HOTUtils.HOTEditor.call(this);

  this.target = target;

  this.rowUpdate = function(n, row) {
    return groundLaboratoryFactsTable.rowCalculation(row);
  };

  this.extendHOTConfig = {
    data: [],
    colHeaders: ['M', 'N', 'скв.', 'обр.', 'от', 'до',

    'P0', 'P10', 'P5', 'P2', 'P1', 'P0.5', 'P0.25', 'P0.01', '>0.1', 'P0.05',
    '>10', '10-5', '5-2', '2-1', '1-0.5', '0.5-0.25', '0.25-0.01', '>0.1', '>0.05',

    'q1', 'q2', 'q0', 'q1', 'q2', 'q0', 'W',
    'hb', 'ht', 'h0', 's0', 'm', 'p', 'pd', 'ps', 'n', 'e', 'Sr',
    'dh', 'dt', 'kt', 'k',
    'q1', 'q2', 'q0', 'q1', 'q2', 'q0', 'Wl',
    'q1', 'q2', 'q0', 'q1', 'q2', 'q0', 'Wp',
    'Ip', 'Il',
    'q1', 'q2', 'q0', 'q1', 'q2', 'q0', 'ППП', 'Iom',
    'CaCO3', 'Г-Т'

  ],
  allowInsertRow: true,
  viewportColumnRenderingOffset: 75, // Render all columns to enable hide by css
  maxCols: 74,
  renderAllRows: true,
  columns: [{
    data: 'M'
  }, {
    data: 'N'
  }, {
    data: 'point_id'
  }, {
    data: 'sample_id'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'depth1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'depth2'
  },

  {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP0'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP10'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP5'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP05'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP025'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP01'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: '_SP01'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'SP005'
  }, {
    data: 'P10',
    readOnly: true
  }, {
    data: 'P5',
    readOnly: true
  }, {
    data: 'P2',
    readOnly: true
  }, {
    data: 'P1',
    readOnly: true
  }, {
    data: 'P05',
    readOnly: true
  }, {
    data: 'P025',
    readOnly: true
  }, {
    data: 'P01',
    readOnly: true
  }, {
    data: '_P01',
    readOnly: true
  }, {
    data: 'P005',
    readOnly: true
  },

  {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'W_1q1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'W_1q2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'W_1q0'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'W_2q1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'W_2q2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'W_2q0'
  }, {
    data: 'W',
    readOnly: true
  },

  {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'hb'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'ht'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'h0'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 's0'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'm'
  }, {
    data: 'p',
    readOnly: true
  }, {
    data: 'pd',
    readOnly: true
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.00'},
    data: 'ps'
  }, {
    data: 'n',
    readOnly: true
  }, {
    data: 'e',
    readOnly: true
  }, {
    data: 'Sr',
    readOnly: true
  },

  {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'dh'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'dt'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'kt'
  }, {
    data: 'k',
    readOnly: true
  },


  {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wl_1q1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wl_1q2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wl_1q0'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wl_2q1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wl_2q2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wl_2q0'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wl',
    readOnly: true
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wp_1q1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wp_1q2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wp_1q0'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wp_2q1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wp_2q2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wp_2q0'
  }, {
    data: 'Wp',
    readOnly: true
  }, {
    data: 'Ip',
    readOnly: true
  }, {
    data: 'Il',
    readOnly: true
  },

  {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'LoI_1q1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'LoI_1q2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'LoI_1q0'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'LoI_2q1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'LoI_2q2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'LoI_2q0'
  }, {
    data: 'LoI',
    readOnly: true
  }, {
    data: 'Iom',
    readOnly: true
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'CaCO3'
  }, {
    data: 'groundType',
    readOnly: true
  }
]
};
};

/*Setup groundLaboratoryCalcTable render*/

tablesOnHOT.groundLaboratoryCalcTable = function(target) {
  HOTUtils.HOTEditor.call(this);

  this.target = target;

  this.rowUpdate = function(n, row) {
    return groundLaboratoryCalcTable.rowCalculation(row);
  };

  this.extendHOTConfig = {
    data: [],
    colHeaders: ['M', 'N', 'скв.', 'обр.', 'от', 'до',
    '>10', '10-5', '5-2', '2-1', '1-0.5', '0.5-0.25', '0.25-0.01', '>0.1', '>0.05',
    'W', 'p', 'pd', 'ps', 'n', 'e', 'Sr', 'k',
    'Wl', 'Wp', 'Ip', 'Il',
    'Iom', 'CaCO3', 'г-т'
  ],
  allowInsertRow: true,
  columns: [{
    data: 'i'
  }, {
    data: 'N'
  }, {
    data: 'well_id'
  }, {
    data: 'sample_id'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'depth1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'depth2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'P10'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'P5'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'P2'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'P1'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'P05'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'P025'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'P01'
  }, {
    data: '_P01',
    readOnly: true
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'P005'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'W'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.00'},
    data: 'p'
  }, {
    data: 'pd',
    readOnly: true
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.00'},
    data: 'ps'
  }, {
    data: 'n',
    readOnly: true
  }, {
    data: 'e',
    readOnly: true
  }, {
    data: 'Sr',
    readOnly: true
  }, {
    data: 'k'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wl'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Wp'
  }, {
    data: 'Ip',
    readOnly: true
  }, {
    data: 'Il',
    readOnly: true
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'Iom'
  }, {type: 'numeric',
  numericFormat: {
    pattern: '0.0'},
    data: 'CaCO3'
  }, {
    data: 'groundType'
  }]
};
};

/*Setup sptCalcTable render*/

tablesOnHOT.sptCalcTable = function(target) {
  HOTUtils.HOTEditor.call(this);

  this.target = target;

  this.rowUpdate = function(n, row) {
    return sptCalcTable.rowCalculation(row);
  };

  this.extendHOTConfig = {
    data: [],
    colHeaders: ['T', 'Pd', 'W', 'e', 'ps', 'pd', 'Il', 'p', '▧', 'Y', 'YII', 'c', 'cII', 'f', 'fII', 'E'],
    allowInsertRow: true,
    columns: [{
      data: 'groundType',
      type: 'dropdown',
      source: ['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ', 'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ']
    }, {type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'Pd'
    }, {type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'W'
    }, {
      data: 'e',
      readOnly: true
    }, {
      data: 'ps',
      readOnly: true
    }, {
      data: 'pd',
      readOnly: true
    }, {
      data: 'Il',
      readOnly: true
    }, {
      data: 'p',
      readOnly: true
    }, {
      data: 'name',
      readOnly: true
    }, {
      data: 'Y',
      readOnly: true
    }, {
      data: 'Y',
      readOnly: true
    }, {
      data: 'c',
      readOnly: true
    }, {
      data: 'c',
      readOnly: true
    }, {
      data: 'f',
      readOnly: true
    }, {
      data: 'f',
      readOnly: true
    }, {
      data: 'E',
      readOnly: true
    }]
  };
};


/*Setup cptCalcTable render*/

tablesOnHOT.cptCalcTable = function(target) {
  HOTUtils.HOTEditor.call(this);

  this.target = target;

  this.rowUpdate = function(n, row) {
    return cptCalcTable.rowCalculation(row);
  };

  this.extendHOTConfig = {
    data: [],
    colHeaders: ['T', 'qs', 'W', 'e', 'ps', 'pd', 'Il', 'p', '▧', 'Y', 'YII', 'c', 'cII', 'f', 'fII', 'E'],
    allowInsertRow: true,
    columns: [{
      data: 'groundType',
      type: 'dropdown',
      source: ['Г', 'К', 'С', 'М', 'П НВ', 'П ВЛ', 'СП М', 'СГ М', 'СП ОЛ', 'СГ ОЛ', 'СП Л', 'СГ Л', 'СП', 'СГ']
    }, {type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'qs'
    }, {type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'W'
    }, {
      data: 'e',
      readOnly: true
    }, {
      data: 'ps',
      readOnly: true
    }, {
      data: 'pd',
      readOnly: true
    }, {
      data: 'Il',
      readOnly: true
    }, {
      data: 'p',
      readOnly: true
    }, {
      data: 'name',
      readOnly: true
    }, {
      data: 'Y',
      readOnly: true
    }, {
      data: 'Y',
      readOnly: true
    }, {
      data: 'c',
      readOnly: true
    }, {
      data: 'c',
      readOnly: true
    }, {
      data: 'f',
      readOnly: true
    }, {
      data: 'f',
      readOnly: true
    }, {
      data: 'E',
      readOnly: true
    }]
  };
};


/*Setup cptFactTable render*/

tablesOnHOT.cptFactTable = function(target) {
  HOTUtils.HOTEditor.call(this);

  this.target = target;

  this.rowUpdate = function(n, row) {
    return cptFactTable.rowCalculation(row);
  }

  this.extendHOTConfig = {
    data: [],
    colHeaders: ['M', '⇊', 'qs, MPa', 'fs, kPa', 'Fr', 'e', 'Il','⚫'],
    allowInsertRow: true,
    columns: [{
      data: 'M',
    },{type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'depth',
    }, {type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'qs'
    }, {type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'fs',
    }, {
      data: 'Fr',
      readOnly: true
    }, {
      data: 'e',
      readOnly: true
    }, {
      data: 'Il',
      readOnly: true
    },{
      data: 'stringifyRange',
      readOnly: true
    }
  ]
};
};

/*Setup sptFactTable render*/

tablesOnHOT.sptFactTable = function(target) {
  HOTUtils.HOTEditor.call(this);

  this.target = target;

  this.rowUpdate = function(n, row) {
    return sptFactTable.rowCalculation(row);
  }

  this.extendHOTConfig = {
    data: [],
    colHeaders: ['M','⇊1','⇊2', 'Pd, MPa', '⚫'],
    allowInsertRow: true,
    columns: [{
      data: 'M',
    },{type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'depth1',
    },{type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'depth2',
    }, {type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'Pd',
    },{
      data: 'stringifyRange',
      readOnly: true
    }]
  };
};

/*Setup coordinatesTable render
No calculatedFields*/

tablesOnHOT.coordinatesTable = function(target) {
  HOTUtils.HOTEditor.call(this);

  this.target = target;

  this.extendHOTConfig = {
    data: [],
    colHeaders: ['M', 'Объект', 'Номер', 'X', 'Y', 'H', 'Примеч.', 'lat', 'lon', 'olP'],
    allowInsertRow: true,
    columns: [{
      data: 'M',
    }, {
      data: 'projectId',
    }, {
      data: 'pointName',
    }, {
      data: 'x',
      type: 'numeric',
      numericFormat: {
        pattern: '0.00'
      }
    }, {
      data: 'y',
      type: 'numeric',
      numericFormat: {
        pattern: '0.00'
      }
    }, {
      data: 'h',
      type: 'numeric',
      numericFormat: {
        pattern: '0.00'
      }
    }, {
      data: 'notes'
    }]
  };
};


/*Setup pointDocTable render
No calculatedFields*/

tablesOnHOT.drillTable = function(target) {
  HOTUtils.HOTEditor.call(this);

  this.target = target;

  this.extendHOTConfig = {
    data: [],
    colHeaders: ['M', 'Ген.', 'Лит.', 'Вкл.', '⇊1', '⇊2', 'УГВ', 'Обр.', 'Примеч.'],
    allowInsertRow: true,
    columns: [{
      data: 'M',
    },
    {
      data: 'genesis',
      type: 'autocomplete',
      source: [undefined, 'th', 'a', 'l,b', 'd', 'p', 'v', 'pr', 'l,a', 'lg', 'f', 'g', 'gt'],
      strict: false
    },
    {
      data: 'litho',
      type: 'autocomplete',
      source: [undefined, 'ПОЧВА', 'ВАЛ', 'ГАЛ', 'ГР', 'Г', 'К', 'С', 'М', 'П',
      'СП ТВ', 'СП ПЛ', 'СП ТК',
      'СГ ТВ', 'СГ ПТВ', 'СГ ТГПЛ', 'СГ МГПЛ', 'СГ ТКПЛ', 'СГ ТК',
      'ГЛ ТВ', 'ГЛ ПТВ', 'ГЛ ТГПЛ', 'ГЛ МГПЛ', 'ГЛ ТКПЛ', 'ГЛ ТК',
      'МЕРГЕЛЬ', 'МЕЛ', 'ИЗВЕСТ', 'ИЛ', 'САПРОП',
      'ТОРФ', 'СЛЗТФ', 'СРЗТФ', 'СИЗТФ'
    ],
    strict: false
  },
  {
    data: 'inclusion',
    type: 'autocomplete',
    source: [undefined, 'ВАЛ', 'ГР', 'ПЕСОК', 'ВОД ПЕСОК', 'СУП', 'СУГЛ', 'ОРГ', 'ЗТФ', ],
    type: 'dropdown',
    source: [undefined, 'ВОД ПЕС', 'ВОД ПРОСЛ', 'ОРГ'],
    strict: true
  }, {
    type: 'numeric',
    numericFormat: {
      pattern: '0.0'},
      data: 'depth1',
    }, {
      type: 'numeric',
      numericFormat: {
        pattern: '0.0'},
        data: 'depth2',
      }, {
        data: 'waterLevel'
      }, {
        data: 'sample',
        type: 'dropdown',
        source: [undefined, 'М', 'О', 'К'],
        strict: true
      }, {
        data: 'notes',
      }]
    };
  };

  /*Setup cagTable render*/

tablesOnHOT.cagCalcTable = function(target){
    HOTUtils.HOTEditor.call(this);

    this.target = target;

    this.rowUpdate = function(n, row) {
      return cagCalcTable.rowCalculation(row);
    }

    this.extendHOTConfig = {
      data: [],
      colHeaders: ['M', 'скв.', 'гл.', 'г-т', 'SO4', 'Cl',
      'W4', 'W6', 'W8', 'W10', 'W12',
      'W4*', 'W6*', 'W8*', 'W10*', 'W12*',
      'W4**', 'W6**', 'W8**', 'W10**', 'W12**', 'Cl'],
      allowInsertRow: true,
      columns: [
        {
          data: 'M',
        },{
          data: 'well_id',
        },
        {type: 'numeric',
        numericFormat: {
          pattern: '0.0'},
          data: 'depth1',
        },{
          data: 'groundType',
        },
        {type: 'numeric',
        numericFormat: {
          pattern: '0.0'},
          data: 'SO4',
        }, {type: 'numeric',
        numericFormat: {
          pattern: '0.0'},
          data: 'Cl',
        },{
          data: 'W4_1',
          readOnly: true
        },{
          data: 'W6_1',
          readOnly: true
        },{
          data: 'W8_1',
          readOnly: true
        },{
          data: 'W10_1',
          readOnly: true
        },{
          data: 'W12_1',
          readOnly: true
        },{
          data: 'W4_2',
          readOnly: true
        },{
          data: 'W6_2',
          readOnly: true
        },{
          data: 'W8_2',
          readOnly: true
        },{
          data: 'W10_2',
          readOnly: true
        },{
          data: 'W12_2',
          readOnly: true
        },{
          data: 'W4_3',
          readOnly: true
        },{
          data: 'W6_3',
          readOnly: true
        },{
          data: 'W8_3',
          readOnly: true
        },{
          data: 'W10_3',
          readOnly: true
        },{
          data: 'W12_3',
          readOnly: true
        },{
          data: 'W_Cl',
          readOnly: true
        }]
      };
    };
