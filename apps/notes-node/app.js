// Native Modules
const fs = require('fs'),
const _ = require('lodash');
const yargs = require('yargs');

// Internal/build Modules
const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
const command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('You added a note dude!');
        notes.logNote(note);
    } else {
        console.log('Note already here, bruh.');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Priting: ${allNotes.length} note(s).`);

    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note NOT found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note NOT found';
    console.log(message);
} else {
    console.log('Command not recognized');
}