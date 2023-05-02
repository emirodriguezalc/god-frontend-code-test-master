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

While reading the VCC-UI documentation, it seems that you are transitioning to something similar to Tailwind. That is great! I read [this article](https://vcc-ui.vercel.app/blog/2022-11-23-future-css) and loved the idea. I'm using Tailwind in my current job, and it has grown on me. However, I will stick to VCC-UI as it is a requirement for the test. I hope not to be mistaken. I converted the provided images and icon into next-gen formats to improve performance.

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

## Suggestions for the production site

I noticed that a JPG is used in the hero as a background. Swapping it for WebP could improve performance.
