export interface CreditAccount {
    id?: number,
    name: string,
    creditAvailable: number,
    creditLimit: number,
    annualFee: number,
    lastStatementDate: Date,
    lastStatementBalance: number,
    lastPaymentDate: Date,
    lastPaymentAmount: number,
    rewardsProgramDetails: string
}
