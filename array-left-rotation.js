process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

//5 1
//1 2 3 4 5
//2 3 4 5 1

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var newIdx = []
    var newArr = []
    let s = k % n
    for (let i=0;i<n;i++) {
        var tmp = i
        if (i-s < 0) {
            tmp = n-s+i
        } else {
            tmp = i - s
        }
        newArr[tmp] = a[i]
    }
    console.log(newArr.join(' '))
    return newArr
}
