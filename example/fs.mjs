import { readFile, writeFile } from 'node:fs/promises'

// Location on the file system
const storage = './tmp_storage.json'

// Read the file from the Server
const stored = JSON.parse(await readFile(storage, 'utf-8').catch(() => ('{}')))
console.log({ stored })

// Work with the storage
stored['last_access'] = Date.now()

// Write the file at the end
await writeFile(storage, JSON.stringify(stored))