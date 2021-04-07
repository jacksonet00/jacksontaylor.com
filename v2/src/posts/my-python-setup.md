---
title: My Python Setup
dateCreated: '2021-04-06'
---

# My Python Setup

There are so many ways to setup a Python environment these days... I Just wanted to share how I do mine and hear from my fellow devs what you guys use or how I could improve my setup 🍻

## My environment preferences

For the virtual environment I like to stick with something lightweight and flexible. Currently I'm using the [venv](https://docs.python.org/3/library/venv.html) module from the Python standard library. I spent a bit of time looking into [virtualenv](https://virtualenv.pypa.io/en/latest/) which seems to be comparable. [This stackoverflow answer](https://stackoverflow.com/questions/41573587/what-is-the-difference-between-venv-pyvenv-pyenv-virtualenv-virtualenvwrappe) gets into the specific differences between the two.

[Conda](https://docs.conda.io/en/latest/) is another option that I've used before, but 99% of the time I can get away with a simpler solution.

## Using venv

Getting started using <strong>venv</strong> is super simple.

### Initialize a project with a venv

```bash
mkdir my-project
cd my-project

python3 -m venv ./venv
```

Now you should have a virtual enviroment inside your project directory.

-    my-project
     -    venv
     -    Python files

### Activate environment and install dependencies

```bash
source ./venv/bin/activate

pip install pandas matplotlib
```

With your environment activated and dependencies installed you'll be able to run any code which uses these dependencies even if they aren't installed on the host machine.

### Using a venv in your project

When using <strong>venv</strong> in your project, you won't want to worry about installing the dependecies in your virtual environment and then passing that environment around as its own file through source control or cloud storage. Instead you'll want to exclude the environment from your repository, but include the necessary files to regenerate that environment from scratch.

In the <strong>venv</strong> module, the method for doing this is to use a <strong>requirements.txt</strong> file which contains all settings and packages that venv will need to install in order to duplicate the environment.

You don't have to write this file yourself, you can generate it automatically using:

```bash
pip freeze > requirements.txt
```

This should modify your project directory to include this file at the same level as the <strong>venv</strong>:

-    my-project
     -    venv
     -    requirements.txt
     -    Python files

and the contents of the file should look like:

```txt
cycler==0.10.0
kiwisolver==1.3.1
matplotlib==3.4.1
numpy==1.20.2
pandas==1.2.3
Pillow==8.2.0
pyparsing==2.4.7
python-dateutil==2.8.1
pytz==2021.1
six==1.15.0
```

At this point, you should add <strong>venv</strong> to your <strong>.gitignore</strong> file so that it doesn't get pushed to GitHub.

Now if someone were to clone your repository, first they would need to generate a new virtual environment using the same instructions as before. Then they would need to copy over the depnedencies from your <strong>requirements.txt</strong> file using:

```bash
pip install -r requirments.txt
```

## Syntactic sugar with aliasing and scripting

While the <strong>venv</strong> module is lightweight and effective, typing out the commands is a bit annoying and unintuitive. Personally, I've just replaced the command line interface with my own aliases and scripts to make the process easier to commit to memory and work with.

To make these scripts I added the following code to my <strong>.bash_profile</strong> in my root directory. If you don't know what this means [click here](https://www.moncefbelyamani.com/create-aliases-in-bash-profile-to-assign-shortcuts-for-common-terminal-commands/) to learn about aliasing in bash.

```bash
alias mkvenv="python3 -m venv venv"

alias initvenv="mkvenv && start venv"

start() {
 source "$1"/bin/activate
}

alias mkreq="pip freeze > requirements.txt"

alias usereq="pip install -r requirements.txt"
```

Here is how you would go about the same process as before with the cleaner syntax.

### Initialize a project with a venv

```bash
mkdir my-project
cd my-project

initvenv
```

### Activate environment and install dependencies

```bash
start venv
pip install pandas matplotlib
```

### Make a requirements.txt file

```bash
mkreq
```

### Load from a requirements.txt file

```bash
usereq
```

As you can see, with these aliases and scripts you can use <strong>venv</strong> with much cleaner syntax. I really enjoy using it in this way and this is how I start any Python project I work on (even if it is small scale). I really just enjoy having it all containerized within a lightweight environment.

### Using your venv as your VS Code interpreter

If you're used to using VS Code and having your Python dependencies installed globally you might get frustrated by the interpreter not recoginizing code from external libraries. To fix this you just need to change your Python interpreter to the Python installation contained by your virtual enviroment.

You can do this either programatically by adding a <strong>.vscode/settings.json</strong> file to the root directory of your project which has the following code:

```json
{
	"python.pythonPath": "./venv/bin/python"
}
```

or you can generate this file using the GUI as seen in the gif below and [in the VS Code docs](https://code.visualstudio.com/docs/python/environments):

[![pythonPath.gif](https://s4.gifyu.com/images/pythonPath.gif)](https://gifyu.com/image/YZZx)

## Suggestions?

Like I said at beginning, there are so many ways to do this in the current version of Python. I would love it if you would share how you do things differently or any improvements I could make to my current setup. You can reach out to me via Twitter [@jacksonet00](https://twitter.com/jacksonet00)
