const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.DB || "mongodb://localhost:hodgepod");

const podcastSeed = [
  {
    title_original: "BiggerPockets Real Estate Podcast",
    publisher_original: "BiggerPockets",
    thumbnail:
      "https://cdn-images-1.listennotes.com/podcasts/biggerpockets-real-estate-podcast-bigger-o6nHw2KvmqC-VOnl2dx8TKN.300x300.jpg",
    id: "d899003103ef46dabdaa5281a952c3e1",
    website:
      "https://art19.com/shows/biggerpockets-real-estate-podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
    description_original:
      "Imagine you are friends with hundreds of real estate investors and entrepreneurs. Now imagine you can grab a beer with each of them and casually chat about failures, successes, motivations, and lessons learned. That’s what The BiggerPockets Podcast delivers.Co-hosted by Brandon Turner, David Greene, and BiggerPockets founder Joshua Dorkin, this podcast provides actionable advice from investors and other real estate professionals every week. The show won’t tell you how to “get rich quick” or sell you a course, boot camp, or guru system; instead, the BiggerPockets Podcast will give you real strategies that work for real people.Start listening and join the 1.3 million members who are learning to invest! Visit biggerpockets.com, and follow us on Instagram (@biggerpockets, @beardybrandon, @davidgreene24, @jrdorkin) and Twitter (@BiggerPockets, @BrandonAtBP, @DavidGreene24, and @jrdorkin).\n    ",

    date: new Date(Date.now())
  },
  {
    title_original: "The Daily",
    publisher_original: "The New York Times",
    thumbnail:
      "https://cdn-images-1.listennotes.com/podcasts/the-daily-the-new-york-times-_iFAjsBZIXt-xp7nhsmSkX2.300x300.jpg",
    id: "f2eb196b20884b0490cc60a58b05bbb6",
    website:
      "https://www.nytimes.com/the-daily?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
    description_original:
      "This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro. Twenty minutes a day, five days a week, ready by 6 a.m.\n    ",
    date: new Date(Date.now())
  }
];

db.Podcast.remove({})
  .then(() => db.Podcast.collection.insertMany(podcastSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
