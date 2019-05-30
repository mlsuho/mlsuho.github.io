---
title: Chapter 2 - Basic Terminal Usage
date: 2019-05-31 01:09:33
thumbnail: /gallery/thumbnails/terminal.png
toc: true
tags:
- backend
- terminal
- tech
categories:
- Backend
---

## Navigating the File System

### The Command Line

The command line is a text interface for your computer. It's a program that takes in commands, which it passes on to the computer's operating system to run.

From the command line, you can navigate through files and folders on your computer, just as you would with Finder on Mac OS or Windows Explorer on Windows. The difference is that the command line is fully text-based.

The advantage of using the command line is its power. You can run programs, write scripts to automate common tasks, and combine simple commands to handle difficult tasks – making it an important programming tool.

### Navigation

#### ls

```bash
$ ls
```

ls - list files in current path working directory. This one is probably the most useful one. The command line looks at the folder you are in, and then "lists" the files and folders inside it.

#### Filesystem

![Image 1]

A filesystem organizes a computer's files and directories into a tree structure:

1. The first directory in the filesystem is the root directory. It is the parent of all other directories and files in the filesystem.
2. Each parent directory can contain more child directories and files. Here blog/ is the parent of 2014/, 2015/, and hardware.txt.
3. Each directory can contain more files and child directories. The parent-child relationship continues as long as directories and files are nested.

#### pwd

```bash
$ pwd
```

pwd stands for "print working directory". It outputs the name of the directory you are currently in, called the working directory.

Together with `ls`, the `pwd` command is useful to show where you are in the filesystem.

#### cd

```bash
$ cd [name]
```

`cd` stands for "change directory". Just as you would click on a folder in Windows Explorer or Finder, `cd` switches you into the directory you specify. In other words, `cd` changes the working directory.

The `cd` command takes a directory name as an argument, and **switches** into that directory.

```bash
$ cd ..
```

To move up one directory, use `cd ..`

#### mkdir

```bash
$ mkdir [name]
```

The `mkdir` command stands for **"make directory"**. It takes in a directory name as an argument, and then creates a new directory in the current working directory.

#### touch

```bash
$ touch [name]
```

The `touch` command creates a new file inside the working directory. It takes in a filename as an argument, and then creates an empty file in the current working directory.

### Command Line Interface Setup

The command line is a powerful tool used by developers to find, create, and manipulate files and folders.

Command Line Interfaces (CLIs) come in many forms. The CLI we'll use is called Bash.

#### What is Bash?

**Bash**, or the **B**ourne-**A**gain **SH**ell, is a CLI that was created over twenty-seven years ago by Brian Fox as a free software replacement for the Bourne Shell. 

A **shell** is a specific kind of CLI. Bash is "open source" which means that anyone can read the code and suggest changes. Since its beginning, it has been supported by a large community of engineers who have worked to make it an incredible tool. Bash is the default shell for Linux and Mac. 

For these reasons, Bash is the most used and widely distributed shell. If you want to learn more about Bash, this [Wikipedia article][Wiki] is a good place to start.

#### Bash Setup for Mac

Bash is the default shell on Linux and Mac OS X, so good news, you don't have to install anything!

To access Bash in OS X, you can use an application called **Terminal**.

1. First open the **Applications** folder, then open the **Utilities** folder.

2. Once you're in the **Utilities** folder you will see the application **Terminal**. Open the **Terminal** application and you're ready to go!

3. For ease of access later, you can keep **Terminal** in your **Dock**. Simply right click (alt-click) the Terminal icon in your dock, then select "Options", then "Keep In Dock."

## Viewing and Changing the File System

### Manipulation

#### ls -a

```bash
$ ls -a
```

- The `ls` command lists all files and directories in the working directory.
- The `-a` modifies the behavior of the `ls` command to also list the files and directories starting with a dot (.). Files started with a dot are hidden, and don't appear when using ls alone.

The `-a` is called an option. Options modify the behavior of commands. Here we used ls -a to display the contents of the working directory in more detail.

In addition to `-a`, the ls command has several more options. Here are three common options:

