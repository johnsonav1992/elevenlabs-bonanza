import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import { readFileSync } from "fs";
import "dotenv/config";

const elevenlabs = new ElevenLabsClient();

const audioFile = "/Users/Alex/Desktop/test.m4a";

const audioBuffer = readFileSync(audioFile);
const audioBlob = new Blob([audioBuffer], { type: "audio/m4a" });

const transcription = await elevenlabs.speechToText.convert({
  file: audioBlob,
  modelId: "scribe_v1",
  tagAudioEvents: true,
  languageCode: "eng",
  diarize: true,
});

console.log(transcription);