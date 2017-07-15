---
layout: paper
title: 'Code is not just text: Why our code editors are inadequate tools'
paper-url: code-is-not-just-text
paper-abstract: |
  <p>The most popular code editors treat it like any other form of text. This leads to all kinds of 
  problems, from grave syntax errors to the seemingly superficial code style inconsistencies. 
  Alternative editors, namely visual programming languages, are available, but mostly in the form 
  of educational tools and therefor have their own set of problems when used productively. But there 
  might be a middle ground worth exploring, between the high productivity of traditional editors 
  and the constrained interactivity of visual programming languages.</p>
review-abstract: |
  <p>TBD</p>
paper-authors: Gregor Weber
review-authors: Felienne Hermans
---
<div class="row"><div class="col-md-9" markdown="1" style="padding-top:60px">

## 1. Introduction

</div></div>
<div class="row">
<div class="col-md-4" markdown="1">

Look at the numbers in Figure 1. What do all of these have in common? They're all text editors. 
"But wait, MyIDE can do many more things!", you say. And you're right. IntelliJ sure is [a](https://www.jetbrains.com/help/idea/2016.3/extract-variable.html#d2221246e272)[w](https://www.jetbrains.com/help/idea/2016.3/database-tool-window.html)[e](https://www.jetbrains.com/help/idea/2016.3/selecting-text-in-the-editor.html#d2004643e170)[s](https://www.jetbrains.com/help/idea/2016.3/finding-usages-in-project.html)[o](https://blog.jetbrains.com/idea/2014/03/postfix-completion/)[m](https://www.jetbrains.com/help/idea/2016.3/using-language-injections.htm)[e](https://www.jetbrains.com/help/idea/2016.3/viewing-diagram.html). But even when you're programming in your favorite IDE, you're still just manipulating text, despite all the fancy navigational and code completion features. So what's wrong with that?

> Do we want programmers in 2050 to still have to deal with missing semicolons?
>
> <p class="author">My friend Max Schumacher</p>

</div>
<div class="col-md-8" markdown="1">
<div class="figure" markdown="1" style="padding:0px 0px 0px 20px;margin-top:0px">

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
     ['Element', 'Density', { role: 'style' }],
     ['IntelliJ Family', 38.24, '1f77b4'],
     ['Notepad++', 29.64, 'aec7e8'],
     ['Visual Studio', 29.59, 'ff7f0e'],
     ['Sublime', 25.76, 'ffbb78'],
     ['Vim', 21.74, '2ca02c'],
     ['Eclipse', 18.85, '98df8a'],
     ['Atom', 10.40, 'd62728'],
     ['Xcode', 8.61, 'ff9896'],
     ['Visual Studio Code', 6.02, '9467bd'],
     ['Emacs', 4.34, 'c5b0d5'],
     ['IPython/Jupyter', 2.90, '8c564b'],
     ['Xamarin', 1.67, 'c49c94'],
     ['RStudio', 1.64, 'e377c2'],
    ]);      
    var options = {
      legend: { position: "none" },
      hAxis: { format: '#\'%\'', gridlines: { count: 10 } },
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(data, options);
  }
</script>
<div style="height:330px;overflow:hidden">
  <div id="chart" style="height:450px;margin:0px 20px 20px 20px;position:relative;top:-80px"></div>
</div>

