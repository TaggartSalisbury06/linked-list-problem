//I have the following structure (which is JS's version of a "linked list"):

const obj = {
  value: 2,
  next: {
      value: 17,
      next: {
          value: 5,
          next: {
              value: 8,
              next: {
                  value: 15,
                  next: {
                      value: 2,
                      next: null
                  }
              }
          }
      }
  }
}

function sumLinkedList(obj) {
    let sum = 0;
    let current = obj;

    while (current != null) {
        sum += current.value;
        current = current.next;
    }

    return sum;
}

const sum =sumLinkedList(obj)

console.log(sum)


//write a function that takes an object with a similar structure to this one
//and returns a number, the sum of all the value properties in the list