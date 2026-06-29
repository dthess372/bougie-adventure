export type GalleryImage = { src: string; alt: string };

export type BlogPost = {
  slug: string;
  day: number;
  title: string;
  excerpt: string;
  date: string;
  scene: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  gallery?: GalleryImage[];
};

export const tripSeries = {
  kicker: 'Annual River Trip · August 2023',
  title: 'The River of No Return',
  tagline:
    "Light on the Bougie and heavy on the Adventure, but exactly the trip we all didn't know we needed.",
  description:
    '20 guests, 6 river guides, and 80 miles of the Salmon River of No Return through the Frank Church Wilderness. Seven days, told one at a time.',
};

const day1Gallery: GalleryImage[] = [
  { src: '/images/blog/river-of-no-return/day-1-1.jpg', alt: 'Camp set up on a sandy beach as the sun sets behind a smoky ridge' },
  { src: '/images/blog/river-of-no-return/day-1-2.jpg', alt: 'The group settling in along the Salmon River of No Return' },
  { src: '/images/blog/river-of-no-return/day-1-3.jpg', alt: 'A sandy riverside camp in the Frank Church Wilderness' },
  { src: '/images/blog/river-of-no-return/day-1-4.jpg', alt: 'Rafts and gear pulled up on the bank of the Salmon River' },
  { src: '/images/blog/river-of-no-return/day-1-5.jpg', alt: 'Three women smiling from inside a riverside tent' },
  { src: '/images/blog/river-of-no-return/day-1-6.jpg', alt: 'A quiet stretch of the Salmon River of No Return' },
  { src: '/images/blog/river-of-no-return/day-1-7.jpg', alt: 'The Salmon River winding through canyon walls' },
  { src: '/images/blog/river-of-no-return/day-1-8.jpg', alt: 'Camp life along the Salmon River of No Return' },
  { src: '/images/blog/river-of-no-return/day-1-9.jpg', alt: 'Five women paddling a blue raft down the Salmon River' },
];

