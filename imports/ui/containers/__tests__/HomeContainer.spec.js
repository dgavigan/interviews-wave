import { mapStateToProps, mapDispatchToProps } from "../HomeContainer";

describe("HomeContainer", () => {
  it("should test mapStateToProps", () => {
    const payments = [];
    const inputState = {
      payroll: {
        payroll: payments
      }
    };
    expect(mapStateToProps(inputState).payments).toBe(payments);
  });
});
