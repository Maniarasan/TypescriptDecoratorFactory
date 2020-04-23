function Logger(logstring: String) {
  return function (constructor: Function) {
    console.log(logstring);
    console.log(constructor);
  };
}

@Logger("Logging - person")
class Person {
  name = "Max";
  constructor() {
    console.log("creating person object");
  }
}

const pers = new Person();

console.log(pers.name);
