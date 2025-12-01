const mongoose = require('mongoose');
const Puppy = require('./models/Puppy');

mongoose.connect('mongodb://10.12.7.102:27017/rainbow-puppies')

.then(async () => {
  console.log("Connected to MongoDB!");

  const puppies = [];

  for (let i = 1; i <= 10; i++) {
    puppies.push({
      name: `Puppy${i}`,
      puppyPower: Math.floor(Math.random() * 100),
      bestFriend: `Friend${i}`,
      birthYear: 2020 + i,
      imageUrl: `http://10.12.7.103/img/puppy/puppy${i}.png`
    });
  }

  await Puppy.insertMany(puppies);
  console.log("Inserted 10 puppies!");
  mongoose.disconnect();
})
.catch(err => console.error(err));
