// Data
const cuteGreetings = [
    "The world missed you",
    "You're absolutely amazing",
    "You light up the room",
    "You're worthy of all the love",
    "Today is brighter with you",
    "You're the best part of my day",
    "You deserve to smile",
    "You're incredibly special",
    "The universe loves you",
    "You make everything better",
    "I can't stop thinking about you",
    "You're the most beautiful person I know",
    "Every moment with you is a gift",
    "My heart smiles when I see you",
    "You're my favorite hello",
    "Life is better with you in it",
    "You complete me",
    "I fall in love with you every day",
    "You're my greatest adventure",
    "My soul loves yours",
    "You're my reason for everything",
    "Being with you feels like home",
    "You make my heart race",
    "I cherish every second with you",
    "You're the answer to my prayers",
    "My love for you grows every day",
    "You're irreplaceable and perfect",
    "Your smile is my favorite thing",
    "You're my greatest blessing",
    "Every day with you is a dream come true"
];

const allStats = [
    { name: "Kindness", value: 92, emoji: "💚" },
    { name: "Humor", value: 110, emoji: "😄" },
    { name: "Weakness for you", value: "∞", emoji: "💕" },
    { name: "Attractiveness", value: 999, emoji: "✨" },
    { name: "Lovability", value: "∞∞∞", emoji: "💝" },
    { name: "Intelligence", value: 101, emoji: "🧠" },
    { name: "Creativity", value: 98, emoji: "🎨" },
    { name: "Sense of Adventure", value: 87, emoji: "🗺️" },
    { name: "Compassion", value: 105, emoji: "🌟" },
    { name: "Dance moves", value: 120, emoji: "💃" },
    { name: "Cuddlability", value: "9999", emoji: "🤗" },
    { name: "Smile power", value: 88, emoji: "😊" },
    { name: "Talent at everything", value: 100, emoji: "⭐" },
    { name: "How much I adore you", value: "∞∞∞∞", emoji: "💝" },
    { name: "Perfectness", value: 97, emoji: "👑" }
];

const compliments = [
    "Your smile could light up the darkest room",
    "You're genuinely thoughtful and kind",
    "You have impeccable manners and grace",
    "You light up when you talk about things you love",
    "Your creativity knows no bounds",
    "You're an amazing listener",
    "You make people feel welcome and valued",
    "Your authenticity is refreshing and beautiful",
    "You have such a good heart",
    "You inspire others to be better",
    "You're braver than you believe",
    "You make the world a better place",
    "Your perspective is valuable and unique",
    "You deserve all the happiness in the world",
    "You have the most infectious laugh",
    "Your kindness changes lives",
    "You're more talented than you realize",
    "You bring out the best in people around you",
    "Your hair looks beautiful today",
    "You have impeccable taste",
    "You're a gift to everyone who knows you",
    "You light up every room you enter",
    "Your intelligence is captivating",
    "You care about people in such a beautiful way",
    "You're the reason people believe in good things",
    "Your potential is limitless",
    "You make being around you easy and joyful",
    "You're more impressive than you think",
    "Your positive energy is contagious",
    "You're a natural at making people feel loved",
    "You have a beautiful soul",
    "You're worthy of all the good things coming to you",
    "Your strength is inspiring",
    "You're someone people want to be around",
    "You have amazing taste in everything",
    "You're incredibly thoughtful",
    "You bring so much joy to others",
    "Your confidence is attractive",
    "You're a true friend",
    "You have wisdom beyond your years",
    "You're prettier when you smile",
    "You have an amazing heart",
    "You deserve someone who treats you like I do",
    "You're absolutely irreplaceable",
    "You're the best version of yourself every day",
    "Your honesty is refreshing",
    "You're the whole package",
    "You matter so much to people",
    "The way you see the good in everyone is beautiful",
    "You make even mundane moments feel special",
    "Your eyes tell a thousand kind stories",
    "You have a way of making people feel truly seen",
    "Your laugh is my favorite sound",
    "You're the kind of person that makes the world gentler",
    "Your presence is a gift I never take for granted",
    "You have a gift for making people feel safe",
    "Your mind is as beautiful as your heart",
    "You inspire me to be better every single day"
];

