// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.

function sendDoneStatus(callback:(status:string)=>void) {
  callback("done");
}

console.log("Task-12:");

console.log(sendDoneStatus((msg) => {
  console.log(msg);
}));
