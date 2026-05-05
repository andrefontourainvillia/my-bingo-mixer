---
name: dogfooding
description: 'Test and critically evaluate the Bingo Mixer app as an end user. Use when asked to dogfood, review, playtest, or give critical feedback on the app experience, fun factor, UX, or game feel.'
argument-hint: 'Optional focus area (e.g. "start screen", "bingo celebration", "questions")'
---

# Dogfooding — Bingo Mixer Critical Review

## When to Use
- User asks to "dogfood", "playtest", or "test the app"
- User wants critical feedback on fun, UX, or game feel
- User wants a user-perspective review before shipping

## Procedure

### 1. Open the App
Open `http://localhost:5173` in the integrated browser (the dev server should already be running via `npm run dev`).

### 2. Review the Start Screen
- Screenshot the start screen
- Evaluate: Does it communicate energy and fun? Does it tell you what you're about to do?
- Check: Is the CTA clear? Are the instructions useful?

### 3. Start a Game
- Click "Start Game"
- Screenshot the bingo board
- Evaluate: Is the board readable at a glance? Do the square texts feel exciting or flat?
- Check: Are any prompts confusing, US-centric, or easy yes/no without provoking real conversation?

### 4. Mark Squares and Trigger Bingo
- Click 5 squares that form a line (column 0: rows 0,1,2,3,4 = refs for first column, or diagonal through center)
- Screenshot the bingo win state (banner + modal)
- Evaluate: Is the celebration satisfying? Does it feel like a win or a notification?

### 5. Evaluate Post-Bingo Flow
- Dismiss the modal ("Keep Playing")
- Check: Is there a clear next goal? Does the app communicate what to do next?

### 6. Check Destructive Actions
- Evaluate the "← Back" / reset button — is the label honest? Is there a confirmation?

### 7. Deliver Structured Feedback

Organize feedback into these categories:

#### Visual & Energy
Rate and comment: Does the app look like a party or a spreadsheet?

#### Celebration Moment
Rate and comment: Is the bingo win emotionally satisfying?

#### UX & Flow
Note friction points, misleading labels, missing confirmations.

#### Questions / Content
Flag prompts that are: too easy (no conversation), too rare (hard to find a match), US-centric, or fact-based instead of story-provoking.

#### Social Mechanics
Does the game actually encourage talking? Or just yes/no tagging?

#### Priority List
End with a numbered priority list of improvements, from highest to lowest impact on fun.
