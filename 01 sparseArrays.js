//problema: https://www.hackerrank.com/challenges/sparse-arrays/copy-from/134687710

function matchingStrings(strings, queries) {
    let numQueries = queries.length; let numStrings = strings.length;
    let result = [];
    for (let i=0; i < numQueries; i++) result[i] = 0;

    for (let i=0; i < numQueries; i++) {
        for (let j=0; j < numStrings; j++)
            if (strings[j] === queries[i]) {
                result[i] += 1; //registra match
            }
    }
    return result;
}