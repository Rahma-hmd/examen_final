import { Database } from "bun:sqlite";
import { join } from "node:path";

// process.cwd() s'adapte tout seul :
// En local, il partira de C:\Developpement\examen_final
// Sur le serveur, il partira de /home/etudiant/examen_final
const dbPath = join(process.cwd(), "data", "clients.db");

const db = new Database(dbPath);

export function getClients() {
  return db.query(`
    SELECT
      id,
      name,
      email,
      address,
      latitude,
      longitude
    FROM clients
    ORDER BY name
  `).all();
}

export default db;