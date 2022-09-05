

import { render, screen  } from "@testing-library/react";
import { LoadingComponent } from "../components/HomePage/LoadingComponent";


test("renders home page",()=>{
  render(<LoadingComponent/>);
})