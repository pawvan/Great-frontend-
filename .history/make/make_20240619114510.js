function make(intital) {
    var counter = intital;
    function increment()
    {
        counter++;
    }
    return increment;
}
cont incrementer  = make(0);
console.loh(increment())