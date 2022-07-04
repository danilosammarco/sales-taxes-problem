import { FileManager } from './FileManager';

export class Config {
    fileInPath: string;
    fileOutPath: string;
    exemptKeywords: string[];

    private configFilePath = './config/config.json';

    constructor() {
        const fileManager = new FileManager();
        const config = JSON.parse(fileManager.readFile(this.configFilePath));

        this.fileInPath = config.fileInPath;
        this.fileOutPath = config.fileOutPath;
        this.exemptKeywords = config.exemptKeywords;
    }
}
