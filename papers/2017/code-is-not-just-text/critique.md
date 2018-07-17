---
layout: review
title: 'Review: Code is not just text'
paper-url: code-is-not-just-text
paper-abstract: |
  <p>The most popular code editors treat it like any other form of text. This leads to all kinds of 
  problems, from grave syntax errors to the seemingly superficial code style inconsistencies. 
  Alternative editors, namely visual programming languages, are available, but mostly in the form 
  of educational tools and therefor have their own set of problems when used productively. But there 
  might be a middle ground worth exploring, between the high productivity of traditional editors 
  and the constrained interactivity of visual programming languages.</p>
review-abstract: |
  <p>This paper describes the current state of code editors, and how they could improve. I am 
  super happy there is a paper about code editors, of course, since mu interest is in unconventional 
  code editors, like Excel and Scratch. When reviewing this paper my attention is mostly drawn not 
  to the described solution but to some of the assumptions the author is making. And that is not 
  just because the solution is not there yet. There are some assumptions made in the paper that 
  have not yet deserved enough attention.</p>
paper-authors: Gregor Weber
review-authors: Felienne Hermans
edition: 2017
theme: red
---

<div class="row"><div class="col-md-9" markdown="1" style="padding-top:60px">

## 1. Text is shit

One of the assumptions the author has is that text is bad and that there could be some visual thing that’s better. But it remains vague why that is and how a visual language would be better. One of the points the authors briefly mention is that a visual language is better, because it would not have any syntax errors. The author mentions that syntax errors can be annoying, especially for novices.

But how bad? Shouldn’t we first try to understand exactly how bad syntax errors are and why before we dive into a new solution? Here I would like to point out that there is quite some research into why syntax errors are so bad, which the authors have are missed. One of the reasons that syntax errors hamper programmers’s experience it that syntax errors break your flow, and there’s quite some research into programmers and their flow. For example when people go to email and then they come back to programming, it takes them an average of fifteen minutes to get back to work. There’s a very famous paper/blog post called “programmer interrupted” by Chris Parnin that really nicely explains this. I think that using similar tools you could measure syntax errors amd their effects from IDE interactions. I think there’s an opportunity there to get more meat on the bones of why text is shit. In general I am with you there, but we need to deepen our understanding of what is wrong with text. We could measure what type of syntax errors take the longest to fix, or, with a bit more tooling even what type of errors increase blood pressure the most!

{% include banner.html %}

## 2. Current block based systems are shit

The second assumption of the author is that addition to text is shit, current block based systems are also shit. You say that a programming environment like Scratch also is not good enough to fully satisfy the needs of professional programmers. And here I want to point out that in addition to Scratch which is mainly aimed at children, there is also Snap! which is a more grown-up version of Scratch that’s also used in university teaching. And there is a similar system called App Inventor that is actually used by people to make apps for Android so that is already closer to a real production language, entirely based on the paradigm of blocks so maybe there is something to it.

There are some reasons presenting in the paper against block-based languages, and one of those the things that makes it really shitty is that you need to move the mouse. This is true, sadly indeed Scratch and the other ones they don’t really have keyboard support. This (sadly) is true and is really annoying, and makes block-based languahes very inaccessible. I did some work with programming for blind people and this is of course something only relies on the mouse that is an issue for them, and people with other disabilities like muscle and joint problems.

I would just like to like you to know that Scratch is open source so if you want to spend time from building stuff you could also build keyboard support on top of an existing language. This really is not impossible because block-based languages are such that you you know what fits in a certain space so it wouldn’t even be that much effort to make keyboard integration.

But in addition to the issues with the mouse, there are other issues that the authors might not be aware of.

**Selecting blocks.** If you have a stack of blocks and I want to go copy two or three in the middle I have to take the whole stack of blocks out, copy it, take the two or three I want out, and drag the stack back. I can’t easily select a few blocks, and this selection and copying mechanism might being harder to fix than just the keyboard support.

**Not real programming.** Another issue with block-based languages, and there’s loads of research about that, is that kids already from a young age to see blocks as not real programming. If you give kids Python and give them blocks they say “meeeh blocks are not the real thing”. Of course we adults are doing this to them, I’m sure they didn’t imagine that Python is somehow more real than Scratch. But it is something that you have to take into account when working on blocks. If something does not feel real it might hamper adoption.

## 3. But they are also great!

But block-based languages have so many advantages too, that I feel are missing from the paper. I understand the authors need to go a bit deeper in what is there. If their proposal is to improve current systems or to create a whole new blocks-based language, then they really need to understand what is great about them.

**Not real programming.** One thing that super good about blocks is that they do not feel like real programming! This downside is also an upside. I work a lot with elementary school teachers, I teach them Scratch so that they can teach it to their students, but what happens is that some of them make little program in Scratch for their own usage. They create a lesson for the children to do. Not to teach them programming but to teach them math or history or whatever. Here is a whole Scratch studio ([Scratch, 2017](#refs)) filled with programs made by teachers!

These school teachers they would never make something in a text based language, because that too them is scary (even though I am convinced they could do it!) So the fact that something doesn’t look and feel real it’s also very powerful.

**Discoverability.** Another reason that I am so in love with Scratch is its discoverability. If you are new to Scratch you see all the blocks that are there!

</div>
<div class="col-sm-12 col-md-12 figure" markdown="1">

<a href="/salon/papers/2017/code-is-not-just-text/studio.png"><img src="/salon/papers/2017/code-is-not-just-text/studio.png" class="img-responsive" /></a>

**Figure 1.** Discoverability in Scratch 

</div></div>
<div class="row"><div class="col-lg-9" markdown="1">

No API documentation is needed, it is all there. And if you want to know what it a certain block does, you just double click it and executes right in front of your eyes! This discoverability is super super strong idea from block-based language. So I would love a block-based interface on top of Java or C or whatever because not only do I not have to memorize all operations, if I click a category of string operations I see everything and I have forgotten what it does I just click it and see an example!

## 4. How to measure if a tool is good?

A final point I was missing form the paper is how to actually measure or understand what is good and bad about a certain programming environment. The paper now feels like a simple list while there are so much more powerful tools to use.

I myself wrote a paper ([Hermans et al., 2009](#refs)) years ago on the success factors of domain specific languages, which contains a survey with an overall success factors like discoverability and learnability. And of course if you want to go a bit deeper there is also cognitive dimensions by Alan Blackwell ([Blackwell et al., 2003](#refs)). These dimensions are a great list of these of the type of things you want to look at if you’re evaluating the language or a user interface.

In short, I really like this paper but this post contains lots of ‘homework’ to look at, since a lot has already been done to understand text and blocks, both the updates and the downsides.
 
</div></div>
<div class="row"><div class="col-sm-12" style="padding-top:15px"><h3>References<a name="refs"></a></h3></div></div>
<div class="row references"><div class="col-md-6 col-lg-5" markdown="1">

 - **Blackwell, A, and Green, T. (2003)**. Notational systems–the cognitive dimensions of notations 
   framework. HCI models, theories, and frameworks: toward an interdisciplinary science. Morgan Kaufmann.

 - **Hermans, F., Pinzger, M., & Van Deursen, A. (2009)**. Domain-specific languages in practice: 
   A user study on the success factors. In International Conference on Model Driven Engineering 
   Languages and Systems (pp. 423-437). Springer, Berlin, Heidelberg.

 - **Scratch Studio (2017)**. Scratch voor leerkrachten. Available online at [http://scratch.mit.edu/studios/4192995](https://scratch.mit.edu/studios/4192995/)

</div></div>
