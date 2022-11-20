import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate');
      console.log('jate database created');
    },
  });

// Opens a database connection with a read and write
// Transaction state, then it will execute a PUT
// Command to update the contents of the 'content'
// Field within the database (Which is to say, all of the data)
  export const putDb = async (content) => {
    console.log(content);
  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.put(content, 'displaytext');

  const result = await request;

  console.log("Data saved to database: ", result);
}

// Opens a connection to the DB, a read only transaction
// To search for anything in the 'jate' database
// Then returns the value of the array of objects
// To be put in the text field for the display
export const getDb = async () => {

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');
  const request = store.get('displaytext');

  const result = await request;
  console.log('Result: ', result);

  return result;

};

initdb();
