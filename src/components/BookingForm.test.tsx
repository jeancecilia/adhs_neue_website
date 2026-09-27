// @vitest-environment jsdom
import {act} from "react";
import {createRoot, type Root} from "react-dom/client";
import {beforeEach,afterEach,describe,it,expect,vi} from "vitest";
import BookingForm from "./BookingForm";
const mocks=vi.hoisted(()=>({track:vi.fn(),fetch:vi.fn()}));
vi.mock("next/navigation",()=>({useSearchParams:()=>new URLSearchParams("anliegen=diagnostik")}));
vi.mock("@/lib/analytics",()=>({trackAnalyticsEvent:mocks.track}));
vi.mock("@/lib/attribution",()=>({getAttribution:()=>({})}));
let root:Root;let host:HTMLDivElement;
beforeEach(async()=>{
 Object.assign(globalThis,{IS_REACT_ACT_ENVIRONMENT:true});
 sessionStorage.clear();mocks.track.mockReset().mockReturnValue(true);mocks.fetch.mockReset();vi.stubGlobal("fetch",mocks.fetch);
 host=document.createElement("div");document.body.append(host);root=createRoot(host);
 await act(async()=>root.render(<BookingForm/>));
});
afterEach(async()=>{await act(async()=>root.unmount());host.remove();vi.unstubAllGlobals();});
async function input(id:string,value:string){
 const el=host.querySelector<HTMLInputElement>(`#${id}`)!;
 await act(async()=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value")!.set!.call(el,value);el.dispatchEvent(new Event("input",{bubbles:true}));});
}
async function ready(){await input("form-name","PRIVATE NAME");await input("form-email","private@example.invalid");await act(async()=>host.querySelector<HTMLInputElement>("#form-health-data-consent")!.click());mocks.track.mockClear();}
async function submit(){await act(async()=>{host.querySelector("form")!.dispatchEvent(new Event("submit",{bubbles:true,cancelable:true}));});}
describe("contact funnel diagnostics",()=>{
 it("does not track a form start merely for rendering; first edit is tracked once without field values",async()=>{
  expect(mocks.track).not.toHaveBeenCalled();await input("form-name","PRIVATE NAME");await input("form-email","private@example.invalid");
  expect(mocks.track.mock.calls).toEqual([["contact_form_start",{method:"contact_form"}]]);
 });
 it("retries the start if consent did not allow the initial event",async()=>{
  mocks.track.mockReturnValueOnce(false);await input("form-name","PRIVATE NAME");await input("form-email","private@example.invalid");
  expect(mocks.track).toHaveBeenCalledTimes(2);
 });
 it("does not count editing the honeypot as starting the form",async()=>{await input("form-website","bot");expect(mocks.track).not.toHaveBeenCalled();});
 it("counts a lead only after explicit backend acceptance",async()=>{
  await ready();mocks.fetch.mockResolvedValue(new Response(JSON.stringify({ok:true,accepted:true})));await submit();
  expect(mocks.track.mock.calls).toEqual([["contact_form_submit",{method:"contact_form"}],["generate_lead",{method:"contact_form"}]]);
 });
 it.each(["rejected","http-error","network-error"])("keeps %s out of successful leads",async(mode)=>{
  await ready();if(mode==="network-error")mocks.fetch.mockRejectedValue(new Error("failed"));else mocks.fetch.mockResolvedValue(new Response(JSON.stringify({ok:mode!=="http-error",accepted:false}),{status:mode==="http-error"?502:200}));await submit();
  expect(mocks.track.mock.calls).toEqual([["contact_form_submit",{method:"contact_form"}],["contact_form_error",{method:"contact_form"}]]);
  expect(host.querySelector('[role="alert"]')).not.toBeNull();
 });
 it("does not send or count an invalid submission",async()=>{await submit();expect(mocks.fetch).not.toHaveBeenCalled();expect(mocks.track).not.toHaveBeenCalled();});
});