**Figure 1.** Usage of Development Environments. I plotted it with data from the 
[Stack Overflow Developer Survey 2016](https://stackoverflow.com/research/developer-survey-2016). 
Keep in mind that people use many tools, hence the numbers add up to more than 100%.


</div>
</div></div>
<div class="row"><div class="col-md-9" markdown="1">


## 2. Editing code like text

In programming, we all start as noobs who have to fight Syntax Errors. The first programs people 
interact with tend to be Browsers, Search Engines, Messengers, Social Networks and not Code Editors. 
What makes the latter so very different is that while they also appear to accept free-text, they 
actually have hard syntactic rules about what input is accepted and throw errors at you for not 
following them. If you're lucky, you'll at least see the resulting errors in-line, but sometimes 
even the best parsers can't figure out where the error is located.

After surviving the first dozens of hours of syntactical failing, the grammatical rules of that 
language become ingrained in the programmer's mind and there are fewer and fewer syntax errors. 
These errors never fully disappear though, not even pros are immune to typos/slips and it doesn't 
require a LISP to get your braces wrong. Every time you use more than 4 consecutive braces you 
have to manually count, instead of quickly getting an accurate unconscious count from your brain 
(known as Subitizing (<a href="#refs">Mandler, 1982</a>). It might "only" be a daily nuisance for 
professional programmers, but for the novice having to learn an arcane syntax while also getting 
comfortable with computational thinking, might just be a fatal barrier.

And that's just the start of the daily absurdity of a programmer's life: [Tabs vs. 
Spaces](https://www.youtube.com/watch?v=SsoOG6ZeyUI)? Where to put my opening/closing braces? How 
do I order my imports? What should be the character limit per line? Do I space around my control 
statements? Should I use trailing commas? Even if you don't take part in these [bikeshedding](https://en.wikipedia.org/wiki/Law_of_triviality)
discussions, as a responsible coder you still have the extra mental load to take care to stay 
consistent with the project's code style.

Now I'm not saying that there aren't solutions to these problems. There is [EditorConfig](http://editorconfig.org) 
for consistent indentation. In the JavaScript world we have [ESLint](http://eslint.org/) to enforce 
all kind of code rules and based on it [StandardJS](http://standardjs.com/) emerged hoping to create 
a new code style standard. Both offer command line options to not only nag you about your 
inconsistent code but actually try to fix it. Just a few weeks ago [Prettier](https://github.com/jlongster/prettier) 
appeared which fixes by default and also takes care of breaking your lines. Fun fact: 
StandardJS and prettier code is not compatible by default. These problems were also attempted to 
be solved on a language level, most notoriously by Python which does away with blocks through 
braces and uses indentation for block scoping. While it voids bikeshedding in many cases, many 
others remain.

</div></div>
<div class="row">
<div class="col-md-6" markdown="1">

I can't help but think that we're just working around the fact that our editors are just manipulating 
text. Or as Einstein (maybe) said:

> A clever person solves a problem. A wise person avoids it.
>
> <p class="author">Attributed to Albert Einstein</p>

It seems rather ironic that a lot of non-bikeshedding discussion in programming is about clean 
separation of business logic and the user interface (also known as Model-View-?, see Figure 2) while
code itself is business logic and user interface in one. One quasi-bikeshedding prime example is 
the trailing comma. While the argument that with it CVS diffs look cleaner (<a href="#refs">Graf, 2016</a>) certainly holds, 
people find it understandably visually displeasing.

</div>
<div class="col-md-6" markdown="1">
<div class="figure" markdown="1" style="padding:0px 0px 0px 20px;margin-top:0px">

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">How to do MVC:<br>1. Take any three things, ANY<br>2. Call them Model, View and Controller<br>3. Draw some arrows between them<br><br>Done!</p>&mdash; Jan (@agento) <a href="https://twitter.com/agento/status/790856622860013568">October 25, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

**Figure 2.** Model-View-Controller

</div>
</div></div>
<div class="row"><div class="col-md-9" markdown="1">

## 3. Visual programming languages to the rescue! Or not...


</div></div>
<div class="row">
<div class="col-md-6" markdown="1">

Fortunately we also have so called "visual programming languages", that solve these and other 
problems. Specifically we shall look at the subcategory of tree-languages, which is a term I made 
up to differentiate them from visual languages like LabVIEW and others that model dataflow as a 
graph. These graph-languages definitely have their own raison d'être (pardon my French) but I'm 
not yet convinced they are appropriate for general purpose programming. 

Widely known and quite similar are MIT's Scratch, shown in Figure 3, (Resnick et al., 2009} and 
Google‘s Blockly (<a href="#refs">Fraser et al., 2013</a>), which transpiles to JavaScript, Python and other 
languages. They present all statements and expressions as blocks that can be linked together 
or nested. Different colors indicate different statement types, and they rely heavily on 
mouse interaction. Both are educational tools and not meant for production usage.
There are multiple things that make these language impractical for everyday coding tasks. 
I already casually mentioned the lack of keyboard support, but that might actually be the 
deciding reason why these tools aren't used more widely.

</div>
<div class="col-md-6" markdown="1">
<div class="figure" markdown="1" style="padding:0px 0px 0px 20px;margin-top:0px">

<a href="/papers/code-is-not-just-text/scratch.png"><img src="/papers/code-is-not-just-text/scratch.png" class="img-responsive"></a>

**Figure 3.** Scratch by MIT Media Lab

</div>
</div></div>
<div class="row"><div class="col-md-9" markdown="1">

Another choice that strikes me as unfortunate is that all of those visual programming languages are 
actually their own programming language, even though they could just as well be a structure editor 
over existing languages (thereby leveraging the ecosystem and allowing the editing of preexisting 
code). The strong separation from existing technologies plays into the binary perception of visual 
programming languages as just being a different paradigm, while in reality they are multiple 
different paradigms in one. This conflation makes it all too easy to reject it on the basis of 
interaction model alone. Even though their real value, and this is where I blaspheme, is in 
constraining what code we can write. There really should be no reason why we'd want total freedom 
in our code editors…

## 4. The reason we want total freedom

Code tends to change. Groups of statements are extracted into functions, expressions into variables 
and the other way around (also called inlining), Parameters are added, renamed, reordered, 
(statically) retyped and so on. Our editor needs to make these common tasks as frictionless as 
possible. And that's what current editors mostly succeed at. You want to add a new parameter 
at the first position? Just type the name and add a comma. You want to rename something? Select 
it and just type the new name (IDE bonus: use refactor to rename every occurrence).

There are a plethora of instances where this free interaction model enables the programmer to 
quickly achieve what is intended. But when adherence to a consistent code style is wanted, 
there is bound to be some blandness in the process of always getting it right.

## 5. The way forward
What I'm proposing is not a radically different way to write programs. If you're looking for that, 
look into Eve (among many others). I definitely think those approaches are paramount but they are 
also moonshots. The currently popular programming languages are proven to work and replacing a 
popular language takes decades. What I am proposing is to ease the interaction we have with 
these languages and this is what a constrained editor needs to get right to beat the current editors:

 - **Manage code style and syntax**
   Take away the user the opportunity to think about closing parentheses, indentation and other 
   syntax/code style. That also entails not allowing users to navigate through whitespaces, but 
   rather jump from statement to statement. Whitespaces do have one important role though, as 
   part of the documentary structure (Van De Venter, 2002}, which is splitting up code into 
   sections. This must still be possible, though maybe limited (e.g. not more than one blank line).
    
   _Stretch Goal:_ Given that the editor now shows a view over code (and not the code itself) 
   there are a range of new ways one can enhance the programming experience. From simple things 
   like auto-grouping and sorting of declarations/imports, to more advanced features like visually 
   inlining function implementations to facilitate cross-module editing.

 - **Common code transformations in just as many keystrokes or less**
   Though I'm thinking less of IDE features here, as building a refactoring system is rather complex.
   
   _Stretch Goal:_ Given the rich plugin API most editors have, it might also be possible to 
   build an editor as a plugin that leverages these existing features.

 - **Interop with existing codebases**
   Read existing files and save them without changing lines that the user didn't touch. The 
   aforementiond Prettier already does a good job with that.
   
   _Stretch Goal:_ Read the code style of the project (e.g. ESLint) and apply the style rules 
   to the lines changed by the user.

 - **Context-sensitive templates**
   IntelliJ's Live Templates actually have a setting for where in the code it is applicable (e.g. 
   Statements, Expressions, Comments, etc.). To take it a step further one could always show the 
   language constructs that can be used in the current context. This is a good moment to mention 
   Greenfoot ([Kölling, 2010](#refs)). It is probably the closest tool to what I'd 
   imagine, though it has some limits, namely it's own programming language (why oh why) and 
   some cases of unwieldy interaction compared to text based editors.

As a proof of concept I worked on a version of such a constrained editor but only for JSONs, a 
data format and a subset of JavaScript, so that I don't have to handle the entire complexity 
of the language while still demonstrating the upsides of the interaction model. 
It can be found on GitHub: [https://github.com/gregoor/syntactor](https://github.com/gregoor/syntactor).

</div></div>
<div class="row"><div class="col-sm-12" style="padding-top:15px"><h3>References<a name="refs"></a></h3></div></div>
<div class="row references"><div class="col-md-6 col-lg-5" markdown="1">

 - **Fraser, N. et al. (2013)**. Blockly: A visual programming editor. Retrieved from
   [https://code. google. com/p/blockly](https://code. google. com/p/blockly).
   
 - **Graf, N. (2016)**. Why you should enforce Dangling Commas for Multiline Statements. Medium.
   Retrieved from [https://medium.com/@nikgraf/d034c98e36f8](https://medium.com/@nikgraf/d034c98e36f8).

 - **Kölling, M. (2010)**. The greenfoot programming environment. ACM Transactions on Computing 
   Education (TOCE), 10(4), 14. Chicago	

</div><div class="col-md-6 col-lg-5" markdown="1">
   
 - **Mandler, G., & Shebo, B. J. (1982).** Subitizing: An analysis of its component processes. 
   Journal of Experimental Psychology: General, 111(1), 1.

 - **Resnick, M. et al. (2009)**. Scratch: programming for all. Communications of the ACM, 
   52(11), 60-67.

 - **Van De Vanter, M. L. (2002)**. The documentary structure of source code. Information and 
   Software Technology, 44(13), 767-782.

</div></div>
