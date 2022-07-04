export class Config {
    fileInPath: string;
    fileOutPath: string;
    exemptKeywords: string[];

    constructor(
        fileInPath: string,
        fileOutPath: string,
        exemptKeywords: string[]
    ) {
        this.fileInPath = fileInPath;
        this.fileOutPath = fileOutPath;
        this.exemptKeywords = exemptKeywords;
    }
}