`-a` - lists all contents, including hidden files and directories
`-l` - lists all contents of a directory in long format
`-t` - order files and directories by the time they were last modified.

#### ls -l

```bash
$ ls -l
```

The -l option lists files and directories as a table. Here there are four rows, with seven columns separated by spaces. Here's what each column means:

1. Access rights. These are actions that are permitted on a file or directory.
2. Number of hard links. This number counts the number of child directories and files. This number includes the parent directory link (..) and current directory link (.).
3. The username of the file's owner. Here the username is cc.
4. The name of the group that owns the file. Here the group name is eng.
5. The size of the file in bytes.
6. The date & time that the file was last modified.
7. The name of the file or directory.

#### ls -alt

```bash
$ ls -alt
```

The `-t` option orders files and directories by the time they were last modified.

In addition to using each option separately, like `ls -a` or `ls -l`, multiple options can be used together, like `ls -alt`.

Here, `ls -alt` lists all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified.

#### cp

```bash
$ cp [source] [target]

# Example

$ cp source.txt target.txt
```

The cp command copies files or directories. Here, we copy the contents of **source.txt** into **target.txt**.

#### Wildcards

```bash
cp * newFolder/
```

In addition to using filenames as arguments, we can use special characters like **\*** to select groups of files. These special characters are called wildcards. The **\*** selects all files in the working directory, so here we use `cp` to copy all files into the `newFolder`/ directory.

#### mv

The mv command moves files. It's similar to cp in its usage.

```bash
$ mv [source] [target]
```

To move a file into a directory, use mv with the source file as the first argument and the destination directory as the second argument.

#### rm

```bash
$ rm [fileName]

# Example
$ rm text.txt
```

The `rm` command deletes files and directories. Here we **remove** the file `text.txt` from the filesystem.

```bash
$ rm -r [folderName]
```

The `-r` is an option that modifies the behavior of the `rm` command. The `-r` stands for "**recursive**", and it's used to **delete** a directory and all of its child directories.

Be careful when you use `rm`! It **deletes** files and directories **permanently**. There isn't an undelete command, so once you delete a file or directory with `rm`, **it's gone** 🔥🔥🔥.

### Redirection

In this lesson, we'll focus on input and output (I/O) redirection.

Through **redirection** you can direct the input and output of a command to and from other files and programs, and chain commands together in a pipeline.

#### stdin, stdout, and stderr

```bash
$ echo "Hello"
Hello
```
The `echo` command accepts the string "Hello" as **standard input**, and echoes the string "Hello" back to the terminal as **standard output**.

- **standard input**, abbreviated as `stdin`, is information inputted into the terminal through the keyboard or input device.
- **standard output**, abbreviated as `stdout`, is the information outputted after a process is run.
- **standard error**, abbreviated as `stderr`, is an error message outputted by a failed process

#### How Does Redirection Work?

```bash
$ echo "Hello" > hello.txt
```

The `>` command redirects the standard output to a file. Here, `"Hello"` is entered as the standard input. The standard output `"Hello"` is redirected by `>` to the file **hello.txt**.

```bash
$ cat hello.txt
```

The `cat` command outputs the contents of a file to the terminal. When you type `cat` hello.txt, the contents of hello.txt are displayed.

#### >

```bash
$ cat fileA.txt > fileB.txt
```

`>` takes the standard output of the command on the left, and redirects it to the file on the right. Here the standard output of `cat` fileA.txt is redirected to fileB.txt.

> Note that `>` overwrites all original content in fileB.txt.

#### >>

```bash
$ cat fileA.txt >> fileB.txt
```

`>>` takes the standard output of the command on the left and appends (adds) it to the file on the right. You can view the output data of the file with cat and the filename.

Here, the the output data of **fileB.txt** will contain the original contents of **fileB.txt** with the content of **fileA.txt** appended to it.

#### <

```bash
$ cat < text.txt
```

`<` takes the standard input from the file on the right and inputs it into the program on the left. Here, **text.txt** is the standard input for the cat command. The standard output appears in the terminal.

#### |

