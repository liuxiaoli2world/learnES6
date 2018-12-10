function foo(x, y) {
  return fetch('http://192.168.1.220:8080/data.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
}

function foo(x, y) {
  ajax('http://192.168.1.220:8080/data.json', function (err, data) {
    if (err) {
      it.throw(err);
    } else {
      it.next(data);
    }
  })
}

function* main() {
  try {
    var text2 = yield foo(1, 4);
    console.log(text2);

  } catch (e) {
    console.log(e);
  }
}

var it = main();
var p = it.next().value;
p.then((data) => {
  it.next(data.json());
}, err => {
  it.throw(err);
})
