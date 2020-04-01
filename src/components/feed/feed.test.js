import React from "react"
import Adapter from "enzyme-adapter-react-16"
import { shallow, configure } from "enzyme"
import { findByTestAttr } from "../../../test/testUtils"
import { Feed } from "./feed"
configure({ adapter: new Adapter() })

const setup = () => {
  return shallow(<Feed />)
}

describe("Feed", () => {
  it("should render correctly", () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, "feed")
    expect(component.length).toBe(1)
  })
})
