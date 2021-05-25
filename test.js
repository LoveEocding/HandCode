var isNumber = function(s) {
   // return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i.test(s.trim())
    const exp=/^[+-]?(\d+(\.\d*)?)(e[+-]?\d+)?$/ig;
    return exp.test(s.trim());
};