const cuddles = [
    { emoji: "🤗", message: "Here's the biggest virtual hug just for you" },
    { emoji: "🫂", message: "Sending you all the warm cuddles" },
    { emoji: "🛋️", message: "Come here, let's just be comfortable together" },
    { emoji: "☁️", message: "Imagine the coziest moment, that's for you" },
    { emoji: "💤", message: "Here's all the comfort and safety you need" },
    { emoji: "🌙", message: "Wrapping you up like you're made of starlight" },
    { emoji: "💜", message: "A cuddle that says 'I've got you'" },
    { emoji: "🔥", message: "Warm hugs on cold days" },
    { emoji: "✨", message: "The kind of hug that feels like home" },
    { emoji: "🎀", message: "Hugging you tight because you deserve it" },
    { emoji: "🌟", message: "A cuddle filled with all my love for you" },
    { emoji: "🧸", message: "Imagine the safest, warmest arms around you" },
    { emoji: "💖", message: "Giving you the biggest, longest hug ever" },
    { emoji: "🛏️", message: "Cozy cuddles with absolutely zero pressure" },
    { emoji: "🌺", message: "Gentle hugs that make everything better" },
    { emoji: "💝", message: "Holding you close and never letting go" },
    { emoji: "🕯️", message: "Warm, peaceful cuddles by candlelight" },
    { emoji: "🌸", message: "Soft hugs that feel like comfort itself" },
    { emoji: "💫", message: "A hug that heals everything" },
    { emoji: "💕", message: "All the cuddles you could ever need" },
    { emoji: "🎁", message: "Hugs wrapped with all my affection" },
    { emoji: "🌙", message: "Night time cuddles to ease your worries" },
    { emoji: "🤍", message: "Pure, simple, genuine cuddles" },
    { emoji: "⭐", message: "Cuddles that remind you you're loved" },
    { emoji: "🌈", message: "Rainbow cuddles for a brighter day" },
    { emoji: "💫", message: "Magical cuddles just for you" },
    { emoji: "🎶", message: "Comfortable silence cuddles" },
    { emoji: "🏠", message: "Home is wherever you are cuddles" },
    { emoji: "❄️", message: "Warm cuddles on any day" },
    { emoji: "🌻", message: "Bright and cheerful cuddles" },
    { emoji: "🫀", message: "Cuddles straight from my heart to yours" },
    { emoji: "☕", message: "Cozy warm cuddles with your favorite drink" },
    { emoji: "🌊", message: "Peaceful cuddles like ocean waves" },
    { emoji: "🦋", message: "Light and gentle cuddles" },
    { emoji: "🎪", message: "Fun and playful cuddles" },
    { emoji: "🌷", message: "Delicate and loving cuddles" },
    { emoji: "🎭", message: "Cuddles that make everything better" },
    { emoji: "✨", message: "Sparkly cuddles filled with happiness" },
    { emoji: "🌅", message: "Cuddles watching the sunrise together" }
];

