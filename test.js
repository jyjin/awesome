const aysncFunc = (a) => {
  if (a) {
    return new Promise(res => {
      setTimeout(() => {
        res({ name: 'jyjin' })
      }, 3000)
    })
  }
  return Promise.resolve(false);
}

const test = async () => {
  let res0 = await aysncFunc();
  console.log(res0);
  let res = await aysncFunc(1);
  console.log(res);
  let res1 = await aysncFunc();
  console.log(res1);
}

test();
console.log('done!')