let nums = [2,4,6,8,10, 11];

nums.filter(n => n % 2 === 0)
    .forEach(n => {
        console.log(n);
    });