const gifts = [
    { emoji: "🌹", name: "A beautiful red rose" },
    { emoji: "🌸", name: "Cherry blossoms" },
    { emoji: "🌺", name: "Tropical flowers" },
    { emoji: "🌷", name: "Lovely pink tulips" },
    { emoji: "🌻", name: "Sunflowers to brighten your day" },
    { emoji: "🌼", name: "Cheerful daisies" },
    { emoji: "🌹", name: "A dozen red roses" },
    { emoji: "🌸", name: "A bouquet of cherry blossoms" },
    { emoji: "🐱", name: "A cute kitty" },
    { emoji: "🐰", name: "A fluffy bunny" },
    { emoji: "🦋", name: "A beautiful butterfly" },
    { emoji: "🦄", name: "A magical unicorn" },
    { emoji: "🐉", name: "A majestic dragon" },
    { emoji: "🦢", name: "A graceful swan" },
    { emoji: "❤️", name: "All my love for you" },
    { emoji: "💝", name: "A gift wrapped with love" },
    { emoji: "💖", name: "Hearts full of love" },
    { emoji: "💕", name: "All my affection" },
    { emoji: "🍰", name: "Your favorite cake" },
    { emoji: "🍪", name: "Fresh baked cookies" },
    { emoji: "🍩", name: "Sweet donuts for you" },
    { emoji: "🍫", name: "Delicious chocolate" },
    { emoji: "🍓", name: "Fresh strawberries" },
    { emoji: "🍦", name: "Ice cream in your favorite flavor" },
    { emoji: "☄️", name: "A falling star just for you" },
    { emoji: "🌙", name: "A piece of the moon" },
    { emoji: "⭐", name: "A star from the sky" },
    { emoji: "✨", name: "All the sparkle and magic" },
    { emoji: "🎀", name: "A pretty pink bow" },
    { emoji: "🎁", name: "A surprise gift box" },
    { emoji: "👑", name: "A crown for my queen" },
    { emoji: "💎", name: "A sparkling diamond" },
    { emoji: "🌈", name: "A rainbow full of colors" },
    { emoji: "☁️", name: "A soft fluffy cloud" },
    { emoji: "🎪", name: "A magical carnival adventure" },
    { emoji: "🎨", name: "An art canvas for your creativity" },
    { emoji: "📚", name: "A stack of good books" },
    { emoji: "🎵", name: "Your favorite song on repeat" },
    { emoji: "🎸", name: "A beautiful guitar serenade" },
    { emoji: "🎭", name: "Front row seats to magic" },
    { emoji: "🌍", name: "The whole world on a platter" },
    { emoji: "🏰", name: "A magical castle" },
    { emoji: "🎢", name: "A thrilling adventure together" },
    { emoji: "🌟", name: "A wish upon a star" },
    { emoji: "💫", name: "All the dreams you have" },
    { emoji: "🔮", name: "A crystal ball showing your future" },
    { emoji: "🎯", name: "Endless possibilities" },
    { emoji: "🌸", name: "A garden of flowers" },
    { emoji: "🦋", name: "Butterflies that bring joy" },
    { emoji: "🎪", name: "Tickets to see your favorite artist" },
    { emoji: "🍝", name: "A romantic dinner for two" },
    { emoji: "☕", name: "Your favorite coffee or tea" },
    { emoji: "🎬", name: "A cozy movie night" },
    { emoji: "🎤", name: "A serenade just for you" },
    { emoji: "📱", name: "A photo album of us" },
    { emoji: "✈️", name: "A trip to your dream destination" },
    { emoji: "🏖️", name: "A beach day adventure" },
    { emoji: "🎿", name: "A mountain getaway" },
    { emoji: "🧩", name: "Adventures and new memories" },
    { emoji: "📸", name: "A moment frozen in time" }
];

const affirmations = [
    "You are worthy of love exactly as you are",
    "Your feelings matter and are valid",
    "You deserve to be happy and at peace",
    "You are stronger than you think",
    "You are capable of amazing things",
    "Your presence makes a difference",
    "You deserve kindness and compassion (especially from yourself)",
    "You are enough, right now, as you are",
    "Your dreams are worth pursuing",
    "You are beautiful inside and out",
    "You deserve to take up space",
    "Your voice deserves to be heard",
    "You are important and valued",
    "You can get through this",
    "You are growing and becoming stronger every day",
    "You radiate love and positivity",
    "Your potential is limitless",
    "You deserve all the good things coming to you",
    "You are braver than you believe",
    "You make a positive impact on those around you",
    "Your mental health matters",
    "You are not your mistakes",
    "You deserve rest and relaxation",
    "You are learning and growing every day",
    "Your sensitivity is a strength, not a weakness",
    "You deserve to be treated with respect",
    "You bring joy to others just by being yourself",
    "Your authenticity is your superpower",
    "You are allowed to change your mind",
    "You deserve to set boundaries",
    "You are worthy of success",
    "You don't have to be perfect to be loved",
    "Your story isn't over yet",
    "You are stronger than your obstacles",
    "You deserve kindness from yourself",
    "You are blooming in your own time",
    "Your worth is not determined by productivity",
    "You are allowed to ask for help",
    "You deserve to be happy",
    "You are resilient and resourceful",
    "Your dreams matter",
    "You are learning to love yourself more each day",
    "You are worthy of everything you desire",
    "You bring light to the darkest days",
    "You are enough as you are",
    "Your journey is valid and important",
    "You deserve to celebrate your wins",
    "I am proud of the person you are",
    "Your past does not define your future",
    "You are allowed to be proud of yourself",
    "You have so much to offer the world",
    "Your health and well-being are priorities",
    "You are a work of art in progress",
    "You deserve love unconditionally",
    "Your mistakes are opportunities to grow",
    "You are allowed to take care of yourself first",
    "You are capable of changing your life",
    "Your peace of mind matters",
    "You are worthy of respect and admiration",
    "You deserve all the support you need",
    "You are becoming the best version of yourself",
    "Your goals are achievable"
];

