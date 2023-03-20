import { useContext } from 'react'
import Context from '../../context/Context'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';


export default function CartsChart() {

    const { selectedCart } = useContext(Context);

    const productTitles = selectedCart?.products.map(product => product.title).map(title => title.split(' '))

    const productPrices = selectedCart?.products.map(product => product.price)

    const productPricesDiscount = selectedCart?.products.map(product => product.price * (1 - product.discountPercentage / 100))

    const data = {
        labels: productTitles,
        datasets: [
            {
                label: 'Regular price',
                data: productPrices
            },
            {
                label: 'Discounted price',
                data: productPricesDiscount
            },
        ]
    };

    return (
        <Line data={data} />
    )
}

