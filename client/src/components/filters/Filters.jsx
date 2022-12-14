function Filter(props){
    return(
        <div>
            <select onChange={e=> props.handleFilter(e) }>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <select >
                <option value={false}>-----</option>
                <option value="name">A-Z</option>
                <option value="name">Z-A</option>
                <option value="population">Max-population</option>
                <option value="population">Min-population</option>
            </select>
            
        </div>
    )

}
export default Filter