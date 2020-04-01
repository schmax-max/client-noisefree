import React from "react"
import Adapter from "enzyme-adapter-react-16"
import { shallow, configure } from "enzyme"
import { findByTestAttr } from "../../../test/testUtils"
import { Search } from "./search"
configure({ adapter: new Adapter() })

const setup = () => {
  return shallow(<Search />)
}

describe("Search", () => {
  it("should render correctly", () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, "search")
    expect(component.length).toBe(1)
  })
})
