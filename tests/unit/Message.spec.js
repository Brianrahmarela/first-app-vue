import {mount} from "@vue/test-utils";
import Message from "../../src/components/views/Message.vue"

describe("Message.vue", () => {
  it("renders props.mdg when passed", () => {
    const wrapper = mount(Message, {
        msg: "abc"
    });
    expect(wrapper.text()).toContain("ab");
  });
});