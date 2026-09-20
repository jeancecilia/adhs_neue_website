import { it, expect, vi } from "vitest";
import worker from "./index.js";
it("delivers a whitelisted source summary and unique inquiry reference without raw click identifiers", async () => {
 const now=Date.now(), touch={source:"google_ads",campaign:"24170826692",at:now};
 const send=vi.fn().mockResolvedValue({messageId:"unit-test-receipt"});
 const body={name:"TECHNISCHER TEST",email:"test@example.com",service:"adhs-diagnostik",healthDataConsent:true,website:"",
  attribution:{version:1,first:touch,last:touch,expires:now+86400000,gclid:"must-not-be-sent"},reportedSource:"recommendation"};
 const r=await worker.fetch(new Request("https://neurofeedback-praxis-muenchen.de/api/contact",{method:"POST",headers:{Origin:"https://neurofeedback-praxis-muenchen.de","Content-Type":"application/json"},body:JSON.stringify(body)}),{EMAIL:{send}});
 expect(r.status).toBe(200);expect((await r.json()).accepted).toBe(true);
 const mail=send.mock.calls[0][0];
 expect(mail.text).toContain("Google Ads");expect(mail.text).toContain("Persönliche Empfehlung");
 expect(mail.text).toMatch(/Vorgangsnummer: [a-f0-9-]{36}/);
 expect(mail.text).not.toContain("must-not-be-sent"); expect(mail.html).toContain("INTERNE HERKUNFTSZUORDNUNG");
});

