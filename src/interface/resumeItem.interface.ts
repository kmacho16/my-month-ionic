export default interface ResumeItem {
    id: string;
    month: string;
    balance: number;
    expenses: number;
    credit: number;
    closed?: boolean;
}