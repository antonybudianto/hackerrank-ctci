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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    var map = {}
    for (let i=0;i<magazine.length;i++) {
        let v = map[magazine[i]]
        if (v === undefined) {
            map[magazine[i]] = 0
        }
        map[magazine[i]]++
    }
    let no=0
    for(let i=0;i<ransom.length;i++) {
        let r = ransom[i]
        if (map[r]) {
            map[r]--
        } else {
            no++
            break
        }
    }
    let res = no === 0 ? 'Yes' : 'No'
    console.log(res)
}
