/*Ques # 13:
Your Own Array:Think of your favourite mode of transportation,such as a motorcycle,or  a car and make a list that stores several examples.Use your list to print a series of statement about these items,such as"I would like to own a Honda motorcycle */

let fav_Transport: string[] = ["Tesla Model Y",  "Hilux",  "Audi", "Honda CR-V", "Toyota Corolla"];

fav_Transport.map((items) =>{
  console.log(`I would like to own a ${items}`)
});
    