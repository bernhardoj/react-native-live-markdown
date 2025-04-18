import {MarkdownTextInput} from '../src';
import type {parseExpensiMark} from '../src';

global.jsi_setMarkdownRuntime = jest.fn();
global.jsi_registerMarkdownWorklet = jest.fn();
global.jsi_unregisterMarkdownWorklet = jest.fn();

const parseExpensiMarkMock: typeof parseExpensiMark = () => {
  'worklet';

  return [];
};

const getWorkletRuntimeMock = () => ({});

export {MarkdownTextInput, parseExpensiMarkMock as parseExpensiMark, getWorkletRuntimeMock as getWorkletRuntime};
