import fs from 'fs';

import { Config } from './Config';

export class FileManager {
    private optionsFile: fs.ObjectEncodingOptions = { encoding: 'utf-8' };
    private configFilePath = './config/config.json';

    readFile(filePath: string): string {
        const data = fs.readFileSync(filePath, this.optionsFile);

        if (typeof data !== 'string') {
            throw new Error(`Error reading '${filePath}'`);
        }

        return data;
    }

    getRows(fileName: string): string[] {
        const data = this.readFile(fileName);

        const rows = data.split(/\r?\n/);

        if (rows.length === 0) {
            throw new Error('The file is empty');
        }

        return rows;
    }

    postRows(rows: string[], fileName: string): void {
        const printString = rows.join('\n');

        console.log(printString);

        const folders = fileName.split(/^(.+)\/([^\/]+)$/)[1];

        if (!fs.existsSync(folders)) {
            fs.mkdirSync(folders, {
                recursive: true,
            });
        }
        fs.writeFileSync(fileName, printString, { flag: 'w' });
    }

    getConfig(): Config {
        const config = JSON.parse(this.readFile(this.configFilePath));
        return new Config(
            config.fileInPath,
            config.fileOutPath,
            config.exemptKeywords
        );
    }
}
