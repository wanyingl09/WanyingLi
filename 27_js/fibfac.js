// Team Cereal Killers :: Selena Ho, Wanying Li
// SoftDev pd8
// K27 -- Basic functions in JavaScript
// 2023-04-04
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

// factorial
function fact(n) {
    if (n < 2) {
        return 1;
    }
    return n * fact (n-1);
}

//tests
print(fact(1));
print(fact(2));
print(fact(3));
print(fact(4));
print(fact(5));