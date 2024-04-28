# React + Vite

# assessment-week6-cookieclicker

Notes added to Moodle & README.md

Week 6 Project: Build a Cookie Clicker in React

User Stories

🐿️ As a user, I want to be able to click the cookie and increment the counter
🐿️ As a user, I want to see the counter automatically increment using an interval timer
🐿️ As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes

REQUIREMENTS

🎯 Create state variables to store the current number of cookies and the cookies PerSecond value (useState)

    DONE

🎯 Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.

    DONE

🎯 Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

    DONE

🎯 Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

    DONE

STRECH GOALS

🏹 Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes

💭 You can load saved values from localStorage as the default value passed to the useState hook

const [cookies, setCookies] = useState(
parseInt(localStorage.getItem("cookies")) || 0 // parseInt converts the string from local storage to a number
);
const [cookiesPerSecond, setCookiesPerSecond] = useState(
parseInt(localStorage.getItem("cookiesPerSecond")) || 1
);

💭 The useEffect dependency array can be used to trigger a function to save the values to localStorage every time they change

// Store cookies and cookiesPerSecond to local storage
useEffect(() => {
localStorage.setItem("cookies", cookies.toString()); // local storage supports strings so we convert it to a string before saving it
localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());
}, [cookies, cookiesPerSecond]);

PLANNING

One page design to use same image as previous cookie clicker, add count and counter into a single header, have the buttons show the number of cookies required as a realtime figure.

What went really well and what could have gone better?

Not a lot went well this week, I wasn't feeling well at the start of the week so struggled with the early week lessons which had a knock on affect of my learning later in the week, I re-watched the videos but felt I was quite a bit behind.

I initially started with adding the upgrades into a seperate component but could't get this to work correct, so moved to add the buttons back into the CookieClick.jsx. I initially added individual buttons but decided to try to get this working with passing the array information in. I did though spent quite a lot of time trying to get the if statement to work together with the array.

I was pleased though I kept my App.jsx clean, in additon I was happy with how my buttons handled the data

Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

In addtion to rewatching the recordings I did use chatgps to help correct a few bugs, I also watched a couple of React how to videos.

Describing errors or bugs you encountered while completing your assignment.

I had problems getting the count to increase correclty over 1000 cookies per second.

I ended up running out of time to implement the local storage

https://assessment-week6-cookieclicker.vercel.app/ (LIVE)
https://github.com/nicklormanhall/assessment-week6-cookieclicker (Github)
