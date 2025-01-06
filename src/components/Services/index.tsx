import { UnlockMarketAccounts } from '$components/Services/UnlockMarketAccounts/UnlockMarketAccounts';
import { UnlockBankAccounts } from '$components/Services/UnlockBankAccounts/UnlockBankAccounts';

export const UnlockServices = () => {
    return (
        <>
            <div className="text-2xl md:text-6xl mb-16">
                <span>Мы можем помочь:</span>
            </div>

            <UnlockMarketAccounts />
            <UnlockBankAccounts />
        </>
    )
}
