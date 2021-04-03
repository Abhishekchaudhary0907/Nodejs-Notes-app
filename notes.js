const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title, body){
    const notes = loadNotes();

    //const duplicateNotes = notes.filter((note) => note.title===title)
    const duplicateNote = notes.find((note) => note.title===title);

    if(!duplicateNote){
    notes.push({
        title : title,
        body: body
    })

    debugger
    saveNotes(notes);  
    } else {
        console.log(chalk.red.inverse("Title has already taken"));
    } 
}

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return [];
    }

}

    const saveNotes = function(notes){
    const data = JSON.stringify(notes);

    fs.writeFileSync('notes.json', data);
}
debugger

const removeNote = function(title){

    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("note removed"));
    }else{
        console.log(chalk.red.inverse("no note found"))
    }
    saveNotes(notesToKeep);

}

const listNotes = function(){
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(chalk.green(element.title));
    });
}

const readNote = function(title){
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.green(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.inverse.red("No note found?"));
    }

}

const getNotes = function(){
    console.log("")
}

module.exports = {
    addNote : addNote,
    getNotes: getNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}