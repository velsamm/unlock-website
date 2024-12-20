import { Percent } from '$components/Price/Percent'
import { Result } from '$components/Price/Result'

export const Price = () => {
    return (
        <>
            <div className="mt-20 mb-10 text-6xl">
                <span>Стоимость наших услуг</span>
            </div>

            <Percent />
            <Result />
        </>
    )
}
