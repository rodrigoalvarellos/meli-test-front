import { getByTestId, render } from "@testing-library/react";
import { Breadcrumbs, DATA_TESTID } from "./Breadcrumbs";
import { Category } from "../../interfaces/category.interface";
import { CATEGORIES_MOCK } from "../../mocks/categories.mock";

const categories: Category[] = CATEGORIES_MOCK;

describe("Breadcrumb Test suit", () => {
  test("should be rendered succesfully", () => {
    const { container } = render(<Breadcrumbs categories={categories} />);
    const bcNav = getByTestId(container, DATA_TESTID);
    expect(bcNav).toBeTruthy();
  });

  test("should have 4 items", () => {
    const { container } = render(<Breadcrumbs categories={categories} />);
    const bcNav = getByTestId(container, DATA_TESTID);
    const listItems = bcNav.querySelectorAll("li");
    expect(listItems).toHaveLength(4);
  });

  test(`shoud have a link with text "${categories[0].name}"`, () => {
    const { container } = render(<Breadcrumbs categories={categories} />);
    const bcNav = getByTestId(container, DATA_TESTID);
    expect(bcNav).toHaveTextContent(categories[0].name);
  });
});
