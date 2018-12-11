import React from 'react';

const Clips = {
  tl: <path id="tl" d="m.000131 256.99985v30.00013h10.784183c-.314077.74853-.621951 1.48212-.654223 1.56657-.163837.42872-.753635 1.80505-.754985 2.80874-.000053 3.10663 2.518213 5.62491 5.624823 5.62486 3.10662.00005 5.62527-2.51823 5.62522-5.62486-.002-1.00369-.55647-2.35371-.75538-2.80874-.0262-.0599-.50027-1.18739-.66042-1.56657h10.79078v-10.78385c.74845.31405 1.48173.62156 1.56617.65384.42873.16383 1.80505.75364 2.80873.75499 3.10662.00006 5.62489-2.51823 5.62484-5.62485.00005-3.10663-2.51822-5.6253-5.62484-5.62525-1.00368.001-2.35369.55647-2.80873.75538-.0598.0262-1.18715.49995-1.56617.66004v-10.79043z" transform="translate(0 -257)"/>,
  tm: <path id="tm" d="m.000125 256.99985v10.79043c.37903-.16009 1.50633-.63387 1.56618-.66004.45504-.19891 1.80504-.75418 2.80873-.75538 3.10662-.00005 5.62489 2.51862 5.62484 5.62525.00005 3.10662-2.51822 5.62491-5.62484 5.62485-1.00369-.001-2.38001-.59116-2.80873-.75499-.0844-.0322-.81773-.33979-1.56618-.65384v10.78385h10.7838c-.31407.74851-.62156 1.48212-.65383 1.56657-.16384.42872-.75364 1.80505-.75499 2.80874-.00006 3.10663 2.51822 5.62491 5.62483 5.62486 3.10661.00005 5.62527-2.51823 5.62522-5.62486-.002-1.00369-.55646-2.35371-.75538-2.80874-.0262-.0599-.50026-1.18739-.66042-1.56657h10.79078v-10.78385c.74824.31396 1.48174.62157 1.56617.65384.42873.16383 1.80505.75364 2.80874.75499 3.1066.00006 5.62488-2.51823 5.62483-5.62485.00005-3.10663-2.51823-5.6253-5.62483-5.62525-1.00369.001-2.3537.55647-2.80874.75538-.0599.0262-1.18718.49997-1.56617.66004v-10.79043z" transform="translate(0 -257)"/>,
  tr: <path id="tr" d="m4.999995 256.99985v10.79082c.37918-.16016 1.5067-.63425 1.56656-.66043.45503-.19891 1.80505-.75418 2.80873-.75538 3.10661-.00005 5.62489 2.51862 5.62483 5.62525.00006 3.10662-2.51822 5.62491-5.62483 5.62485-1.00368-.001-2.38001-.59116-2.80873-.75499-.0845-.0322-.81806-.33977-1.56656-.65384v10.78385h10.78418c-.31408.74853-.62195 1.48212-.65422 1.56657-.16383.42872-.75363 1.80505-.75498 2.80874-.00005 3.10663 2.51821 5.62491 5.62483 5.62486 3.10662.00005 5.62528-2.51823 5.62522-5.62486-.001-1.00369-.55647-2.35371-.75538-2.80874-.0262-.0599-.50026-1.18739-.66042-1.56657h10.79078v-30.00013z" transform="translate(-5 -257)"/>,
  ml: <path id="ml" d="m.000128 257.00004v30.00012h10.78418c-.31405.74849-.62195 1.48174-.65422 1.56619-.16384.42873-.75364 1.80507-.75499 2.80875-.00005 3.10664 2.51822 5.62491 5.62483 5.62486 3.106614.00005 5.625274-2.51822 5.625224-5.62486-.002-1.00368-.55647-2.35371-.75539-2.80875-.0262-.0598-.49994-1.18716-.66002-1.56619h10.79038v-10.78423c.74848.31406 1.48173.62195 1.56618.65422.42872.16384 1.80504.75365 2.80873.755 3.10662.00005 5.62489-2.51822 5.62484-5.62485.00005-3.10663-2.51822-5.6253-5.62484-5.62525-1.00369.002-2.35369.55647-2.80873.75538-.0599.0262-1.18715.49995-1.56618.66004v-10.79043h-10.79077c.16015.37918.63425 1.5067.66042 1.56657.19891.45503.75418 1.80505.75538 2.80874.00005 3.10663-2.5186 5.62491-5.625224 5.62486-3.10661.00005-5.62488-2.51823-5.62483-5.62486.001-1.00369.59116-2.38002.75499-2.80874.0323-.0845.34014-.81804.65422-1.56657z" transform="translate(0 -257)"/>,
  mm: <path id="mm" d="m.000125 257.00004v10.79043c.37903-.16009 1.50633-.63387 1.56618-.66004.45504-.19891 1.80504-.75418 2.80873-.75538 3.10662-.00005 5.62489 2.51862 5.62484 5.62525.00005 3.10663-2.51822 5.6249-5.62484 5.62485-1.00369-.002-2.38001-.59116-2.80873-.755-.0844-.0323-.8177-.34016-1.56618-.65422v10.78423h10.7838c-.31404.74846-.62156 1.48174-.65383 1.56619-.16384.42873-.75364 1.80506-.75499 2.80875-.00006 3.10663 2.51822 5.62491 5.62483 5.62485 3.10661.00006 5.62527-2.51822 5.62522-5.62485-.002-1.00369-.55646-2.35371-.75538-2.80875-.0262-.0598-.49994-1.18716-.66003-1.56619h10.79038v-10.78384c.74816.31393 1.48176.62157 1.56618.65383.42872.16384 1.80504.75365 2.80874.755 3.1066.00005 5.62488-2.51822 5.62483-5.62485.00005-3.10663-2.51823-5.6253-5.62483-5.62525-1.0037.002-2.35371.55647-2.80874.75538-.0599.0262-1.18718.49997-1.56618.66004v-10.79043h-10.79077c.16016.37918.63426 1.5067.66042 1.56657.19892.45503.75418 1.80505.75538 2.80874.00005 3.10663-2.51861 5.62491-5.62522 5.62486-3.10661.00005-5.62489-2.51823-5.62483-5.62486.002-1.00369.59115-2.38002.75499-2.80874.0322-.0845.33976-.81806.65383-1.56657z" transform="translate(0 -257)"/>,
  mr: <path id="mr" d="m0 257.00004v10.79082c.37918-.16016 1.5067-.63426 1.56656-.66043.45503-.19891 1.80505-.75418 2.80873-.75538 3.10661-.00005 5.62489 2.51862 5.62483 5.62525.00006 3.10663-2.51822 5.6249-5.62483 5.62485-1.00368-.002-2.38001-.59116-2.80873-.755-.0845-.0323-.81804-.34014-1.56656-.65422v10.78423h10.78418c-.31405.74849-.62195 1.48174-.65422 1.56619-.16384.42873-.75364 1.80507-.75499 2.80875-.00005 3.10664 2.51822 5.62491 5.62483 5.62486 3.10663.00005 5.62529-2.51822 5.62523-5.62486-.001-1.00368-.55647-2.35371-.75538-2.80875-.0262-.0598-.49994-1.18716-.66003-1.56619h10.79038v-30.00012h-10.79077c.16016.37918.63425 1.5067.66042 1.56657.19891.45503.75388 1.80505.75538 2.80874.00006 3.10663-2.5186 5.62491-5.62523 5.62486-3.10661.00005-5.62488-2.51823-5.62483-5.62486.001-1.00369.59116-2.38002.75499-2.80874.0323-.0845.34014-.81804.65422-1.56657z" transform="translate(0 -257)"/>,
  bl: <path id="bl" d="m.000125 267.00012v29.99976h29.99999v-10.78385c.74848.31406 1.48173.62196 1.56618.65422.42872.16385 1.80504.75365 2.80874.755 3.10662.00005 5.62489-2.51823 5.62484-5.62486.00005-3.10663-2.51822-5.62529-5.62484-5.62524-1.0037.002-2.3537.55647-2.80874.75538-.0599.0262-1.18714.49994-1.56618.66004v-10.79045h-10.79038c.16007.379.63387 1.50635.66002 1.5662.19892.45504.75419 1.80506.75539 2.80875.00005 3.10663-2.5186 5.62491-5.62522 5.62485-3.10661.00006-5.62489-2.51822-5.62483-5.62485.001-1.00369.59116-2.38002.75499-2.80875.0323-.0845.34017-.81772.65422-1.5662z" transform="translate(0 -267)"/>,
  bm: <path id="bm" d="m.000125 267.00012v10.79044c.37904-.1601 1.50633-.63388 1.56618-.66004.45504-.19891 1.80504-.75388 2.80873-.75538 3.10662-.00006 5.62489 2.51861 5.62484 5.62525.00005 3.10663-2.51822 5.62491-5.62484 5.62486-1.00369-.002-2.38001-.59116-2.80873-.755-.0844-.0322-.8177-.34016-1.56618-.65422v10.78385h30.00001v-10.78347c.74815.31393 1.48175.62158 1.56617.65383.42873.16385 1.80505.75366 2.80874.75501 3.1066.00005 5.62488-2.51823 5.62483-5.62486.00005-3.10664-2.51823-5.62531-5.62483-5.62525-1.00369.002-2.3537.55647-2.80874.75538-.0599.0262-1.18717.49996-1.56617.66004v-10.79044h-10.79039c.16007.379.63387 1.50634.66003 1.56619.19892.45504.75418 1.80506.75538 2.80875.00005 3.10663-2.51861 5.62491-5.62522 5.62485-3.10661.00006-5.62489-2.51822-5.62483-5.62485.002-1.00369.59115-2.38002.75499-2.80875.0322-.0845.33979-.81773.65383-1.56619z" transform="translate(0 -267)"/>,
  br: <path id="br" d="m0 267.00013v10.79044c.37914-.16014 1.5067-.63387 1.56656-.66004.45503-.19891 1.80505-.75388 2.80873-.75538 3.10661-.00005 5.62489 2.51861 5.62483 5.62524.00006 3.10663-2.51822 5.6249-5.62483 5.62485-1.00368-.001-2.38001-.59115-2.80873-.75499-.0845-.0322-.81804-.34014-1.56656-.65422v10.78384h30v-29.99974h-10.79039c.16007.379.63387 1.50634.66003 1.56619.19891.45504.75388 1.80506.75538 2.80875.00006 3.10663-2.5186 5.62491-5.62522 5.62485-3.10661.00006-5.62488-2.51822-5.62483-5.62485.001-1.00369.59116-2.38002.75499-2.80875.0323-.0845.34017-.81771.65422-1.56619z" transform="translate(0 -267)"/>
};

export default Clips;
