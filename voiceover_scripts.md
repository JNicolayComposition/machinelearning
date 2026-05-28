# Voiceover Scripts

# Sensors, Machine Learning & Artistic Practice


---

# Module 1 — Why Sensors and Machine Learning in Art?

**Duration:** 10–12 min

## Transcript

Welcome to this course on sensors, machine learning, embodiment and artistic practice. We explore how movement, gesture, sound, image and data can become connected through digital systems. The course is not only about technology. It is about perception, embodiment, artistic decision making and the relationship between body, instrument, audience and performance. Throughout the course we work with three demo systems: an ESP32 or Seeed sensor system connected to TouchDesigner, a browser-based smartphone web app, and a Wekinator system using a Python camera app and SuperCollider. All three systems approach movement differently and therefore create different forms of embodiment and audience perception.

## Production Markers
- [LIVE DEMO]
- [MOVE SENSOR]


---

# Module 2 — Understanding Sensors

**Duration:** 14–16 min

## Transcript

A sensor is essentially a translator. It converts physical phenomena into digital values. An IMU captures acceleration and rotation. A camera captures image features and visual change. A microphone captures sound pressure. This distinction matters artistically because each sensor invites different movements and different forms of interpretation. ESP32 with ICM and OSC can be fast and reliable for performances if the network and power setup are stable. BLE is often easier and wireless, but it can be more fragile regarding latency, pairing and connection stability. These technical conditions are not separate from art. A delayed or unstable system changes how performers move and how confident they feel on stage.

## Production Markers
- [LIVE DEMO]
- [SHOW TOUCHDESIGNER PATCH]
- [MOVE SENSOR]


---

# Module 3 — Mapping: From Data to Sound, Image and Behavior

**Duration:** 12–14 min

## Transcript

Sensors create data, but data alone is not artistic experience. Mapping defines the relationship between movement and output. A gesture can become sound, image, light or behavior. This is already a compositional decision. In TouchDesigner, rotation might control particle density or acceleration might create visual bursts. In the smartphone web app, the familiar device becomes an instrument. In Wekinator, mapping becomes indirect: the performer negotiates with a learned model, and this changes embodiment in a different way.

## Production Markers
- [LIVE DEMO]
- [SHOW TOUCHDESIGNER PATCH]
- [MOVE SENSOR]
- [TRAIN MODEL]
- [SHOW MISCLASSIFICATION]


---

# Module 4 — What is Machine Learning?

**Duration:** 20–24 min

## Transcript

Machine learning is often discussed as if it were one single thing, but it refers to different methods. Supervised learning means learning from labeled examples. We provide inputs and desired outputs. Unsupervised learning searches for structures without predefined labels. Reinforcement learning is based on rewards and feedback. Wekinator is useful because it makes supervised learning performative: you demonstrate examples, train, test and retrain. For the mini beat machine, classification is especially useful because gesture classes can trigger different rhythmic or sonic behaviors.

## Production Markers
- [LIVE DEMO]
- [TRAIN MODEL]


---

# Module 5 — Working with Wekinator

**Duration:** 20–24 min

## Transcript

Wekinator is powerful because it makes machine learning immediate and performative. Our example combines a Python camera application, Wekinator and SuperCollider. The camera extracts visual features. Wekinator classifies movement patterns. SuperCollider generates sound. Classification creates discrete states that can trigger different beats, synths or patterns. Regression creates continuous outputs and is useful for filters, spatialization, density or brightness. Testing multiple classifiers is artistically important because different models feel different: some are quick but nervous, others are stable but less sensitive.

## Production Markers
- [LIVE DEMO]
- [TRAIN MODEL]
- [SHOW MISCLASSIFICATION]


---

# Module 6 — Bias, Error and Critique

**Duration:** 14–18 min

## Transcript

Machine learning systems are never neutral. They depend on training data, contexts, bodies, lighting and technical infrastructure. If only one body trains the system, other bodies may become unreadable. If training happens under bright lighting, a camera system may fail in darkness. The performer adapts to the model. The body learns how to become readable. Errors are not always problems. Sometimes instability creates productive tension. Jennifer Walshe is an important reference because she approaches AI as a broad cultural and artistic phenomenon, not as one single technological object.

## Production Markers
- [SHOW MISCLASSIFICATION]


---

# Module 7 — Artistic Positions

**Duration:** 18–22 min

## Transcript

Artistic references help us move beyond technical functionality. Rebecca Fiebrink developed Wekinator and helped make interactive machine learning accessible for artists. Atau Tanaka works with biosignals and body data, showing how the body itself can become an instrument. Laetitia Sonami’s Lady’s Glove is a key example of wearable digital instruments. Alexander Schubert explores sensor systems, body control and digital media aesthetics. Rafael Lozano-Hemmer often turns audiences into participants, using heartbeat, movement and presence as installation material. Jennifer Walshe helps us situate AI as a cultural and aesthetic phenomenon.

## Production Markers



---

# Module 8 — Time, Gesture and Musical Structure

**Duration:** 14–18 min

## Transcript

Music unfolds in time. A movement is rarely a single static event. Movement has rhythm, phrase, acceleration, duration, tension and release. Some interactions are continuous, such as tilting a sensor to control a filter. Other gestures are temporal: their meaning emerges through sequence and timing. Dynamic Time Warping is one method for comparing patterns over time. For musicians, this is crucial because expression depends on timing, articulation and phrase.

## Production Markers
- [LIVE DEMO]
- [SHOW TOUCHDESIGNER PATCH]
- [MOVE SENSOR]
- [TRAIN MODEL]
- [SHOW MISCLASSIFICATION]


---

# Module 9 — Composition vs Instrument Design

**Duration:** 14–18 min

## Transcript

A central question in sensor-based systems is whether we are composing sound or composing behavior. Interactive systems allow us to design mappings, probabilities, rules and responses. The instrument itself becomes part of the composition. A TouchDesigner patch can create one aesthetic world or another depending on the mapping. A smartphone instrument changes gesture vocabulary because the physical object constrains movement. In Wekinator, the model itself becomes compositional material. A fragile classifier can create unstable rhythmic structures.

## Production Markers
- [LIVE DEMO]
- [SHOW TOUCHDESIGNER PATCH]
- [MOVE SENSOR]
- [TRAIN MODEL]
- [SHOW MISCLASSIFICATION]


---

# Module 10 — Developing Your Own Concept

**Duration:** 10–14 min

## Transcript

The final goal of this course is not technological complexity. The goal is to design meaningful relationships between body, data, sound, image and perception. You may choose one of the three demo systems or combine them. The important question is: why this system? How does the technology shape audience perception? How does it reshape embodiment? How does the body change while interacting with the system? Digital instruments emerge through new relationships between movement and output.

## Production Markers

