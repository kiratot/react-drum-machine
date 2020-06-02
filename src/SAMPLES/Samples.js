import BassLoop2 from "./Bass Loop_02 - D.wav";
import BassLoop3 from "./Bass Loop_03 - D.wav";
import BassLoop8 from "./Bass Loop_08 - D.wav";
import SynthLoop2 from "./Synth Loop_02 - D.wav";

import TopLoop17 from "./Top Loop_128_17.wav";
import TopLoop7 from "./TopLoop7.wav";
const samples = [
  {
    keyBinding: "q",
    name: "loopq",
    audio: BassLoop2,
  },
  {
    keyBinding: "w",
    name: "loopw",
    audio: BassLoop3,
  },
  {
    keyBinding: "e",
    name: "loope",
    audio: BassLoop8,
  },
  {
    keyBinding: "a",
    name: "loopa",
    audio: TopLoop7,
  },
  {
    keyBinding: "s",
    name: "loops",
    audio: TopLoop17,
  },
  {
    keyBinding: "d",
    name: "loopd",
    audio: SynthLoop2,
  },
  {
    keyBinding: "z",
    name: "loopz",
    audio: SynthLoop2,
  },
  {
    keyBinding: "x",
    name: "loopx",
    audio: SynthLoop2,
  },
  {
    keyBinding: "c",
    name: "loopc",
    audio: SynthLoop2,
  },
];
export default samples;
