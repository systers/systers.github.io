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
