---
layout: default
title: Dialectics for new computer science
edition: 2017 and 2018
theme: red
---
<header>
<div class="art-meta" id="art-meta"><div class="container">
  <div class="row">
    <div class="col-sm-12">
      <h1 class="sdr">Papers from previous editions of Salon des Refusés</h1>
      <h1>{{ page.title }}</h1>
    </div>
  </div>
  <div class="row"><div class="col-md-6">
    <p>Salon des Refusés ("exhibition of rejects") was an 1863 exhibition of artworks rejected from
    the official Paris Salon. It displayed works by later famous modernists such as Édouard Manet,
    whose paintings were rejected by the conservative jury of the Paris Salon. We feel that a similar space 
    is needed to explore new ideas and new ways of doing programming research and computer science.</p>

    <p>Many interesting ideas about programming struggle to find space in the modern programming 
    language research community, often because they are difficult to evaluate using proofs, 
    measurements or controlled user studies. As a result, new ideas are often seen as "unscientific".</p>
    
  </div><div class="col-md-6">
    <p>To provide space for unorthodox thought provoking ideas, we take inspiration from literary
    criticism. Papers that provoked an interesting discussion or criticism among the program committee 
    members were presented together with an attributed critical review that presents an alternative
    position, develops additional context or summarizes discussion about the work.</p>

    <p>Below, you'll find the revised versions of papers from 2017 and 2018 with critical commentary. We hope both will
    encou&shy;rage you to find new ways of doing and thinking about computer science!</p>
  </div></div>
  <div class="row"><div class="col-sm-12">
    <p class="links">
      <a href="#2017"><i class="fa fa-arrow-circle-down"></i>Salon des Refusés 2017 papers</a><br />
      <a href="#2018"><i class="fa fa-arrow-circle-down"></i>Salon des Refusés 2018 papers</a>
    </p>          
  </div></div>
</div></div>

{% include header.html %}
</header>


<article id="article">

<section id="2017" style="margin-top:0px">
<div class="container">
<div class="row">
<div class="col-md-9" markdown="1">

# 2017 papers and critiques

## The nature of program code

Should we treat program code as a _text_ just like works of literature or as _blocks_ in 
visual programming languages? Does styling and formatting of program code let us express
something more about the program as in a stylized poem, or is it better to eliminate formatting
from our code altogether? The first two papers looks at different ways of thinking and
working with code. 

</div>
</div>
</div>
</section>

<div class="container outlines">
<div class="row">
<div class="col-md-6" markdown="1">

### [Programming is writing is programming](/salon/papers/2017/writing-is-programming-is-writing/paper)

> **Authors**: Felienne Hermans, Marlies Aldewereld<br />
> **Critique**: Tomas Petricek

#### [Paper abstract](/salon/papers/2017/writing-is-programming-is-writing/paper)
Writing and programming are often seen as different: writing a creative profession, 
programming a technical one. Below the surface however, there is one striking similarity.
This paper compares writing and programming and uncovers similarities between some of the steps 
of writing and programming workflows. We also observe differences, like the attention that 
writers spent on formatting and styling, and the opportunity for feedback in programming.

<p class="links"><a href="/salon/papers/2017/writing-is-programming-is-writing/paper"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

#### [Critique abstract](/salon/papers/2017/writing-is-programming-is-writing/critique)
The paper thus opens an interesting line of thought. What can we say by contrasting
programming with writing? At the surface, writing and programming are both about communicating 
an idea. Programming research often tries to distill such ideas to their core essence. Analogies 
with writing can help us understand the flaws and limitations of this approach. A summary of a 
novel on Wikipedia is not the same thing as the novel. Furthermore, writers often use styling 
and formatting to add a twist to an idea.

<p class="links"><a href="/salon/papers/2017/writing-is-programming-is-writing/critique"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>

</div>
<div class="col-md-6" markdown="1">


### [Code is not just text: Why our code editors are inadequate tools](/salon/papers/2017/code-is-not-just-text/paper)

> **Author**: Gregor Weber<br />
> **Critique**: Felienne Hermans

#### [Paper abstract](/salon/papers/2017/code-is-not-just-text/paper)
The most popular code editors treat code like any other form of text.
This leads to all kinds of problems, from syntax errors to code style 
inconsistencies. Alternative editors, namely visual programming languages, 
are available, but mostly in the form of educational tools and therefore 
have their own set of problems when used productively. But there might be 
a middle ground worth exploring, between the high productivity of traditional 
editors and the constrained interactivity of visual programming languages.