export const posts: BlogPost[] = [
  {
    slug: 'river-of-no-return-day-1',
    day: 1,
    title: 'Introductions',
    excerpt:
      '20 guests, 6 guides, 80 miles of the Salmon River. We went looking for high adventure and found serenity instead.',
    date: 'August 2023',
    image: '/images/blog/river-of-no-return/day-1-1.jpg',
    imageAlt: 'Riverside camp at sunset on a sandy Salmon River beach',
    scene:
      '20 guests, 6 river guides, 80 miles along the Salmon River of No Return, snaking through the Frank Church Wilderness in the heart of Idaho. 1,000 laughs and 0 regrets.',
    paragraphs: [
      'We researched, planned, and ultimately selected this specific trip looking for high adventure. What we found was serenity instead. The first day of our journey was filled with lots of education and introductions: how to set up and tear down camp, how to properly paddle a raft, how to stuff 40 pounds of stuff into a dry bag sized to hold half the amount, how to use "The Groover" (more on that later), how to use the 60 degree river water to perfectly chill a bottle of red, and how to use a Dutch oven to perfectly bake a chocolate caramel cake in the sand.',
      'Takeaway from our first full day in the "Pure and Protected" corridor? We made the right decision when we decided to pre-ship 14 bottles of wine to Salmon and have it personally delivered and waiting on our raft. We are now known (among other things) as "The ladies with all the wine."',
    ],
    gallery: day1Gallery,
  },
  {
    slug: 'river-of-no-return-day-2',
    day: 2,
    title: 'Motivation',
    excerpt:
      'Strangers tossed together for six straight days who became friends, confidants, and drinking buddies. What is your why?',
    date: 'August 2023',
    image: '/images/gallery/two-women-smiling-on-raft.jpg',
    imageAlt: 'Two women smiling together on a raft',
    scene:
      'A hodgepodge of personalities, families and singles, men and women ages 9 to 80+, traveled thousands of miles between us, from Seattle to NYC. Strangers, tossed into sharing every waking hour, every meal, every experience together, for six straight days. Strangers who became friends, confidants, drinking buddies, and holistic healers. Yes, Ramiro, I am talking about you.',
    paragraphs: [
      'What is your why?',
      'We selected and booked the trip seeking excitement and adventure. We wanted to challenge ourselves and conquer something. We wanted to make sure our old bodies could still kick some white water ass. Those who decided to join us? They came because we asked them to. Never a hesitation. It is a blessing to have a community like that.',
      'The motivation for others was different and quite varied. Some came to take in nature’s beauty. Some came to celebrate fresh romance. Some came seeking love. Some came to introduce their young children to a simpler way of life. Some came to unplug and unwind. One came with hopes of overcoming a long held fear of white water kayaking after a previous scare. One came to escape reality. One came to heal.',
      'We never found the dangerous class V rapids we thought we wanted. Seems, despite our meticulous planning skills, we failed to read the fine print. The big waves are only there in the Spring.',
      'We are not sure if others found what they were seeking, but what we all found was a landscape that was beyond beautiful and magical, and shared stories about the river, the corridor, and the people who lived and died there. Amazing tales of perseverance.',
      'We watched a bear walk the mountain ridge, caught a 12" trout, watched an Eagle chase an Osprey for miles, slept with no tent under the stars, and woke up and went to bed to the most beautiful sunrises and sunsets on earth.',
      'The good news is that we managed to elude the mountain lions and gray wolves. The bad news is that, while our guide Anvesh was sleeping outdoors without a tent, a marmot scampered across his face.',
    ],
  },
  {
    slug: 'river-of-no-return-day-3',
    day: 3,
    title: 'The Guides',
    excerpt:
      'Six men with 15+ years each guiding rivers all over the world. Andy, Jonathan, Diego, Miguel, Chip, and the unforgettable Anvesh.',
    date: 'August 2023',
    image: '/images/guides-rafting.jpg',
    imageAlt: 'River guides on the water',
    scene:
      'Six men who all possessed 15+ years each guiding rafters on rivers all over the world. All were gifted technically, medically, and culinarily. Is that a word? All held a passion for sharing their love for wild places. Some owned their own rafting businesses on other continents. All worked tirelessly like mules and somehow seemed to enjoy doing it. If you could mix a team of Boy Scouts with supermen, you would get these men.',
    paragraphs: [
      'We have never met a river guide we did not like. We remember every last one and we have done our fair share of rafting over the years. We still tell tales of the very first fantastic guide we had when we took our families rafting for the first time almost 15 years ago. His name was Squirrel. His wife was a professional wrestler. Enough said.',
      'Much like the guests, each of the six guides on this trip were different. Andy, the grizzled old pro with the heavy oilskin hat even in 90 degree heat. Jonathan, the young buck who reveled in sharing his passion for the corridor that captivated him. Diego from Patagonia, with his easy smile, who convinced us we needed to sleep outside without a tent. Mike, who took it in stride when we told him his name was boring and renamed him Miguel as we christened him as our own personal sommelier. And Chip (who was struck by lightning and almost died), who looked for ways to go out of his way to haul our heavy gear, stepped in to assist in cork popping and wine opening, and did it all with an infectious grin on his face.',
      'Finally, Anvesh. Anvesh gets his own paragraph. Anvesh, the soft-spoken gifted storyteller who paddled our raft of five ladies down the Salmon each day. The quiet times on the water found us all both fascinated and mesmerized by the hilarious tales he freely shared. The owner of his own commercial outpost in India, Anvesh told stories of how he once had to kill a viper with his bare hands, what he did when an Eagle dropped a live rattlesnake into his kayak, and how a group of inexperienced guides managed to find a way to accidentally explode the giant bucket of shit that the rafters had been using all week. Anvesh filled the lull between the class IIIs and IVs with more excitement than any class V could give us. A stickler for safety, he would make us do practice drills in the raft for several minutes before hitting a big rapid. He would then call for forward paddle strokes, don his easy smile, and deliberately declare each time, "Here Comes Fun!"',
      'Fun came indeed.',
    ],
  },
  {
    slug: 'river-of-no-return-day-4',
    day: 4,
    title: 'The Fires',
    excerpt:
      '24,039 acres burned, six brave smokejumpers, and some of the most heartbreaking, inspiring stories of bravery you will ever hear.',
    date: 'August 2023',
    image: '/images/gallery/mountain-ridge-pink-sunset.jpg',
    imageAlt: 'A mountain ridge glowing under a smoky pink sunset',
    scene:
      '24,039 acres destroyed, 12% containment, 6 brave smoke-jumpers, and some of the most heartbreaking yet inspiring stories of bravery you have ever heard. Wildfires are common and part of recreating in Idaho’s backcountry during the summer, but it had been years since they had encountered one quite so large or destructive as the Elkhorn Fire in August of 2023.',
    paragraphs: [
      'Our group continues to marvel at how incredibly lucky we were to have booked our trip for the week we did. The trips that were booked the week prior and the week before that were both cancelled due to the Elkhorn Fire that ripped through the Salmon River corridor. We were the first group allowed to head out. It was finally deemed safe as the fires were "mostly" out. There was no evidence of fires the first two days of the trip. By day three, however, a smoky haze hovered in the air and the landscape changed from mountains covered thick with Ponderosa Pines to the charred remains of whatever vegetation had previously covered the terrain. Smoke could still be seen smoldering from logs and ground debris.',
      'It was all a bit surreal. Our guides recounted stories for us of how, just the week prior, brave smokejumpers parachuted into the corridor, putting their own lives at risk to try to save the few historic remaining structures along the river. The church, the hunting lodge, the farm, and the ranch. Places that homesteader families have lived in and called home for hundreds of years. Tales of their technical skill had us mesmerized. These firefighters swooped in with generators and hoses to try to pump the river water up to the structures built high above. They did their best to saturate the buildings until the fires burnt right through their hoses. They then worked with homeowners to surround the structures and blast river water towards the oncoming blaze. Even though we were listening to this all while slowly floating past the evidence, it did not really become real until we stopped for a water break at Yellow Pine Bar, the home of homesteaders Sue and Greg. We sat on their porch and silently listened as they told their story.',
      'Their story: the night the raging wildfire surrounded them on all sides, they thought there was no hope and were ready to flee down to the river to save themselves. But then six firefighters appeared and began to help them fight the blaze. They spent all night pushing back the fires with the little water they could pump up from the river, praying for the wind to shift, listening to the echoes of giant falling Ponderosa Pines, rock slides, and the crackling of the blaze.',
      'By morning, they realized that both they and their home would survive. Along with the six firefighters, they lay down in the grass and cried. They were lucky. But their beloved neighbor, just a mile upstream, was not. Seven structures at Allison Ranch (a remote Christian missionary retreat) were lost to the fire, including the home of Jim and Gloria, their guest lodge, several cabins, a sawmill, and a small chapel that was being built and near completion. When Jim realized the beloved historic log buildings, dating back to the gold mining days, could not be saved, he vowed to die with them. The firefighters drenched themselves in river water and then ran back into the fire-engulfed building to drag him out and save him. They then all sat safely in a boat in the middle of the river the rest of the night and silently watched 200 years of history burn to the ground.',
      'The day we arrived for our visit at Yellow Pine Bar, those same six firefighters had returned and were walking up the path to Sue and Greg’s to check on them one last time. Over lemonade, two confessed they may not continue to be firefighters. This was their first assignment, rookies. Traumatizing as it was, it may be their last. Sue then teared up as she talked about how the footage from her trail cam was somehow spared. The camera melted, but the video chip survived. She popped it in her computer. She watched it as all six firefighters walked onto her land the night they saved her life and, as they walked by, each one took a moment to hold their badge up to the camera, to identify who went into the blaze, in case no one came back out.',
      'The Salmon-Challis National Forest and those who live there are forever changed.',
    ],
  },
  {
    slug: 'river-of-no-return-day-5',
    day: 5,
    title: 'The Groover',
    excerpt:
      'One bucket for waste, one for pee, a paddle for a door, and the most spectacular view you have ever had while sitting on the can.',
    date: 'August 2023',
    image: '/images/gallery/river-camp-setup-at-sunset.jpg',
    imageAlt: 'A riverside camp set up at sunset',
    scene:
      'One bucket designated just for waste. One bucket exclusively for pee. A river paddle for a bathroom door. A lovely scenic trail leading to the outdoor "restroom." "The Groover" provided zero privacy, but had the most spectacular view you have ever had while sitting on the can.',
    paragraphs: [
      'On the list of what you need to know in order to survive 6 days of river camping, how and where to use the bathroom was at the very top. You see, there are no Porta-Pottys sitting on the riverbanks. The Salmon River is designated a "Wild and Scenic River" so human waste is a potential risk to the water source and a negative impact on the environment. So, in this neck of the woods, they take the whole "Leave No Trace" principle very seriously. This means there are some backcountry bathroom basics we all needed to know. You ARE allowed to pee in the river only. "The solution to pollution is dilution." But, once off the river for the day, you are NOT allowed to pee anywhere on land. Yes, this applied to the men as well as the women. No one was allowed to freely and easily pee in the woods. As for number two? Well, if they ain’t letting you wee in the sand, they sure as hell aren’t allowing anyone to soil the soft earth with anything else. Don’t even think about it!',
      'So yes, when we were told we would be "packing out all trash," that meant the daily excrement of 26 human beings got packed up and moved on out as well. Chip and Diego were the gear boat captains who had the honor. I asked if they ever took bets amongst themselves as to how full the pee bucket would be in the morning when they had to screw the lid back on it and load it in the raft. You know, based on how much booze the group was drinking? Professionals as they were, they smiled but refused to answer my question.',
      'Rumor is it is called "The Groover" because the first river settlers and gold rush miners repurposed old ammo cans for waste disposal. If one sat long enough on the "can," it would leave two deep grooves in your behind. The miners could not be bothered with providing a cushy seat.',
      'In true Glamping form, our makeshift Groover had a pretty nice seat and a lid! The first day of camp, an effort was even made to provide a tiny tent for privacy, some lovely air freshener (which frankly seemed unnecessary), and even some magazines! The location was carefully selected in order to position the Groover in a secluded spot a discrete distance from the sleeping tents. By day 3, the mini privacy tent and fancy extras were gone. Two buckets were positioned a little bit away from the campsite. Sometimes they were down short rocky trails with very little privacy, allowing hikers to peep in on the pee-ers if so inclined. The polite group that we were, we all turned our heads AWAY from those who were "Grooving." The Groover always had a beautiful full view of the river. If a Jet Boat happened to drive by, they would politely wave.',
      'How did we know if we could use the Groover? At the entrance to the Groover path was a handwashing station and a river paddle laid in the sand that served as the "key." The particular position of the paddle indicated upon arrival if the bathroom door was open or closed.',
      'I will just admit that I did as my guide Anvesh suggested. I hydrated a lot each day. He said it would keep me healthy. What I did not anticipate was that it also meant several headlamp-adorned nighttime trips to the Groover. Well, that and the evening wine. The wine may have contributed as well.',
      'TMI, but while there was a seat on the poop bucket, the pee bucket was, well, just a bucket. My thighs have never burned more in my life. With all the daily water and wine, those "hover sessions" lasted several minutes. Better than a Thigh Master, ladies. Squat and hold that position for two minutes five times a day and you will be fit!',
      'I hesitate to complain about my sore legs, however, when I think about the poor gear boat guides who were on daily Groover duty. Every morning, after "Last call for the Groover!", they sealed the lids and loaded the buckets into the gear rafts. I swear, one day, they were strapped down right next to our cooler of wine! I do not even want to know where those 12 buckets ended up after the trip.',
      'I will not even get started telling you the story of the exploding Groover. I could not do it justice. But, trust me, it is a good one. Ask me sometime.',
    ],
  },
  {
    slug: 'river-of-no-return-day-6',
    day: 6,
    title: 'The Food',
    excerpt:
      'Four gourmet meals a day, cooked in the sand with no electricity. We still do not understand how they did it.',
    date: 'August 2023',
    image: '/images/gallery/river-camp-canopy-shaded-aerial.jpg',
    imageAlt: 'An aerial view of a shaded river camp on the sand',
    scene:
      'Six men who signed up to be river guides but are required to also become gourmet chefs. Four meals a day, each one fresh, unique, and exceptional in every way. All food was organic, locally sourced, and served with a combination of style and wilderness practicality. This often meant no plates, napkins, or utensils were available for use. There are ways to get around using these items. Who knew!',
    paragraphs: [
      'We still do not understand. We have no idea how food for 26 people was kept cold and fresh for 6 days in 90 degree heat. We do not know how they were able to bake a double chocolate caramel cake with no electricity. How did they whip out a cooler of fresh crushed ice on evening six? Whatever went on behind the scenes to shop, prep, and pack the perfect amount of gourmet grub, we have no clue. But these guys had it down to an exact science.',
      'Lunch each day was an adventure in itself. It was the least planned and most casual meal of the day. We would stop for lunch at some point along the river whenever we happened across a decent sandbar to set up shop. The mid-day meal always consisted of a large spread of fresh cheeses and meats, veggies and fruits, and homemade summer salads. Yes, you heard us right, homemade! We were never fed store-bought pre-packaged goods. The guides-turned-chefs would literally whip out the raw ingredients, start boiling pasta or potatoes, break out fresh herbs, and create a masterpiece every dang time. With no plates or silverware, we all quickly mastered the art of expertly folding a tortilla into a perfect cone in order to stuff it full of ingredients for lunch. These "cone-wiches," while messy, got easier to make and eat each day.',
      'Breakfast, dinner, and daily appetizers were more of a first-class event. The meal bell rang every morning at 7am for fresh-brewed coffee and again at 8am for a full hot breakfast. We feasted on spinach and mushroom frittata, thick slices of bacon, and breakfast scrambles that hit the spot.',
      'Our bellies satisfied, we would then set out on the Salmon to take on the rapids.',
      'At the end of a full and sometimes strenuous day of rafting, Anvesh would dock our raft on the riverbank and we would somehow maneuver our soggy selves somewhat less than gracefully out of the raft, stumbling over river rocks, feeling exhausted already and dreading (a bit) the "worst half hour of each day," which was hauling and unpacking our heavy drybags, getting changed into dry clothes, and setting up our bedding for the night. THIS WAS A CHORE!',
      'The reward, however, is that we would barely have our feet on the sand when our gear boat guides (who arrived to camp hours earlier to set up and prep) would ring the 5:30 happy hour and appetizer bell, signaling the "best time of each day," which was when we were 100% done with set up and able to sit down to delicious food and wine. Each daily app was better than the next. They ranged from homemade bruschetta, prepared with fresh basil picked earlier in the day from the river corridor, to avocado toast or homemade hummus with roasted garlic, served with ripe mangos and dollops of chevre.',
      'While we relaxed, enjoyed our apps, or wandered off to go fish or hike, the remaining guides would join the supper crew and quickly get to work prepping, chopping, and preparing a fresh, gourmet, three course meal in time for the 7:30 dinner bell. I do not recall every meal, but we were treated to meatballs with fresh basil for Italian night, shrimp tacos for Mexican night, chicken, rice, and vegetable curry for Indian night, and a delicious feast of steak and risotto on our final evening in the corridor. Desserts were always spectacular, with the highlight being a flaming bananas foster to top off a meaty feast.',
      'It could be somewhat confusing to the senses: the fresh air of the wilderness mingling with the tastes and scents of a Dutch oven and a back-country grill. The sight of a makeshift kitchen in the sand, brimming with activity. Confusing as it was, it was also pure bliss. The best meals in the middle of nowhere.',
    ],
  },
  {
    slug: 'river-of-no-return-day-7',
    day: 7,
    title: 'The Incidents',
    excerpt:
      'Two surprise storms, a paddle to the face, a thousand ground bees, and a guest turned faith-healer. It is not a real party until someone gets hurt.',
    date: 'August 2023',
    image: '/images/gallery/yellow-paddles-raised-against-sky.jpg',
    imageAlt: 'Yellow rafting paddles raised against a bright sky',
    scene:
      'Two crazy storms that suddenly blew in out of nowhere; one that inflicted pain and a bit of trauma. A 110 degree natural hot spring; the temp causing irreparable damage. A careless moment resulting in a significant blow to the face. A thousand ground bees. A guest turned faith-healer and a savior guide with a mad talent for creatively fixing things. Relaxing vacation? No. But adventure? Now we are talking!',
    paragraphs: [
      'It was all going swimmingly until day 5 of our 6 day adventure. There had been no serious mishaps, save the dissolving Teva sandals. But that issue had quickly been remedied by a guide with Boy Scout skills that went above and beyond. No one can really explain why fellow rafter Heather stepped out of the hot springs on Day 1 only to discover that her one and only pair of shoes for the trip, her beloved Tevas, had 100% dissolved. While it seemed quite the tragedy at the time, before the sun set, guide Andy had crafted her a brand new pair out of silver Duct Tape. She proudly wore them for the remainder of the trip.',
      'By day 5 we were all counting our blessings that not a single person had experienced anything more serious than a mild backache or a paddling blister. Yes, we were ripping through Band-Aids, Advil, Excedrin, and Benadryl at an alarming rate. But those items were doing wonders at keeping us all functional and pain-free. There was constant chatter from everyone about severe constipation as well, but again, modern medicine came in handy and I do believe that eventually each and every one of us paid homage to the Groover.',
      'Day 5 started out like any other. Wake up, get coffee, fill up on a delicious breakfast, and begin to break down camp. For the campers, this meant we had to disassemble and bag up our tents. Did we mention that we are not campers? That we have really never actually camped? That we signed up for this trip because we failed to read the fine print and we thought it was a bit more "Glampy" than it actually was? While the gear guides set UP the tents for us, we had to take them down ourselves. Easy-peasy you say? Yeah, not so much.',
      'Reflecting upon my battle wound, there was no way I was prepared to tell the truth as to how it had occurred. It looked nasty, so there should be a gnarly story to go with it. I contemplated what I would tell people when they asked why my face was purple and my lip was swollen to twice its size.',
      'I considered the following:',
      '"I was kayaking a Class V rapid called Devil’s Crotch. It knocked my face into a giant rock. I maneuvered the boat like an artist and managed not to fall out. But the rock got the better of my face."',
      '"A big horn sheep charged at me. I fought it off with my bare hands, protecting my fellow rafters. But not before its horns gouged me in the face."',
      '"Kathy smacked me with a paddle. A salmon jumped out of the river and smashed me in the face."',
      'Oh, the stories I could have told. Reality is that, being the "non-camper" that I am, when I was taking down my tent (see those yellow spring-loaded poles behind me in the pic?), the tent rod released suddenly and sprung up, hitting me directly in the mouth. It hurt. I yelled. I looked like an idiot for a week. But day 5 was not all about me. I was not the only one to experience "an incident."',
      'By the time our rafts pulled into camp at the end of the day, the swelling had gone down and I was finally able to eat again without pain. Appetizers were just being served when the wind began to suddenly whip up. There was a mad frenzy to secure the rain-flys on the tents. While I ran to my tent, Jenn (who was sitting under the large community dinner tent and tarp) attempted to help secure the food, tables, and chairs that were sitting underneath and save them from the imminent storm. Ten seconds in, a wind gust grabbed one of the huge paddles that was holding up the tarp and smacked it squarely into the back of her head, knocking her to the ground. A massive purple bump quickly formed. She says she saw stars. When it was determined that she did not have a concussion, we let her go to bed. It was not until the next morning when she also noticed the huge black and blue marks covering her shoulder and hip. Her battle-wounds far outranked mine.',
      'Day 5 also found Ramiro with a bee sting to the tongue, his wife with a cut toe, and others with a plethora of various other minor injuries.',
      'Not to worry though. On our final night at camp, after several shared bottles of wine, as the sun set over the ridge, I found Ramiro sitting in the community circle, administering acupressure to himself and chanting something in Spanish about "releasing the poisons." Turns out he was curing himself of his bee sting. A self-proclaimed Ecuadorian spiritual healer, we were so lucky to have him on our trip. If he could do that, surely he could heal the rest of us! After about an hour of succumbing to his magical healing techniques and another bottle of red, we were all feeling perfectly fine.',
      'It is not a real party until someone gets hurt.',
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
