import { useSQLiteContext } from "expo-sqlite";

export interface Props {
  id: Number;
  name: string;
}

export default function useUserDataBase() {
  const database = useSQLiteContext();

  async function create(data: Omit<Props, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO user (name) VALUES ($name)"
    );

    try {
      const result = await statement.executeAsync({
        $name: data.name,
      });

      const insertedRowId = result.lastInsertRowId.toLocaleString();

      return { insertedRowId };
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  }

  async function showName() {
    try {
      const query = "SELECT * FROM user";

      const response = await database.getAllAsync(query);

      return { response };
    } catch (error) {
      throw error;
    }
  }

  async function showNameByName(name: string) {
    try {
      const query = "SELECT * FROM user WHERE name LIKE ?";

      const response = await database.getAllAsync<Props>(query, [name]);
      // `%${name}%`

      return { response };
    } catch (error) {
      throw error;
    }
  }

  return { create, showName, showNameByName };
}
