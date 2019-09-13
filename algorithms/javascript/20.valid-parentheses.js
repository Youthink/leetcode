
/*
  ()[]{}
  ()
  ([)]
  (]
  {[]}
  ]
 */

/*
 我写的第一版
 */

let isValid = (s) => {
  const obj = {'(': ')','{': '}','[': ']'};
  const left = Object.keys(obj);
  const right = Object.values(obj);
  const leftArr = [];
  const rightArr = [];
  const sArr = s.split('');
  const brackets = (o) => obj[o];

  sArr.map(o => {
    left.includes(o) && leftArr.unshift(o);
    right.includes(o) && rightArr.unshift(o);
    !left.includes(o) && o === brackets(leftArr[0]) && leftArr.shift() && rightArr.shift();
  });

  if (leftArr.length > 0 || rightArr.length > 0) {
    return false;
  }
  return true;
}

/*
   参考其他人的，加以优化
 */

var isValid = function(s) {
    const map = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    };
    
    const result = [];
    
    for (let item of s) {
        if (item === '{' || item === '[' || item === '(') {
            result.push(item);
        } else if (map[item]) {
            if (result.pop() !== map[item]) {
                return false;
            }
        }
    }

    return result.length === 0;
};
