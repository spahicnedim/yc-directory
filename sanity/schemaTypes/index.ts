import { type SchemaTypeDefinition } from "sanity";
import { autor } from "@/sanity/schemaTypes/author";
import { startup } from "@/sanity/schemaTypes/startup";
import { playlist } from "@/sanity/schemaTypes/playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [autor, startup, playlist],
};
