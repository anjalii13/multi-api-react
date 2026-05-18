import UseProducts from "../customHoook/UseProducts"

const Receipes = () => {

  const { products, loading, error } =
    UseProducts("https://www.themealdb.com/api/json/v1/1/search.php?s=")

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Something went wrong...</h1>
  }

  return (

    <>
      <div style={{display: "flex",flexWrap: "wrap", gap: "20px",justifyContent: "center",marginTop: "20px"
        }}
      >

        {
          products.map((p, i) => {
            return (

              <div
                key={i}style={{ width: "250px",border: "1px solid black",padding: "15px",borderRadius: "10px",display: "flex", flexDirection: "column"}}
              >


                <img
                  src={p.strMealThumb}
                  alt={p.strMeal}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }}
                />


                <h3>{p.strMeal}</h3>


                <p>
                  {p.strInstructions.slice(0, 100)}...
                </p>


                <p>
                  <b>Category:</b> {p.strCategory}
                </p>

              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Receipes