const breathingMessages = [
    "I'm here for you. You're safe. You're okay.",
    "Breathe. You've got this.",
    "You are stronger than this moment.",
    "This feeling is temporary.",
    "You are worthy of peace.",
    "Let your breath calm your mind.",
    "Every breath brings you closer to calm.",
    "You deserve to feel better.",
    "I believe in you.",
    "This will pass.",
    "You are safe right now.",
    "Your body knows how to heal.",
    "Be gentle with yourself.",
    "You are doing amazing.",
    "Breathe in courage, breathe out fear.",
    "Each breath is a fresh beginning.",
    "You are in control of your breath.",
    "Breathing is your superpower.",
    "You are calm and grounded.",
    "I'm right here with you.",
    "Your peace matters.",
    "You've overcome harder things.",
    "This moment is temporary.",
    "You deserve stillness.",
    "Breathe through it, you're okay.",
    "You are stronger than you know.",
    "This anxiety doesn't define you.",
    "You can do this, one breath at a time.",
    "Your mind is clearing with each breath.",
    "You are becoming more centered."
];

const jokes = [
    { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field! 🌾" },
    { setup: "What do you call a fake noodle?", punchline: "An impasta! 🍝" },
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything! 🔬" },
    { setup: "What did one ocean say to the other ocean?", punchline: "Nothing, they just waved! 🌊" },
    { setup: "Why did the cookie go to the doctor?", punchline: "Because it felt crumbly! 🍪" },
    { setup: "What do you call a sleeping bull?", punchline: "A bulldozer! 😴" },
    { setup: "Why did the coffee file a police report?", punchline: "It got mugged! ☕" },
    { setup: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus! 🇨🇭" },
    { setup: "Why did the tomato turn red?", punchline: "Because it saw the salad dressing! 🥗" },
    { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear! 🐻" },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up! 🥚" },
    { setup: "What did the ocean say to the beach?", punchline: "Nothing, it just kept waving! 👋" },
    { setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one! ⛳" },
    { setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese! 🧀" },
    { setup: "Why did the math book look sad?", punchline: "Because it had too many problems! 📚" },
    { setup: "What do you call a dinosaur that crashes his car?", punchline: "Tyrannosaurus Wrecks! 🦖" },
    { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts! 💀" },
    { setup: "What's orange and sounds like a parrot?", punchline: "A carrot! 🥕" },
    { setup: "Why did the chicken go to the séance?", punchline: "To talk to the other side! 🐔" },
    { setup: "What did the ocean do to the other ocean?", punchline: "It waved again! 🌊" },
    { setup: "How do you organize a space party?", punchline: "You planet! 🚀" },
    { setup: "Why did the scarecrow become a successful motivational speaker?", punchline: "He was outstanding in his field! 🎤" },
    { setup: "What do you call a pile of cats?", punchline: "A meow-ntain! 🐱" },
    { setup: "Why don't oysters share their pearls?", punchline: "Because they're shellfish! 🦪" },
    { setup: "What do you call a boomerang that doesn't come back?", punchline: "A stick! 🎯" },
    { setup: "Why did the toilet paper roll down the hill?", punchline: "To get to the bottom! 🧻" },
    { setup: "Why did the banana go to the doctor?", punchline: "Because it wasn't peeling well! 🍌" },
    { setup: "What do you call a fish wearing a bowtie?", punchline: "Sofishticated! 🐟" },
    { setup: "Why don't you ever see elephants hiding in trees?", punchline: "Because they're so good at it! 🐘" },
    { setup: "What do you call an alligator in a vest?", punchline: "An investigator! 🐊" },
    { setup: "Why did the cookie go to school?", punchline: "Because it wanted to get a little batter! 🍪" },
    { setup: "What's a computer's favorite snack?", punchline: "Microchips! 💻" },
    { setup: "Why did the picture go to jail?", punchline: "Because it was framed! 🖼️" },
    { setup: "What do you call a snowman in summer?", punchline: "A puddle! ☀️" },
    { setup: "Why don't eggs make jokes?", punchline: "They'd crack up! 🥚" },
    { setup: "What do you call a lazy kangaroo?", punchline: "Poached! 🦘" },
    { setup: "Why did the kid bring a ladder to school?", punchline: "Because he wanted to go to high school! 🪜" },
    { setup: "What's the difference between a pickle and a psychiatrist?", punchline: "One is a cucumber in vinegar, the other listens to your problems! 🥒" },
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything! ⚛️" },
    { setup: "What did the ocean say to the beach?", punchline: "Can I keep some memories? 🏖️" }
];

const fortunes = [
    "A smile is the best accessory you can wear, and you wear it beautifully 💕",
    "Your kindness will come back to you in ways you can't even imagine 🌟",
    "Today is the beginning of something wonderful for you ✨",
    "Someone is thinking of you and smiling right now 😊",
    "Your creativity will inspire someone today 🎨",
    "You are braver than you believe and stronger than you seem 💪",
    "Something amazing is heading your way 🌈",
    "Your laughter will light up someone's world today 😄",
    "You will do something kind today that matters more than you know 💚",
    "The best is yet to come for you 🎯",
    "You deserve all the happiness in the world 💝",
    "A wonderful surprise is waiting for you soon 🎁",
    "Your presence makes the world better 🌍",
    "Love and light surround you always 💫",
    "You will accomplish something you've been dreaming of 🚀",
    "Trust yourself - you're more capable than you know 🦋",
    "Every challenge you face is making you stronger 💎",
    "Your future is bright and full of possibilities 🌅",
    "You are exactly where you need to be right now ✨",
    "Good things are coming your way soon 🎉",
    "You have the power to create the life you want 👑",
    "Your potential is endless and beautiful 🌺",
    "Every day is a fresh start and a new beginning 🌱",
    "You are worthy of love, respect, and admiration 💖",
    "Your unique qualities make you special 🌟",
    "Follow your heart - it knows the way 💕",
    "You will achieve great things in your life 🏆",
    "Your kindness makes you beautiful 🌸",
    "Today brings opportunities you can't imagine 🎯",
    "You are stronger than any storm 🌊",
    "Your dreams are calling you forward 🌙",
    "Good fortune follows those with good hearts 💚",
    "You are destined for greatness 👑",
    "Life is about to get better and better 📈",
    "Your next chapter will be your best yet 📖",
    "You attract only good things into your life ✨",
    "Your influence on others is more powerful than you know 🌟",
    "You are loved more than you realize 💝",
    "Success is coming to you in unexpected ways 🚀",
    "Your voice matters and will be heard 🎤",
    "You are building a beautiful life for yourself 🏡",
    "Adventure and joy await you 🎢",
    "You will look back on these times with gratitude 🙏",
    "The universe believes in you, so believe in yourself 🌌",
    "Your story is just beginning ✨",
    "Everything happens for your highest good 🌈",
    "You are the author of your own destiny 📝",
    "Happiness is closer than you think 🌟",
    "Your best days are still ahead of you 🎆",
    "The world needs what you have to offer 💎",
    "Your moment of triumph is coming 👑",
    "Dream big - you have everything you need 🌠",
    "Every sunset brings a new sunrise 🌅",
    "You are creating magic with your presence 💫",
    "The best investment is in yourself ✨",
    "Your impact on the world is greater than you know 🌍",
    "Wonderful things are unfolding for you 🌸"
];

const crackBackMessages = [
    { emoji: "🔄", message: "Lifting you up and giving that back a little love 💪✨" },
    { emoji: "🔄", message: "Pop, pop - there goes that tension, one crack at a time 😌" },
    { emoji: "🔄", message: "Nothing says 'I love you' like a perfectly timed back crack 💕" },
    { emoji: "🔄", message: "Up in my arms where the magic happens 🫂✨" },
    { emoji: "🔄", message: "Ahh, that satisfying back alignment moment 😌💫" },
    { emoji: "🔄", message: "Picking you up is my favorite excuse to make your back feel better 💖" },
    { emoji: "🔄", message: "The sound of your back cracking is music to my ears 🎵💕" },
    { emoji: "🔄", message: "You deserve to feel loose and relaxed - here we go 🌟" },
    { emoji: "🔄", message: "Up, up, and away - and maybe a crack or two 😄💪" },
    { emoji: "🔄", message: "Being lifted high and feeling that relief - the best combo 💕🔄" },
    { emoji: "🔄", message: "This is what a perfect boyfriend moment looks like right here 💘" },
    { emoji: "🔄", message: "Bringing you up and that back relief along with it 🎉" },
    { emoji: "🔄", message: "You in my arms = instant comfort and adjustment magic ✨💕" },
    { emoji: "🔄", message: "Gentle lift, satisfying snap - your favorite thing 😌" },
    { emoji: "🔄", message: "Let's get that spine feeling grateful 🙏💚" },
    { emoji: "🔄", message: "The best hug is one that also cracks your back 🤗🔄" },
    { emoji: "🔄", message: "My favorite part of my day is lifting you and hearing that pop 💕" },
    { emoji: "🔄", message: "Chiropractor Kyle is in the house 😄" },
    { emoji: "🔄", message: "Time for some therapeutic goodness 🌟" },
    { emoji: "🔄", message: "Here comes that satisfying realignment 💫" },
    { emoji: "🔄", message: "Your favorite kind of therapy doesn't cost a thing 💖" },
    { emoji: "🔄", message: "Feeling the release of all that tension ✨" },
    { emoji: "🔄", message: "Love in action - literally 💪💕" },
    { emoji: "🔄", message: "My favorite way to show you I care 🫂" }
];

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const authScreen = document.getElementById('authScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const sadButton = document.getElementById('sadButton');
const backBtn = document.getElementById('backBtn');
const greetingElement = document.getElementById('greeting');
const authMessage = document.getElementById('authMessage');
const statsContainer = document.getElementById('statsContainer');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

const complimentBtn = document.getElementById('complimentBtn');
const cuddleBtn = document.getElementById('cuddleBtn');
const giftBtn = document.getElementById('giftBtn');
const affirmationBtn = document.getElementById('affirmationBtn');
const jokeBtn = document.getElementById('jokeBtn');
const breatheBtn = document.getElementById('breatheBtn');
const fortuneBtn = document.getElementById('fortuneBtn');
const crackBackBtn = document.getElementById('crackBackBtn');

// Love Meter Tracking
let loveLevel = 0;

// Track last shown items to avoid repeats
let lastComplimentIndex = -1;
let lastCuddleIndex = -1;
let lastGiftIndex = -1;
let lastAffirmationIndex = -1;
let lastJokeIndex = -1;
let lastBreathingMessageIndex = -1;
let lastFortuneIndex = -1;
let lastCrackBackIndex = -1;

// Helper function to get a random item that's different from the last one
function getRandomDifferent(array, lastIndex) {
    if (array.length <= 1) return { index: 0, item: array[0] };

    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * array.length);
    } while (newIndex === lastIndex);

    return { index: newIndex, item: array[newIndex] };
}

function updateLoveMeter() {
    loveLevel = Math.min(loveLevel + 20, 100);
    const loveMeterFill = document.getElementById('loveMeterFill');
    const loveMeterText = document.getElementById('loveMeterText');
    const overloadMessage = document.getElementById('overloadMessage');
    if (loveMeterFill) {
        loveMeterFill.style.width = loveLevel + '%';
        if (loveLevel === 100) {
            loveMeterFill.classList.add('overloaded');
        } else {
            loveMeterFill.classList.remove('overloaded');
        }
    }
    if (loveMeterText) {
        if (loveLevel === 100) {
            loveMeterText.textContent = 'Love Level: 1000%';
        } else {
            loveMeterText.textContent = 'Love Level: ' + loveLevel + '%';
        }
    }
    if (overloadMessage) {
        if (loveLevel === 100) {
            overloadMessage.classList.add('visible');
        } else {
            overloadMessage.classList.remove('visible');
        }
    }
}

// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('floatingHeartsContainer');
    if (!container) return;

    const hearts = ['🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '🏵️', '🌿', '🦋', '🐝', '🐞', '🦗', '🦆', '🦉', '🐦', '🐨', '🐼', '🐰', '🦊', '🦝', '🦌', '🦎', '🦜', '🦚', '🐢', '🐛', '🐿️', '🦭', '🦦', '🦛', '🦏', '🐘', '🦍', '🐵', '🦁', '🐯', '🦙', '🦒', '🐫', '🧸', '☁️', '🌙', '🌈', '🎀', '🎁'];

    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (10 + Math.random() * 5) + 's';
        container.appendChild(heart);
    }

    setInterval(() => {
        if (container.children.length < 15) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (10 + Math.random() * 5) + 's';
            container.appendChild(heart);
        }
    }, 3000);
}

// Confetti effect
function createConfetti(x, y) {
    const confettiPieces = ['🎉', '🌸', '🌺', '🎀', '🦋', '🌷', '🌹', '🌻', '🌼', '🐝', '🐞', '🦆', '🎁', '🌙', '🐨', '🐼', '🐰', '🦊', '🦝', '🦌', '🐢', '🦭'];

    for (let i = 0; i < 8; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'floating-heart-burst';
        confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';

        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 50;

        confetti.style.setProperty('--tx', tx + 'px');
        confetti.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}

// Initialize
function init() {
    let greetingIndex = 0;
    const randomGreeting = cuteGreetings[Math.floor(Math.random() * cuteGreetings.length)];
    greetingElement.textContent = randomGreeting;

    // Rotate greeting with calming fade animation every 8 seconds
    function cycleGreeting() {
        greetingIndex = (greetingIndex + 1) % cuteGreetings.length;
        greetingElement.textContent = cuteGreetings[greetingIndex];
    }

    cycleGreeting();
    setInterval(cycleGreeting, 8000);

    createFloatingHearts();

    sadButton.addEventListener('click', startAuthentication);
    backBtn.addEventListener('click', goBack);
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('.modal') === modal) {
            if (!e.target.closest('.modal-content') || e.target === modal) {
                closeModal();
            }
        }
    });

    complimentBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
        updateLoveMeter();
        showCompliment();
    });
    cuddleBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
        updateLoveMeter();
        showCuddle();
    });
    giftBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
        updateLoveMeter();
        showGift();
    });
    affirmationBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
        updateLoveMeter();
        showAffirmations();
    });
    jokeBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
        updateLoveMeter();
        showJoke();
    });
    breatheBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
        updateLoveMeter();
        showBreathingExercise();
    });
    fortuneBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
        updateLoveMeter();
        showFortune();
    });
    crackBackBtn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
        updateLoveMeter();
        showCrackBack();
    });
}

