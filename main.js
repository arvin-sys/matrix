const p = require("./matrix.js");
const m = require("./utils.js");

const matrix1 = [[4, 3], [1, 6], [9, 2]],

    matrix2 = [[1, 1, 1], [7, 2, 9]];
       
const result = m.multiplyMatrices(matrix1, matrix2);

p.printMatrix(result);