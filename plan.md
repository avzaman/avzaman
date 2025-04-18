# Reorg Time!
### Files:
Most content pages must be php as im using "include" for reusable header footer.
* *img*
* * *blog*
* * * m-d-y-imgnum.png
* * gitHub.png
* * leetcode.png
* * linkedin.png
* * hero.png
* * securityplus.png
* * aplus.png
* * ccna.png
* *styles*
* * styles.css (default for site, mobile first design!)
* * blog.css
* *pages*
* * *blog*
* * * m-d-y.php
* * * m-d-y.php
* * * m-d-y.php
* * blogtemplate.php
* * header.html
* * footer.html
* * projects.php (later can implement fetching from github)
* * certifications.php
* * work.php
* * community.php (volunteer stuff and if I do talks or summ)
* plan.md
* index.php (landing page will be resume as a webpage)
* favicon.ico
* README.md

## Plan:
Include **header.html** at the top of every page, include **footer.html** at the bottom of every page. All files then should only include content between &lt;body&gt;&lt;/body&gt; tags.

Header will have hero, contact info and links to the different pages as well as home/resume/index.

**blog.php** is the complicated one. Loop over the blog posts and create a link to each file. Also grab the title (I haven't decided to put that in the name or in the content yet). Need blog classes for html tags so css can be specific.
Eventually there may be so many posts that I need to pagenate but for at least a year of biweekly posts I do not have to worry about that. *have fun with that one future Vince heh heh*

I think I just discovered a way to include html without php and can therefore keep netlify for now and worry about redploying when I do the cloud challenge: NVM this is C++ or summ
<!--#include file="pages/header.html" -->
<!--#include file="pages/footer.html" -->

**Alright** I concede, I really want to just have a header foot. Im gonna front load this. Im making this project in eleventy. Most of the initial steps and JS code are from chatgpt. But im leaving the elevnty documentation [link here](https://www.11ty.dev/) so I can learn this over the course of me running this site. Eventually will be cool to migrate this to AWS and actually know some javascript. Get my own domain name, do some lambda, heck yeah.

Just like with grabbing github projects eventually, I would like to also grab my leetcode solutions that I submit. I think it would be *cute*!