// Screen Management
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function goBack() {
    showScreen(welcomeScreen);
    closeModal();
}

// Authentication Sequence
function startAuthentication() {
    showScreen(authScreen);
    statsContainer.innerHTML = '';
    authMessage.textContent = 'Authenticating perfect boyfriend module…';

    setTimeout(() => {
        authMessage.textContent = 'Initializing…';
        loadStats();
    }, 2000);

    setTimeout(() => {
        showScreen(dashboardScreen);
    }, 6500);
}

function loadStats() {
    const shuffledStats = allStats.sort(() => Math.random() - 0.5);
    const selectedStats = shuffledStats.slice(0, 3);
    selectedStats.forEach((stat, index) => {
        setTimeout(() => {
            const statDiv = document.createElement('div');
            statDiv.className = 'stat-item';
            const value = typeof stat.value === 'number' ? stat.value + '%' : stat.value;
            statDiv.innerHTML = `${stat.emoji} ${stat.name}: ${value} ✅`;
            statsContainer.appendChild(statDiv);
        }, index * 600);
    });
}

// Modal Management
function closeModal() {
    modal.classList.remove('active');
}

function showModalContent(html) {
    modalBody.innerHTML = html;
    modal.classList.add('active');
}

// Dashboard Actions
function showCompliment() {
    const result = getRandomDifferent(compliments, lastComplimentIndex);
    lastComplimentIndex = result.index;
    showModalContent(`
        <h3 style="color: #d4407a; font-size: 1.3em; margin-bottom: 20px;">For you 💕</h3>
        <p class="compliment-text">"${result.item}"</p>
        <p style="color: #999; font-size: 0.9em; margin-top: 20px;">You deserve to hear this and so much more ✨</p>
    `);
}