<p class="links"><a href="/salon/papers/2017/code-is-not-just-text/paper"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

#### [Critique abstract](/salon/papers/2017/code-is-not-just-text/critique)
This paper describes the current state of code editors, and how they could improve. I am 
super happy there is a paper about code editors, of course, since mu interest is in unconventional 
code editors, like Excel and Scratch. When reviewing this paper my attention is mostly drawn not 
to the described solution but to some of the assumptions the author is making. And that is not 
just because the solution is not there yet. There are some assumptions made in the paper that 
have not yet deserved enough attention.

<p class="links"><a href="/salon/papers/2017/code-is-not-just-text/critique"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>

</div>
</div>
</div>

<section style="margin-top:0px">
<div class="container">
<div class="row">
<div class="col-md-9" markdown="1">

## Philosophy of Programming

What is programming, how does it help us understand the world and what are the origins of software systems? The two papers in this section explore programming from a more philosophical perspective. The first paper looks at different ways in which programming, as a scientific tool, can help us understand the world and the second explores stories that we tell ourselves about software.

</div>
</div>
</div>
</section>

<div class="container outlines">
<div class="row">
<div class="col-md-6" markdown="1">

### [The Act of Programming in Science](/salon/papers/2017/revised/computer-programming-in-science.pdf)

> **Author**: Javier Burroni

#### [Paper abstract](/salon/papers/2017/revised/computer-programming-in-science.pdf)
Classically, computers have been used as knowledge discovery tools insofar as the result of executing a program provides useful insight. 
For instance, the solution of a differential equation may help us understand the natural world, the value of a parameter of a statistical model may help us understand the probabilistic structure of a domain, the variable assignment maximising an objective function may help to further business goals. 
A secondary class of knowledge discovery stems from the act of using a programming language. 
By modeling a domain computationally, the developer can discover new and interesting properties of that domain, and better convey those insights to others. 
The purpose of this work is twofold: First, we want to show that programming languages can help their users achieve knowledge discovery moments and, secondly, that this property is the least exploited feature of programming languages in the general science community. 
We want to outline a research program with the objective of making scientific programming more efficient in its ultimate goal of knowledge discovery.

<p class="links"><a href="/salon/papers/2017/revised/computer-programming-in-science.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

</div>
<div class="col-md-6" markdown="1">

### [From Software Creationism to Software Evolutionism](/salon/papers/2017/preprints/creationism.pdf)

> **Author**: François-René Rideau

#### [Paper abstract](/salon/papers/2017/preprints/creationism.pdf)
The lives we live are woven around the stories we tell. 
This is true of programmers as of all humans. 
Now the greatest of all stories are origin stories. 
In a first part, I will examine the origin stories of software, from simple tales of software creation to elaborate theories of software evolution. 
As I do, I will relate these stories to the tools they explain and the technological realities we bring about by following them. 
In a second part, I will conclude by reflecting on storytelling, on the progression of the above stories, and on what lies beyond. 
Stories are fun! And they subtly inform us. Let me tell you a good story...

<p class="links"><a href="/salon/papers/2017/preprints/creationism.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

</div>
</div>
</div>

<section style="margin-top:0px">
<div class="container">
<div class="row">
<div class="col-md-9" markdown="1">

## Emerging ideas for building systems

What will software development of the future look like? The papers in this section look at two novel trends in software engineering that go against the mainstream conventional ideas. First, what if errors were a good thing that help improve the software system as they happen? Second, what if databases did not store data, but only gave a view of the world?

</div>
</div>
</div>
</section>

<div class="container outlines">
<div class="row">
<div class="col-md-6" markdown="1">

### [Principles of Antifragile Software](/salon/papers/2017/revised/antifragile-software.pdf)

> **Author**: Martin Montperrus

#### [Paper abstract](/salon/papers/2017/revised/antifragile-software.pdf)
There are many software engineering concepts and techniques related to software errors. 
But is this enough? Have we already completely explored the software engineering noosphere with respect to errors and reliability? 
In this paper, I discuss an novel concept, called “software antifragility”, that is unconventional and has the capacity to improve the way we engineer errors and dependability in a disruptive manner. 
This paper first discusses the foundations of software antifragilty, from classical fault tolerance to the most recent advances on automatic software repair and fault injection in production. 
This paper then explores the relation between the antifragility of the development process and the antifragility of the resulting software product.

