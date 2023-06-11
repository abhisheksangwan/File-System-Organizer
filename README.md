<h1 align="center">File-System-Organizer</h1>

A Command line application using node.js.
It organizes all the files from from a folder into different section so that we need not to do it manually.

<h2 >How to use on your local machine</h2>

- Almost all environments support it ->basically tells cmd that the below file has to run in node environment(Already included in main.js).<br>
```sh-session
#!/usr/bin/env node
```
hint: search for -> shebang syntax for node stack overflow<br>
- Ist link it to npm globally
```sh-session
npm link
```

- Use following commands in cmd->
```sh-session
peppy help 
```
- it will help in rerouting your commands correctly
List of All the commands:
1. node main.js tree "direcoryPath"
2. node main.js organise "directoryPath"
e.g-
```sh-session
- node main.js organise "C:\Users\sangw\Downloads\"
```
- Now, the magic happens, it will organise all the files in your cluttered Downloads folder<br>

3. Ask for commands from you cmd itself 😉
```sh-session
node main.js help
```
<h2>Basic steps taken for the project: </h2>

- taking inputs in commandline
- Switch case
- help function
- organise function
- tree function
- global
- dividing modules
