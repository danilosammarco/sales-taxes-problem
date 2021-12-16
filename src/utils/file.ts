import fs from 'fs';

import { Config } from '../interface';

const fileInPath = './input/test2.txt';
const fileOutPath = './output/output.txt';
const configFilePath = './config/config.json';

const optionsFile: fs.ObjectEncodingOptions = {
    encoding: 'utf-8',
};

function readFile(filePath: string): string {
    const data = fs.readFileSync(filePath, optionsFile);

    if (typeof data !== 'string') {
        throw new Error(`Error reading '${filePath}'`);
    }

    return data;
}

export function getConfig(): Config {
    const data = readFile(configFilePath);

    // TODO: Check if is JSON
    const config = JSON.parse(data);

    return config;
}

export function getRows(): string[] {
    const data = readFile(fileInPath);

    const rows = data.split(/\r?\n/);

    if (rows.length === 0) {
        throw new Error('The file is empty');
    }

    return rows;
}

export function printRows(rows: string[]): void {
    fs.writeFileSync(fileOutPath, rows.join('\n'));
}