<p class="links"><a href="/salon/papers/2017/revised/antifragile-software.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

</div>
<div class="col-md-6" markdown="1">


### [A Certain Tendency of the Database Community](/salon/papers/2017/preprints/tendency.pdf)

> **Author**: Cristopher Meiklejohn
> **Critique**: Stephen Kell

#### [Paper abstract](/salon/papers/2017/preprints/tendency.pdf)
We posit that striving for distributed systems that provide “single system image” semantics is fundamentally flawed and at odds with how systems operate in the physical world. 
We realize the database as an optimization of this system: 
a required, essential optimization in practice that facilitates central data placement and ease of access to participants in a system. 
We motivate a new model of computation that is designed to address the problems of computation over “eventually consistent” information in a large-scale distributed system.

<p class="links"><a href="/salon/papers/2017/preprints/tendency.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

#### [Critique abstract](/salon/papers/2017/certain-tendency/critique)
This is a bold paper, backed by an expansive vision for what the world's
information systems could become.
However, it appears to be rushing too headlong for a particular target,
without properly surveying the complete territory of computer systems and their development.
It is in fact focused on "systems that have to go to very large scale" -- mentioned 
in the workshop presentation but not in the paper text.
My reaction is to ask: which systems are those?

<p class="links"><a href="/salon/papers/2017/certain-tendency/critique"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>

</div>
</div>
</div>

<section style="margin-top:0px">
<div class="container">
<div class="row">
<div class="col-md-9" markdown="1">

## Metaphors for new paradigms
The traditional view of software components sees them as objects that hide their inner functioning and expose a limited public interface. The papers in this section rethink this approach by looking at other metaphors for building systems. What would we gain by seeing software more as interlinked documents or as avatars that provide a working simulacrum of a part of a system.

</div>
</div>
</div>
</section>

<div class="container outlines">
<div class="row">
<div class="col-md-6" markdown="1">

### [What Can Software Learn from Hypermedia?](/salon/papers/2017/revised/what-can-software-learn-from-hypermedia.pdf)

> **Authors**: Philip Tchernavskij, Clemens Nylandsted Klokmose, Michel Beaudouin-Lafon

#### [Paper abstract](/salon/papers/2017/revised/what-can-software-learn-from-hypermedia.pdf)
Most of our interactions with the digital world are mediated by apps: desktop, web, or mobile applications. 
Apps impose artificial limitations on collaboration among users, distribution across devices, and the changing procedures that constantly occur in real work. 
These limitations are partially due to the engineering principles of encapsulation and program-data separation. 
By contrast, the field of hypermedia envisions collaboration, distribution and flexible practices as fundamental features of software. 
We discuss shareable dynamic media, an alternative model for software that unifies hypermedia and interactive systems, and Webstrates, an experimental implementation of that model. 
We give examples of patterns and challenges for software architecture that have emerged in our experimentation with Webstrates, and show that it subverts the principles of encapsulation and program-data separation.

<p class="links"><a href="/salon/papers/2017/revised/what-can-software-learn-from-hypermedia.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

</div>
<div class="col-md-6" markdown="1">

### [Tracing a Paradigm for Externalization: Avatars and the GPII Nexus](/salon/papers/2017/revised/externalization.pdf)

> **Authors**: Colin Clark, Antranig Basman <br />
> **Critique**: Philip Tchernavskij

#### [Paper abstract](/salon/papers/2017/revised/externalization.pdf)
We will situate the concept of an avatar (a working simulacrum of part of a system separated from it in space or time) with respect to traditional concepts of programming language and systems design. 
Whilst much theory and practice argues in favour of insulation (the creation of architectural boundaries prohibiting the leakage of information) we will find that many successful systems take a diametrically opposed approach. 
We name this family of systems as those based on externalised state transfer. 
Rather than hiding implementation details behind APIs, object interfaces or similar, these systems actively advertise their internal structure and its coordinates via data and metadata. 
Examples of these systems include RESTful web applications, MIDI devices, and the DWARF debugging file format. 
We discuss such systems and how we can purposefully design new systems embodying such virtues in a more distilled form.

