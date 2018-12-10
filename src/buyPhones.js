var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}
console.log(a[6]());

function foo() {
  console.log(a); // 2
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;

bar();

console.log(-1 / Number.POSITIVE_INFINITY);
console.log(Object.is(NaN, NaN));

let fn2 = new Promise(function(resolve, reject) {
  console.log('object');
  // f();
  resolve('111');
  resolve('111');
  resolve('111');
  reject(() => {
    console.log('reject');
    return '222';
  });
});

fn2
  .then(data => {
    console.log('success', data);
    fff();
    return '333';
  })
  .then(null, err => {
    console.log(err);
    ffff();
    return '444';
  })
  .then(null, err => {
    console.log(err);
  });

  function foo( x =
    (function(v){ return v + 11; })( 31 )
  ) {
    console.log( x );
  }
  
  foo();