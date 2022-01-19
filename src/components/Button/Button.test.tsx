import React from "react";
import { render } from "@testing-library/react";
import Button from "./button-2.0";
test("fitst test",()=>{
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const wrapper=render(<Button>test</Button>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element=wrapper.queryByText("test")
    expect(element).toBeTruthy()
})