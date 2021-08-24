const sentence = "hello there from lighthouse labs";
let n = 0;


for (let char = 0; char < sentence.length; char++) {
  setTimeout(() => {
    if (char === sentence.length -1){
      process.stdout.write("\n");
    } else {
    process.stdout.write(sentence.charAt(char));
    }
  }, n) // <= 1s delay to make it noticeable. Can dial it down later.

  n += 50;
}