import React from 'react';
import styled from "styled-components";


const StyledDropdown = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    
    select {
        margin: 0px 10px;
    }
    label {
        margin-bottom: 2px;
        font-size: 17px;
        display: flex;
        align-items: center;
    }

`


function Dropdown(props) {


    const options = props.timezones.map(
        (tz) => {
        return <option value={`${tz}`} key={`${tz}`}>{tz}</option>
        }
    )

    const timezone = props.loadTimezone()['tz']

    return (
        <StyledDropdown>
            <label htmlFor="timezones">Display schedule in timezone:</label>

            <select onChange={props.onChange} name="timezones" id="timezone-dropdown" defaultValue={timezone}>
                {options}
            </select>
        </StyledDropdown>
    );
}

export default Dropdown;