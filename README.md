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

Reading the VCC-UI documentation, it seems that you are transitioning from it, to something similar to tailwind.
That is great! I read [this article](https://vcc-ui.vercel.app/blog/2022-11-23-future-css) and loved the idea. Im using tailwind in my current job and it grew on me.
I will stick to VCC-UI, as it is a requirement for the test, i hope not to be mistaken.
I converted the provided images and icon into next gen formats to improve performance

## #1

I do this because we already know that "Cars" is a set of data that does not change often, and is also not very big
so its more performant to get the data once and work with it, this way we avoid unneccesary calls and rerenders.
How do you do it in production?

## #2

I thought about getting it Client side to be able to store it in the browser (I implemented it with encryption and everything)
But then, if im using NextJs and i dont need the data on other pages, maybe its better to just fetch it Server Side.
How do you do it in production?

## Suggestions for the production site

I saw that jpg is used in the hero as a background, webp is usually a pretty easy swap.
