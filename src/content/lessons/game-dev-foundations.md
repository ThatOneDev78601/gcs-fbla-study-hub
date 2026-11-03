---
title: "Game and simulation development: loop, state, rules, and playtesting"
summary: "Build a game loop with input, update, and draw; manage states and multiple outcomes; design mechanics and instructions; playtest for accessibility; and build, credit, and document a standalone game."
sourceIds: ["python-docs","wcag"]
reviewed: "2026-11-02"
---

## The game loop

Every real-time game repeats one loop many times a second: handle input, update the game state, draw the screen, and wait so the loop runs at a steady frame rate such as 60 frames per second. The state is all the data that describes the game at a moment: positions, score, health, time left, and which screen is showing.

The example uses pygame, a free Python library (pip install pygame). The player moves with the arrow keys and collects a coin; each coin raises the score and moves the coin. Collision uses axis-aligned bounding boxes (AABB): two rectangles overlap if each one's left edge is left of the other's right edge and each one's top edge is above the other's bottom edge. pygame's colliderect does this check.

```python
import pygame

pygame.init()
screen = pygame.display.set_mode((640, 480))
clock = pygame.time.Clock()
player = pygame.Rect(300, 400, 40, 40)
coin = pygame.Rect(100, 100, 20, 20)
score, running = 0, True

while running:
    for event in pygame.event.get():          # 1. input
        if event.type == pygame.QUIT:
            running = False
    keys = pygame.key.get_pressed()
    player.x += (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * 5
    player.y += (keys[pygame.K_DOWN] - keys[pygame.K_UP]) * 5
    player.clamp_ip(screen.get_rect())        # 2. update
    if player.colliderect(coin):
        score += 1
        coin.topleft = (score * 97 % 600, score * 53 % 440)
    screen.fill((20, 30, 40))                 # 3. draw
    pygame.draw.rect(screen, (80, 200, 120), player)
    pygame.draw.rect(screen, (240, 200, 60), coin)
    pygame.display.flip()
    clock.tick(60)                            # 4. wait

pygame.quit()
```

## States, rules, and multiple outcomes

A state machine organizes screens and modes: MENU, INSTRUCTIONS, PLAYING, PAUSED, WIN, and LOSE. Each state handles its own input, update, and drawing, and clear rules move between states, such as "if score reaches 10, go to WIN; if the timer reaches 0, go to LOSE." This prevents bugs such as the player moving while paused.

Simulations model a system with rules, such as a store's customers arriving each minute with some probability. Use a fixed random seed while testing so results are repeatable, then remove it for play. Multiple outcomes, such as winning, losing, or different endings based on choices, give players reasons to replay. Every outcome needs a clear screen explaining what happened and how to play again.

> **Example**
>
> Design the states for a 60-second coin game with a win and a lose condition.
>
> 1. MENU: show title, Start, Instructions, and Quit; Enter starts the game.
> 2. INSTRUCTIONS: explain controls and goal; Escape returns to MENU.
> 3. PLAYING: timer counts down from 60; collecting 15 coins goes to WIN; reaching 0 seconds goes to LOSE; P goes to PAUSED.
> 4. PAUSED: freeze the timer and movement; P resumes.
> 5. WIN and LOSE: show the score and time, with Play Again and Menu options.
>
> Writing the states and transitions before coding makes the rules testable: each arrow in the diagram becomes a test case, such as "pressing P during PLAYING stops the timer."

## Design, accessibility, and playtesting

Connect the assigned topic to the mechanics, meaning what the player does, not just to the artwork. Define the goal, the challenge that makes it hard, how difficulty rises, and the completion condition. Teach controls through instructions and an easy first level.

Accessible games offer remappable controls, adjustable difficulty, pause at any time, subtitles or visual cues for important sounds, color choices that work for color-blind players, and no required rapid button pressing without an alternative. Playtest with people who have not seen the game: watch silently, note where they get stuck, ask what they thought the goal was, and record each change you made in a playtest log with the date, the problem, and the fix.

## Assets, performance, builds, and process evidence

Create your own art and sound or use assets whose licenses allow your use, and credit them. Check performance with a frame rate display; drawing thousands of objects or loading images inside the loop slows games. Load assets once, before the loop. Recover from errors: if a save file is missing or damaged, start a new game instead of crashing.

Build a standalone version with the engine's export tool (such as PyInstaller for pygame, or the export features in Godot or Unity) and test it on another computer. Keep process evidence: design documents, state diagrams, version history, playtest logs, and bug lists. Use them for any progress report required at an earlier stage and in the final demonstration, organized by the rating sheet.

> **Try it yourself**
>
> Write the AABB overlap test for rectangles a and b, each with x, y (top-left corner), w, and h. Then check: a = (10, 10, 20, 20) and b = (25, 15, 10, 10). Do they overlap?

<details>
<summary>Check your answer</summary>

Overlap if a.x < b.x + b.w and b.x < a.x + a.w and a.y < b.y + b.h and b.y < a.y + a.h. Check: 10 < 35, 25 < 30, 10 < 25, and 15 < 30 are all true, so they overlap. b's left edge (25) is inside a, which spans x from 10 to 30.

</details>

## Key terms

**Game loop.** The repeating cycle of input, update, and draw that runs a game.

**Game state.** All the data describing a game at a given moment.

**State machine.** A design that defines a set of modes and the rules for switching between them.

**AABB collision.** Detecting overlap between axis-aligned rectangles.

**Playtest log.** A dated record of problems observed in testing and the changes made.
