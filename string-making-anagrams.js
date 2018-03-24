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

function main() {
    var a = readLine();
    var b = readLine();
    var map = {}
    var res=0
    
    for(let i=0;i<a.length;i++) {
        let v = map[a[i]] 
        if (v === undefined) {
            map[a[i]] = 0
        }
        map[a[i]]++
    }
    
    for(let i=0;i<b.length;i++) {
        let v = map[b[i]] 
        if (v === undefined) {
            map[b[i]] = 0
        }
        map[b[i]]--
    }
    
    for(let key in map) {
        res += Math.abs(map[key])
    }
    
    console.log(res)
}
