const { atom } = require("recoil");

export const inputValue = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const country_ = atom({
  key: "country", // unique ID (with respect to other atoms/selectors)
  default: "Select Country", // default value (aka initial value)
});

export const page_ = atom({
  key: "country", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});
