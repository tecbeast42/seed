import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TButton from "../TButton.vue";

describe("TButton", () => {
  it("renders properly", () => {
    const wrapper = mount(TButton, {
      slots: {
        default: "button content",
      },
    });
    expect(wrapper.text()).toContain("button content");
  });
});
