"use strict";
(() => {
    let AudiolevelEnum;
    (function (AudiolevelEnum) {
        AudiolevelEnum[AudiolevelEnum["min"] = 1] = "min";
        AudiolevelEnum[AudiolevelEnum["med"] = 5] = "med";
        AudiolevelEnum[AudiolevelEnum["max"] = 10] = "max";
    })(AudiolevelEnum || (AudiolevelEnum = {}));
    let level = AudiolevelEnum.med;
    console.log(level);
    console.log({ level });
    console.log(AudiolevelEnum);
})();
