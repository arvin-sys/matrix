module.exports = {

    multiplyMatrices: function(x, y) {

    let xRow = x.length;
    let xCol = x[0].length;
    let yRow = y.length;
    let yCol = y[0].length;

    if(xCol != yRow){
        return null;
    }

    let mat = new Array(xRow);   

    for(let i = 0; i < xRow; i++) {

        mat[i] = new Array(yCol);             
        for(let j = 0; j < yCol; j++) {

            mat[i][j] = 0;                    
            for(let k = 0; k < xCol; k++) {

                mat[i][j] += x[i][k] * y[k][j];      
                }
            }
        }
        return mat;      
    }
}
