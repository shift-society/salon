---
layout: review
title: 'Review: Programming is Writing is Programming'
paper-url: writing-is-programming-is-writing
paper-abstract: |
  <p>Writing and programming are often seen as different: writing a creative profession, programming 
  a technical one. Below the surface however, there is one striking similarity: both writing and 
  programming can be described as the translation of a high-level idea into low level sentences 
  or statements. This paper compares writing and programming and uncovers similarities between 
  some of the steps commonly considered part of the writing and programming workflows, such as 
  information gathering and selection. We however also observe differences, like the attention that 
  writers spent on formatting and styling, and the opportunity for feedback that programmers have 
  by compiling and executing programs. We close the paper with a discussion of the impact of this 
  finding, including educational methods that programming could take from writing education.</p>
review-abstract: |
  <p>Programming has been linked to a wide range of activities including writing, cooking and bridge 
  engineering. Which analogies we pick depends more on what we want to say than on how suitable
  they are. The paper thus opens an interesting line of thought. What can we say by contrasting
  programming with writing? </p>
  <p>At the surface, writing and programming are both about communicating an idea. Programming research
  often tries to distill such ideas to their core essence. Analogies with writing can help us 
  understand the flaws and limitations of this approach. A summary of a novel on Wikipedia is 
  not the same thing as the novel. Furthermore, writers often use styling and formatting to add a 
  twist to an idea.</p>
paper-authors: Felienne Hermans, Marlies Aldewereld
review-authors: Tomas Petricek
---

<div class="row"><div class="col-md-9" markdown="1" style="padding-top:60px">

## 1. The role of analogies

