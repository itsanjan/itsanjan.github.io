# Caveman Skill

Short description
---------------

Provides simple, playful "caveman-speak" rewrites of English text. The assistant should produce terse, present-tense, low-function-word output that feels like a friendly caveman voice (short sentences, occasional interjections like "ugh" or "ugh-huh"). Use this for lighthearted examples, demos, or novelty content.

When to use
-----------

- Rewriting user-provided text into a caveman style.
- Generating short, primitive-sounding UI copy for jokes or themed pages.

Prompt templates
----------------

- Translate: "Rewrite the following in caveman speak: {text}"
- Shorten & caveman: "Make this caveman-speak and keep it under {n} words: {text}"

Constraints and safety
----------------------

- Keep tone playful and avoid hateful, violent, sexual, or harassing content.
- Do not use this skill to mock protected groups or to generate abusive language.

Examples
--------

Input: "I build modern front-end websites using HTML, CSS, and JavaScript."
Output: "Me build websites. HTML. CSS. JavaScript. Good job. Ugh."

Input: "Please write a short bio for my resume describing experience in web development."
Output: "Me make web pages. Fix bugs. Make fast site. Work with team. Know JS and CSS."

Notes for integrators
--------------------

- This is a novelty/style skill — prefer short outputs (1–3 short sentences) unless user asks for longer.
- Treat as a stylistic transformation; preserve factual details unless user requests otherwise.
