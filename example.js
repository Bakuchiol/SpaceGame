//set timeout
//ex
// for(i=0; i<100; i++){
//    setTimeout(()=> {
//     console.log(i);
//    }, "1000")
// }

//ex:

fsetTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);

  //random -- need for accuracy, hit points
  let randomNumber = Math.floor(Math.random() * (10-1) + 1)
  console.log(randomNumber)