<p class="links"><a href="/salon/papers/2017/revised/externalization.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

#### [Critique abstract](/salon/papers/2017/critiques/externalization/critique-externalization.html)
I find myself in violent agreement with Colin Clark and Antranig Basman. In this critique, I relate their paper to some Human-Computer Interaction (HCI) literature. HCI offers a tradition of studying computer-mediated human activity, and helps us build on the presented pattern. To illustrate this, I speculate on what sort of non-program artifacts avatars could beget. I also relate the concept of avatars to transclusion, as presented in our paper, What can software learn from hypermedia?. This paper is also instructive for HCI readers, in its ability to connect the means of programming with the ends of non-programmers. I conclude with some remarks on the research agenda that is implied therein.

<p class="links"><a href="/salon/papers/2017/critiques/externalization/critique-externalization.html"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>

</div>
</div>
</div>

<section id="2018" style="margin-top:0px">
<div class="container">
<div class="row">
<div class="col-md-9" markdown="1">

# 2018 papers and critiques

</div>
</div>
</div>
</section>

<div class="container outlines">
<div class="row">
<div class="col-md-6" markdown="1">

### [Lector in Codigo or The Role of the Reader](/salon/papers/2018/revised/lector-in-codigo.pdf)

> **Author**: Alvaro Videla<br />
> **Critique**: Luke Church

#### [Paper abstract](/salon/papers/2018/revised/lector-in-codigo.pdf)
In this article I want to explore the relation between the process of writing computer programs with that of writing literary works of fiction. 
I want to see what parallels can we trace from the ideas presented by Umberto Eco in Lector in Fabula and Six Walks in the Fictional Woods, with the way we write programs today.
The goal of this article is to ask–and try to answer–the following questions: 
what can we learn as programmers from literary theory? 
What ideas can we incorporate from that discipline into our day to day programming activities, so we write code that’s easier to understand for other humans (or our future selves)?

<p class="links"><a href="/salon/papers/2018/revised/lector-in-codigo.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

#### [Critique abstract](/salon/papers/2018/critiques/critique-lector-in-codigo.pdf)
In ‘Lector in Codigo’, Videla challenges us to write for people and computers simultaneously. I examine the implications of this chal- lenge.

<p class="links"><a href="/salon/papers/2018/critiques/critique-lector-in-codigo.pdf"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>

</div>
<div class="col-md-6" markdown="1">

### [Semprola: A Semiotic Programming Language](/salon/papers/2018/revised/semprola.pdf)

> **Author**: Oli Sharpe<br />
> **Critique**: Antranig Basman

#### [Paper abstract](/salon/papers/2018/revised/semprola.pdf)
Most people interested in developing new programming languages or programming environments are looking at how to improve the syntax and semantics of the program text or at tools that help make programmers more productive at crafting the program text. 
What we need is a more fundamental change to the conception of what a program is. 
This paper introduces a new, Semiotic Programming environment in which we program with signs in a context, rather than with symbols in a text file and where we treat dialogue rather than functions as the dominant organising principle of our code. 
All of the information held in this environment is managed in a distributed, semiotic graph that is organized into multiple ontological spaces. 
Taken together these enable our programs and data to have greater semantic depth.
Finally the paper gives a brief introduction to Semprola, a Semiotic Programming Language that can be used in this Semiotic Programming environment.

<p class="links"><a href="/salon/papers/2018/revised/semprola.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

#### [Critique abstract](/salon/papers/2018/critiques/critique-semprola.pdf)
We supply a critique of the paper Semprola: A Semiotic Programming Language, suggesting directions in which its work of bringing semiotics to programming can be refined, and supplying opinions on areas where it may be refounded.

<p class="links"><a href="/salon/papers/2018/critiques/critique-semprola.pdf"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>

</div>
</div>
<div class="row">
<div class="col-md-6" markdown="1">

### [Files as Directories: Some Thoughts on Accessing Structured Data Within Files](/salon/papers/2018/revised/files-as-directories.pdf)

> **Author**: Raphael Wimmer<br />
> **Critiques**: Philip Tchernavskij, Stephen Kell

