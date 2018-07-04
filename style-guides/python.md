# Python Infrastructure and Coding Standards 

Here at Systers open source we respect the [PEP8 style guide for Python](http://www.python.org/dev/peps/pep-0008/). Docstrings follow [PEP257](http://www.python.org/dev/peps/pep-0257/). In addition to the guidelines specified by PEP8 we have organizatin specific guidelines and various tools we use to enforce these guidelines. We want to make sure all our python projects are in synchrony with these guidelines.

The last of this document talks about the tools we use for automated reviews, CI and CD online.

 

## PEP8

Please refer to the [PEP8 Document](http://www.python.org/dev/peps/pep-0008/) to and find out about rules concerning indentation, use of tabs or spaces etc). We use flake8 to enfore these rules. Please bear in mind that [**flake8**]() may not include everything in the PEP8 guide and contains other checks not enforced by the guide as it's basically a combination of `PyFlakes`, `pycodestyle` (PEP8 intensive) and `Ned Batchelder’s McCabe script`

Such checks can be done by running `flake8` command in the root of the defined project (with respective parameters). This is done ideally before a commit to avoid your PRs being rejected.


## \_\_init\_\_.py

Unless it must be done, `__init__.py` files must remain empty. In case this would not be the case the should be a concrete reason for this.

See also, http://stackoverflow.com/questions/1944569/how-do-i-write-good-correct-init-py-files.

## Imports

Import only what needs to be used, never import a whole module when everything(function) in it would not be used. In case a module or sub-module would be used fully, import all of it instead of importing individual functions or methods.
```py
import os                             # GOOD : if entire os module is required
import os                             # BAD  : if entire os module is not required
from os import getcwd                 # GOOD : if getcwd (or few functions) is the only function required
from os import getcwd                 # BAD  : if entire os module is required 
system, environ, getpid ...

```


## Naming Conventions 


In addition to [naming conventions](https://www.python.org/dev/peps/pep-0008/?#naming-conventions) at PEP8 we encourage the use `mixedCase`, `CamelCase` and the `underscore_naming_style` depending on the situation, functions and methods are better named by join words with underscores while classes will look good in mixedCase or CamelCase for example, class `MailingList(models.Model)` or `mailingList(models.Model)` may contain method `getSuscriber` or `get_suscriber`

Top-level symbols -- functions, classes, and variables should employ a leading underscore if the symbol is private to the module: that is, nobody may reference that symbol except for code in the module itself and its associate test file(s).

If a module itself its name starting with a leading underscore it means that all symbols in that module are private to the _package_ the symbols is in.  A "package" is basically the top-level directory that the module is under, within webapp.  

More are at [PEP8 Naming Conventions](https://www.python.org/dev/peps/pep-0008/?#naming-conventions)



## Unused variables

If it's possible avoid leaving used variables in code, otherwise name the variable either `_` (python convention) or `unused_<something>`. To prevent linters from throwing out errors.


## Docstrings

All non-trivial methods should have docstrings. Docstrings should follow guidelines here: [PEP257](http://www.python.org/dev/peps/pep-0257/). See the [Google style guide](https://google.github.io/styleguide/pyguide.html#Comments) around docstrings for examples.

There exists two types of docstrings, long-form and short-form.

A short-form docstring fits entirely on one line, including the triple quotes. It is used for simple functions, especially (though by no means exclusively) ones that are not part of a public API:

```py
"""Return long-form docstring."""
```


If the description spills past one line, you should move to the long-form docstring: a summary line (one physical line) starting with a triple-quote ("""), terminated by a period, question mark, or exclamation point, followed by a blank line, followed by the rest of the doc string starting at the same cursor position as the first quote of the first line, ending with triple-quotes on a line by themselves. Eventhough BDFL suggests in PEP 257, do not put a blank line before the ending quotes.

```py
"""This comment serves to demonstrate the format of a docstring.

Note that the summary line is always at most one line long, and
on the same line as the opening triple-quote, and with no spaces
between the triple-quote and the text.  Always use double-quotes
(") rather than single-quotes (') for your docstring.   (This
lets us reserve ''' (3 single-quotes) as a way of commenting out
big blocks of code.
"""
```

A function (including methods and generators) must have a docstring, unless it meets all of the following criteria:

- not externally visible
- very short
- obvious

The docstring should describe the function's calling syntax and its semantics, not its implementation.

The docstring should end with the following special sections (see [the Google style guide](https://google.github.io/styleguide/pyguide.html?showone=Comments#Comments) for more details).

- **Arguments:** List each parameter by name, and a description of it. The description can span several lines (use a hanging indent if so). Use instead of "Args". 
- **Returns:** (or **Yields:** for generators): Describe the type and semantics of the return value. If the function only returns None, this section is not required.
- **Raises:** List all exceptions that are relevant to the interface.

Classes should follow a similar format: a single line describing the class, plus more details, but instead of Arguments/Returns/Raises, it should have an Attributes: section that lists and describes the public attributes of the class (if any).

Modules (files) should have a docstring too, at the top of the file, starting with the usual one-line summary:  
```py
"""One line summary.

Longer description.
"""
```

> *Rationale:* Code will be read many more times than they will write it. Time spent documenting at write-time more than pays off at read time. What is obvious to you as the code-author, well versed in the module where this function lives, may not be at all obvious to a code reader, who is possibly jumping into this function from some unrelated part of the codebase. Do use docstrings! 


## Top of the file

Start your file with a module docstring. Do not put a shebang line (`#!/usr/bin/python`) or copyright notice, or anything else.  Follow the docstring with your imports; don't put an `__author__` line.

> *Exception:* if the python file is meant to be executable, it should start with the following shebang line:

>```py
>#!/usr/bin/env python
>```

> *Rationale:* a shebang line is useless for non-executable files. An `__author__` line just gets out of date, and is better determined by looking at source control history in any case. Code is automatically copyrighted; a copyright line doesn't help. No need to put this useless boilerplate at the top of the file!


