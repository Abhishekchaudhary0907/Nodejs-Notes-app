const yargs = require('yargs');
const notes = require('./notes.js'); 

// costimize yargs version
// yargs.version('1.1.0');
//create add comand

yargs.command({
    command:"add",
    describe:"add a note",
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        },
        body:{
            decsribe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
});

//remove a note

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:"remove notes",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){                         // es6 syntax method
        notes.removeNote(argv.title);
    }
});

// read a note

yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(argv){
        notes.readNote(argv.title);
    }
});

// list  notes

yargs.command({
    command:'list',
    describe:'list a note',
    handler: function(){
        notes.listNotes();
    }
})

yargs.parse();
//console.log(yargs.argv);
