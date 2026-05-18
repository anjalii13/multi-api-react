import axios from "axios"
import { useEffect, useState } from "react"

const UseProducts = (initialURL) => {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    async function fetchProducts() {
        const res = await axios.get(initialURL)
        try {
            if (res.data.products) {
                setProducts(res.data.products)

            } else if (res.data.meals) {
                setProducts(res.data.meals)
            }
             else {
                setError(true)

            }
        } catch (error) {
            setError(error)
            console.log(error)
        } finally {
            setLoading(false)
        }
        // if(res.data){
        //     setProducts(res.data)
        //     setLoading(false)
        // }else{
        //     setError(true)
        //     setLoading(false)
        // }
    }

    useEffect(() => {
        fetchProducts()
    }, [initialURL])

    return { products, loading, error }

}
export default UseProducts