```bash
$ cat text.txt | wc  
```
`|` is a "pipe". The `|` takes the standard output of the command on the left, and **pipes** it as standard input to the command on the right. You can think of this as "command to command" redirection.

Here the output of `cat text.txt` is the standard input of `wc`. In turn, the `wc` command outputs the **number of lines**, **words**, and **characters** in text.txt, respectively.

#### sort

```bash
$ sort names.txt
```

`sort` takes the standard input and orders it alphabetically for the standard output. Here, the names in `sort names.txt` are listed in alphabetical order.

#### uniq

```bash
$ uniq names.txt 
```

`uniq` stands for "unique" and filters out adjacent, duplicate lines in a file.

#### grep

```bash
$ grep John names.txt 
```

`grep` stands for "global regular expression print". It searches files for lines that match a pattern and returns the results. It is also case sensitive. Here, `grep` searches for "John" in **names.txt**.

```bash
$ grep -i John names.txt 
```

`grep -i` enables the command to be _case insensitive_. Here, `grep` searches for capital or lowercase strings that match John in names.txt.

```bash
$ grep -R John ~/document/people
```

`grep -R` searches all files in a directory and outputs filenames and lines containing matched results. `-R` stands for "**recursive**". Here `grep -R` searches the `~/document/people` directory for the string "John" and outputs **filenames** and **lines** with matched results.

```bash
$ grep -Rl John ~/document/people
```

`grep -Rl` searches all files in a directory and outputs **only** **filenames** with matched results. `-R` stands for "**recursive**" and `l` stands for "**files with matches**". Here `grep -Rl` searches the `~/document/people directory` for the string "John" and outputs **filenames** with matched results.

#### sed

```bash
$ sed 's/snow/rain/' forests.txt 
```

`sed` stands for "**stream editor**". It accepts standard input and modifies it based on an expression, before displaying it as output data. It is similar to "**find and replace**".

The expression `'s/snow/rain/'`:

- **s**: stands for "substitution". It is always used when using sed for substitution.
- **snow**: the search string, the text to find.
- **rain**: the replacement string, the text to add in place.

In this case, `sed` searches forests.txt for the word "snow" and replaces it with "rain." Importantly, the above command will only replace the first instance of "snow" on a line.

```bash
$ sed 's/snow/rain/g' forests.txt 
```

The above command uses the `g` expression, meaning "global". Here `sed` searches forests.txt for the word "snow" and replaces it with "rain", **globally**. **All instances** of "snow" on a line will be turned to "rain".

## Configuring the Environment

### Environment

Each time we launch the terminal application, it creates a new session. The session immediately loads settings and preferences that make up the command line **environment**.

We can configure the environment to support the commands and programs we create. This enables us to customize greetings and command aliases, and create variables to share across commands and programs.

### nano

```bash
$ nano hello.txt
```

`nano` is a command line text editor. It works just like a desktop text editor like TextEdit or Notepad, except that it is accessible from the command line and only accepts keyboard input.

Example with `nano`:

1. The command `nano hello.txt` opens a new text file named **hello.txt** in the nano text editor.
2. `"Hello, I am nano"` is a text string entered in nano through the cursor.
3. The menu of keyboard commands at the bottom of the window allow us to save changes to **hello.txt** and exit nano. The `^` stands for the `Ctrl` key.
- `Ctrl + O` saves a file. 'O' stands for output.
- `Ctrl + X` exits the nano program. 'X' stands for exit.
- `Ctrl + G` opens a help menu.
- clear clears the terminal window, moving the command prompt to the top of the screen.

### Bash Profile

```bash
$ nano ~/.bash_profile
```

`~/.bash_profile` is the name of file used to store environment settings. It is commonly called the "**bash profile**". When a session starts, it will load the contents of the bash profile before executing commands.

- The `~` represents the user's home directory.
- The `.` indicates a hidden file.
- The name `~/.bash_profile` is **important**, since this is how the command line recognizes the bash profile.

Example with `~/.bash_profile`:

