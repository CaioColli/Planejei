import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGERRR PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL 
            );
        `);
}
