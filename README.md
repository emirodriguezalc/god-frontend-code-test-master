# Volvo Cars (Global Online Digital)

## Front-end coding test (React) - Emilia Rodriguez Gimenez

### To run this project

Duplicate .env.local.example, rename it to .env.local, and set your port of choice

Run this command with your fav package manager

`launch`

## --- TASK ---

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- The project is bootstraped using [Next.js](https://nextjs.org/).
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you use our design system component library, [VCC-UI](https://vcc-ui.vercel.app/)
- If you add a filter bar on the top to filter cars by `bodyType`

## Doubts and comments

While reading the VCC-UI documentation, it seems that you are transitioning to something similar to Tailwind. That is great! I read [this article](https://vcc-ui.vercel.app/blog/2022-11-23-future-css) and loved the idea. I'm using Tailwind in my current job, and it has grown on me. However, I will stick to VCC-UI as it is a requirement for the test. I hope not to be mistaken. I converted the provided images and icon into next-gen formats to improve performance, going from 54kb for each jpg image to 24kb for the webp images.

I havent used React.FC because we are using react 17 and that brings some non optimal implicit behavior like automatically including children as a prop.

I have not prioritised unit testing because of time constraints and the usage of typescript. I have done unit tests for other applications that used vainilla react, with react testing library, jest, etc. What do you think about unit testing when using TS?

## #1

I do this because we already know that "Cars" are a set of data that does not change often and is also not very big, so it's more performant to get the data once and work with it. This way, we avoid unnecessary calls and re-renders. How do you do it in production?

## #2

I thought about getting it client-side to be able to store it in the browser (I implemented it with encryption and everything). But then, if I'm using Next.js and I don't need the data on other pages, maybe it's better to just fetch it server-side. How do you do it in production?

## #3

I saw that the production website images had a nice alt description, but also aria-hidden=true. Why was that?
I went with leaving the image with no aria hidden, and taking the alt description of the production website as a reference to write mine.
## #4

The LinkButtons component was being updated every time i hovered over the CarListItem component, so i decided to create AnimatedCarDetails to reduce the scope of the hover state as much as possible
I used react-transition because it was mentioned [here](https://vcc-ui.vercel.app/docs/animation) even tho i was not able to implement it as the documentation stated. I do think that i did something simple and clear. But there is a slight delay that could be improved using css instead of state.
I do feel like there is too much prop drilling, at least at this stage of the coding process. 

## #5

When working on the carousel's dots, I discovered potential unwanted behavior and fixed it by forcing the carousel to rerender when the cars changed. The rerender is a bit abrupt, so I would have implemented an animation to make it smoother if I had more time. My method of checking if the cars have changed is simple, there are probably better alternatives, such as hashing.

I looked up some hashing implementations, but I found them to be a bit overkill for the scope of this test. Do you use hashing in production?

The unwanted behavior can also be reproduced on the production site. Are we using the same [package](https://www.npmjs.com/package/pure-react-carousel)? While browsing online, I came across [this one](https://www.npmjs.com/package/@volvo-cars/carousel-component/v/0.0.4?activeTab=readme) and chose to work with pure-react-carousel in order to learn how to implement a package that could potentially be part of the current Volvo codebase.

Steps to reproduce the potential unwanted behavior on the production carousel:
1. Open the site on mobile -> *dot in position 1 of 6
2. Slide to car number 6 -> *dot in position 6 of 6
3. Change the filter to SUV, which has 4 cars -> *dot in position 4 of 4
4. Note how the last element of the carousel is displayed and how the last dot is set to active.
5. Change the filter to All, which has 6 cars -> *dot in position 4 of 6
6. Note how the 4th element of the carousel is displayed and how the 4th dot is set to active.

I think that this is misleading because:
(Steps 1 to 3)
The last car is an estate body type, so it does not make sense to show the last car of the SUVs when the user changes the filter. We might want to show the first car of the body type selected by the user.
(Step 5)
When the user changes the filter back, we show the 4th car of all cars, which would be the third car in the SUV's list, not the 4th one the user was looking at.

## #6

I was not able to align the styles of the filter to production because of time constraints. I got a bit undecisive when picking a navigation component from the library. Do you use Nav or TabNav?
It would be great to avoid updating the state on the filter to set one tab active, so the component would not be rerendered on each click.
## #7

This would be a nice way of fetching the data from a specific car to populate the page. The page styles are non existant but i introduced this feature to use a bit of react navigation and Dynamic routes.

## Suggestions for the production site

I noticed that a JPG is used in the hero as a background. Swapping it for WebP could improve performance.