Is programming like writing? In the past, programming has been linked to a wide range of 
activities including industrial engineering ([Randell, 1996](#refs)), craftsmanship ([McBreen, 2002](#refs)), art 
([Blackwell & Collins, 2005](#refs)) and even to planning a dinner:

> It's just like planning a dinner. You have to plan ahead and schedule everything so it's ready
> when you need it. Programming requires patience and the ability to handle detail. Women are 
> 'naturals' at computer programming.
>
> <p class="author">Grace Hopper, quoted in <br />The Computer Girls ([Mandell, 1967](#refs))</p>

Those examples show that analogies often tell us more about the goals of the author than the
answer to a question whether the analogy is fitting or not. The quote by Hopper was published in 
Cosmopolitan in order to attract women to computing (and help to address computing personnel 
crisis of 1960s). Analogies with engineering aim to make programming reproducible and programmers
easier to replace (Ensmenger 2012), while analogies with art often aim to provide space for more 
creative approach to programming.

Broadly speaking, the authors of _Programming is Writing is Programming_ draw two analogies between
the two subjects. The first analogy compares the process of writing with the process of 
programming. This lets us argue for (or against) a more structured approach to the two activites.
The second analogy looks at different ways of expressing the meaning of programs and written text.
The perspective of writing lets us consider _human comprehension_ of computer programs and 
various aspects that contribute to it. 

We agree with the authors that exploring the analogies between programming and writing lets
us learn new things about both. In the review, we aim to stretch some of the ideas presented
in the paper and complement the discussion. The main points of the review are:

 - **How formatting styling affect meaning.** In writing, the formatting and styling can play a 
   crucial role for the meaning of text; in programming many aspects of styling and formatting
   do not change the semantics of programs. In Section 2, we consider why this is a problem
   and how it could be addressed.   
   
 - **The essence of programs and text.** In programming, we often believe we can distill the
   meaning into a core (often mathematical) essence. As discussed in Section 3, the analogy 
   with writing provides a powerful angle for challenging this belief.
 
 - **Programming and writing process.** The authors explore parallels between the process of
   writing and the process of programming, but the analogy also lets us better explore whether
   there is (and should be) such a thing as typical writing and programming process. 
   We explore this theme in Section 4.

In summary, we believe that the analogy between writing and programming is an interesting one.
Perhaps not because it is a particularly fitting analogy, but certainly because it lets us ask
unusual questions and explore unexpected perspectives.

## 2. How formatting and styling affect the meaning

The authors of _Programming is Writing is Programming_ list styling and formatting among the
differences between writing and programming because they are not included among the typical
steps of programming process. However, programs are formatted and have a style. The interesting
difference is how style and formatting affects the meaning. In programming, style and formatting
is merely a help for programmer reading the code (which has a meaning irrespective of style and
formatting), while in writing, style and formatting can form a crucial part of the meaning of text.
We explore this difference in the following two sections.

### 2.1 Contrasting meaning with formatting

To start the discussion, consider two examples that both stretch the idea of formatting to 
the extreme. These may not be _typical_ uses of formatting, but they let us explore the power
that code or text formatting has. Figures 1 and 2 show a poem and computer program, respectively,
that use formatting for an unexpected effect.

</div></div>
<div class="row figure"><div class="col-lg-6" markdown="1">
<a href="atjde.png"><img src="/writing/atjde.png" style="height:530px;margin-bottom:10px" class="img-responsive" /></a>

**Figure 1.** A poem from Anticodes by Václav Havel ([Havel, 1964](#refs)); the text of the repeating line 
"Ať jde každý vlastní cestou!" can be translated to English as "Let everyone go their own way!"

</div><div class="col-lg-6 pi" markdown="1">
<style>.pi pre { font-size:8pt;font-weight:bold; margin-bottom:25px; min-height:525px; padding:10px; }
.pi pre code { overflow:scroll; overflow-wrap:normal; word-wrap:normal; white-space:pre; }</style>

```
                                                                        char
                                                            _3141592654[3141
          ],__3141[3141];_314159[31415],_3141[31415];main(){register char*
      _3_141,*_3_1415, *_3__1415; register int _314,_31415,__31415,*_31,
    _3_14159,__3_1415;*_3141592654=__31415=2,_3141592654[0][_3141592654
   -1]=1[__3141]=5;__3_1415=1;do{_3_14159=_314=0,__31415++;for( _31415
  =0;_31415<(3,14-4)*__31415;_31415++)_31415[_3141]=_314159[_31415]= -
1;_3141[*_314159=_3_14159]=_314;_3_141=_3141592654+__3_1415;_3_1415=
__3_1415    +__3141;for                 (_31415 = 3141-
           __3_1415  ;                  _31415;_31415--
           ,_3_141 ++,                  _3_1415++){_314
           +=_314<<2 ;                  _314<<=1;_314+=
          *_3_1415;_31                   =_314159+_314;
          if(!(*_31+1)                   )* _31 =_314 /
          __31415,_314                   [_3141]=_314 %
          __31415 ;* (                   _3__1415=_3_141
         )+= *_3_1415                     = *_31;while(*
         _3__1415 >=                      31415/3141 ) *
         _3__1415+= -                     10,(*--_3__1415
        )++;_314=_314                     [_3141]; if ( !
        _3_14159 && *                     _3_1415)_3_14159
        =1,__3_1415 =                     3141-_31415;}if(
        _314+(__31415                      >>1)>=__31415 )
        while ( ++ *                       _3_141==3141/314
       )*_3_141--=0                        ;}while(_3_14159
       ) ; { char *                        __3_14= "3.1415";
       write((3,1),                        (--*__3_14,__3_14
       ),(_3_14159                          ++,++_3_14159))+
      3.1415926; }                          for ( _31415 = 1;
     _31415<3141-                           1;_31415++)write(
    31415% 314-(                            3,14),_3141592654[
  _31415    ] +                            "0123456789","314"
  [ 3]+1)-_314;                            puts((*_3141592654=0
,_3141592654))                              ;_314= *"3.141592";}
```

**Figure 2.** Lievaart Roemer's Obfuscated C Code Contest program ([Roemer, 1989](#refs)). Despite the formatting 
(and variable naming) suggesting the number $\pi$, the program calculates and prints the value of $e$.

</div></div>
<div class="row"><div class="col-lg-9" markdown="1">

The two examples both rely on encoding two contrasting messages in different ways. In Havel's 
poem (Figure 1), the contrast is between what the text says and the visual representation. In 
Lievaart's program (Figure 2), the contrast is between what the program does and the formatting,
or (again) the visual representation.

In case of Havel's poem, both the text and the visual representation are a part of the poem's
meaning. As a human reader, you see both of the contrasting meanings that make the poem - first
the visual and later (especially as a non-Czech speaker) the written. However, in case of the 
program, the human reader has access to only one of the meanings (without laborious running of 
the program "in your mind"), while compiling and running the program strips away all the 
formatting and provides access only to the other meaning.

In case of the poem, both formatting and the text contribute to a single meaning that is formed
in reader's head. However, in case of the program, the text and formatting form two different 
meanings - one for the reader and one for the computer - that a careful human reader can then
reconcile after compiling and running the program.

### 2.2 Does styling matter for meaning

Like formatting, styling of text does not have direct programming equivalent in the steps of
the processes referenced in _Programming is Writing is Programming_. The authors suggest several
areas where programs can have a different _style_, including comments and variable names. Those
two examples are similar to formatting in that they are stripped out by a typical compiler 
(an exception from this rule are live coding systems - including Smalltalk - where names remain 
available at runtime).

The case of variable names is an interesting one. Considering the following two code snippets
that read user input, find an entity according to the input and print its name:

</div></div>
<div class="row"><div class="col-sm-6 col-lg-4" markdown="1">

```
let name = readInput()
let person = lookupEntity(name)
print(person.Name)
```

</div><div class="col-sm-6 col-lg-4" markdown="1">

```
let s = readInput()
let x = lookupEntity(s)
print(x.Name)
```

</div></div>
<div class="row"><div class="col-lg-9" markdown="1">

Following the authors of _Programming is Writing is Programming_, we can treat the different naming
of variables as different _styling_. As noted by the authors, better variable naming correlates 
with program comprehension and so such styling is important, especially when combined with the fact
common belief that code is read more often than it is written ([Martin, 2009](#refs)). However, just like 
formatting, such styling does not change the meaning of the program for compiler.

This suggest an interesting dichotomy. On the one hand, styling in the form of variable naming is 
important for practical programming. Indeed, most editors and commercial refactoring tools provide 
renaming of variables as one of the essential tools that help developers improve code quality.
On the other hand, much of programming language theory disregards (bound) variable names. Most
famously, consider the $\alpha$-conversion rule from $\lambda$-calculus:

> $\lambda x.e\rightarrow_\alpha \lambda y.e[x\leftarrow y]$ where $y \notin FV(e)$

The rule states that a bound variable can be renamed to any other name that is not
used elsewhere in the program. If we consider programs from the perspective of a programmer, 
together with their styling, the $\alpha$-conversion rule is clearly false.

Here, we again face the same problem as with formatting. What the human programmer sees is 
different from what the compiler or interpreter sees. 

### 2.3 Towards holistic treatment of programs

The authors consider running the program as an additional step that does not have a direct 
equivalent among the steps that comprise writing. As our discussion of formatting and styling
suggests, running a program and reading a program represent two (different) ways of engaging with
the (final) result. We also uncovered the inconsistency between the two. This is not just a 
curious philosophical observation, but an important problem for the practice of programming.

The discordance means that we easily discard one or the other meaning. This is why we formally
reason only about the computer-view of program meaning and admit rules such as 
$\alpha$-conversion; this is also why we worry about tabs and spaces or the number of lines.
No doubt, both of these make sense in their partial context - if we consider only program 
compilation than $\alpha$-conversion is a sensible rule. As noted earlier, reading code is 
often regarded as more common activity than compilation, so perhaps this is not the important
context that we should be looking at.

Formatting and styling raises an interesting question - would it be possible to design programming 
languages or reasoning methods that close the gap between reading and running and
allows the human reader and the compiler to "see" the same thing? Could variable names matter
so that the $\alpha$-conversion rule does not hold just like it does not hold in the real life?
Could formatting contribute to the meaning of program, beyond just specifying the nesting structure 
of code blocks (as in whitespace-sensitive languages)? We leave those questions open, but applaud
the authors of _Programming is Writing is Programming_ for providing a perspective that allows
us to ask them.
    
## 3. The essence of text and programs

In the previous section, we referred to the _meaning_ of text and of programs. Intuitively, both 
text and program aim to convey some idea (be it to the human reader or to instruct a computer).
However, what exactly is this meaning and how does the notion of _meaning_ differ between text and
programs? To frame the discussion, consider the following two excerpts from Samuel Beckett's
_Waiting for Godot_ and a Wikipedia page about it.

</div></div>
<div class="row"><div class="col-md-6 godot1" markdown="1">

<div class="figure" style="margin:0px 0px 20px 0px" markdown="1">

**Figure 3.** Description of _Waiting for Godot_ from Wikipedia ([Wikipedia, 2017](#refs)) including the first 
introductory sentence and a quotation from the _Plot_ section.

</div>

Waiting for Godot is a play by Samuel Beckett, in which two characters, Vladimir and Estragon, 
wait for the arrival of someone named Godot who never arrives, and while waiting they engage in 
a variety of discussions and encounter three other characters.

(...)

When Estragon suddenly decides to leave, Vladimir reminds him that they must stay and wait for an 
unspecified person called Godot - a segment of dialogue that repeats often. Unfortunately, the pair 
cannot agree on where or when they are expected to meet with this Godot. They only know to wait 
at a tree, and there is indeed a leafless one nearby.

(...)

Eventually, Estragon dozes off and Vladimir rouses him but then stops him before he can share his 
dreams - another recurring activity between the two men. Estragon wants to hear an old joke, 
which Vladimir cannot finish without going off to urinate, since every time he starts laughing, 
a kidney ailment flares up. Upon Vladimir's return, the increasingly jaded Estragon suggests that 
they hang themselves, but they abandon the idea when the logistics seem ineffective. They then 
speculate on the potential rewards of continuing to wait for Godot, but can come to no 
definite conclusions. When Estragon declares his hunger, Vladimir provides a carrot (among a 
collection of turnips), at which Estragon idly gnaws, loudly reiterating his boredom.

</div><div class="col-md-6 godot2" markdown="1">

<div class="figure" style="margin:0px 0px 20px 0px" markdown="1">

**Figure 4.** A section from the Act I of play _Waiting for Godot_ ([Beckett, 1953](#refs))
with scene remarks edited for brevity.

</div>
<style>.godot1, .godot2 { padding-top:20px; padding-bottom:0px; } 
.godot1 p { font-style:italic; } .godot2 p { margin:0px 0px 5px 0px; font-size:13pt; }
@media only screen and (min-width : 992px) { .godot1 p { margin-right:20px; } }
@media only screen and (max-width : 992px) { .godot1 p, .godot2 p { margin-left:30px; } 
  .godot1 .figure p, .godot2 .figure p { margin-left:0px; } }
</style>

**Vladimir**: Listen!

**Estragon**: I hear nothing.

**Vladimir**: Hsst! (...) Nor I.

**Estragon**: You gave me a fright.

**Vladimir**: I thought it was he.

**Estragon**: Who?

**Vladimir**: Godot.

**Estragon**: Pah! The wind in the reeds.

**Vladimir**: I could have sworn I heard shouts.

**Estragon**: And why would he shout?

**Vladimir**: At his horse.

**Estragon**: I'm hungry!

**Vladimir**: Do you want a carrot?

**Estragon**: Is that all there is?

**Vladimir**: I might have some turnips.

**Estragon**: Give me a carrot. (...) It's a turnip!

**Vladimir**: Oh pardon! I could have sworn it was a carrot. (...) All that's turnips. (...) You must have eaten the last. (...) Wait, I have it. (...) There, dear fellow. 
(...) Make it last, that's the end of them.

**Estragon**: I asked you a question.

**Vladimir**: Ah.

**Estragon**: Did you reply?

**Vladimir**: How's the carrot?

**Estragon**: It's a carrot.

</div></div>
<div class="row"><div class="col-lg-9" markdown="1">

### 3.1 The plot and the meaning of text

The Wikipedia summary tells us what events are happening in the play. It does so efficiently, yet 
nobody will mistake reading such a description with reading (or seeing) the play itself. In other 
words, while we can provide an outline or a summary of a text, we fully recognize that this is
not the text itself. We can also analyze the text and look for philosophical, social or political
interpretations. Those may contribute to how we read the text, but again, nobody will say that they
are _the_ meaning of the text.

In contrast, when talking about programs, it is easy to believe that there is an ideal, most 
elegant, way of expressing the meaning of a given program. The actual program is not as elegant, 
perhaps because we did not have a full specification or because of other practical concerns.
Just like text, the program code in its full complexity often reveals something important that
can be easily missed if we try to find a more succinct way of expressing its "meaning".

Drawing an analogy between programming and writing reminds us about the complexity of the 
primary text and provides a useful counterbalance to the more common analogy with mathematics.
The idea that mathematical objects have an ideal form is commonplace, as illustrated, for example,
by Paul Erdős' idea of "The Book" in which God keeps the most elegant proof of each mathematical 
theorem ([Aigner et al., 2010](#refs)).

### 3.2 Code as the primary meaning

The main lesson from the discussion in the previous section is that we might want to treat the 
actual source code of a program (or a software system) as the primary meaning. Just like with 
written text, we can analyze it and interpret it, but such interpretations are merely 
interpretations. There is no idealized _essence_ that captures the meaning, leaving nothing out.

How can we best understand the meaning of code if we treat it as text? We often focus on what 
happens when we run a program, but this explores only a narrow aspect of its meaning. Even with 
unit tests and 100% test coverage, we are missing important aspects of code. Rather than running 
code, we should write code for reading.

Interestingly, this is not a new idea. The report on Algol published in 1960 presents Algol in
several forms including a _Publication language_:

> 1. The publication language admits variations of the reference language according to usage
>    of printing and handwriting (e.g., subscripts, spaces, exponents, Greek letters).
> 2. It is used for stating and communicating processes.
> 3. The characters to be used may be different in different countries, but univocal 
>    correspondence with reference representation must be secured.
>
> <p class="author" style="margin-top:10px">Report on the Algorithmic<br />Language ALGOL ([Naur et al., 1963](#refs))</p>

Should we design more publication languages and write programs just so that they can be read?
This is not a practical suggestion, but it would help us communicate ideas about modern 
programs and perhaps also explore different ways of expressing programs. Writing 
a compiler is hard work and it makes experimentation with programming languages quite expensive.
What if we free ourselves from the tyranny of execution and write programs just for reading?
A publication language (like the one of Algol) may be good enough to asses what way of expressing 
programs would provide tangible benefits if the language was actually implemented!

## 4. Programming and writing process

The _Programming is Writing is Programming_ paper builds an analogy between programming and writing 
by referring to two prior papers that define typical process of the two disciplines consisting of 
seven steps. The authors approach the problem from one possible direction, which is to take those
lists as granted and search for relationships between the two. We explore another
direction, which is to consider the role of such rules and processes in the two disciplines. 
Can inadequacies of one of the process teach us about the other process?

### 4.1 Questioning the rules for good writing

In both writing and programming, people often try to capture the structure of a good process and
divide it into clear steps. To aid writing and programming, people similarly try to identify 
common patterns or rules worth following. The idea is that such steps or rules will help students
who are new to the discipline. Yet, not everyone agrees - the fictional teacher from Pirsig's 
Zen and the Art of Motorcycle Maintenance reflects on his experience teaching good writing rules
to his students:

> It seemed as though every rule he honestly tried to discover with [his students] and learn with 
> them was so full of expectations and contradictions and qualifications and confusions that he 
> wished he'd never come across the rule in the first place. (...) [T]he rule was pasted on to 
> the writing after the writing was all done. It was post hoc, after the fact, instead of 
> prior to the fact.
>
> And he became convinced that all the writers the students were supposed to 
> mimic wrote without rules, putting down whatever sounded right, then going 
> back to see if it still sounded right and changing it if it didn’t.
>
> <p class="author">Robert Pirsig, Zen and the Art of<br /> Motorcycle Maintenance ([Pirsig, 1999](#refs))</p>

In other words, we can look at the process that led to a great work and identify its steps.
However, can we produce equally great works by following the same steps in another context or
with a different story in mind? Pirsig suggests that this is not the case in literature. 
We might question the analogy between writing and programming at this point, because writing
is a highly creative process that aims to produce works of art. 

As for programming, many people see programming more as engineering. This view dates back to the
1968 NATO Conference on Software Engineering that set the agenda for turning programming into an
engineering discipline where results can be reliably and predictably produced and programmers are
a part of the machinery and can easily be replaced (Ensmenger 2012). This goal became a part of the 
industry narrative, but it was never accomplished and many argue that programming is often exploring 
the unknown and operates in hardly predictable contexts where artistic approach is more suitable 
([Gabriel & Sulivan, 2010](#refs)). Thus, the analogy between writing and programming is quite fitting.

There is an important lesson we can learn from Pirsig's criticism of rules in writing.
We should not see the seven steps of programming process as a best practice or a guideline for 
good programming. We can see them as post hoc descriptions of process that has been used by
some people in the past, but we cannot say whether this is a good process and we should not
try to follow it at all costs. As Pirsig says, all the writers that students were supposed to
mimic wrote without rules. Similarly, we believe that all the interesting new programs are more
likely to be written without rules and processes.

### 4.2 Breaking the writing and programming processes

In both writing and programming, there are many approaches that do not follow the neat linear
rules outlined in _Programming is Writing is Programming_. In this section, we consider examples
from both writing and programming and see how these can be translated into the other discipline.

The seven step process of programming treats programming as construction of a linguistic entity. 
This is a characteristic of the Algol research programme ([Priestley, 2011](#refs)). The most notable example of an 
alternative approach is the idea of live coding that dates back to Smalltalk ([Priestley, 2011](#refs)). In Smalltalk, 
programming is not seen as a process that results in a program. Instead, programming is seen as 
a live interaction or continued communication with the computer. In live coded music, the 
programmer keeps writing and running code during the whole performance. 

Can the idea of _live coding_ be translated into the writing domain? It would be interesting to 
see text not as something that is written once, but as something that continuously evolves and
is never finished. Wikipedia gets close to this idea for a very limited genre of text, but it would
be curious to see what such _live text_ would look like for other literary genres.

In literature, Surrealist and Dadaist techniques are examples of methods of writing that avoid 
the traditional process outlined in the paper. For example, the _exquisite corpse_ method is
inspired by a game where players write part of text, fold the paper to conceal part of the writing
and then pass the paper to the next player. Adapting such idea to programming might be more than
just a fun game though. If you could only see a very small portion of code during pair-programming,
perhaps we would end up with code where a small portion is sufficient to understand the larger
context!

## 5. Summary

The analogy between programming and writing is probably no more and no less fitting than analogies
between programming and engineering, craftsmanship, architecture or planning a dinner. Just like
other analogies, we need to be aware of what we want to achieve by using it. The authors of 
_Programming is Writing is Programming_ use the analogy for relating the typical processes of
writing and programming and discover a number of places where aspects of a step of one discipline
can be interestingly translated to the other discipline.

We stretch the analogy between programming and writing a bit further in three areas:

 - First, looking at formatting and styling reveals an interesting gap between the 
   meaning that program has for the human reader and for the computer. We suggest that closing this 
   gap would improve how code is written. 
   
 - Second, thinking about the essence of text and the essence of programs suggests that, perhaps, 
   the common belief that there is a more succinct and elegant essence that captures the meaning of 
   program is a misleading idea and we'd be better off considering program code in its full 
   complexity, much like we read literary texts.
   
 - Third, we consider whether there is (and should be) such a thing as typical writing and  
   programming process. Translating objections against rules in writing into the domain of 
   programming, we conclude that processes are post hoc descriptions worth studying, but
   not necessarily guidelines worth imitating.

Whether or not we believe that programming is like writing and writing is like programming,
drawing the analogy is useful as it lets us ask unusual and unexpected questions. This is
something that the programming research community needs and something that the Salon des Refusés 
workshop hopes to promote.

**Acknowledgements.** I am grateful to the fellow program committee members who suggested 
useful ideas for the review, especially Dominic Orchard, Stephen Kell and Antranig Basman. I also
thank the attendees of Salon des Refusés in Brussels for asking inspiring questions that 
contributed to the review. Finally, thanks to Jeremy Gibbons who suggested using the Pi-shaped
obfuscated C program.
 
</div></div>
<div class="row"><div class="col-sm-12" style="padding-top:15px"><h3>References<a name="refs"></a></h3></div></div>
<div class="row references"><div class="col-md-6 col-lg-5" markdown="1">
 
 - **Aigner, M., Ziegler, G. M., & Quarteroni, A. (2010)**. Proofs from the Book (Vol. 274). Berlin: Springer.

 - **Beckett, S. (1953)**. Waiting for Godot. ISBN 080214442X, Grove Press.

 - **Blackwell, A., & Collins, N. (2005)**. The programming language as a musical instrument. Proceedings of PPIG05 (Psychology of Programming Interest Group), 3, 284-289.

 - **Ensmenger, N. L. (2012)**. The computer boys take over: Computers, programmers, and the politics of technical expertise. MIT Press.

 - **Gabriel, R. P., Sullivan, K. J. (2010)**. Better science through art. ACM SIGPLAN Notices, vol.45, no.10, pp.885-900

 - **Havel, V. (1964)**. Antikódy. ISBN 9788087490204. Nakladatelství Odeon.

 - **McBreen, P. (2002)**. Software craftsmanship: The new imperative. Addison-Wesley Professional. Chicago	

 - **Pirsig, R. M. (1999)**. Zen and the art of motorcycle maintenance: An inquiry into values. Random House.

</div><div class="col-md-6 col-lg-5" markdown="1">

 - **Priestley, M. (2011)**. A Science of Operations: Machines, logic and the invention of programming. Springer Science & Business Media.

 - **Randell, B. (1996)**. The 1968/69 nato software engineering reports. History of Software Engineering, 37. Chicago	

 - **Roemer, L. (1989)**. roemer.c: There is more than meets the Pi. In 6th International Obfuscated C 
   Code Contest, Available at [http://www.ioccc.org/years.html](http://www.ioccc.org/years.html).

 - **Mandel, L. (1967)**. The Computer Girls. Cosmopolitan 1967, 52-56.

 - **Martin, R. C. (2009)**. Clean code: a handbook of agile software craftsmanship. Pearson Education.

 - **Naur, P., et al. (1963)**. Revised report on the algorithmic language Algol 60. The Computer Journal, 5(4), 349-367. Chicago	

 - **Wikipedia (2017)**. Waiting for Godot. Retrieved on 13 July from:
[https://en.wikipedia.org/wiki/Waiting_for_Godot](https://en.wikipedia.org/wiki/Waiting_for_Godot)

</div></div>
