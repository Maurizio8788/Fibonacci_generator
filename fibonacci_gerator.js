function fibonacciGenerator(n) { 
    let arr = [];
    for(var i = 0; i < n; i += 1 ){
      if(i < 2){ arr.push(i)}else{
       //arr[i] = arr[i-2] + arr[i - 1];
       arr.push(arr[i-2]+arr[i-1]);
      }
        }

    return arr;
}

fibonacciGenerator(n)
