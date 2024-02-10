


function explain_callback(name, age, task) {
    console.log('Hello', name);
    console.log('Your age', age);
    task();
}


function washHand() {
    console.log('wash hand with soap');
}


function takeShower() {
    console.log('Take shower');
}




explain_callback('Karim', 20, washHand);

explain_callback('Kabir', 30, takeShower);