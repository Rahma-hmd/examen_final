import { Database } from "bun:sqlite";

// On utilise directement le chemin absolu du serveur
const dbPath = "/home/etudiant/examen_final/data/clients.db";

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