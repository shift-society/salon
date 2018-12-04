---
layout: review
title: 'Critique: A Certain Tendency of the Database Community'
paper-url: a-certain-tendency
paper-abstract: |
  <p>We posit that striving for distributed systems that provide “single system image” semantics is fundamentally flawed and at odds with how systems operate in the physical world. We realize the database as an optimization of this system: a required, essential optimization in practice that facilitates central data placement and ease of access to participants in a system. We motivate a new model of computation that is designed to address the problems of computation over “eventually consistent” information in a large-scale distributed system.</p>
review-abstract: |
  <p>This is a bold paper, backed by an expansive vision for what the world's
  information systems could become.
  However, it appears to be rushing too headlong for a particular target,
  without properly surveying the complete territory of computer systems and their development.
  It is in fact focused on "systems that have to go to very large scale" -- mentioned 
  in the workshop presentation but not in the paper text.</p>
My reaction is to ask: which systems are those?</p>
paper-authors: Christopher Meiklejohn
review-authors: Stephen Kell
edition: 2017
theme: red
---

<div class="row"><div class="col-md-9" markdown="1" style="padding-top:60px">

## 1. Summary

In this paper, Christopher Meiklejohn makes an argument against 
the design of distributed systems offering single-system-image semantics,
also known as strong consistency.
He proposes instead that systems should provide a 
a programming model that provides explicit treatment of inconsistency resolution, using
"mergeable" data structures.
This embeds into the programming model a concept of merging divergent states.
The importance of this model is motivated by a series of analogies arguing that
the natural world works according to 
principles of weak consistency and, specifically, of eventual consistency.
More precisely, the analogies are about the flow of information within human society.

## 2. Reaction

This is a bold paper, backed by an expansive vision for what the world's
information systems could become.
However, it appears to be rushing too headlong for a particular target,
without properly surveying the complete territory of computer systems and their development.
It is in fact focused on "systems that have to go to very large scale" -- mentioned 
in the workshop presentation but not in the paper text.
My reaction is to ask: which systems are those?
Does bigger scale mean bigger value?
By pushing higher-scalability infrastructure,
might we be throwing out some programmer-babies with the low-scalability bathwater?
This point is particularly important
in a world as hype-driven as that of technology -- a phenomenon
apparent not only in industry 
but also in the academic world, which has embraced buzzwords such as "big data"
in the belief that it refers to the most interesting, current and urgent challenges
of computer science.
My counterpoint holds that programmability
and administration of smaller, less glamorous distributed systems
continues to present a real and neglected class of problems.

## 3. Tendencies

If an unfortunate tendency of the database community is their insistence on
strongly consistent semantics,
then an unfortunate tendency of the systems community is
a disregard for both the application and the programmer.
What that community cares about is bigger numbers;
the application is quickly abstracted away.
Programmers, too, have been decreasingly important there
since the 1990s, with perhaps the "events versus threads" debate
(Ousterhout 1995, von Behren 2003)
being the last time that programmer needs commanded full attention.
More availability, more scalability -- optimising for a
chosen few metrics is what matters.
The tacit assumption of much distributed systems research in recent decades
is that that the only important applications are those that are infinitely big.

Here in this paper, too,  applications are implicitly
homogeneous and tending towards infinite size.
Rather than motivating a new programming model
with reference to the applications which would benefit -- perhaps many, and undoubtedly some --
the vocabulary is one of asymptotes, or extrapolating to a limit.

Unfortunately, in practice, no application is infinitely big.
If decades of experience with computer system design has taught us anything,
it's that paradigms don't scale far in either direction.
Frank McSherry's recent work "Scalability, but at what COST?" (McSherry 2014)
skewered the problem with painful precision.
For a huge number of surprisingly large problems,
the most scalable systems, presented at top systems conferences,
perform far less well than a single-threaded implementation
on a commodity laptop.
Although better scalability might win out in the long run as problem sizes get bigger,
we should heed a salient observation from another disciplines prone to asymptotic thinking, namely
economics: in the long run we're all dead (Keynes 1923).

Meanwhile, real systems need to be built,
doing work that matters to real human beings.
Each job of work has its own inherent scale.
Real systems involve real trade-offs, and scalability is never free.
Forgoing the single-system-image abstraction
could bring scalability benefits, and other benefits besides,
but it is not without cost either.
It is important to acknowledge those costs, and identify what they might be.

## 4. Single systems and single images

The paper also argues that an authoritative single image is not only unscalable
but desirable.
The analogies in the paper are intended to convince us that the "real world"
is the real authority, and its operation is one that justifies weak consistency everywhere.
The initial example is a book which documents the world's knowledge of breast cancer.
Naturally, such a book can only approximate an ever-changing, 
physically dispersed reality.
This is an example where the "ground truth" data exists outside the system.
Obviously, then, the system can only approximate it.
But not all applications of computers are like this.
We see a similar peculiarity in the next example, of two people trying to meet at a restaurant
whose location is known imprecisely by the humans
but supplemented by geographic survey data -- itself merely a proxy for the definitive
physical world.
In this example too, computer systems exist only to replicate data
held elsewhere, either in people's heads or in the physical world.
Again, this is not the only mode in which computer systems can operate.

