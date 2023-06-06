# File-System-Organizer

A Command line application using node.js.
It organizes all the files from from a folder into different section so that we need not to do it manually.


# How to use on your local machine ->

- Ist link it to npm globally
// if you don't know how, just google it 
// hint: search for -> shebang syntax for node stack overflow (basically copied the # command on top of this main.js script)

- Use following commands in cmd->
- peppy help 
//it will help in rerouting your commands correctly
List of All the commands:
1. node main.js tree "direcoryPath"
2. node main.js organise "directoryPath"
// e.g. - node main.js organise "C:\Users\sangw\Downloads\"
// Now, the majic happens, it will organise all the files in your cluttered Downloads folder
3. node main.js help

* Basic steps taken for the project:
- taking inputs in commandline
- Switch case
- help function
- organise function
- tree function
- global
- dividing modules