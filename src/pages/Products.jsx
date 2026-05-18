import UseProducts from "../customHoook/UseProducts"

const Products = () => {
    const { products, loading, error } = UseProducts("https://dummyjson.com/products")
    console.log(products)
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Something went wrong...</h1>
    }
    return (
        <>
            <div style={{display: "flex",flexWrap: "wrap", gap: "20px",justifyContent: "center",marginTop: "20px"}}
            >

                {
products.map((p, i) => {
                        return (
                    <div key={i}style={{width: "250px", border: "1px solid black",padding: "15px", borderRadius: "10px",display: "flex",flexDirection: "column" }}
                            >
                                <h3>{p.title}</h3>

                                <p>{p.description}</p>

                                <p>Price: ${p.price}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>

    )
}

export default Products
