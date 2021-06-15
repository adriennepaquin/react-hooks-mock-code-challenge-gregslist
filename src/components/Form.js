import { useState } from "react"

function Form({ addNewListing }) {
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    })
    // console.log(formData)

    const handleForm = (e) => {
        e.preventDefault()
        console.log(formData)
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => addNewListing(data))
    }

    return (
        <div>
            <h3>List A New Item</h3>
            <form  onSubmit={handleForm}>
                <label>Item Image:</label>
                <input
                    type="text"
                    id="image"
                    placeholder="image url here"
                    value={formData.image}
                    onChange={(e) => setFormData({
                        ...formData, image: e.target.value
                    })}
                /><br></br>
                <label>Item Location:</label>
                <input
                    type="text"
                    id="location"
                    placeholder="image location"
                    value={formData.location}
                    onChange={(e) => setFormData({
                        ...formData, location: e.target.value
                    })}
                /><br></br>
                <label>Item Description:</label>
                <input
                    type="text"
                    id="descr"
                    placeholder="image description"
                    value={formData.description}
                    onChange={(e) => setFormData({
                        ...formData, description: e.target.value
                    })}
                /><br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form