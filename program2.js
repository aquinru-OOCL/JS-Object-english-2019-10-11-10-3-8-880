var fruit = {
apple: 20,
pear: 20,
peach: 10
};

var total = 0;
for(var att in fruit){
    total = total + fruit[att];
}

console.log(total); // 50