import {render, screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact page test cases", ()=>{   //describe is  used to contain multiple testcases
  test("shuld load contact us component", ()=>{
      render(<Contact />);

      // Querying
      const header = screen.getByRole("heading")

      //Assertion
      expect(header).toBeInTheDocument();
  })

  it("shuld load name input", ()=>{ 
    render(<Contact />);

    // Querying
    const nameInput = screen.getByPlaceholderText("name")
    console.log(nameInput) // gives react element
    //Assertion
    expect(nameInput).toBeInTheDocument();
})

test("shuld load name input", ()=>{
  render(<Contact />);

  // Querying
  const nameInput = screen.getByPlaceholderText("name")
  console.log(nameInput) // gives react element
  //Assertion
  expect(nameInput.type).toBe('text');
})
})