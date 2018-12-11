const Common = {
  checkPuzzleProps(obj) {
    return Object.keys(obj).length !== 0;
  },
  getPieceSize(size, clipName) {
    const addThirdPart = 1.33333333333333;

    const rates = {
      tl: {vbh: 40, vbw: 40, h: addThirdPart, w: addThirdPart},
      tm: {vbh: 40, vbw: 40, h: addThirdPart, w: addThirdPart},
      tr: {vbh: 40, vbw: 30, h: addThirdPart, w: 1},
      ml: {vbh: 40, vbw: 40, h: addThirdPart, w: addThirdPart},
      mm: {vbh: 40, vbw: 40, h: addThirdPart, w: addThirdPart},
      mr: {vbh: 40, vbw: 30, h: addThirdPart, w: 1},
      bl: {vbh: 30, vbw: 40, h: 1, w: addThirdPart},
      bm: {vbh: 30, vbw: 40, h: 1, w: addThirdPart},
      br: {vbh: 30, vbw: 30, h: 1, w: 1},
    };

    return {
      width: size.width * rates[clipName].w,
      height: size.width * rates[clipName].h,
      vbw: rates[clipName].vbw,
      vbh: rates[clipName].vbh,
    }
  }
};

export default Common;
