
function op(val) {
    var s = document.getElementById("ipt").value;

    if (s == 0 || s == '00') {
        document.getElementById("ipt").value = val;
        return;
    }
    else {
        document.getElementById("ipt").value += val;
    }
}
function EqualClick() {
    var data = document.getElementById("ipt").value;
    if (data.substring(0, 3) == "sin") {
        var fig = data.substring(4, data.length - 1);
        fig = fig * Math.PI / 180;
        document.getElementById("ipt").value = Math.sin(fig);
    }
    else if (data.substring(0, 3) == "cos") {
        var fig = data.substring(4, data.length - 1);
        fig = fig * Math.PI / 180;
        ans = Math.cos(fig);
        document.getElementById("ipt").value = ans;
    }
    else if (data.substring(0, 3) == "tan") {
        var fig = data.substring(4, data.length - 1);
        fig = fig * Math.PI / 180;
        document.getElementById("ipt").value = Math.tan(fig);
    }
    if (data.includes("^")) {
        ops = data.split("^");
        sq = Math.pow(ops[0], ops[1]);
        document.getElementById("ipt").value = sq;
    }
    else
        document.getElementById("ipt").value = eval(data);
}
function AllClear() {
    document.getElementById("ipt").value = "";
}

function reduceRes() {
    res = document.getElementById("ipt").value;
    res = res.substring(0, res.length - 1);
    document.getElementById("ipt").value = res;
}
function pi() {
    var pi = document.getElementById("ipt").value;
    pi = Math.PI;
    document.getElementById("ipt").value = pi;
}
function root() {
    var sqrt = document.getElementById("ipt").value;
    var sqrt = Math.sqrt(sqrt);
    document.getElementById("ipt").value = sqrt;
}
function e() {
    var e = document.getElementById("ipt").value;
    e = Math.E;
    document.getElementById("ipt").value = e;
}
function fact() {
    var num_fact = document.getElementById("ipt").value;
    let fact = 1;
    var i;
    for (i = 1; i <= num_fact; i++) {
        fact = fact * i;
    }
    document.getElementById("ipt").value = fact;
}
function sqr() {
    var sq = document.getElementById("ipt").value += "^";
}
function inv() {
    var inv = document.getElementById("ipt").value;
    inv = 1 / inv;
    document.getElementById("ipt").value = inv;
}



