import { Percent } from '$components/Price/Percent'
import { Result } from '$components/Price/Result'

export const Price = () => {
    return (
        <>
            <div className="price">
                <span>Стоимость наших услуг</span>
            </div>

            <Percent />
            <Result />
        </>
    )
}
