export interface UniversityI {
    name: string;
    dept: string;
    graduation ?: (year: number) => void;
}
