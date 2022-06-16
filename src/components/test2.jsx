function test2(props){
    // const expenseDate = new Date(2022, 4, 27)
    // const expenseTitle = "Daturlash tili"
    // const expenseAmount = 35000
    // console.log(expenseAmount)

    return(
        <div>
            sana:{props.date.toISOString()}
            <h2>Sabab: {props.title}</h2>
            <h3>Narx:{props.amount} uzs</h3>
        </div>
    )
}
export default test2;