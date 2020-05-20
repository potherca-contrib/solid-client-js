import {
  fetchLitDataset,
  saveLitDatasetAt,
  saveLitDatasetInContainer,
  getThingOne,
  getThingAll,
  setThing,
  removeThing,
  createThing,
  asIri,
  getIriOne,
  getBooleanOne,
  getDatetimeOne,
  getDecimalOne,
  getIntegerOne,
  getStringInLocaleOne,
  getStringUnlocalizedOne,
  getIriAll,
  getBooleanAll,
  getDatetimeAll,
  getDecimalAll,
  getIntegerAll,
  getStringInLocaleAll,
  getStringUnlocalizedAll,
  getLiteralOne,
  getNamedNodeOne,
  getLiteralAll,
  getNamedNodeAll,
  addIri,
  addBoolean,
  addDatetime,
  addDecimal,
  addInteger,
  addStringInLocale,
  addStringUnlocalized,
  addLiteral,
  addNamedNode,
  setIri,
  setBoolean,
  setDatetime,
  setDecimal,
  setInteger,
  setStringInLocale,
  setStringUnlocalized,
  setLiteral,
  setNamedNode,
  removeAll,
  removeIri,
  removeBoolean,
  removeDatetime,
  removeDecimal,
  removeInteger,
  removeStringInLocale,
  removeStringUnlocalized,
  removeLiteral,
  removeNamedNode,
  unstable_fetchLitDatasetWithAcl,
} from "./index";

// These tests aren't too useful in preventing bugs, but they work around this issue:
// https://github.com/facebook/jest/issues/10032
it("exports the public API from the entry file", () => {
  expect(fetchLitDataset).toBeDefined(),
    expect(saveLitDatasetAt).toBeDefined(),
    expect(saveLitDatasetInContainer).toBeDefined(),
    expect(getThingOne).toBeDefined(),
    expect(getThingAll).toBeDefined(),
    expect(setThing).toBeDefined(),
    expect(removeThing).toBeDefined(),
    expect(createThing).toBeDefined(),
    expect(asIri).toBeDefined(),
    expect(getIriOne).toBeDefined(),
    expect(getBooleanOne).toBeDefined(),
    expect(getDatetimeOne).toBeDefined(),
    expect(getDecimalOne).toBeDefined(),
    expect(getIntegerOne).toBeDefined(),
    expect(getStringInLocaleOne).toBeDefined(),
    expect(getStringUnlocalizedOne).toBeDefined(),
    expect(getIriAll).toBeDefined(),
    expect(getBooleanAll).toBeDefined(),
    expect(getDatetimeAll).toBeDefined(),
    expect(getDecimalAll).toBeDefined(),
    expect(getIntegerAll).toBeDefined(),
    expect(getStringInLocaleAll).toBeDefined(),
    expect(getStringUnlocalizedAll).toBeDefined(),
    expect(getLiteralOne).toBeDefined(),
    expect(getNamedNodeOne).toBeDefined(),
    expect(getLiteralAll).toBeDefined(),
    expect(getNamedNodeAll).toBeDefined(),
    expect(addIri).toBeDefined(),
    expect(addBoolean).toBeDefined(),
    expect(addDatetime).toBeDefined(),
    expect(addDecimal).toBeDefined(),
    expect(addInteger).toBeDefined(),
    expect(addStringInLocale).toBeDefined(),
    expect(addStringUnlocalized).toBeDefined(),
    expect(addLiteral).toBeDefined(),
    expect(addNamedNode).toBeDefined(),
    expect(setIri).toBeDefined(),
    expect(setBoolean).toBeDefined(),
    expect(setDatetime).toBeDefined(),
    expect(setDecimal).toBeDefined(),
    expect(setInteger).toBeDefined(),
    expect(setStringInLocale).toBeDefined(),
    expect(setStringUnlocalized).toBeDefined(),
    expect(setLiteral).toBeDefined(),
    expect(setNamedNode).toBeDefined(),
    expect(removeAll).toBeDefined(),
    expect(removeIri).toBeDefined(),
    expect(removeBoolean).toBeDefined(),
    expect(removeDatetime).toBeDefined(),
    expect(removeDecimal).toBeDefined(),
    expect(removeInteger).toBeDefined(),
    expect(removeStringInLocale).toBeDefined(),
    expect(removeStringUnlocalized).toBeDefined(),
    expect(removeLiteral).toBeDefined(),
    expect(removeNamedNode).toBeDefined();
    expect(unstable_fetchLitDatasetWithAcl).toBeDefined();
});