In the ever-present airline reservation system,
the database contains information that really <em>is</em> definitive,
and this use of a software-maintained dataset as definitive record
is one that provides value -- in fact, derived primarily from the
strong consistency guarantees provided by a single system image
manipulated via transactional update.
I would suggest that a huge number of small and unglamorous distributed systems follow this pattern.
Computer systems can replace physical systems as well as replicate them.
A small hotel owner might move from a paper ledger of bookings
to a computer system, and expect various benefits in return:
remote access, multiple concurrent clients, replication for backup reasons or, less likely,
increased availability.
Strong consistency is a perfect match for this application,
whose scale is strongly limited. There are no infinitely big hotels.

And here is where the physical world suddenly justifies the single-image design
rather than undermining it.
A handwritten ledger does not suffer from weak consistency.
Electromagnetic and weak nuclear forces simply prevent 
multiple hands occupying the space above the ledger at a given instant.
The physical world provides a natural mutual exclusion protocol
which preserves the single system image.
It does so by enforcing a single system, not merely a single image.
But the wonder of computer systems, in liberating information from
heavy physical objects,
conspires wonderfully to let us have our cake and eat it.
Strong consistency protocols exist precisely to retain the handwritten ledger's benefit -- avoiding
the emergence of inconsistency -- without
limiting us to the unreliability and physical locality of a single object.
Single-image is not the same as single-system,
yet the author's argument equivocates between these,
in particularly when criticising applications which block on access to a central database.
Whether such a database can be replicated for availability,
maintain strong consistency
while scaling adequately is entirely a function of the application's demands.

Perhaps the aversion to centralised computing
is partly motivated by a reaction against
the disempowering tendencies of in-cloud hosting, which is nowadays
increasingly popular.
Certainly, there is a strong case for better exploitation of
resources at the edge of the network (such as Uber drivers' phones,
in the example), and for avoiding the present-day reliance on centralised data centres.
It is an indictment of currently available technology that
users and small businesses cannot reliably host information systems on their own equipment,
even though many individuals own at least two
powerful, always-connected devices
(such as a wireless router and smartphone).
Greater utilisation of edge devices to host applications 
could be both democratising and efficient -- but it is largely orthogonal to the question
of a single system image,
which is primarily a function of the size of the application to be hosted.

## 5. Astronauts

In the relative mundane context of nuts-and-bolts software design,
Joel Spolsky warned against so-called "architecture astronauts" (Spolsky 2001).
It seems there is an all-too-literal analogue 
in the world of distributed systems research.
Rather than assuming that the principal role of all replicated data stores is to gradually 
lock tentacles around the Eerth -- or indeed, around an interplanetary area,
as the text anticipates -- why
should it not also be to provide a better version of a handwritten ledger?
Although explorers will always be driven to reach
for the stars simply because they are there,
human-scale problems on terra firma continue to lack adequate solutions.

## 6. Programming

Finally, we come to programming.
The paper's big idea about programming is mergeable data structures,
although it is -- justifiably, in this context -- light on detail,
so left me agnostic about the value they provide.
No doubt such a design can yield considerable benefits for various large applications,
but some some obvious technical gaps remain apparently unplugged
regarding how to resolve inconsistencies.
Values originating from divergent realities
cannot in general be merged in isolation,
and the suggestion that the "most recent" value should prevail
is clearly naive. A coarser-grained multi-operation view appears essential, in order
to retain sensible application-level semantics.
Again, application requirements matter, and again,
the maligned database community's longstanding solution,
in terms of transactions over a single image,
is an inherently programmer-friendly one.
It is also user-friendly, and the lack of distinction between 
users and programmers is also a hidden strength of traditional database designs.
This attention to human needs first, with abstract scalability second,
is refreshing in hindsight, and is becoming increasingly rare.
Another of the arguable successes of the traditional database management server
is in how its users are immediately connected to the system;
its designers do not have the luxury of an abstraction gap
between themselves and the application.
Databases are programming systems, users and all.

## 7. Conclusions

Perhaps I am missing the point.
The intention of the paper's section entitled "databases as an optimisation" 
is to think of a single global system
as the inescapable reality,
whether we currently connect it all with computers or not.
At this scale, clearly a single system image is indeed infeasible.
Is this really the logical end point of all software?
If interplanetary scale is possible, is small scale dead?
These are questions which this work half-asks,
and my response, in short, is to ask them fully.

</div></div>
<div class="row"><div class="col-sm-12" style="padding-top:15px"><h3>References<a name="refs"></a></h3></div></div>
<div class="row references"><div class="col-md-6 col-lg-5" markdown="1">

 - **Keynes, J.M. (1923)**. A Tract on Monetary Reform. Macmillan.

 - **McSherry, F., Isard, M., & Murray, D. (2015)**. Scalability! But at what COST? In Proceedings of the Fifteenth Workshop on Hot Topics in Operating Systems. Usenix Association.
 
 - **Ousterhout, J. (1995)**. Why Threads Are A Bad Idea (for most purposes). Presentation given at the 1996 Usenix Annual Technical Conference, January 1996.

 - **Spolsky, J. (2001)**. Don't Let Architecture Astronauts Scare You. Available at https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/, as retrieved on 2017/11/6.

 - **von Behren, R., Condit, J., & Brewer, E. (2003)**. Why events are a bad idea (for high-concurrency servers). In Proceedings of the Ninth Workshop on Hot Topics in Operating Systems. Usenix Association.
 
</div></div>
