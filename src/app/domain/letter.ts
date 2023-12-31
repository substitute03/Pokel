export class Letter {
    public value: string = "";
    public isFocus: boolean = false;
    public matchType: MatchType = 'unknown'

    constructor(letter: string) {
        this.setValue(letter);
    }

    public setValue(value: string): void {
        if (this.isValid(value)) {
            this.value = value;
        }
    }

    public deleteValue(): void {
        this.value = "";
    }

    private isValid(value: string): boolean {
        if ((/^[A-Za-z]$/.test(value)) && value.length === 1) {
            return true;
        }

        return false;
    }
}

export type MatchType = 'exact' | 'fuzzy' | 'none' | 'game_over' | 'unknown';