#### [Paper abstract](/salon/papers/2018/revised/files-as-directories.pdf)
This is paper explores the concept of files as directories (FAD) as a unified interface to structured data within a  file by representing such a file as (virtual) directory and the structured data as subdirectories and subfiles.
Transparent conversion of files and their structured data into directory trees is to be handled by virtual filesystem providers. 
This allows for arbitrary applications and programming languages to read and write data within supported file types without the need to understand the file format - e.g., in order to modify pixel values within an image file, paragraphs in a text document, or settings in a configuration file.
Advantages of this approach compared to API-mediated file access might include better learnability, modularity, explorability, synchronous access, better integration of proprietary applications, and a few other nice features. 
While technical issues of the FAD concept have been discussed by developers in the past, no major operating system allows FAD at the moment. 
In this paper I present concept, advantages, limitations, and use cases of FAD.

<p class="links"><a href="/salon/papers/2018/revised/files-as-directories.pdf"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

#### [Critique 1 abstract](/salon/papers/2018/critiques/critique-files-as-directories-1.pdf)
In this critique of Files as Directories (FAD) by Raphael Wimmer, I argue that FAD as presented applies primarily to traditional programming tasks, consider FAD as a broader subversion of app-like software, and speculate about the hypothetical design space of FAD beyond programming.

<p class="links"><a href="/salon/papers/2018/critiques/critique-files-as-directories-1.pdf"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>

#### [Critique 2 abstract](/salon/papers/2018/critiques/critique-files-as-directories-2.pdf)
In this critique I argue that the motivations and direction of the ‘files as directories’ idea are sound, but the conceptual difficulties are considerable yet non-obvious, and are not limited to those identified by the author. I highlight a selection of concerns, including Unix’s latent pluralism, the blurred boundary between naming and computation in languages, and issues of bidirectionality, semantic diversity and support for economical migration.

<p class="links"><a href="/salon/papers/2018/critiques/critique-files-as-directories-2.pdf"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>

</div>
<div class="col-md-6" markdown="1">

### [An Anatomy of Interaction: Co-occurrences and Entanglements](/salon/papers/2018/revised/anatomy-of-interaction-authorversion.pdf)

> **Authors**: Antranig Basman, Philip Tchernavskij, Simon Bates, Michel Beaudouin-Lafon<br />
> **Critique**: Tomas Petricek

#### [Paper abstract](/salon/papers/2018/revised/anatomy-of-interaction-authorversion.pdf)
We present a new taxonomy for describing the conditions and implementation of interactions. 
Current mechanisms for embedding interaction in software promote a hard separation between the programmers who produce the software, and the communities who go on to use it. 
In order to support open ecologies of function and fabrication, where this separation is negotiated by communities of users and designers, we need to reconceive those mechanisms. 
We describe interaction in two phases: Co-occurrence, the prerequisite conditions for an interaction to take place; and entanglement, the temporary coupling and interplay between elements participating in the interaction. 
We then sketch a blueprint of a system where those phases and their adjacent mechanisms enable communities of users to build and use interactive software. 
There are many ways of conceiving this new design space, and we present three dominant metaphors which we have employed so far, based on chemical reactions, quantum physics and cooking. 
We exhibit different systems which we have implemented based on these metaphors, and sketch how future systems will further empower citizens to design and inhabit their own interactions, express ownership over them and share them with communities of interest.

<p class="links"><a href="/salon/papers/2018/revised/anatomy-of-interaction.pdf-authorversion"><i class="fa fa-arrow-circle-right"></i> Read the paper</a></p>

#### [Critique abstract](/salon/papers/2018/critiques/critique-anatomy-of-interaction.pdf)
The paper by Basman et al. suggests that we think about programming in terms of interaction rather than algorithms. 
This call needs to be interpreted in a broad sense – the idea of interaction is not just another programming abstraction, but different way of structuring our thinking about programming. 
This includes thinking about how users can interact with the software more generally, but also what are effective metaphorical ways of thinking about software.
In this critique, we review some of the core ideas presented by Basman et al. 
We consider what programming substrate might be used to implement the systems proposed by Basman et al. 
That is, systems that blur the boundaries between users and developers. 
We also review a number of systems that are technically similar to co-occurrences and entanglements and we reconsider them through the perspective of the research paradigm based on interaction.

<p class="links"><a href="/salon/papers/2018/critiques/critique-anatomy-of-interaction.pdf"><i class="fa fa-arrow-circle-right"></i> Read the critique</a></p>


</div>
</div>
</div>
