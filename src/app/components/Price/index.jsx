import { Percent } from 'src/app/components/Price/Percent'
import { Result } from 'src/app/components/Price/Result'

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
