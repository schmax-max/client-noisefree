import React from "react"
import Adapter from "enzyme-adapter-react-16"
import { shallow, configure } from "enzyme"
import { findByTestAttr, checkProps } from "../../../test/testUtils"
import { Content } from "./content"
configure({ adapter: new Adapter() })

const itemInput = {
  body: {
    core: {
      title: "Insert sensationalist title here",
      publisher: "Ad-whore",
      content_minutes: 4,
      image: "https://",
    },
  },
  content_url: "https://",
  amp_url: "https://",
}

const setup = item => {
  return shallow(<Content item={itemInput} />)
}

describe("content", () => {
  it("should render content component", () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, "content")
    expect(component.length).toBe(1)
  })

  it("does not throw warning with expected props", () => {
    checkProps(Content, { item: itemInput })
  })
})
