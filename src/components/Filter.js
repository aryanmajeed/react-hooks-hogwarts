import React from 'react'

export default function Filter({ hanldeFilterGrease, handleSort }) {
    function changeGreaseFilter() {
        hanldeFilterGrease(prev => !prev)
    }
    function changeSort(e) {
        handleSort(e.target.value)
    }
    return (
        <div>
            show greased:
            <input type="checkbox" onChange={changeGreaseFilter} />
            <div>sort based on:
                <input type="radio" value="weight" name="sort" onChange={changeSort} /> Weight
                <input type="radio" value="name" name="sort" onChange={changeSort} /> Name
            </div>
            <br />
        </div>
    )
}
