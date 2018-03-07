const fs = require('fs');

// Reads notes already created
var fetchNotes = () => {
    try {
        // Reads the 'notes-data' file
        var notesString = fs.readFileSync('notes-data.json');
        // Takes the 'notes' and retuns it to the calling function
        return JSON.parse(notesString);
    } catch (e) {
        return[];
    }
};

var saveNotes = (notes) => {
    // WriteFileSync creates the file and writes to it using 'File Sytem' native module
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes(); // Gets notes that are already created
    var note = { // Create an Object to latter push into arry
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) { // Push note object into array
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);

    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title:  ${note.title}`);
    console.log(`Body:  ${note.body}`);
};

// In ES6, if you have property that is identical to the value you can use a singel word.
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};