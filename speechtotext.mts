import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import { readFileSync } from "fs";
import "dotenv/config";

const elevenlabs = new ElevenLabsClient();

const audioFile = "/Users/Alex/Desktop/test.m4a";

const audioBuffer = readFileSync(audioFile);
const audioBlob = new Blob([audioBuffer], { type: "audio/m4a" });

const transcription = await elevenlabs.speechToText.convert({
  file: audioBlob,
  modelId: "scribe_v1", // Model to use, for now only "scribe_v1" is supported.
  tagAudioEvents: true, // Tag audio events like laughter, applause, etc.
  languageCode: "eng", // Language of the audio file. If set to null, the model will detect the language automatically.
  diarize: true, // Whether to annotate who is speaking
});

console.log(transcription);