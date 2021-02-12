---
title: "What (the Hell) Is JAMstack?"
date: 2018-10-31T09:46:56-08:00
draft: false
summary: The "future of the internet" lies in blazing-fast static sites powered by client-side JavaScript, APIs, and Markup.
tag: Development
image: /img/jamstack-hero.webp
imageauthor: Jamstack
imageurl: "https://jamstack.org"
slug: "what-the-hell-is-jamstack"
---

It’s no secret that the internet is a world of rapid, and near-constant, evolution.

Over the past few years, one of the most recent major trends in web development has been the so-called “JAMstack,” a relatively new framework for creating static websites — or sites written in pure HTML and CSS.

Coined by the CEO of Netlify, Mathias Biilman, in a 2017 [speech](https://www.youtube.com/watch?v=IbNvjNtL1Oo) called “The Rise of the JAMstack,” the term refers to a modern development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

[![Mathias Biilman's 2017 speech](https://img.youtube.com/vi/uWTMEDEPw8c/0.jpg)](https://www.youtube.com/watch?v=uWTMEDEPw8c)

In this, it serves as an alternative to the once-prominent LAMP (Linux, Apache, MySQL, and PHP) and MEAN (MongoDB, Express.js, AngularJS, and Node.js) stacks — one that includes a number of additional advantages like security, speed, and SEO (or search-engine optimization) benefits.

It also represents a development framework that eschews the use of traditional CMS like WordPress, Joomla!, or Drupal and all of the difficulties associated with them.

In this blog post, I’ll be exploring some of the key features of the JAMstack, while also providing some insight into the new technologies that have emerged in response to this new framework.

## So, What Is JAMstack Exactly?

As stated above, the term “JAMstack” is a reference to the acronym JAM, which stands for JavaScript, APIs, and Markup.

Let’s begin by examining each of these terms in greater detail.

**JavaScript.** This basically refers to any form of client-side JavaScript, be it vanilla JS or a framework like React or AngularJS.

**APIs.** Application program interfaces (APIs) consist of all server-side processes and/or database commands that your application requires to function. These might include a payment processor like [Stripe](https://stripe.com), a communication platform like [Twilio](https://twilio.com) or [Sendbird](https://sendbird.com), or even a CMS like [Prismic](https://prismic.io).

**Markup.** Markup is templated and built upon deployment using a build tool like Grunt, or any one of the available static site generators (SSGs) on the market. More on this below.

This all sounds terribly complicated, doesn’t it? Actually, the concept behind JAMstack is pretty simple.

In his [overview](https://www.gridhaus.com/blog/jamstack-modern-web-architecture-in-digestible-terms) of the framework, En Lerk Law of Gridhaus provided the following useful analogy:

> "[A] traditional CMS is like a One-Man Food Truck. The owner handles all tasks in the kitchen by himself. He prepares the ingredients, cooks the food, and plates the dishes.”

By contrast, the JAMstack model operates much like a kitchen in which the tasks have been divided among multiple chefs. One is charged with food preparation, while the other cooks and another plates.

“The result is an efficient production line, with tighter quality control at each stage.”

## The Benefits of JAMstack

Now that you hopefully understand a bit more about what JAMstack is and how it works, let’s delve a bit deeper into the benefits of this approach.

### Security

This is a big one. By design, JAMstack sites are incredibly secure.

When users request a page from your static website, they just receive the HTML file for that page — it does not need to be built from various assets each time. Far fewer server interactions means less potential for attack, especially when compared to sites running on traditional CMS.

For example, according to [WP White Security](https://www.wpwhitesecurity.com/statistics-70-percent-wordpress-installations-vulnerable/), “[M]ore than 70% of WordPress installations are vulnerable to hacker attacks.”

In addition, a particularly severe SQL injection vulnerability led Drupal to [notify](https://blog.sucuri.net/2014/10/drupal-warns-every-drupal-7-website-was-compromised-unless-patched.html) its millions of users in 2014 that they “should proceed under the assumption that every Drupal 7 website was compromised.”

Scary stuff.

With no databases, PHP plug-ins, or dynamic software running on your web server, the potential for malicious code injections and other hacks is enormously reduced for static sites.

### Speed

The advantages of static websites in terms of speed can be astronomical.

With HTML generated in advance and database queries eliminated, your content can be served quickly from a global content delivery network (CDN) like [Cloudflare](https://www.cloudflare.com/) or [Fastly](https://www.fastly.com/).

This means that visitors to your website will have your site files served from whichever node happens to be closest to them. Clients in London, for example, will pull from a European server, rather than one out in California or the Philippines.

As a result, [writes](https://www.netlify.com/blog/2016/05/18/9-reasons-your-site-should-be-static/) blogger Aaron Autrand:

> “[A] normal static site hosted on a CDN is often 10 times faster time-to-first-byte than a site built with a legacy CMS.”

In addition, Biilman [tested](https://builtvisible.com/go-static-try-jamstack/) a previous build of _Smashing Magazine_ (which ran on WordPress at the time) against a static counterpart that he created and deployed on Netlify.

Biilman’s version loaded **six times faster** than the original!

So what does this mean for you, exactly?

Faster load times lead to reduced bounce rates, as visitors won’t be leaving your site due to slow loading times. This means more interactions, and ultimately, more conversions, as well.

### Search-Engine Optimization (SEO)

Search engines favor fast-loading websites — that much has been true for several years now.

Google [states](https://www.oncrawl.com/oncrawl-seo-thoughts/get-ready-speed-update-mobile/) that:

> “A search result for a resource having a short load time relative to resources having longer load times can be promoted in a presentation order, and search results for the resources having longer load times can be demoted.”

This means that search engines like Google determine SEO rankings (in part) by comparing your website relative to your competitors and attributes points based on speed. It is worth mentioning, however, that these engines also account for user location, devices, and network.

The marked benefits of static sites built on the JAMstack framework in terms of page loading speed can also dramatically improve your SEO score relative to your competitors’ scores, especially taking into account the fact that most of them are probably still running traditional CMS.

## How to Get Started

Alright, so I’ve managed to convince you that JAMstack is the way to go. But where to begin? With hundreds of static site generators currently on the market, and with more added each day, which is the best to get started with?

A good place to start is [StaticGen](https://www.staticgen.com/), which contains a list of many popular SSGS that can be arranged and filtered by language, template, license, and GitHub stars.

Below, I’ll quickly run through some of the most popular.

**Jekyll.** Built in Ruby, [Jekyll](https://jekyllrb.com) has histoically been one of the most popular SSGs, though it has since given way to some of its competitors (like Gatsby).

It was created in 2008 by GitHub co-founder Tom Preston-Werner and features close integration with [GitHub Pages](https://pages.github.com/), a hosting service that allows for quick deployment from a GitHub repository.

Often used for simple websites and blogs, Jekyll can easily be paired with cloud-based CMS like [CloudCannon](https://cloudcannon.com), [Forestry](https://forestry.io), or [Siteleaf](https:siteleaf.com), all of which enable content editors to modify site content without knowledge of code.

Popular websites built in Jekyll include [Bitcoin](https://bitcoin.org), [Sketch](https://sketch.com), the [UN World Statistics site](https://unstats.un.org), and the infamous [HealthCare.gov](https://healthcare.gov) (it wasn’t Jekyll’s fault!).

**Hugo.** [Hugo](https://gohugo.io) is another popular SSG built on Google's Go programming language.

An excellent choice for both blogs and documentation, Hugo is optimized for speed. One popular YouTube [video](https://www.youtube.com/watch?v=CdiDYZ51a2o) demonstrates Hugo creating 5,000 web pages in about six seconds!

It is also incredibly simple to use and update. As is the case with Jekyll, there are a large number of themes available of Hugo — most of them Git repositories.

The framework has more than 49 thousand stars on GitHub and is the driving force behind [1Password’s](https://support.1password.com) support page and [Let’s Encrypt](https://letsencrypt.org). (And also this website!)

**Gatsby.** Described as “a blazing fast modern site generator,” [Gatsby](http://gatsbyjs.org) is built in React, a popular front-end JavaScript library maintained by Facebook.

It’s a relative newcomer to the SSG, having been released in July 2017. However, it has grown tremendously over this short time span and is now extremely popular among the web development community.

While some of this is undoubtedly due to the popularity of React as a framework, much of it can also be ascribed to Gatsby’s stellar documentation and ease of use.

[StitchFix](https://stitchfix.com), [Braun](https://us.braun.com), [Figma](https://figma.com), and [Nike](https://nike.com) have all built their websites using Gatsby, which currently boasts more than 48 thousand GitHub stars.

So what do you think?

Have you used any of these static site generators before? If so, what has your experience been like?

If not, which of these are you looking forward to trying out in the future?
