import { test } from "node:test";
import assert from "node:assert/strict";
import { validateContact, escapeHtml } from "../utils/contact-validation.mjs";

const valid = { firstName: " Test ", lastName: " Person ", email: "person@example.technology", message: " A website enquiry. " };
test("validates and trims fields, supports modern email suffixes", () => {
  assert.deepEqual(validateContact(valid), { firstName: "Test", lastName: "Person", email: valid.email, message: "A website enquiry." });
});
test("rejects missing, whitespace, wrong types and oversized fields", () => {
  for (const data of [null, [], {}, { ...valid, message: " " }, { ...valid, firstName: {} }, { ...valid, message: "x".repeat(5001) }, { ...valid, email: "a@b.com\r\nBcc: spam@example.com" }]) assert.equal(validateContact(data), null);
});
test("escapes untrusted email HTML", () => {
  assert.equal(escapeHtml('<a href="bad">&\'text</a>'), "&lt;a href=&quot;bad&quot;&gt;&amp;&#39;text&lt;/a&gt;");
});
