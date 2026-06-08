import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Set up multer for temporary file memory upload (voice cloning audio)
const upload = multer({ storage: multer.memoryStorage() });

// Public high-fidelity face URLs for D-ID rendering
const AVATAR_URLS = {
  'av-sofia-biz': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  'av-roberto-biz': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
  'av-elena-pod': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
  'av-nova-fut': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop',
  'av-sofia-casual': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  'av-roberto-sport': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
  'av-elena-edu': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
  'av-nova-human': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop',
  'av-photo-marcus': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  'av-photo-chloe': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
  'av-photo-lucia': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  'av-photo-cyber': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop'
};

// Map voice ids to ElevenLabs default voices if not custom cloned
const ELEVENLABS_VOICE_MAP = {
  'v-sofia': '21m00Tcm4TlvDq8ikWAM', // Rachel
  'v-roberto': 'pNInz6obpgq5WFLW75e1', // Adam
  'v-elena': 'EXAVITQu4vr4xnSDxMaL', // Bella
  'v-lucas': 'N2lVS1w4EtoT3sTOAH5F', // Antoni
  'v-john': 'VR6A1rx1a6I4hxTX0UFJ', // Arnold
  'v-sarah': 'EXAVITQu4vr4xnSDxMaL' // Bella
};

// Check API status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    elevenLabsConfigured: !!process.env.ELEVENLABS_API_KEY && process.env.ELEVENLABS_API_KEY !== 'YOUR_ELEVENLABS_API_KEY',
    dIdConfigured: !!process.env.DID_API_KEY && process.env.DID_API_KEY !== 'YOUR_DID_API_KEY'
  });
});

// 1. ELEVENLABS: TEXT-TO-SPEECH (TTS) PROXY
app.post('/api/tts', async (req, res) => {
  const { text, voiceId } = req.body;
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey || apiKey === 'YOUR_ELEVENLABS_API_KEY') {
    return res.status(400).json({ error: 'ElevenLabs API Key not configured on backend.' });
  }

  // Determine ElevenLabs voice ID
  const elVoiceId = ELEVENLABS_VOICE_MAP[voiceId] || voiceId || '21m00Tcm4TlvDq8ikWAM';
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${elVoiceId}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: `ElevenLabs TTS error: ${errText}` });
    }

    res.setHeader('Content-Type', 'audio/mpeg');
    response.body.pipe(res);
  } catch (error) {
    console.error('TTS proxy error:', error);
    res.status(500).json({ error: 'Server error processing Speech Synthesis.' });
  }
});

// 2. ELEVENLABS: VOICE CLONING PROXY
app.post('/api/clone-voice', upload.single('file'), async (req, res) => {
  const { name } = req.body;
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey || apiKey === 'YOUR_ELEVENLABS_API_KEY') {
    return res.status(400).json({ error: 'ElevenLabs API Key not configured.' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'No audio sample file uploaded.' });
  }

  try {
    // Construct Form Data manually for ElevenLabs API
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', 'Ethics consented voice clone.');
    
    // Convert Buffer to Blob for Form Data
    const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
    formData.append('files', blob, req.file.originalname || 'sample.wav');

    const url = 'https://api.elevenlabs.io/v1/voices/add';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey
      },
      body: formData
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: `ElevenLabs Voice Clone error: ${errText}` });
    }

    const data = await response.json();
    res.json(data); // returns { voice_id: '...' }
  } catch (error) {
    console.error('Voice clone proxy error:', error);
    res.status(500).json({ error: 'Server error processing voice cloning.' });
  }
});

// 3. D-ID: TALK VIDEO GENERATION PROXY
app.post('/api/generate-video', async (req, res) => {
  const { avatarId, script } = req.body;
  const apiKey = process.env.DID_API_KEY;

  if (!apiKey || apiKey === 'YOUR_DID_API_KEY') {
    return res.status(400).json({ error: 'D-ID API Key not configured.' });
  }

  const avatarUrl = AVATAR_URLS[avatarId] || AVATAR_URLS['av-sofia-biz'];
  const base64Auth = Buffer.from(apiKey + ':').toString('base64');

  try {
    const url = 'https://api.d-id.com/talks';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${base64Auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        script: {
          type: 'text',
          subtitles: 'false',
          provider: {
            type: 'microsoft',
            voice_id: 'es-ES-ElviraNeural' // High quality default Spanish voice
          },
          input: script
        },
        source_url: avatarUrl
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: `D-ID video generation error: ${errText}` });
    }

    const data = await response.json();
    res.json(data); // Returns { id: '...', status: 'created' }
  } catch (error) {
    console.error('Video generation proxy error:', error);
    res.status(500).json({ error: 'Server error initiating video rendering.' });
  }
});

// 4. D-ID: VIDEO RENDER STATUS PROXY (POLLING)
app.get('/api/video-status/:id', async (req, res) => {
  const talkId = req.params.id;
  const apiKey = process.env.DID_API_KEY;

  if (!apiKey || apiKey === 'YOUR_DID_API_KEY') {
    return res.status(400).json({ error: 'D-ID API Key not configured.' });
  }

  const base64Auth = Buffer.from(apiKey + ':').toString('base64');

  try {
    const url = `https://api.d-id.com/talks/${talkId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${base64Auth}`
      }
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: `D-ID check error: ${errText}` });
    }

    const data = await response.json();
    // Returns status: 'started', 'done', etc., and result_url when status is 'done'
    res.json({
      id: data.id,
      status: data.status,
      videoUrl: data.result_url,
      error: data.error
    });
  } catch (error) {
    console.error('Video status proxy error:', error);
    res.status(500).json({ error: 'Server error checking video render status.' });
  }
});

app.listen(port, () => {
  console.log(`SDL Studio Backend server listening at http://localhost:${port}`);
});