function showCuddle() {
    const result = getRandomDifferent(cuddles, lastCuddleIndex);
    lastCuddleIndex = result.index;
    showModalContent(`
        <div class="cuddle-display">${result.item.emoji}</div>
        <p class="cuddle-text">${result.item.emoji} ${result.item.message}</p>
    `);
}

function showGift() {
    const result = getRandomDifferent(gifts, lastGiftIndex);
    lastGiftIndex = result.index;
    showModalContent(`
        <h3 style="color: #d4407a; margin-bottom: 20px;">A gift for you 💝</h3>
        <div class="gift-display">${result.item.emoji}</div>
        <p class="gift-text">${result.item.name}</p>
        <p style="color: #999; font-size: 0.9em; margin-top: 20px;">Because you deserve beautiful things 💕</p>
    `);
}

function showAffirmations() {
    const result = getRandomDifferent(affirmations, lastAffirmationIndex);
    lastAffirmationIndex = result.index;
    const shuffledAffirmations = affirmations.sort(() => Math.random() - 0.5).slice(0, 5);
    const affirmationHTML = shuffledAffirmations.map(aff => `
        <div class="affirmation-card">
            <p>✨ ${aff}</p>
        </div>
    `).join('');

    showModalContent(`
        <h3 style="color: #d4407a; margin-bottom: 20px;">Affirmations for you 💫</h3>
        <div class="affirmation-grid">
            ${affirmationHTML}
        </div>
    `);
}

