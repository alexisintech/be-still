# 🪐 Be Still

> Create beautiful stills with custom captions.

## [![Netlify Status](https://api.netlify.com/api/v1/badges/828dabd1-0840-4666-8891-52d6d97a68e8/deploy-status)](https://app.netlify.com/sites/be-still/deploys)

<img src="https://github.com/alexisintech/be-still/blob/main/public/imgs/be-still.gif" width="100%" />

<!-- FEATURES -->

## ⭐ Features

- Standard calculator functionality (addition, subtraction, division, multiplication) with floating point calculations supported
- Use the DEL button to delete an integer or clear the input field if there is a single integer
- Use the AC button to clear the input field
- Allows operation chaining until the equal (=) sign is clicked, setting the input field to be the final solution of the calculations
- Integer formatting: comma's are added to proper placement in larger integers, multiple zero's cannot be placed on an empty input field, numbers cannot be prefixed with zero's unnecessarily but can have zero's following a decimal

<!-- BUILT WITH -->

## 🛠️ Built With

- React.js, Webpack, Babel
- HTML5/CSS3, Javascript ES6
- ESlint, Stylelint
- VSCode

<!-- GET YOUR OWN COPY -->

## 🌠 Get your own copy running!

- Clone using your preferred method 
- `npm i` 
- `npm start`

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

<!-- ROADMAP -->

## 🌠 Roadmap

- [ X ] Input controlled by react (as user types, caption updates)
- [ ] Have an option to add random pre-written quotes onto picture
- [ ] Make photos downloadable with the caption on them (html-to-png, dom-to-png???)
- [ ] When a new photo is generated, the caption and input is cleared
- [ ] Create backend
- [ ] User authentication with profiles
- [ ] Save/bookmark photo+caption to profile (aside from being able to download them)

<!-- TEA SPILL -->

## 🌝 Tea Spill
Created this cute little project because I love how on pinterest, there are movie stills with poetic captions on them, and the captions aren't always quotes from the movies. I wanted an app where users can create these on their own: users can go through movie stills until they find the one they like, and then add whatever caption that they want - it even could be something silly and they could make memes. I tried playing with htmltopng and domtopng but I couldn't get it working. I also tried using useEffect() to add a fade-in/fade-out class so that when the user clicks on the "Generate new image" button, the images have a cool transition. I think I could use a library like animate.css for this transition, but I moved on to larger projects. I plan to revisit this as a fun side project.
