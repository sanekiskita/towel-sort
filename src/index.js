module.exports = function towelSort(matrix) {


    let arr=[] ;
    if (matrix === undefined) return arr;
    matrix.forEach((item,i) => {
            if ((i+1) % 2 > 0) {
                item.forEach((item2) => {

                        arr.push(item2);
                      });
                    }

                else {
                    for (var i2 = item.length - 1; i2 >= 0; i2=i2-1) {
                        arr.push( item[i2]);
                    }
                  }


    });

return arr;
}
