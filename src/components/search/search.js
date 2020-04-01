import React, { useEffect } from "react"
import {
  MDBContainer,
  MDBIcon,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
} from "mdbreact"
import PropTypes from "prop-types"
import "./search.css"

export const Search = ({ setSearchTerms }) => {
  // const [searchValue, setSearchValue] = React.useState("")
  // console.log({ searchValue })

  //
  return (
    <div className="standardWidth centering verticalSpacing">
      <input
        className="form-control standardWidth m-0 p-6"
        type="text"
        placeholder="search"
        aria-label="search"
        onKeyPress={e => {
          if (e.charCode === 13) {
            setSearchTerms(e.target.value)
          }
        }}
      />
      {/* <MDBIcon icon="search" /> */}
      {/* </form> */}
    </div>
  )
}

// getValue={value => getValueOfSelectOne(value)}

// const getValueOfSelectOne = value => {
//   console.log(value)
// }

{
  /* <MDBCol md="6">
  <MDBSelect>
    <MDBSelectInput selected="Choose your option" />
    <MDBSelectOptions search>
      <MDBSelectOption disabled>Choose your option</MDBSelectOption>
      <MDBSelectOption>Lakers</MDBSelectOption>
      <MDBSelectOption>Rockets</MDBSelectOption>
      <MDBSelectOption>Warriors</MDBSelectOption>
      <MDBSelectOption>Clippers</MDBSelectOption>
      <MDBSelectOption>Bucks</MDBSelectOption>
    </MDBSelectOptions>
  </MDBSelect>
</MDBCol> */
}

// Search.propTypes = {
//   // item: PropTypes.object.isRequired,
// }
