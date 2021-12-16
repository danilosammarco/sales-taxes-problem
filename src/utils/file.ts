import fs from 'fs';

import { Config } from '../interface';

// Default file path
const fileInPath = './input/test1.txt';
const fileOutPath = './output/output.txt';
const configFilePath = './config/config.json'; // Not modifiable

const optionsFile: fs.ObjectEncodingOptions = {
    encoding: 'utf-8',
};

export function readFile(filePath: string): string {
    const data = fs.readFileSync(filePath, optionsFile);

    if (typeof data !== 'string') {
        throw new Error(`Error reading '${filePath}'`);
    }

    return data;
}

export function getConfig(): Config {
    const data = readFile(configFilePath);

    const config = JSON.parse(data);

    return config;
}

export function getRows(fileName: string | undefined): string[] {
    const data = readFile(fileName || fileInPath);

    const rows = data.split(/\r?\n/);

    if (rows.length === 0) {
        throw new Error('The file is empty');
    }

    return rows;
}

export function printRows(rows: string[], fileName: string | undefined): void {
    fs.writeFileSync(fileName || fileOutPath, rows.join('\n'));
}
