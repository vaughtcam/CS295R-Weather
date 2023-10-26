import { useState } from "react";

function ZipForm ( {onSubmit} ) {
    const [zipcode, setZipcode] = useState("");

    const handleChange = (event) => {
        setZipcode(event.target.value);
      };

      const handleSubmit = (event) => {
         event.preventDefault();

    
        onSubmit(zipcode);
      };

// In the return, you may want to add event handler to the event inside the form tag as onSubmit = {handleSubmit}
    return (
        <div>
            <div className="zip-form">
                <form onSubmit={handleSubmit}id="zipForm"> 
                    <div className="flex-parent">
                        <label for="zipcode">Zip</label>
                        <input className="form-control"
                            type="input" id="zipcode" name="zipcode"
                            value={zipcode} required onChange={handleChange}
                        />
                        <button type="submit" class="btn btn-success"> Get the forecast!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ZipForm