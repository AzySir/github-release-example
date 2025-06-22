import { describe, it, vi, expect } from "vitest";
import { getMetaData } from "./index.js";
import { releaseEventBody } from "./mock/releaseEvent.js";

it("reads metadata correctly", async () => {
  expect(getMetaData(releaseEventBody)).toStrictEqual({
    name: "Azy",
    author: {
      login: "AzySir",
    },
    body: `1) CREATE NEW TEXT BOX FOR MOOD\r\n2) CREATE NEW API ENDPOIN CALLED /GET/MOOD`,
    created_at: "2024-10-29T15:06:29Z",
    name: "New Customer Mood",
    published_at: "2024-10-29T16:16:06Z",
    tag_name: "v3.2",
  });
});
