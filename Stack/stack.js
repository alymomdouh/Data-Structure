// npm init --y
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    // push element to stack
    push(ele) {
        // items.push(ele); it correct but not data structure
        this.items[this.count] = ele;
        console.log(` ${ele} pushed to index ${this.count}`);
        this.count++;
    }
    // pop element from stack
    pop() {
        if (this.count === 0) { // if there are no elements
            return;
        } else {
            let removeEle = this.items[this.count - 1];
            this.count--;
            console.log(`removed => ${removeEle}`);
            return removeEle;
        }
    }
    // check stack is empty
    isEmpty() {
        const checkEmpty =
            this.count === 0 ? "stack is empty" : "stack is not empty";
        console.log(checkEmpty);
    }
    // get Length  element stack
    length() {
        console.log(this.count);
    }
}
// to call  it need in cm node stack.js 
const stack = new Stack();
stack.isEmpty();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.isEmpty();
stack.length();