import * as React from "react";
import Collapsible from "react-collapsible";
import ProductsGrid from "./Components/ProductsGrid";
import { Button } from "@progress/kendo-react-buttons";

const editField = "inEdit";
function setDefault() {
  return "test";
}

const App = () => {
  return (
    <div>
      <Collapsible
        trigger={
          <Button
            icon="k-icon k-i-arrow-chevron-down"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-grid-edit-command"
          >
            {"View expanded"}
          </Button>
        }
        triggerWhenOpen={
          <Button
            icon="k-icon k-i-arrow-chevron-up"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-grid-edit-command"
          >
            {"Collapse"}
          </Button>
        }
        isOpened={true}
      >
        <ProductsGrid />
      </Collapsible>

      <input type="text" defaultValue={setDefault()} />
    </div>
  );
};

export default App;
