module.exports = {

    printMatrix: function(matrix) {

        for(let i = 0; i < matrix.length; i++) {
            let s = "";
            for(let j = 0; j < matrix[i].length; j++) {
                s = s + matrix[i][j] + " ";
            }
            console.log(s);
        }
    }
}