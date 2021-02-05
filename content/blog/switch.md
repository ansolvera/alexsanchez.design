---
title: "Moving My Website from Webflow to Hugo"
date: 2021-02-05T09:46:56-08:00
draft: false
summary: Static-site generators seem to be all the rage lately. Here's why I decided to use one for my website.
tag: Development
image: /img/hugo-hero.webp
imageauthor: Hugo
imageurl: "https://gohugo.io"
slug: "moving-my-website-from-webflow-to-hugo"
---

It's no secret that I'm a huge fan of [Webflow](https://webflow.com).

In fact, I used the popular "no-code" tool to build and host the last iteration of this website. I used it for some freelance projects, as well, and my clients have all only ever had positive things to say about the service.

(Heck, I even wrote a [blog post](https://alexsanchez.design/blog/why-webflow-is-the-best-web-esign-tool-right-now) about how much I enjoyed using Webflow.)

But after two years of using Webflow for my personal portfolio website, I decided to make the switch to [Hugo](https://hugo.io), a popular static-site generator (SSG) that's powered by Google's [Go](https://golang.org) language and is often used to create blogs.

Billing itself as "[t]he world's fastest framework for building websites," Hugo can generate most websites within seconds,--at less than 1 millisecond per page.

Due in large part to its speed, Hugo has rapidly skyrocketed in popularity over the past few years.

The cloud-based hosting company Netlify began offering hosting for Hugo-built websites in 2015. And two years later, _Smashing Magazine_ [migrated](https://www.smashingmagazine.com/2019/05/switch-wordpress-hugo/) its entire website from [WordPress](https://wordpress.org) to Hugo.

And if it's good enough for _Smashing,_ I guess it's good enough for me, too.

***

Now, while I was scouring the internet for information about Hugo, I couldn't find very much written by people who had actually used the SSG for their own personal projects.

This was surprising, as Hugo boasts a fairly large community of users. (It's currently the second-most-popular SSG on [Jamstack.org](https://jamstack.org), with nearly 50 thousand GitHub stars.) 

So I wrote this blog post for those of you out there who might be in the same boat I was in--wondering if Hugo is the right fit for your next project.

Spoiler alert: It's pretty cool.

## Why Bother Switching in the First Place?

Alright, well ... if Webflow is so amazing, why switch?

To be clear, I loved (and still love) Webflow for the ease with which it allows me to visually create stunning, complex, and performant websites––complete with animations, CMS compatibility, and even eCommerce.

I'll definitely continue to use Webflow and recommend it to my fellow designers and clients. But there were a couple of factors that led me conclude that maybe it wasn't the _best_ solution for my new website.

First of all: I knew that I wanted to move my blog from [Medium](https://medium.com) and host it on my own personal website. I'm really opposed to Medium's strict paywall, and I'd rather use my content to drive traffic to my own website rather than to Medium.

To do this on a Webflow site would require working with [Webflow CMS,](https://webflow.com/cms) which I've never really enjoyed.

I've always found Webflow's process of working with dynamic content in general to be a bit quirky and not at all intuitive.

What's more: to actually make use of Webflow CMS I would have had to upgrade my hosting plan to Webflow's CMS plan, which currently [costs](https://webflow.com/pricing) $20 per month.

Granted, this isn't a _huge_ sum of money--but it's still quite expensive for hosting, especially when there are services like [GitHub Pages](https://pages.github.com), [Netlify](https://netlify.com), and [Digital Ocean](https://digitalocean.com) that offer **free** hosting for static websites.

So that was a no-brainer for me!

Second, I just wanted the freedom to play around with some of the tools and technologies I had read about but hadn't actually been able to use on a full-scale project--tools like [Tailwind CSS](https://tailwindcss.com) and [GSAP](https://https://greensock.com/gsap), for example.

(Both of which I got to use on this website!)

So I decided to go with an SSG. But that, of course, opened up another question: Why Hugo?

I wanted a solution that would allow me to easily work with Markdown files and one that had a fairly simple template language. 

(I usually write my blog posts in Markdown, anyway, so an ideal SSG would let me simply upload my .md files and then rebuild as necessary.)

This narrowed things down to [Jekyll](https://jekyllrb.com) and Hugo.

Ultimately, I went with the latter because I was able to find more up-to-date learning resources online. (There are a lot of helpful guides for Jekyll, too, but unfortunately most of them are several years old.)

## Making the Switch

Now the initial set-up was pretty straightforward, despite the fact that Hugo's official documentation ... leaves a bit to be desired.

I understand that it's an open-source project, but there were quite a few basic questions that I was unable to answer.

(For example: I'm still not entirely clear on the difference between Hugo's blocks and partials––aside from the fact that blocks seem to just be really big partials. But this seems like a basic concept that should have been clearly addressed in the docs.)

For the most part, however, Hugo is fairly simple and easy to understand. Users familiar with popular blogging platforms like Jekyll or WordPress should find little friction in adopting Hugo for their projects.

The Go templating is fairly straightforward, too, even for users (like me) who had never written a single line of Go code beforehand. Depending on your willingness to learn a bit of Go templating, you can make your project as simple or as complex as you want it to be.

Hugo even comes pre-loaded with a few useful internal templates for things like setting Open Graph metadata and adding Disqus comments to your website.

Aside from all that, you're just writing plain old HTML, CSS, JavaScript, and Markdown. This provides for a much easier and much more flexible develpment experience than you'll get with something like WordPress. (Or even Webflow, for that matter.)

## Some Final Thoughts

I've been using Hugo for the past couple of months now, and I've been loving it so far.

My website is now hosted on Netlify, which is set up to trigger automatic site rebuilds whenever I make a commit to my GitHub [repository](https://github.com/ansolvera/alexsanchez.design). And of course, Hugo builds are lightning-fast!

So I can write my posts in VSCode, push them to GitHub--and the rest just takes care of itself. 

I'm a big fan of things that make my workflow easier.

I'll be sure to update this post if anything changes. But as of right now, I'm really enjoying the experience of working with Hugo (and Netlify). I think this is the beginning of a beautiful friendship.
