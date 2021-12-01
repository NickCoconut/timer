const args = process.argv.slice(2);
// console.log(args);

if ((args.length === 0)) {
  console.log('please input the timer value');
  return false
}
for (let i = 0; i < args.length; i++) {
  if(!isNaN(args[i]) && args[i] > 0) {
    setTimeout(() => {
      console.log(`${args[i]} seconds`);
      process.stdout.write('\x07');
    }, 1000 * args[i])
  }
}

