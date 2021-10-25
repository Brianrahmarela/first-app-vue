import {shallowMount} from "@vue/test-utils";
import Dashboard from "../../src/components/views/Dashboard.vue"

describe("Dashboard.vue", () => {
  it("form submitted perfectly", () => {
    const wrapper = shallowMount(Dashboard);
    // const form = wrapper.get('[data-test="submitted"]').setValue(

    // )
    const form = wrapper.get('[data-test="submitted"]').trigger('submit')
    console.log(form)
    expect(form.name).toContainEqual(expect.objectContaining({name: 'brian', nik: '1234', alamat: "jl", tanggalLahir: ""}));
  });
});