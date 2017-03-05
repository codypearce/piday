const questionsSrc = [
   {
       question: "When is Pi Day celebrated?",
       choices:  ["June 28", "October 14", "March 14", "December 25"],
       answer: 'March 14'
   },
   {
       question: "In what year did the U.S. House of Representatives first officially recognize Pi Day?",
       choices:  ["1988", "1995", "2009", "2013"],
       answer: '2009'
   },
   {
       question: "The birthday of which famous scientist falls on Pi Day?",
       choices:  ["Leonhard Euler", "Albert Einstein", "Isaac Newton", "Archimedes"],
       answer: 'Albert Einstein '
   },
   {
       question: "Where were the first known Pi Day celebrations held?",
       choices: ["The San Francisco Exploratorium" , "Caltech", "The Liberty Science Center", "M.I.T."],
       answer: 'The San Francisco Exploratorium'
   },
   {
       question: "Who organized the first known Pi Day celebrations?",
       choices:  ["Larry Shaw", "Larry Page", "Larry Wilmore", "Larry Bird"],
       answer: 'Larry Shaw'
   },
   {
       question: "When is Pi Approximation Day celebrated?",
       choices:  ["March 14", "July 14", "March 22", "July 22"],
       answer: 'July 22'
   },
   {
       question: "What is the circumference of a circle?",
       choices:  ["The distance across the widest part of the circle", "The linear distance around the circle", "The distance from the center of the circle to its edge", "The area of a square inscribed in the circle"],
       answer: 'The linear distance around the circle'
   },
   {
       question: "What is the diameter of a circle?",
       choices:  ["The distance across the widest part of the circle", "The linear distance around the circle", "The distance from the center of the circle to its edge", "The area of a square inscribed in the circle"],
       answer: 'The distance across the widest part of the circle'
   },
   {
       question: "Which of the following has not yet been proven?",
       choices:  ["Pi is an irrational number", "Pi is a mathematical constant", "Pi is a transcendental number", "Pi is a normal number"],
       answer: 'Pi is a normal number'
   },
   {
       question: "In what year was pi proven to be transcendental?",
       choices:  ["1751", "1882", "1917", "1949"],
       answer: '1882'
   },
   {
       question: "Which of the following is a rational number?",
       choices:  ["The ratio of an octagon's perimeter to its width", "The ratio of a square\'s perimeter to its width", "The ratio of a circle's circumference to its diameter", "The golden ratio"],
       answer: 'The ratio of a square\'s perimeter to its width'
   },
   {
       question: "Which of the following would give the best approximation for pi?",
       choices:  ["The ratio of a square's perimeter to its width", "The ratio of a pentagon's perimeter to its width", "The ratio of a hexagon's perimeter to its width", "The ratio of an octagon\'s perimeter to its width"],
       answer: 'The ratio of an octagon\'s perimeter to its width'
   },
   {
       question: "Pi is believed to be a normal number. Which of the following is true of normal numbers?",
       choices:  ["The digits of a normal number have a set pattern", "A normal number can be expressed in terms of a geometric figure", "No digit in a normal number occurs more frequently than any other digit", "A number that is absolutely normal might be normal in binary but not in base 10"],
       answer: 'No digit in a normal number occurs more frequently than any other digit'
   },
   {
       question: "Which approximation for pi is closest to that found in the Rhind Papyrus?",
       choices:  ["Pi = 3", "Pi = 3 1/7", "Pi = 3.14", "Pi = 3.1605"],
       answer: 'Pi = 3.1605'
   },
   {
       question: "Which approximation for pi is found in the Old Testament of the Bible?",
       choices:  ["Pi = 3", "Pi = 3 1/7", "Pi = 3.1605", "Pi = 3.14"],
       answer: 'Pi = 3'
   },
   {
       question: "Which mathematician used polygons with 24,576 sides to approximate pi?",
       choices:  ["Archimedes of Syracuse", "Zu Chongzhi", "François Viète", "Bryson of Heraclea "],
       answer: 'Zu Chongzhi'
   },
   {
       question: "Who is credited with popularizing the use of the greek letter pi to represent the ratio of the circumference of a circle to its diameter?",
       choices:  ["Leonhard Euler", "Ferdinand von Lindemann", "Johann Heinrich Lambert", "François Viète"],
       answer: 'Leonhard Euler'
   },
   {
       question: "As of 2016, what is the approximate record for digits of pi calculated?",
       choices:  ["About 130 million", "About 58 billion", "About 22 trillion", "About 382 trillion"],
       answer: 'About 22 trillion'
   },
   {
       question: "Which computer calculated 2,037 digits of pi in 1949?",
       choices:  ["Atanasoff–Berry Computer (ABC)", "Deep Blue", "Babbage Difference Engine", "Electronic Numerical Integrator and Calculator (ENIAC)"],
       answer: 'Electronic Numerical Integrator and Calculator (ENIAC)'
   },
   {
       question: "Which of the following is not a motivation for calculating pi to hundreds of digits?",
       choices:  ["Testing computers for bugs", "Providing evidence that pi is a normal number", "Allowing better precision for calculations involving pi", "Searching for differences between pi and other irrational numbers"],
       answer: 'Allowing better precision for calculations involving pi'
   },
   {
       question: "What is the basic step in most algorithms that calculate pi?",
       choices:  ["Solving for one piece of an infinitely long sum or product", "Performing a geometric manipulation to calculate a perimeter", "Checking all digits 0-9 to see which works best as the next digit of pi", "Drawing a circle and calculating its area"],
       answer: 'Solving for one piece of an infinitely long sum or product'
   },
   {
       question: "Who produced the first formula to represent a number as an infinitely long product?",
       choices:  ["Leonhard Euler", "Archimedes of Syracuse", "Zu Chongzhi", "François Viète"],
       answer: 'François Viète'
   },
   {
       question: "Which trigonometric function is involved in a Machin-like formula?",
       choices:  ["Arctangent", "Inverse sine", "Logarithm", "Cosine"],
       answer: 'Arctangent'
   },
   {
       question: "Which algorithm for calculating pi is most popular for world record calculations today?",
       choices:  ["Machin-like algorithms", "Chudnovsky algorithm", "BBP algorithm", "Archimedes algorithm"],
       answer: 'Chudnovsky algorithm'
   },
   {
       question: "Which computer program has been used for all world record calculations of pi since 2010?",
       choices:  ["PiFast", "ENIAC", "Python", "y-cruncher"],
       answer: 'y-cruncher '
   },
   {
       question: "What is a digit extraction formula?",
       choices:  ["A formula that can be broken apart and performed simultaneously by multiple computers", "A formula to calculate any digit of a number without calculating the preceding digits", "A formula that uses a different base to perform calculations of digits", "A formula that calculates digits using an infinitely long sum"],
       answer: 'A formula to calculate any digit of a number without calculating the preceding digits'
   },
   {
       question: "The BBP formula uses calculations performed in which base to calculate digits of pi?",
       choices:  ["Decimal (base-10)", "Hexadecimal (base-16)", "Binary (base-2)", "Octal (base-8)"],
       answer: 'Hexadecimal (base-16)'
   },
   {
       question: "What is piphilology?",
       choices:  ["The memorization and recitation of digits of pi", "The study of the mathematical properties of pi", "The creation of works of art inspired by pi", "The use of computer algorithms to calculate digits of pi"],
       answer: 'The memorization and recitation of digits of pi'
   },
   {
       question: "Which of the following sentences could be the opening line of a Pilish novel?",
       choices:  ["Riverrun, past Eve and Adam's, from swerve of shore to bend of bay", "The sun shone, having no alternative, on the nothing new", "Now I fall, a tired suburbian in liquid under the trees", "Stately, plump Buck Mulligan came from the stairhead"],
       answer: 'Now I fall, a tired suburbian in liquid under the trees'
   },
   {
       question: "Which of the following films does not contain a reference to pi?",
       choices:  ["Mission Impossible", "The Net", "Life of Pi", "Good Will Hunting"],
       answer: 'Good Will Hunting'
   },
   {
       question: "Who currently holds the official world record (as of 2015) for memorization of the digits of pi?",
       choices:  ["Rajveer Meena", "Srinivasa Ramanujan", "David Chudnovsky", "Peter Borwein"],
       answer: 'Rajveer Meena'
   },
   {
       question: "Which method of memorization seems to be the most effective tool in piphilology?",
       choices:  ["Pilish writing", "Associating digits with a song", "Method of Loci", "Memorizing digits in groups of ten or more"],
       answer: 'Method of Loci'
   },
   {
       question: "In what year did the Indiana state legislature vote on a bill to redefine the value of pi?",
       choices:  ["1852", "1897", "1916", "1943"],
       answer: '1897'
   },
   {
       question: "How does the constant tau (τ) relate to pi (π)?",
       choices:  ["τ = 2π", "τ = π/2", "τ = π+2", "τ = π^2"],
       answer: 'τ = 2π'
   },
   {
       question: "What was the original motivation for defining the radian?",
       choices:  ["The term “degree” is used in other areas of math and science, causing confusion", "Angles expressed in radians simplify calculations of arc length", "The number of degrees in a circle was too large of a number", "The number of degrees in a circle is a rational number"],
       answer: 'Angles expressed in radians simplify calculations of arc length'
   },
   {
       question: "Which of the following is an example of a Monte Carlo method for finding the value of pi?",
       choices:  ["Chudnovsky algorithm", "BBP formula", "y-cruncher", "Buffon\'s needle"],
       answer: 'Buffon\'s needle'
   },
   {
       question: "Which of the following mathematical constants does not appear in Euler\'s identity?",
       choices:  ["The golden ratio (φ)", "Euler\'s number (e)", "Pi (π)", "The imaginary unit (𝑖)"],
       answer: 'The golden ratio (φ)'
   },
   {
       question: "Why is the meandering ratio of a river, under ideal conditions, often equal to pi?",
       choices:  ["Tides are periodic, so they can be described using sine functions", "Erosion causes the river to form circular diversions from its original path", "The curvature of the earth follows a circular path", "Pi is involved in equations describing gravity"],
       answer: 'Erosion causes the river to form circular diversions from its original path'
   },
   {
       question: "Why does the formula for the electric field produced by a point charge contain pi?",
       choices:  ["The field is a wave, which is represented as a periodic function", "Electric charges are spherical, so the formula involves the volume of a sphere", "The electric field lines curve around the charge in a circular pattern", "The formula involves summing field lines over the surface area of a sphere"],
       answer: 'The formula involves summing field lines over the surface area of a sphere'
   },
   {
       question: "How many radians are in an angle that covers one quarter of a circle?",
       choices:  ["π/2", "π", "π/4", "2π"],
       answer: 'π/2'
   },
]

module.exports = questionsSrc;
