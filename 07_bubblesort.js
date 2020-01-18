function BubbleSort (a) {    
    
    var totalSwaps = 0;
    
    var n = a.length;
    for (var i = 0; i < n; i++) {
        
        var numberOfSwaps = 0;
        
        for (var j = 0; j < n - i - 1; j++) { //(n - i - 1) porque cada vez que passamos pelo vetor o maior elemento vai pro (fim - i)
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                numberOfSwaps++;
                totalSwaps++;
            }
        }
        
        if (numberOfSwaps === 0) {
            break;
        }
    }
    
    return {
        sorted: a,
        swaps: totalSwaps
    };
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    
    var result = BubbleSort(a),
        sortedArr = result.sorted,
        swaps = result.swaps;
    
    process.stdout.write('Array is sorted in ' + swaps + ' swaps.\n');
    process.stdout.write('First Element: ' + sortedArr[0] + '\n');
    process.stdout.write('Last Element: ' + sortedArr[sortedArr.length - 1] + '\n');    
}