1. The command `nano ~/.bash_profile` opens up **~/.bash_profile** in nano.
2. The text `echo "Welcome to Terminal"` creates a greeting in the bash profile, which is saved. It tells the command line to echo the string "Welcome to Terminal" when a terminal session begins.
3. The command `source ~/.bash_profile` activates the changes in **~/.bash_profile** for the current session. Instead of closing the terminal and needing to start a new session, source makes the changes available right away in the session we are in.

### Aliases

```bash
alias pd="pwd"
```

The `alias` command allows you to create keyboard shortcuts, or aliases, for commonly used commands.

Usually, we store aliases in **~/.bash_profile**

For example, the alias `pd="pwd"` creates the alias `pd` for the `pwd` command, which is then saved in the bash profile. Each time you enter `pd`, the output will be the same as the `pwd` command.

### Environment Variables

```bash
export USER="Su Ho"
```

**Environment variables** are variables that can be used across commands and programs and hold information about the environment.

1. The line `USER="Su Ho"` sets the environment variable USER to a name "Su Ho". Usually the USER variable is set to the name of the computer’s owner.
2. The line `export` makes the variable to be available to all child sessions initiated from the session you are in. This is a way to make the variable persist across programs.
3. At the command line, the command `echo $USER` returns the value of the variable. Note that `$` is always used when returning a variable’s value. Here, the command `echo $USER` returns the name set for the variable.

#### PS1

```bash
export PS1=">> "
```

`PS1` is a variable that defines the **makeup** and **style** of the command **prompt**.

1. `export PS1=">> "` sets the command prompt variable and exports the variable. Here we change the default command prompt from `$` to `>>`.
2. After using the source command, the command line displays the new command prompt.

#### HOME

```bash
$ echo $HOME 
```

The `HOME` variable is an environment variable that displays the path of the home directory. Here by typing `echo $HOME`, the terminal displays the path `/home/suho` as output.

#### PATH

```bash
$ echo $PATH
```

`PATH` is an environment variable that stores a list of directories separated by a colon. Looking carefully, `echo $PATH` lists some the following directories, for example:

1. /usr/local/sbin
2. /usr/local/bin
3. /usr/bin
4. /usr/sbin
5. /sbin
6. /bin

Each directory contains scripts for the command line to execute. The `PATH` variable simply lists which directories contain scripts.

For example, many commands we've learned are scripts stored in the `/bin` directory.

```bash
/bin/pwd
```

### env

```bash
$ env
```

The `env` command stands for "environment", and returns a list of the environment variables for the current user. Here, the `env` command returns a number of variables, including `PATH`, `PWD`, `PS1`, and `HOME`.

## Learn Bash Scripting

### Introduction to Bash Scripting

Bash (or shell) scripting is a great way to automate repetitive tasks and can save you a ton of time as a developer. Bash scripts execute within a Bash shell interpreter terminal. Any command you can run in your terminal can be run in a Bash script. When you have a command or set of commands that you will be using frequently, consider writing a Bash script to perform it.

There are some conventions to follow to ensure that your computer is able to find and execute your Bash scripts. The beginning of your script file should start with `#!/bin/bash` on its own line. This tells the computer which type of interpreter to use for the script. When saving the script file, it is good practice to place commonly used scripts in the `~/bin/` directory.

The script files also need to have the "execute" permission to allow them to be run. To add this permission to a file with filename: `script.sh` use:

```bash
$ chmod +x script.sh
```

File `script.sh`:

```bash
#!/bin/bash

echo "Hello World!"
```

### Variables

Within bash scripts (or the terminal for that matter), variables are declared by setting the variable name equal to another value. For example, to set the variable `greeting` to "Hello", you would use the following syntax:

```bash
greeting="Hello"
```

To access the value of a variable, we use the variable name prepended with a dollar sign (`$`). In the previous example, if we want to print the variable value to the screen, we use the following syntax:

```bash
$ echo $greeting
```

### Conditionals

When bash scripting, you can use conditionals to control which set of commands within the script run. Use `if` to start the conditional, followed by the condition in square brackets (`[ ]`). `then` begins the code that will run if the condition is met. `else` begins the code that will run if the condition is not met. Lastly, the conditional is closed with a backwards `if`, `fi`.

