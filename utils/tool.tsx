import fs from 'fs/promises';
import path from 'path';
import JsonModel from "./JsonModel";

export const getJsonData = async () => {
    const filePath = path.join(process.cwd(), 'utils', 'db.json')
    const db: any = await fs.readFile(filePath);
    const data: JsonModel = JSON.parse(db);
    return data;
}