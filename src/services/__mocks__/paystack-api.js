/* eslint-disable consistent-return */
export const PaystackProviderServiceMock = {
  transaction: {
    verify: jest.fn().mockImplementation(({ reference }) => {
      if (reference === "123-failed") {
        return Promise.resolve({
          data: {
            status: "failed",
            paystackTxId: "123",
            paystackTxData: "12345",
          },
        });
      }
      if (reference === "123-passed") {
        return Promise.resolve({
          data: {
            status: "success",
            paystackTxId: "123",
            paystackTxData: "12345",
          },
        });
      }
      if (reference === "123-undefined") {
        return Promise.resolve({
          data: {
            status: false,
            paystackTxId: "123",
            paystackTxData: "12345",
          },
        });
      }
    }),

    get: jest.fn().mockImplementation(({ id }) => {
      //   console.log(id, "id=gett");

      switch (id) {
        case {}:
          return null;

        case "success":
          return Promise.resolve({
            data: {
              status: "success",
              paystackTxId: "123",
              paystackTxData: "12345",
            },
          });
        default:
          return Promise.resolve({
            data: {
              status: "pending",
              paystackTxId: "123",
              paystackTxData: "12345",
            },
          });
      }
    }),
  },
};

const paystackapi = jest.fn(() => PaystackProviderServiceMock);

export default paystackapi;
