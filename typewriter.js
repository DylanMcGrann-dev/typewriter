const sentence = 'hello there from lighthouse labs';
let time = 0;

const typewriter = function() {
  for (let i = 0; i < sentence.length; i++) {
    // console.log(i);
    if (i === sentence.length - 1) {
      setTimeout(()=>{
       process.stdout.write('\n');
      }, time);  
    } else {
      setTimeout(() => {
        process.stdout.write(sentence[i]);
      }, time,);
      time += 50;
    }
  };
};
typewriter();