function showJoke() {
    const result = getRandomDifferent(jokes, lastJokeIndex);
    lastJokeIndex = result.index;
    showModalContent(`
        <h3 style="color: #d4407a; margin-bottom: 20px;">A joke for you! 😄</h3>
        <p style="font-size: 1.2em; color: #333; margin-bottom: 20px; font-weight: 500;">${result.item.setup}</p>
        <p style="font-size: 1.1em; color: #ff6b9d; font-weight: 600;">${result.item.punchline}</p>
        <p style="color: #999; font-size: 0.9em; margin-top: 25px;">Hope that made you smile! 💕</p>
    `);
}

function showBreathingExercise() {
    const result = getRandomDifferent(breathingMessages, lastBreathingMessageIndex);
    lastBreathingMessageIndex = result.index;
    showModalContent(`
        <h3 style="color: #d4407a; margin-bottom: 10px;">Breathing Exercise 🧘</h3>
        <p style="color: #999; font-size: 0.95em; margin-bottom: 30px;">Take your time, there's no rush. Follow along at your own pace.</p>
        <div class="breathing-exercise">
            <div class="breath-circle" id="breathCircle">Breathe</div>
        </div>
        <div style="margin-top: 30px; text-align: left; color: #666; font-size: 0.9em; line-height: 1.8;">
            <p><strong>How it works:</strong></p>
            <p>1️⃣ Breathe in slowly for 4 counts</p>
            <p>2️⃣ Hold for 4 counts</p>
            <p>3️⃣ Breathe out slowly for 4 counts</p>
            <p style="margin-top: 15px; color: #ff6b9d; min-height: 24px; transition: color 1s ease-in-out;">💕 <span id="breathingMessage">I'm here for you. You're safe. You're okay.</span></p>
        </div>
    `);
    startBreathingAnimation();
}

