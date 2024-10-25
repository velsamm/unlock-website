import { UnlockMarketAccounts } from '$components/Services/UnlockMarketAccounts/UnlockMarketAccounts';
import { UnlockBankAccounts } from '$components/Services/UnlockBankAccounts/UnlockBankAccounts';

export const UnlockServices = () => {
    return (
        <>
            <div className="help-title">
                <span>Мы можем помочь:</span>
            </div>

            <UnlockMarketAccounts />
            <UnlockBankAccounts />
        </>
    )
}
