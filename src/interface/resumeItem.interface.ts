export default interface ResumeItem {
    id: string;
    month: string;
    balance: number;
    expenses: number;
    closed?: boolean;
}