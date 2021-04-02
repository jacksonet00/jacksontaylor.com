---
title: Redesigning my website
dateCreated: '2021-04-01'
---

# Redesigning my website

Yesterday I decided to refresh the design of my personal website which was much needed. The previous version was using raw css and my own custom components... which sounds really cool, buttttt this was not an impressive design system. This was just me using raw css to create components on the fly with no idea what I was doing. So, I definitely wanted to use a design system for the new version.

## Choosing a ui library

I've used Material UI in the past and I've kind of been partial towards it, but ultimately I think they have more of a feel of like cheap internal app and not really an elegant design. I really like the design of Ant Design, but I think their components are more oriented towards people who have a lot of data/metrics to show. The other library I thought was nice was Grommet. The design isn't really my style, but I really like their providers and the cohesiveness of the entire system.

I ended up going with Chakra which pretty much nails the design and has a super elegant overall system. The hooks for break points make media query type css properties super easy to deal with.

## Layout of the site

For now I just wanted to get something looking decently nice. I figured the main thing I wanted to focus on was (1) learning the next framework and (2) learning to use Chakra UI. So for site layout I went with something very basic that I copied from my friend Isaiah's site (with permission of course). I think I'll switch this up soon, but I just wanted to get the UI responsive and everything.

I have really enjoyed how easy it is to get stuff working and responsively resizing with Chakra. They also abstract the context away from you really will with their provider, hooks, breakpoints, and theming. I really enjoyed using the library and I'm sure I'm not even using it to its full potential. I'll have to explore it a bit more.

## Implementing the blog

Once I got the site done I decided I kind of wanted to start a blog. Not anything serious or trying to gain something from it, I'm just putting my thoughts and what I'm learning about out there for anyone interested. Maybe some of this stuff I write can help someone out or you can notice something I'm doing stupidly and help me out ✌🏼

So it was actually really easy to go about doing this because of the way the next framework works. I just had to create a subdirectory of pages called `blog` with a file called `[slug].js` and this automatically gives me access to the `/blog/:slug` route for all my blog pages.

So I made a component there which I learned how to make from Ben Awad. Basically it reads all of the `.md` files in the `posts` directory and then it makes a route with each of the file titles and the markdown is rendered there. Really simple!

I found a library which parses a markdown string into html components, but I wanted to keep the Chakra aesthetic across my entire site. So, I created a config for the parser in my `constants.js` file which maps all of the atomic html components to Chakra components.

## Switching to static site

I already had my site deployed, but I think it was using client side rendering which is the default for next. Next.js can actually do client-side, server-side, or static sites or even a combo of the 3 depending on the page. I wanted to take advantage of the static option since my site doesn't require more than that.

Using a next command I was able to compile my entire site to static html, which is great for SEO and data usage.

## Deployment experience on Vercel

I deployed my site on Vercel, simply because it was free and easy to use. There may be something better, but for now this is great. I just had to specify my root directory and build scripts and now every time I push to master my site rebuilds and deploys.

Vercel was easy to use when I was using the default next settings and then it took very minor reconfiguration after I switched to SSG (Static Site Generation).

## Content management

I'm still not sure about the best strat for content management. Right now I'm just editing markdown in VS Code and pushing them to a folder to create blog posts, which I'm honestly fine with. It's the core data of the site which I feel like I could do more cleanly.

Right now there is just a single `data.js` file with an object which contains all the page text in oddly specific formats. I think there is definitely a better way to do this, I just need to look into what it is.

## Thoughts about the vibe/theme of the site

I want to communicate my personality through this site so I thought about how I could show some of those hippie vibes. For now I just added a nice and chill greeting. I also added a little yoga dude emoji to the footer in place of the made with love heart.

## Future plans

I was looking on Etsy yesterday and I found some really cute SVG art that I want to incorporate across the site. There were some house plant ones, yoga ones, and chakras all of which I thought would be cool and add a nice dynamic.

I'll probably start with incorporating those and then trying to make my own designs. I'll probably switch the layout design at this point as well and just make the entire design cohesive between the art and the ui.

## Conclusions

I'm having a lot of fun working on this and I also had fun just jotting down basically what I did in this blog post. I'll proabably continue to do this and just talk about what I'm learning in my projects or at school or on LeetCode or at my internship. Should be a good time, and hopefully I can send some good vibes out there through this.