A complete conditional in a bash script uses the following syntax:

```bash
if [ $index -lt 5 ]
then
  echo $index
else
  echo 5
fi
```

Bash scripts use a specific list of operators for comparison. Here we used `-lt` which is "less than". The result of this conditional is that if `$index` is less than 5, it will print to the screen. If it is 5 or greater, "5" will be printed to the screen.

Here is the list of comparison operators for numbers you can use within bash scripts:
- Equal: `-eq`
- Not equal: `-ne`
- Less than or equal: `-le`
- Less than: `-lt`
- Greater than or equal: `-ge`
- Greater than: `-gt`
- Is null: `-z`

When comparing strings, it is best practice to put the variable into quotes (`"`). The common operators for comparing strings are:
- Equal: ==
- Not equal: !=

```bash
if [ "$foo" == "$bar"]
```

### Loops

There are 3 different ways to loop within a bash script: `for`, `while` and `until`.

A for loop is used to iterate through a list and execute an action at each step. For example, if we had a list of words stored in a variable `paragraph`, we could use the following syntax to print each one:

```BASH
for word in $paragraph
do
  echo $word
done
```

Note that `word` is being "defined" at the top of the for loop so there is no `$` prepended. Remember that we prepend the `$` when accessing the value of the variable. So, when accessing the variable within the `do` block, we use `$word` as usual.

Within bash scripting `until` and `while` are very similar. `while` loops keep looping while the provided condition is true whereas `until` loops loop until the condition is true. Conditions are established the same way as they are within an `if` block, between square brackets. If we want to print the `index` variable as long as it is less than 5, we would use the following `while` loop:

```bash
while [ $index -lt 5 ]
do
  echo $index
  index=$((index + 1))
done
```

Note that arithmetic in bash scripting uses the `$((...))` syntax and within the brackets the variable name is not prepended with a `$`.

The same loop could also be written as an `until` loop as follows:

```bash
until [ $index -eq 5 ]
do
  echo $index
  index=$((index + 1))
done
```

### Inputs

To make bash scripts more useful, we need to be able to access data external to the bash script file itself. The first way to do this is by prompting the user for input. For this, we use the `read` syntax. To ask the user for input and save it to the `number` variable, we would use the following code:

```bash
echo "Guess a number"
read number
echo "You guessed $number"
```

Another way to access external data is to have the user add input arguments when they run your script. These arguments are entered after the script name and are separated by spaces. For example:

```bash
saycolors red green blue
```

Within the script, these are accessed using `$1`, `$2`, etc, where `$1` is the first argument (here, "red") and so on. Note that these are 1 indexed.

If your script needs to accept an indefinite number of input arguments, you can iterate over them using the "`$@`" syntax. For our `saycolors` example, we could print each color using:

```bash
for color in "$@"
do
  echo $color
done
```

Lastly, we can access external files to our script. You can assign a set of files to a variable name using standard bash pattern matching using regular expressions. For example, to get all files in a directory, you can use the `*` character:

```bash
files=/some/directory/*
```

You can then iterate through each file and do something. Here, lets just print the full path and filename:

```bash
for file in $files
do
  echo $file
done
```

### Aliases

You can set up aliases for your bash scripts within your `.bashrc` or `.bash_profile` file to allow calling your scripts without the full filename. For example, if we have our `saycolors.sh` script, we can alias it to the word `saycolors` using the following syntax:

```bash
alias saycolors='./saycolors.sh'
```

You can even add standard input arguments to your alias. For example, if we always want "green" to be included as the first input to `saycolors`, we could modify our alias to:

```bash
alias saycolors='./saycolors.sh "green"'
```

## Acknowledges

Special thanks to the course [Learn the Command Line] of [Codecademy]

[Image 1]: gallery/backend/chapter2/Image1.png
[Wiki]: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[Learn the Command Line]: https://www.codecademy.com/learn/learn-the-command-line
[Codecademy]: https://www.codecademy.com