function startBreathingAnimation() {
    const circle = document.getElementById('breathCircle');
    const messageElement = document.getElementById('breathingMessage');
    if (!circle) return;

    const sequence = [
        { text: 'Breathe In...', duration: 4000, scale: 1.3 },
        { text: 'Hold...', duration: 4000, scale: 1.3 },
        { text: 'Breathe Out...', duration: 4000, scale: 1 },
        { text: 'Hold...', duration: 4000, scale: 1 }
    ];

    let currentIndex = 0;
    let messageIndex = 0;

    function rotateMessage() {
        if (messageElement) {
            messageElement.textContent = breathingMessages[messageIndex % breathingMessages.length];
            messageIndex++;
        }
        setTimeout(rotateMessage, 8000);
    }

    function runCycle() {
        const step = sequence[currentIndex % sequence.length];
        circle.textContent = step.text;
        circle.style.transform = `scale(${step.scale})`;

        currentIndex++;
        setTimeout(runCycle, step.duration);
    }

    runCycle();
    rotateMessage();
}

function showFortune() {
    const result = getRandomDifferent(fortunes, lastFortuneIndex);
    lastFortuneIndex = result.index;
    showModalContent(`
        <h3 style="color: #d4407a; margin-bottom: 20px;">Your Fortune 🎴</h3>
        <div style="background: linear-gradient(135deg, #fff5f7 0%, #ffe4f0 100%); padding: 25px; border-radius: 15px; border-left: 4px solid #ff6b9d;">
            <p style="color: #333; font-size: 1.15em; line-height: 1.7; font-weight: 500;">"${result.item}"</p>
        </div>
        <p style="color: #999; font-size: 0.9em; margin-top: 20px;">✨ Believe in the magic within you</p>
    `);
}

function showCrackBack() {
    const result = getRandomDifferent(crackBackMessages, lastCrackBackIndex);
    lastCrackBackIndex = result.index;
    showModalContent(`
        <div class="crack-back-display">${result.item.emoji}</div>
        <p class="crack-back-text">${result.item.emoji} ${result.item.message}</p>
        <p style="color: #999; font-size: 0.9em; margin-top: 20px;">Ahhh, that's better 😌</p>
    `);
}

// Start the app
init();
