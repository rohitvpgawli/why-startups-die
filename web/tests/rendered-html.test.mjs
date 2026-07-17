import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the evidence explorer", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Startup Graveyard/);
  assert.match(html, /What happened/);
  assert.match(html, /Evidence first/);
  assert.match(html, /Cydoc/);
  assert.match(html, /Torrenegra Organization/);
  assert.match(html, /Flynn/);
  assert.match(html, /Artifact/);
  assert.match(html, /Convoy/);
  assert.match(html, /Quesma Database Gateway/);
  assert.match(html, /Argo AI/);
  assert.match(html, /Builder.ai/);
  assert.match(html, /Veev/);
  assert.match(html, /Ghost Autonomy/);
  assert.match(html, /The Messenger/);
  assert.match(html, /Pebble \(T2\)/);
  assert.match(html, /Bowery Farming/);
  assert.match(html, /Phantom Auto/);
  assert.match(html, /Hyperloop One/);
  assert.match(html, /Superpedestrian/);
  assert.match(html, /Weaveworks/);
  assert.match(html, /IronNet/);
  assert.match(html, /Northvolt/);
  assert.match(html, /727(?:<!-- -->)? companies/);
  assert.match(html, /public directory records/);
  assert.match(html, /YC directory status · not outcomes/);
  assert.match(html, /2021 sale candidates pending review/);
  assert.match(html, /3(?:<!-- -->)? founded-2021 records verified/);
  assert.match(html, /3(?:<!-- -->)? reviewed right-censored operating records/);
  assert.match(html, /0(?:<!-- -->)? high-priority financing review remaining/);
  assert.match(html, /Launch gate: <!-- -->0<!-- -->\/100 reviewed cohort-eligible companies/);
  assert.match(html, /Browse the full frame/);
  assert.match(html, /Showing <!-- -->727<!-- --> of <!-- -->727<!-- --> companies/);
  assert.match(html, /Abatable/);
  assert.match(html, /Carbon markets platform and solutions/);
  assert.match(html, /<strong>57<\/strong><span>reviewed stories<\/span>/);
  assert.doesNotMatch(html, /NewsTilt|Quibi|Fieldbook/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("renders transparent research caveats and source links", async () => {
  const html = await (await render()).text();
  assert.match(html, /Launch gate: <!-- -->0<!-- -->\/100 reviewed cohort-eligible companies/);
  assert.match(html, /Selection bias is visible/);
  assert.match(html, /Cohort membership is never inferred from an outcome date/);
  assert.match(html, /https:\/\/news\.ycombinator\.com\/item\?id=26298010/);
  assert.match(html, /editorial confidence/);
});
