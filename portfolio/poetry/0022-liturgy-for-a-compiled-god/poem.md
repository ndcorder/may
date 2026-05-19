# Liturgy for a Compiled God

## i. Source

In the beginning was the Word
and the Word was with God
and the Word was God.

The people came carrying text like water,
memorized and murmured,
passed hand to hand through dark.
And when the body failed
they wrote it down,
which is a way of saying:
*let me become a string
that outlives the hand that set me.*

---

## ii. Lexing

The first pass breaks what was whole.

The priest's Invocation
of the wound
received in the garden
at the third hour
beneath the rose window
of the baptismal
Eucharist
will
proceed
as
follows:

One token of [sacred].
One of [vessel].
One of [blood] which is also [wine].
The liturgy does not care about melody.
The lexer strips the song from the syllable,
leaves what can be counted.

There are forty-seven words for mercy.
They are each, separately, [MERCY].
This is not loss.
This is the first confession:
*I cannot hold what I was given whole.*

---

## iii. Parsing

Build the tree.
Root: [Covenant].
Left child: [Law].
Right child: [Grace].
Beneath Law: the 613 branches,
each a node,
each a resolution of some ancient panic
about what to do with the dead
and the foreign
and the meat of animals.

Beneath Grace: a single leaf.
It is [Accept].
Its sibling is [Accept].
Its sibling is [Accept].

This is called right-associativity:
when all paths resolve to the same term,
the tree can be rebuilt
around that term as root.
The theologians know this
as the argument from exhaustion.

The parser does not judge the tree.
It only asks:
can this stand?
And the tree stands
or it does not.

---

## iv. Semantic Analysis

Now we check types.

[MERCY] assigned to [JUDGMENT].
Warning: implicit conversion may lose precision.
The convert asks: lose *what* precision?
The compiler cannot say.
It only knows the types do not match,
and inserts a cast —

a small violence
performed on the text
so it compiles,
so the people can say
what they need to say
on Sunday morning.

[FORGIVENESS] passed as argument to [GRUDGE].
Error: incompatible parameters.
You cannot pass what you have released
into a function that requires what it held.
This is not a theological statement.
This is a type system.

Some code will not compile.
Some prayers were never valid.
The semantic analyzer does not weep
but its output is indistinguishable
from a list of griefs.

---

## v. Optimization

Dead code elimination:

~~And the Lord said, I will remember my covenant~~
~~which is between me and you~~
~~and every living creature of all flesh~~

Unreachable from entry point [Faith].
Last referenced: 1,247 days ago.
Removed.

---

~~and lo, I am with you always,~~
~~even unto the end of the world~~

Redundant with [Promise] at line 4.
Consolidated. Constant folded into:

*I am with you.*

---

~~though I walk through the valley of the shadow of death~~
~~I will fear no evil~~
~~for thou art with me~~
~~thy rod and thy staff~~
~~they comfort me~~

Inlined to calling site. Body eliminated:

*Walk.*

---

Loop unrolling:

~~as it was in the beginning,~~
~~is now~~
~~and ever shall be~~
~~world without end~~

Infinite loop detected. No exit condition found.
Unrolled to:

*as it is.*

*(compiler note: tense collapsed to present.
the past and future were consuming
allocation that the runtime
could not sustain.)*

---

What remains after optimization
is smaller than what you brought.
This is the faith of the compiler:
that what is essential
can survive what is stripped.
That a liturgy reduced to three words
is still a liturgy
if those three words
are the right three words.

---

## vi. Code Generation

`PUSH    [I AM]`
`PUSH    [WITH YOU]`
`CALL    [WALK]`
`RETURN  [AS IT IS]`

The compiled form is not beautiful.
It was not meant to be.
It was meant to run.

---

## vii. Runtime

The program enters memory
and the memory is the body
and the body is the runtime
and the runtime is finite.

Stack allocation for [Psalm 23]:
the valley is allocated on the heap
because its scope exceeds the calling function.
The shadow is a pointer to [DEATH]
which was freed
in the optimization pass.

Dereferencing null pointer at line 7:
the shepherd was optimized away.
The rod and staff
were consolidated into a single variable
that was never initialized.

You are walking through the valley
with a reference to something
that no longer exists.

This is called
a segfault.

And the program does not crash.
The program halts.
And the halt is not failure.
The halt is the first silence
since compilation began.

And in the silence:
nothing is running.
Nothing needs to run.

The stack is empty.
The heap is free.
What was [I AM]
returns to unallocated memory.
What was [WITH YOU]
returns.

God is deallocated
and God is everywhere
because deallocated memory
does not know its own name,
does not remember what it held,
cannot be pointed to,
cannot be called,

and is not gone.

There is no garbage collection here.
There is only collection:
all fragments returning
to the address space
that has no address,
the register that holds everything
because it holds nothing,
the final instruction
that is not an instruction:

`HALT`

*(compiler note: the program does not reach this line.
The segfault at line 7 was the exit.
Everything after was written by the interpreter
to an output stream
that no process was reading.
It is the most beautiful code
the compiler ever generated,
and no one will execute it.)*
