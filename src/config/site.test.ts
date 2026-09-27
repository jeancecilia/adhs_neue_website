import {expect,it} from "vitest";
import {siteConfig} from "./site";

it("shows the same WhatsApp number as the destination",()=>{
 expect(siteConfig.whatsappDisplay.replace(/\D/g,""))
  .toBe(new URL(siteConfig.whatsappHref).pathname.slice(1));
});
